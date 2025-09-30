
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to CloudConnect</Text>
      <Text style={styles.subtitle}>Unique Feature: Cloud Notes</Text>
      <Text style={styles.content}>Use the tabs to open Notes, Tasks, and Storage demo. This is an offline demo ready for presentation.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow:1, alignItems:'center', justifyContent:'center', padding:24, backgroundColor:'#fff' },
  logo: { width:120, height:120, marginBottom:16, resizeMode:'contain' },
  title: { fontSize:24, fontWeight:'700', color:'#094a84', marginBottom:6 },
  subtitle: { fontSize:18, color:'#0973b7' },
  content: { marginTop:12, textAlign:'center', color:'#333' }
});
