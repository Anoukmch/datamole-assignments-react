import styled from "styled-components";
import { Item } from '../types';
import { ListItem } from "./ListItem"; 

const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

export type ListProp = {
	items: Item[];
};

export const List = (props: ListProp) => {
	const { items } = props;
	return (
		<ListStyled>
			{items.length === 0 ? (
               <div>No todos</div>
            ) : (
                items.map(item => (
                    <ListItem
						key={item.id}
					/>
                ))
            )}
		</ListStyled>
	);
};