
import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function StorageScreen(){
  const [image, setImage] = useState(null);

  async function pick(){
    let result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality:1 });
    if(!result.cancelled) setImage(result.uri);
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Cloud Storage (Demo)</Text>
      <TouchableOpacity style={styles.btn} onPress={pick}><Text style={styles.btnText}>Select Image</Text></TouchableOpacity>
      {image ? <Image source={{uri:image}} style={styles.preview} /> : <Text style={{marginTop:12}}>No image selected</Text>}
    </View>
  );
}

const styles=StyleSheet.create({
  wrapper:{flex:1,padding:16,backgroundColor:'#fff',alignItems:'center'},
  header:{fontSize:20,fontWeight:'700',color:'#094a84',marginBottom:8},
  btn:{backgroundColor:'#0aa1ff',padding:10,alignItems:'center',borderRadius:6,marginBottom:10,width:'60%'},
  btnText:{color:'#fff',fontWeight:'700'},
  preview:{width:250,height:250,marginTop:12,resizeMode:'contain'}
});
