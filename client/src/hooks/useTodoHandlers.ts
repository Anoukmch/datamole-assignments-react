// hooks/useTodoHandlers.ts
import { useState, useEffect } from "react";
import axios from "axios";
import { Item } from "../types";

const API_URL = 'http://localhost:3000/items';

export const useTodoHandlers = () => {
	const [items, setItems] = useState<Item[]>([]);

	/**
 	* Fetches data from the backend API and updates the items state.
 	* Entry point with the server-side
 	*/

  	useEffect(() => {
	const fetchData = async () => {
		try {
			const response = await axios.get(API_URL);
			setItems(response.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	fetchData();
}, []);

	/**
	* Adds a new item to the list.
	*/

	const onItemAdd = async (label: string) => {
		try {
			const newItem = {
				label: label,
				isDone: false,
			};
			const response = await axios.post(API_URL, newItem);
			setItems(prevItems => [...prevItems, response.data]);
		} catch (error) {
			console.error('Error adding item:', error);
		}
	};

	/**
	* Edits the label of an existing item.
	* 
	*/

	const onItemLabelEdit = async (id: number, newLabel: string) => {
		try {
			await axios.patch(`${API_URL}/${id}`, { label: newLabel });
			setItems(prevItems =>
				prevItems.map(item =>
					item.id === id ? { ...item, label: newLabel } : item
				)
			);
		} catch (error) {
			console.error('Error updating item label:', error);
		}
	};

	/**
	 * Deletes an item from the list.
	 */

	const onItemDelete = async (id: number) => {
		try {
			await axios.delete(`${API_URL}/${id}`);
			setItems(prevItems => prevItems.filter(item => item.id !== id));
		} catch (error) {
		console.error('Error deleting item:', error);
		}
	};

	/**
	 * Toggles the 'done' status of an item using the custom end-point
	 */

	const onItemDoneToggle = async (id: number, isDone: boolean) => {
		try {
			if (!isDone) return;

			const response = await axios.patch(`${API_URL}/${id}/done`);
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
