# Install dependencies only when needed
FROM node:18-alpine AS deps

RUN echo '|----- NEXT APP -----|'

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:18-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN yarn build

# Production image, copy all the files and run next
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nextgroup
RUN adduser --system --uid 1001 nextuser

COPY --from=builder --chown=nextuser:nextgroup /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder --chown=nextuser:nextgroup /app/.next/standalone ./
COPY --from=builder --chown=nextuser:nextgroup /app/.next/static ./.next/static

USER nextuser

EXPOSE 80
EXPOSE 443

ENV PORT 80

CMD ["node", "server.js"]

RUN echo '|----- NEXT APP - END -----|'
