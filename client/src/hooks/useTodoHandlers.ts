// hooks/useTodoHandlers.ts
import { useState, useEffect } from "react";
import axios from "axios";
import { Item } from "../types";

export const useTodoHandlers = () => {
	const [items, setItems] = useState<Item[]>([]);

  	useEffect(() => {
	const fetchData = async () => {
		try {
			const response = await axios.get('http://localhost:3000/items');
			setItems(response.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	fetchData();
}, []);

	const onItemAdd = async (label: string) => {
		try {
			const newItem = {
				label: label,
				isDone: false,
			};
			const response = await axios.post('http://localhost:3000/items', newItem);
			setItems(prevItems => [...prevItems, response.data]);
		} catch (error) {
			console.error('Error adding item:', error);
		}
	};

	const onItemLabelEdit = async (id: number, newLabel: string) => {
		try {
			const response = await axios.patch(`http://localhost:3000/items/${id}`, {
				label: newLabel,
			});
			setItems(prevItems =>
				prevItems.map(item =>
					item.id === id ? { ...item, label: newLabel } : item
				)
			);
		} catch (error) {
			console.error('Error updating item label:', error);
		}
	};

	const onItemDelete = async (id: number) => {
		try {
		await axios.delete(`http://localhost:3000/items/${id}`);
		setItems(prevItems => prevItems.filter(item => item.id !== id));
		} catch (error) {
		console.error('Error deleting item:', error);
		}
	};


	const onItemDoneToggle = async (id: number, isDone: boolean) => {
		try {
			if (!isDone) return;

			const response = await axios.patch(`http://localhost:3000/items/${id}/done`);
			setItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id ? { ...item, isDone: isDone } : item
			)
			);
		} catch (error) {
			console.error('Error updating done status:', error);
		}
	};

	return {
		items,
		onItemAdd,
		onItemLabelEdit,
		onItemDelete,
		onItemDoneToggle,
	};
};
