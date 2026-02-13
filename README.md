# My To Do List App

A simple ToDo list application built with React Native that demonstrates component-based architecture.

## Description

This is a React Native application created as part of Lab Assignment 2. The app displays a list of tasks and includes a form to add new tasks. The project demonstrates how to break down a component into smaller, reusable components.

## Features

- Display a list of ToDo tasks
- Visual indication of completed tasks
- Form to add new tasks
- Component-based architecture

## Project Structure
```
.
├── index.tsx          # Main app component
├── ToDoList.tsx       # Component for displaying the task list
├── ToDoForm.tsx       # Component for the add task form
└── README.md          # Project documentation
```

## Components

### App (index.tsx)
The main application component that imports and renders the ToDoList and ToDoForm components.

### ToDoList
Displays a scrollable list of tasks with the following features:
- Shows task text
- Indicates completed tasks with a gray background
- Each task is pressable

### ToDoForm
A form component that includes:
- Text input field for new tasks
- "Add" button to submit tasks

## Installation
npx create-expo-app@latest lab2

## Reset the project
npm run reset-project


## Running the App

Start the development server:

npx expo start


Then follow the on-screen instructions to run the app on:
- iOS Simulator
- Android Emulator
- Physical device using Expo Go app

## Technologies Used

- React Native
- TypeScript
- Expo 

## Assignment Requirements

This project fulfills the following requirements:
-  Part 1: Hard-coded ToDo list and form in a single file
-  Part 2: Separated into ToDoList and ToDoForm components
-  Part 3: Components imported and used in main App file

## Author

[Loretta Okoh]

## Course Information

- **Course**: [Mobile Application Development (CPRG-303-C)]
- **Assignment**: Lab Assignment 2: Layout Components
- **Date**: [February 13 2026]


## License

This project is created for educational purposes.