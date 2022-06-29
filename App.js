import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const [numero, setNumero] = useState(0)

  function handleNumero() {

    const novoNumero = Math.floor(Math.random() * 100)

    setNumero(novoNumero)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.img} source={require('./assets/logoBranco.png')}></Image>
      <Text style={styles.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={styles.botao}>
        <Text style={styles.textBotao}>Gerar número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numero: {
    color: 'yellow',
    fontSize: 150,
    marginTop: 30,
  },
  botao: {
    backgroundColor: 'yellow',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 15,
    margin: 70,
  },
  textBotao: {
    color: 'blue',
    fontSize: 18,
  },
  img: {
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    width: 150,
    height: 150,
    marginTop: -100,
    marginLeft: 5,
  },
});
