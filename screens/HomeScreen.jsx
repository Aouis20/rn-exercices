import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { icons, images, theme, COLORS, SIZES, FONTS }  from '../constants'
import { HeaderSection } from '../components/HeaderSection';
import { BookSection } from '../components/BookSection';
import { books } from '../data'
import { myBooks } from '../data'

const HomeScreen = ({ navigation }) => {

    console.log(books)
  return (
    <View style={styles.container}>
        <HeaderSection />
        <BookSection myBooks={myBooks} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingTop: 10,
  },

});

export default HomeScreen