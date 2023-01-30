import { Box, styled } from '@mui/material';

export const Container = styled(Box)(
	({ isDashboard }: { isDashboard: boolean }) => ({
		position: 'relative',
		height: isDashboard ? 400 : '100%',
		...(isDashboard && { minHeight: 325, minWidth: 325 }),
	})
);

export const TextContainer = styled(Box)(
	({ isDashboard }: { isDashboard: boolean }) => ({
		position: 'absolute',
		top: '50%',
		left: '50%',
		textAlign: 'center',
		pointerEvents: 'none',
		transform: isDashboard
			? 'translate(-75%, -170%)'
			: 'translate(-50%, -100%)',
	})
);
