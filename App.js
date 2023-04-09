import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, View, FlatList, Alert, 
  TouchableWithoutFeedback, Keyboard
} from 'react-native';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
// import SandBox from './components/SandBox';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Buy coffee', key: 1},
    {text: 'Create an app', key: 2},
    {text: 'Build a portfolio', key: 3},
  ])

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(t => t.key !== key)
    })
  }

  const submitHandler = (text) => {
    if(text.length < 3) {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long',[
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ])
      return;
    }
    setTodos((prevTodos) => {
      return [
        { key: new Date().getTime().toString(), text },
        ...prevTodos,
      ]
    })
  }

  const dismissKeyboard = () => {
    Keyboard.dismiss()
  }

  return (
    // <SandBox />
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <TodoForm submitHandler={submitHandler} />
          {/* todo lists */}
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({ item }) => (
                <TodoItem 
                  item={item} 
                  pressHandler={pressHandler}
                />
              )}
            />
          </View>

        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1 
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});
