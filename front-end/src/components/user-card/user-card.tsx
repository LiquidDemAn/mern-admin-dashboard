import { FlexBetween } from '../../global.styled';
import { useGetUserQuery } from '../../redux/state/api';
import { getUserId } from '../../redux/state/selectors';
import { useAppSelector } from '../../redux/store/hooks';
import { UserImg, UserName, UserOccupation } from './user-card.styled';
import profileImage from '../../assets/profile.jpeg';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material';

export const UserCard = () => {
	const userId = useAppSelector(getUserId);
	const { data } = useGetUserQuery(userId);
	const { palette } = useTheme();

	return (
		<FlexBetween>
			<UserImg src={profileImage} />
			<Box>
				<UserName color={palette.secondaryCustom[100]}>{data?.name}</UserName>
				<UserOccupation color={palette.secondaryCustom[200]}>
					{data?.occupation}
				</UserOccupation>
			</Box>
		</FlexBetween>
	);
};
