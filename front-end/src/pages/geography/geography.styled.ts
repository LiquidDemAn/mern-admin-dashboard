import { styled } from '@mui/material/styles';
import { ContentContainer } from '../../global.styled';

export const GeographyContainer = styled(ContentContainer)(
	({ borderColor }) => ({
		border: `1px solid ${borderColor}`,
		borderRadius: 4,
	})
);
