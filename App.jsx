import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { HomeScreen, DetailScreen } from './screens';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { icons, images, theme, COLORS, SIZES, FONTS }  from './constants'


const Stack = createStackNavigator();



export default function App() {

  // LogBox.ignoreLogs(['VirtualizedLists']);

  // Font family
  const [fontsLoaded] = useFonts({
    'R-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'R-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'R-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: COLORS.primary,
              color: "white",
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
