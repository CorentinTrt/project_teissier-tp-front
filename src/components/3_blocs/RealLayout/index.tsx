import s from './realLayout.module.scss';

import { Layout } from '@c_types/T_realisation';
import { Upload } from '@c_types/T_generics';

type Props = { layout: Layout; images: Upload[] };

type LayoutData = {
	classSuffix: 'un' | 'deux' | 'trois' | 'quatre' | '';
	imgCount: 1 | 3 | 4 | 0;
};

const defaultProps: Props = { layout: 0, images: [] };

const RealLayout = (props: Props) => {
	const { layout, images } = props;

	const layoutData: LayoutData =
		layout === 1
			? { classSuffix: 'un', imgCount: 1 }
			: layout === 2
			? { classSuffix: 'deux', imgCount: 3 }
			: layout === 3
			? { classSuffix: 'trois', imgCount: 3 }
			: layout === 4
			? { classSuffix: 'quatre', imgCount: 4 }
			: { classSuffix: '', imgCount: 0 };

	const imgs: Upload[] = [];

	for (let i = 0; i < layoutData.imgCount; i++) {
		imgs.push(images[i]);
	}

	return (
		<div className={`${s['real-layout']} ${s[layoutData.classSuffix]}`}>
			{imgs.map((e, i) => (
				<div
					className={`${s['images']} ${s[`grid-item${i + 1}`]}`}
					key={`img-real-${i}`}
				>
					<img src={e.url} alt={e.alternativeText} />
				</div>
			))}
		</div>
	);
};

export default RealLayout;

RealLayout.defaultProps = defaultProps;
