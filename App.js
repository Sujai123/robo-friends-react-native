import React, { useEffect, useState } from 'react';
import Axios from "axios";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { StyleSheet, Text, View } from 'react-native';
import CardList from './components/CardList';

export default function App() {

  const [list, setList] = useState([]);
  const [originalList, setOriginalList] = useState([]);

  let [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require("./assets/fonts/OpenSans-Bold.ttf")
  });

  useEffect(() => {
    const fetchJsonPlaceholderList = async () => {
      try {
        const { data } = await Axios.get(`https://jsonplaceholder.typicode.com/users`);
        setList(data)
        setOriginalList(data)
      }
      catch (error) {
        console.error(`Failed to Fetch ${error}`)
      }
    }

    fetchJsonPlaceholderList();
  }, [])

  console.log(fontsLoaded)

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const onChangeText = (value) => {
    setList(list => {
      const filteredLists = originalList.filter(e => {
        return e.name.includes(value)
      })
      return filteredLists
    })
  }

  return (
    <View style={styles.container}>
      <CardList
        list={list}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 255, 255, 0.2)'
  }
});
