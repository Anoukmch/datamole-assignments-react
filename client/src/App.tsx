import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { useSortedItems } from './utils/useSortedItems';
import { useTodoHandlers } from './hooks/useTodoHandlers';

/**
 * App component that serves as the main entry point for the Todo application.
 * Handles fetching, adding, editing, deleting, and toggling items.
 */

export const App = () => {

	const { items, onItemAdd, onItemLabelEdit, onItemDelete, onItemDoneToggle } = useTodoHandlers();

	const sortedItems = useSortedItems(items);
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