
import React,{useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>CloudConnect Signup</Text>
      <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('Home')}>
        <Text style={styles.btnText}>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{marginTop:12}}>Already have an account? Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#ffffff', padding:20 },
  logo: { width:150, height:150, marginBottom:20, resizeMode:'contain' },
  title: { fontSize:22, marginBottom:10, color:'#094a84', fontWeight:'600' },
  input: { width:'100%', borderWidth:1, borderColor:'#ccc', padding:10, borderRadius:6, marginTop:8 },
  btn: { backgroundColor:'#0aa1ff', padding:12, width:'100%', marginTop:16, borderRadius:6, alignItems:'center' },
  btnText: { color:'#fff', fontWeight:'700' }
});
