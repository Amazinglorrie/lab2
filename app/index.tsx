import React, { useState } from 'react';
import { SafeAreaView, Button, View } from 'react-native';
import { useRouter } from 'expo-router';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default function Index() {
  const router = useRouter();

  const [tasks, setTasks] = useState<string[]>([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ alignItems: 'flex-end', padding: 12 }}>
        <Button title="Settings" onPress={() => router.push('/settings')} />
      </View>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}
