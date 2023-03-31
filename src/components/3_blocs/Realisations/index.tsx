import s from './realisation.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import useDetectLayout from '@utils/useDetectLayout';

import { Realisation } from '@c_types/T_realisation';
import ActiveLink from '@shared/ActiveLink';

type Props = {
	strings: { [key: string]: string };
	realList: Realisation[];
};

const Realisations = (props: Props) => {
	const { strings, realList } = props;

	const { isMobile } = useDetectLayout();

	return (
		<div id='realisation' className={s['realisations']}>
			<h1>{strings.heading_3}</h1>
			<div className={s['real-list']}>
				{realList.map((e, i) => (
					<ActiveLink href={`/realisations/${e.pid}`} key={`${e.name}_${i}`}>
						<img
							src={e.images.length > 0 ? e.images[0].url : ''}
							alt={
								e.images.length > 0
									? e.images[0].alternativeText
									: 'Missing image'
							}
						/>
					</ActiveLink>
				))}
			</div>

			{isMobile && (
				<div className={s['real-list--mobile']}>
					<Swiper
						slidesPerView={'auto'}
						spaceBetween={30}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
						className='mySwiper'
					>
						{realList.map((e, i) => (
							<SwiperSlide key={`swipe${i}`}>
								<ActiveLink
									href={`/realisations/${e.pid}`}
									key={`${e.name}_${i}`}
								>
									<img
										src={e.images.length > 0 ? e.images[0].url : ''}
										alt={
											e.images.length > 0
												? e.images[0].alternativeText
												: 'Missing image'
										}
									/>
								</ActiveLink>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			)}
		</div>
	);
};

export default Realisations;
