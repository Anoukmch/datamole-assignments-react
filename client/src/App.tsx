import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { Item } from './types';
import React, { useState, useEffect } from "react";
import axios from 'axios';

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
			console.error('Error adding data:', error);
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
			console.error('Error updating label:', error);
		}
	};
	
	const onItemDelete = async (id: number) => {
		try {
		  await axios.delete(`http://localhost:3000/items/${id}`);
		  setItems(prevItems => prevItems.filter(item => item.id !== id));
		} catch (error) {
		  console.error('Error deleting todo:', error);
		}
	  };
	
	
	  const onItemDoneToggle = async (id: number, isDone: boolean) => {
		try {
			setItems(prevItems =>
				prevItems.map(item =>
					item.id === id ? { ...item, isDone: true } : item
				)
			);
	
			const response = await axios.patch(`http://localhost:3000/items/${id}/done`);
			const updatedItem = response.data;
	
			
			console.log("updatedItem: ", updatedItem);
		} catch (error) {
			console.error('Error updating item status:', error);
		}
	};

	return (
    <ThemeProvider>
        <Container>
            <Layout>
                <Header onItemAdd={onItemAdd}>To Do app</Header>
                <List 
				items={items}
				onItemLabelEdit={onItemLabelEdit}
				onItemDoneToggle={onItemDoneToggle}
				onItemDelete={onItemDelete}
				/>
                <Footer />
            </Layout>
        </Container>
    </ThemeProvider>
	);
};