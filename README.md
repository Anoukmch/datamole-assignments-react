# Todo App

A simple to-do list application that allows users to manage tasks by adding, editing, deleting, and marking tasks as complete. The app is built using React, TypeScript, and styled-components. It also interacts with a backend API for data persistence.

## Features

- Add new tasks
- Edit existing tasks
- Toggle tasks as "done" or "not done"
- Delete tasks
- Sort tasks by their "done" state and creation date
- Task counter for pending and completed tasks

## Key solutions and decisions

### 1.	useTodoHandlers
	Custom hook 'useTodoHandlers' to manage state and API calls.
	I use axios to make requests (get, post, patch and delete) and useState hook to manage the data's states.
	Each action functions update the state and synchronize with the backend.
	API interactions are wrapped in try-catch blocks to handle any potential errors.
	The state is use to re-render automatically on the client-side.
	Ensures that the to-do list’s data flow and API calls are centralized.

### 2.	App
	Pass down handlers for adding, editing, deleting, and toggling items to the corresponding components.
 	Define the counters for todo and done items.

### 3.	List
	Displays the entire list of items and passes props to child component for handling actions (edit, delete, toggle).
 	The data is already sorted in the parent component.

### 4.	ListItemWrapper
	A wrapper to handle form visibility. Needed to access 'item' props and to separate form visibility management from rendering.
	A state is used to control form visibility. If it's set to true, the form is shown with the current label.
	If it's set to false, the ListItem component is shown with the action buttons.
	Both are responsible to set the form's state to its opposite value. 
	The ListItemWrapper catch the id of the current item and pass it to the action functions so that they know which item to handle.

### 5.	ListItem
	Responsible for rendering each individual item along with action buttons for editing and deleting.

### 6.	Header
	Handle adding a new item.
	Utilize similar logic for managing form visibility as seen in ListItemWrapper.

### 7.	Footer
	Render items counters.
 
### 8.	useSortedItems
	The useMemo hook is used in the useSortedItems custom hook to optimize the sorting of items based on their isDone status and creation time.
	This ensures that the sorting logic is not recomputed unnecessarily.


This separation follows the Single Responsibility Principle (SRP) to manage each component's functionality and ensure that changes in one part do not affect the others. React’s built-in state management is used and do not necessitate more complex state solutions like Redux.
