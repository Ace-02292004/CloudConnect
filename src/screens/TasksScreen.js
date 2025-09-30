
import React,{useState,useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TasksScreen(){
  const [tasks,setTasks]=useState([]);
  const [text,setText]=useState('');
  useEffect(()=>{load();},[]);

  async function load(){ const raw=await AsyncStorage.getItem('@cloudconnect_tasks'); if(raw) setTasks(JSON.parse(raw)); }
  async function saveAll(next){ setTasks(next); await AsyncStorage.setItem('@cloudconnect_tasks', JSON.stringify(next)); }
  function add(){ if(!text.trim()) return; const next=[{id:Date.now().toString(), text, done:false}, ...tasks]; saveAll(next); setText(''); }
  function toggle(id){ const next=tasks.map(t=> t.id===id? {...t,done:!t.done} : t); saveAll(next); }
  function del(id){ saveAll(tasks.filter(t=>t.id!==id)); }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Cloud Tasks</Text>
      <TextInput placeholder="New task" style={styles.input} value={text} onChangeText={setText} />
      <TouchableOpacity style={styles.btn} onPress={add}><Text style={styles.btnText}>Add Task</Text></TouchableOpacity>
      <FlatList data={tasks} keyExtractor={i=>i.id} renderItem={({item})=>(
        <View style={styles.taskRow}>
          <TouchableOpacity onPress={()=>toggle(item.id)}><Text style={{textDecorationLine:item.done?'line-through':'none'}}>{item.text}</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>del(item.id)}><Text style={styles.del}>Delete</Text></TouchableOpacity>
        </View>
      )} />
    </View>
  );
}

const styles=StyleSheet.create({
  wrapper:{flex:1,padding:16,backgroundColor:'#fff'},
  header:{fontSize:20,fontWeight:'700',color:'#094a84',marginBottom:8},
  input:{borderWidth:1,borderColor:'#ccc',borderRadius:6,padding:8,marginBottom:8},
  btn:{backgroundColor:'#0aa1ff',padding:10,alignItems:'center',borderRadius:6,marginBottom:10},
  btnText:{color:'#fff',fontWeight:'700'},
  taskRow:{padding:12,backgroundColor:'#f9faff',borderRadius:6,marginBottom:8,flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
  del:{color:'#ff5555'}
});
