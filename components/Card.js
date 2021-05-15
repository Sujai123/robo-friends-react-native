import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

export default function Card({ name, email }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: `https://robohash.org/${name}`,
        }}
      />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 255, 255, 0.2)",
    padding: 20,
    marginVertical: 3,
    borderWidth: 3,
    borderColor: "rgba(0, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    width: "80%"
  },
  text: {
    color: "rgba(0, 255, 255, 1)",
    marginTop: "5%",
    fontFamily: "open-sans"
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
})