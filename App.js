import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import Capa from './assets/2.jpg';
import Foto from './assets/1.png';

export default function App() {
  return (
 <View style={ estilos.container }>
      <Image style={ estilos.fotoTopo } source={Capa} />

      <View style={ estilos.boxDescricao }>
        <Image style={ estilos.fotoPerfil } source={Foto} />
        <Text style={ estilos.titulo }> <Text style={ estilos.destaque }>Dev.LeoCarvalho@gmail.com</Text></Text>
        <Text style={ estilos.cargo }>Estudante de ADS unijorge           concluindo em 2026</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  fotoTopo: {
    flex: 1,
    width: 'auto',
   
  },

  boxDescricao: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'justify',
  },

  fotoPerfil: {
    marginTop: 20,
    marginBottom:20,
    width: 100,
    height: 100,
    borderRadius: 110
  },
    titulo: {
    marginBottom:10,
    fontSize: 22,
  },
  destaque: {
    marginBottom:5,
    fontSize: 20,
    fontWeight: 'bold',

  },
  cargo: {
    textAlign: 'center',
    marginHorizontal: 15,
    fontSize: 16,
    letterSpacing: 5,
    fontStyle: 'italic',
  }
});