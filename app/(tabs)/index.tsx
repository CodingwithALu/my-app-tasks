import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { data } from '@/data/tasks';
import { Link } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
  const [tasks, setTasks] = useState(data.sort((a, b) => b.id - a.id));
  const [text, setText] = useState('')
  const myTaks = () => {
    if (text.trim()) {
      const newId = tasks.length > 0 ? tasks[0].id + 1 : 1;
      setTasks([{ id: newId, title: text, competed: false }, ...tasks])
      setText('')
    }
  }
  const tongleTask = () => {

  }
  const removeTask = () => {

  }
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.container}>
        <TextInput
          placeholder='Add a new todo'
          placeholderTextColor="gray"
          value={text}
          onChangeText={setText} />
        <Pressable onPress={ } style={ }>
          <Text style={styles.container}>
            Add
          </Text>
        </Pressable>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome!</ThemedText>

        </ThemedView>
        <HelloWave />
        <Link href={"/settings"}>Vist about Screen</Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "blue"
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    fontSize: 42
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  input: {

  }
});
