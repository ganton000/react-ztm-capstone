import { FC } from "react";
import { useNavigate } from 'react-router-dom';

import { DirectoryCategory} from '../directory/Directory';

import {
	DirectoryItemContainer,
	BackgroundImage,
	Body
} from './DirectoryItem.styles';

type DirectoryItemProps = {
	category: DirectoryCategory;
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category: { imageUrl, title, route } }) => {

	const navigate = useNavigate();

	const onNavigateHandler = () => navigate(route);

	return (
		<DirectoryItemContainer
		onClick={onNavigateHandler}
		>
			<BackgroundImage imageUrl={imageUrl} />
			<Body>
				<h2>{title}</h2>
				<p>Shop Now</p>
			</Body>
		</DirectoryItemContainer>
	)

};


export default DirectoryItem;