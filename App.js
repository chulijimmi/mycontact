/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Button,
  StyleSheet,
} from 'react-native';
import Theme from './src/config/Theme';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './store';
import {useDispatch, useSelector} from 'react-redux';
import {themeToogled} from './src/reducers/settingSlice';
import Dimension from './src/layout/Dimension';
import RepoNetContact from './src/repository/network/RepoNetContact';
import ScreenContact from './src/screen/ScreenContact';

const Stack = createNativeStackNavigator();
function DetailContactScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.navigate('DetailContact', {
            contactId: 'Test',
            name: 'Contact',
          })
        }
      />
    </View>
  );
}

function ContactScreen({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = useSelector(state => state.setting.theme.name);
  const dispatch = useDispatch();
  const {dark, light} = Theme;
  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? dark.color.background
      : light.color.background,
  };
  const textStyle = {
    color: isDarkMode ? dark.color.background : light.color.background,
  };
  const handleChange = () => {
    dispatch(themeToogled());
  };

  React.useEffect(() => {
    const contacts = async () => {
      const response = await RepoNetContact.get()
      return response
    }

    contacts()
  },[])

  React.useEffect(() => {
    const contact = async () => {
      const response = await RepoNetContact.getById("b3abd640-c92b-11e8-b02f-cbfa15db428b")
      console.log("Get Contact By ID", response)
      return response
    }

    contact()
  },[])

  React.useEffect(() => {
    const createContact = async () => {
      const payload = {
        firstName: "Brian",
        lastName: "John",
        age: 23,
        photo: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg"
      }
      const response = await RepoNetContact.post(payload)
      console.log("createContact", response)
      return response
    }

    createContact().catch((error) => console.error(error))
  },[])

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <Text style={textStyle}>Contact</Text>
          <Button
            title="Go to Details... again"
            onPress={() =>
              navigation.navigate('DetailContact', {
                contactId: 'Test',
                name: 'Test',
              })
            }
          />
          <Text>{theme}</Text>
          <Button title="Change Theme" onPress={handleChange} />
        </View>
      </ScrollView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
    </SafeAreaView>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Contact"
            component={ScreenContact}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetailContact"
            component={DetailContactScreen}
            options={({route}) => ({title: route.params.name})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'red'
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    height: Dimension.height
  },
});

export default App;
