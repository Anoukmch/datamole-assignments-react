import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { Item } from './types';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { sortItems } from './utils/sortItems';

export const App = () => {

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
			console.log("newItem: ", response.data);
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
			const response = await axios.patch(`http://localhost:3000/items/${id}`, {
			  isDone: isDone,
			});
			setItems((prevItems) =>
			  prevItems.map((item) =>
				item.id === id ? { ...item, isDone: isDone } : item
			  )
			);
		  } catch (error) {
			console.error('Error updating done status:', error);
		  }
	};

	const sortedItems = sortItems(items);
    const todoItems = items.filter(item => !item.isDone).length;
    const doneItems = items.filter(item => item.isDone).length;

	return (
    <ThemeProvider>
        <Container>
            <Layout>
                <Header onItemAdd={onItemAdd}>To Do app</Header>
                <List 
				items={sortedItems}
				onItemLabelEdit={onItemLabelEdit}
				onItemDoneToggle={onItemDoneToggle}
				onItemDelete={onItemDelete}
				/>
                <Footer todoItems={todoItems} doneItems={doneItems}/>
            </Layout>
        </Container>
    </ThemeProvider>
	);
};