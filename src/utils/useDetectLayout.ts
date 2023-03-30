import { useEffect, useState } from 'react';

const useDetectLayout = () => {
	const [state_isMobile, setState_isMobile] = useState(false);

	useEffect(() => {
		if (!window) return;

		window.innerWidth >= 1024
			? setState_isMobile(false)
			: setState_isMobile(true);

		window.addEventListener('resize', () => {
			window.innerWidth >= 1024
				? setState_isMobile(false)
				: setState_isMobile(true);
		});
	}, []);

	return { isMobile: state_isMobile };
};

export default useDetectLayout;
