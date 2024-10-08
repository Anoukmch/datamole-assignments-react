import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";
import { Button } from "./ui/Button";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${(props) => props.theme.colors.hoverBackground};
    }
`;

const Label = styled.label`
    margin-left: 15px;
    flex-grow: 1;
	font-weight: bold;
`;

const ActionButtons = styled.div`
    display: none;
    margin-left: 10px;
	gap: 10px;
    
    ${StyledDiv}:hover & {
        display: flex;
    }

`;

export type ListItemProp = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: (isDone: boolean) => void;
    onItemDelete: () => void;
};

export const ListItem = (props: ListItemProp) => {
    const { label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;

    return (
        <StyledDiv>
            <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} disabled={isDone} />
            <Label>{label}</Label>
			<ActionButtons>
            	<Button onClick={onItemLabelEdit}>
					<Pencil1Icon />
            	</Button>
            	<Button onClick={onItemDelete}>
					<TrashIcon />
            	</Button>
			</ActionButtons>
        </StyledDiv>
    );
};