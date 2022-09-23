import React from 'react'
import { Text, View, StyleSheet, Pressable, Image } from 'react-native'
import { icons, images, theme, COLORS, SIZES, FONTS }  from '../../constants'
import { profile } from '../../data'


const HeaderSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {/* Hello */}
        <View style={styles.introduction}>
          <Text style={[FONTS.body3, {color:"white", fontWeight: "bold"}]}>
            Good Morning{'\n'}
            <Text style={FONTS.h2}>
              {profile.name}
            </Text>
          </Text>
        </View>

        {/* Points */}
        <Pressable style={styles.pressable}>
          <View style={styles.button}>
            <Image
              source={icons.plus_icon}
              style={{
                width: 20,
                height: '80%',
                backgroundColor: COLORS.darkRed,
                backgroundOpacity: 0.6, 
                borderRadius: "50%", 
                padding: 12, 
              }}
            />
            <Text style={[FONTS.body3, {color:"white"}]}>{profile.point} points</Text>
          </View>
        </Pressable>
      </View>
      {/* System */}
      <View style={styles.system}>

        {/* Claim */}
        <View style={styles.viewSystem}>
          <Image
            source={icons.claim_icon}
            style={{width: 34, height: 34}}
          />
          <Text style={[FONTS.body3, styles.textSystem]}>Claim</Text>
        </View>

        {/* Get Point */}
        <View style={styles.viewSystem}>
          <Image
            source={icons.point_icon}
            style={{width: 36, height: 36}}
          />
          <Text style={[FONTS.body3, styles.textSystem]}>Get Point</Text>
        </View>

        {/* My Card */}
        <View style={styles.viewSystem}>
          <Image
            source={icons.card_icon}
            style={{width: 34, height: 34}}
          />
          <Text style={[FONTS.body3, styles.textSystem]}>My Card</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  topContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  introduction: {
    padding: SIZES.padding,
  },
  button: {
    flexDirection:"row",
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 90,
    padding: 16,
  },
  pressable: {
    height: 10,
    margin: 20,
    width: 140,
  },
  system: {
    backgroundColor: COLORS.darkGreen,
    width: 'auto',
    marginHorizontal: SIZES.padding,
    marginVertical: 20,
    paddingVertical: SIZES.padding,
    borderRadius: SIZES.radius,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  viewSystem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSystem: {
    color: "white",
    marginLeft: 10,
  }
});

export default HeaderSection