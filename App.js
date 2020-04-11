import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const [theme, setTheme] = useState(light);
  const colorScheme = useColorScheme();

  useEffect(() => {
    setTheme(colorScheme === 'light' ? light : dark);
  }, [colorScheme]);

  useEffect(() => {
    count > 0 && count % 10 === 0
      ? setTitle(`Parabéns por clicar ${count} vezes`)
      : setTitle('');
  }, [count]);

  return (
    <View style={theme.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>você clicou {count} vezes.</Text>
      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={styles.button}>
        <Text style={styles.buttonText}>adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const light = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

const dark = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
});

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    marginHorizontal: 10,
    fontSize: 30,
    color: '#f30',
    fontWeight: '700',
    textAlign: 'center',
  },
  text: {
    fontSize: 26,
    fontWeight: '700',
    color: '#f60',
  },
  button: {
    width: 200,
    height: 60,
    backgroundColor: '#f60',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
});
