import s from './realisation.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import useDetectLayout from '@utils/useDetectLayout';

import { Upload } from '@c_types/T_generics';

type Props = {
	strings: { [key: string]: string };
	realList: Upload[];
};

const Realisations = (props: Props) => {
	const { strings, realList } = props;

	const { isMobile } = useDetectLayout();

	return (
		<div className={s['realisations']}>
			<h1>{strings.heading_3}</h1>
			<div className={s['real-list']}>
				{realList.map((e, i) => (
					<img src={e.url} alt={e.alternativeText} key={`${e.name}_${i}`} />
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
								<img src={e.url} alt={e.alternativeText} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			)}
		</div>
	);
};

export default Realisations;
