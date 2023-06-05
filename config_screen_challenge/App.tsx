import { StatusBar } from 'expo-status-bar';

import HeaderProfile from './src/Components/HeaderProfile';
import SubTopic from './src/Components/SubTopic';
import Footer from './src/Components/Footer';
import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';



export default function App() {

  const imgteste = '../Assets/ImageProfileSentings.jpeg';
  const imgteste2 = '../Assets/imgKey.jpeg'
  return (
    <View className="mx-6">
      <SafeAreaView>
        <View className="pt-2">
          <HeaderProfile />
        </View>
        <View className="mt-5 border-b border-gray-300" />
        <View className="">
          <SubTopic description='CONTA' img1={require('./src/Assets/ImageProfileSentings.jpeg')} img2={require('./src/Assets/imgKey.jpeg')} topic1='Dados Pessoais' topic2='Informcoes Pessoas'/>
          <SubTopic description='PREFERENCIAS' img1={require('./src/Assets/imageBell.png')} img2={require('./src/Assets/imageAce.png')} topic1='Notificacoes' topic2='IAcessibilidade'/>
          <SubTopic description='PRIVACIDADE' img1={require('./src/Assets/connected.png')} img2={require('./src/Assets/alterUser.png')} topic1='Aparelhos conectados' topic2='Contas vinculadas'/>
          <Footer img1={require('./src/Assets/question.png')} img2={require('./src/Assets/exit.png')} />
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}