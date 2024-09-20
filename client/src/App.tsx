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
			setItems(prevItems => [...prevItems, response.data]);
		} catch (error) {
			console.error('Error adding data:', error);
		}
	};

	return (
    <ThemeProvider>
        <Container>
            <Layout>
                <Header onItemAdd={onItemAdd}>To Do app</Header>
                <List items={items}/>
                <Footer />
            </Layout>
        </Container>
    </ThemeProvider>
	);
};