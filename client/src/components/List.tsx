import styled from "styled-components";
import { Item } from '../types';
import { ListItemWrapper } from "./ListItemWrapper"; 

const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
	margin-top: 10px;
`;

export type ListProp = {
	items: Item[];
	onItemLabelEdit: (id: number, label: string) => void;
    onItemDoneToggle: (id: number, isDone: boolean) => void;
    onItemDelete: (id: number) => void;
};

export const List = (props: ListProp) => {
	const { items, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;
	return (
		<ListStyled>
			{items.length === 0 ? (
               <div>No todos</div>
            ) : (
                items.map(item => (
                    <ListItemWrapper
					key={item.id}
					item={item}
					onItemLabelEdit={onItemLabelEdit}
					onItemDoneToggle={onItemDoneToggle}
					onItemDelete={onItemDelete}
					/>
                ))
            )}
		</ListStyled>
	);
};