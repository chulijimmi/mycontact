import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Theme from '../config/Theme';

function SafeAreaViewContact({theme, children}) {
  const backgroundStyle = theme === 'light' ? Theme.light.background : Theme.dark.background
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={theme === 'light' ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {children}
    </SafeAreaView>
  );
}

export default SafeAreaViewContact;
