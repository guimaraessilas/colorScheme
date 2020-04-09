import React, {useEffect, useState} from 'react';
import {useColorScheme, Text, View, StyleSheet} from 'react-native';

const App = () => {
  const [theme, setTheme] = useState(styles.light);
  const colorScheme = useColorScheme();

  useEffect(() => {
    setTheme(colorScheme === 'light' ? styles.light : styles.dark);
    console.log('thema: ' + colorScheme);
  }, [colorScheme]);

  return (
    <View style={[styles.container, theme]}>
      <Text style={[styles.text, theme]}>useColorScheme(): {colorScheme}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  light: {
    backgroundColor: '#fff',
    color: '#000',
  },
  dark: {
    backgroundColor: '#000',
    color: '#fff',
  },
  text: {fontSize: 26, fontWeight: '700'},
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
