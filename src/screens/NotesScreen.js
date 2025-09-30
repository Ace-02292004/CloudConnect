
import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NotesScreen() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState('');

  useEffect(()=>{ load(); }, []);

  async function load(){
    try{
      const raw = await AsyncStorage.getItem('@cloudconnect_notes');
      if(raw) setNotes(JSON.parse(raw));
    }catch(e){}
  }

  async function saveAll(next){
    setNotes(next);
    await AsyncStorage.setItem('@cloudconnect_notes', JSON.stringify(next));
  }

  function addNote(){
    if(!text.trim()) return;
    const next = [{id:Date.now().toString(), text}, ...notes];
    saveAll(next);
    setText('');
  }

  function del(id){
    Alert.alert('Delete','Delete this note?', [{text:'Cancel'},{text:'Yes', onPress:()=> saveAll(notes.filter(n=>n.id!==id))}]);
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Cloud Notes</Text>
      <TextInput value={text} onChangeText={setText} placeholder="Write a note" style={styles.input} />
      <TouchableOpacity style={styles.btn} onPress={addNote}><Text style={styles.btnText}>Add Note</Text></TouchableOpacity>
      <FlatList data={notes} keyExtractor={i=>i.id} renderItem={({item})=>(
        <View style={styles.note}>
          <Text>{item.text}</Text>
          <TouchableOpacity onPress={()=>del(item.id)}><Text style={styles.del}>Delete</Text></TouchableOpacity>
        </View>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper:{flex:1,padding:16,backgroundColor:'#fff'},
  header:{fontSize:20,fontWeight:'700',color:'#094a84',marginBottom:8},
  input:{borderWidth:1,borderColor:'#ccc',borderRadius:6,padding:8,marginBottom:8},
  btn:{backgroundColor:'#0aa1ff',padding:10,alignItems:'center',borderRadius:6,marginBottom:10},
  btnText:{color:'#fff',fontWeight:'700'},
  note:{padding:12,backgroundColor:'#f6f9ff',marginBottom:8,borderRadius:6,flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
  del:{color:'#ff5555'}
});
