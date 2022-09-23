import React from 'react'
import { View, StyleSheet, Text, FlatList, SafeAreaView, Image } from 'react-native'
import { icons, images, theme, COLORS, SIZES, FONTS }  from '../../constants'


const BookSection = ({ myBooks }) => {

    const Item = ({ book }) => (
      <View style={styles.item}>
        <Image
          source={book.bookCover}
          style={{ width: 180, height: 130, borderBottomLeftRadius: '25%', borderBottomRightRadius: '25%' }}
        />
        <View style={{ flexDirection:'row', alignItems: 'center', justifyContent:'space-between' }}>
            <View style={{ flexDirection:'row', alignItems: 'center' }}>
                <Image
                source={icons.clock_icon}
                style={{
                    width: 22,
                    height: 22,
                    margin: 6,
                }}
                />
                <Text style={[FONTS.body3, { color: COLORS.lightGray }]}>
                    {book.lastRead}
                </Text>
            </View>

            
            <View style={{ flexDirection:'row', alignItems: 'center' }}>
                <Image
                source={icons.page_icon}
                style={{
                    width: 22,
                    height: 22,
                    margin: 6,
                    color: "white",
                }}
                />
                <Text style={[FONTS.body3, { color: COLORS.lightGray }]}>
                    {book.completion}
                </Text>
            </View>
        </View>
      </View>
    );
      
    const renderItem = ({ item }) => (
        <Item book={item} />
    );
    
      
  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          data={myBooks}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  item: {
    marginRight: 16,
    color: COLORS.lightGray,
  }
});
  
export default BookSection