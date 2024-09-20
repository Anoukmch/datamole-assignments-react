import { ListItem } from './ListItem';
import { Item } from '../types';
import React, { useState } from "react";
import { Form } from "./form/Form";

export type ListItemWrapperProp = {
	item: Item;
	onItemLabelEdit: (id: number, label: string) => void;
    onItemDoneToggle: (id: number, isDone: boolean) => void;
    onItemDelete: (id: number) => void;
};

export const ListItemWrapper = (props: ListItemWrapperProp) => {
	const { item, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;
	const [showForm, setShowForm] = useState(false);


	const handleFormSubmit = (label: string) => {
        onItemLabelEdit(item.id, label);
        setShowForm(false);
    };

	return (
		<div>
			{showForm ? (
				 <Form
				 	initialValue={item.label}
				 	onSubmit={handleFormSubmit}
				 	onCancel={() => setShowForm(false)}
					/>
			) : (
				<ListItem
                    label={item.label}
                    isDone={item.isDone}
                    onItemLabelEdit={() => setShowForm(true)}
                    onItemDoneToggle={() => onItemDoneToggle(item.id, item.isDone)}
                    onItemDelete={() => onItemDelete (item.id)}
                />
			)}
		</div>
	);
};