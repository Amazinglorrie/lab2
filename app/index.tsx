import React, { useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default function Index() {
  const [tasks, setTasks] = useState<string[]>
  ([  
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} /> 
      <ToDoForm />
    </SafeAreaView>
  );
}