import React from 'react'
import { View, StyleSheet, FlatList, TextInput, Text } from 'react-native'
import Card from './Card'

export default function CardList({
  list = [],
  onChangeText
}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerInput}>
        <Text style={styles.headerText}>Robo Friends</Text>
        <TextInput
          style={styles.input}
          placeholder='Search For Robos...'
          onChangeText={onChangeText}
        />
      </View>
      <View style={styles.listContainer}>
        {(list.length) ? <FlatList
          keyExtractor={item => String(item.id)}
          data={list}
          renderItem={({ item }) => {
            return (
              <Card {...item} />
            )
          }}
          style={styles.list}
        /> : <Text> No record Found </Text>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  input: {
    backgroundColor: 'rgba(0, 255, 255, 0.5)',
    padding: 10,
    marginBottom: 20,
    borderColor: "rgba(0, 255, 255, 1)",
    borderWidth: 2,
    borderRadius: 8,
    fontFamily: "open-sans"
  },
  headerText: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    padding: 20,
    color: "rgba(0, 255, 255, 1)",
    fontFamily: "open-sans-bold"
  },
  headerInput: {
    // backgroundColor: "red"
  },
  list: {
    maxHeight: "100%",
    display: "flex",
    width: "80%",
    marginLeft: "18%"
    // alignItems: "center"
  },
  listContainer: {
    maxHeight: "79%",
  }
})