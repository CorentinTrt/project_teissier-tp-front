import s from './realisation.module.scss';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import ActiveLink from '@shared/ActiveLink';
import RealLayout from '@blocs/RealLayout';

import useDetectLayout from '@utils/useDetectLayout';

import { Strings } from '@c_types/T_pageRealisationsData';
import { Realisation } from '@c_types/T_realisation';

type Props = { strings: Strings; realisation: Realisation };

const defaultProps: Props = {
	strings: { heading_1: '' },
	realisation: {
		pid: 0,
		layout: 1,
		name: '',
		typeText: '',
		technicText: '',
		images: [],
	},
};

function validatePid(pid: string | undefined) {
	if (!pid) return false;

	return !isNaN(parseInt(pid)) ? true : false;
}

const RealisationPage = (props: Props) => {
	const { strings, realisation } = props;
	const { name, typeText, technicText, images, layout } = realisation;

	const [state_step, setState_step] = useState(0);

	const { isMobile } = useDetectLayout();
	const router = useRouter();
	const { query } = router;

	useEffect(() => {
		if (typeof query.pid !== 'string') return;

		if (validatePid(query.pid)) {
			setState_step(parseInt(query.pid));
		}
	}, [query]);

	return (
		<div className={s['realisation']}>
			<div className={s['header']}>
				<h1>{strings.heading_1}</h1>

				<ActiveLink href={'/'}>
					<div className={s['header--cross']}></div>
				</ActiveLink>
			</div>

			<div className={s['content']}>
				<div className={s['left']}>
					{!isMobile && <RealLayout layout={layout} images={images} />}

					{isMobile && (
						<Swiper
							slidesPerView={'auto'}
							spaceBetween={30}
							pagination={{
								clickable: true,
							}}
							modules={[Pagination]}
							className='mySwiper'
						>
							{images.map((e, i) => (
								<SwiperSlide key={`swipe${i}`}>
									<img src={e.url} alt={e.alternativeText} />
								</SwiperSlide>
							))}
						</Swiper>
					)}
				</div>

				<div className={s['right']}>
					<h2 className={s['name']}>{name}</h2>

					<h3>{'Nature des travaux'}</h3>
					<p>{typeText}</p>

					<h3>{'Technique utilisé'}</h3>
					<p>{technicText}</p>
				</div>
			</div>

			<div className={s['footer']}>
				<div className={s['prev']}>
					{state_step !== 1 && (
						<ActiveLink href={`/realisations/${state_step + 1}`}>
							<img
								className={s['arrow']}
								src={'/icons/arrow_prev.png'}
								alt={'Projet précédent'}
							/>
							<p className={s['label']}>{'Projet précédent'}</p>
						</ActiveLink>
					)}
				</div>
				<div className={s['next']}>
					{state_step !== 6 && (
						<ActiveLink href={`/realisations/${state_step + 1}`}>
							<p className={s['label']}>{'Projet suivant'}</p>
							<img
								className={s['arrow']}
								src={'/icons/arrow_next.png'}
								alt={'Projet suivant'}
							/>
						</ActiveLink>
					)}
				</div>
			</div>
		</div>
	);
};

export default RealisationPage;

RealisationPage.defaultProps = defaultProps;
