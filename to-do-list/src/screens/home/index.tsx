import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Form } from "../components/form";
import { Counter } from "../components/counter";
import { Task } from "../components/tasks";

export function Home(){
   const tasks = ['Fazer as compras', 'Lavar as roupas']
    return(
        <View style={styles.container}>
            <View style={styles.background}>
                 <Image source={require('./img/Logo.png')}/>
            </View>
         <Form />
         <View style={styles.body}>
         <View style={styles.counterBar}>
            <View style={{flexDirection: 'row', gap: 8,}}>
            <Text style={{color:'#4EA8DE',fontWeight: '700'}}>Criadas</Text>
            <Counter counterNumber={tasks.length} />
            </View>
            <View style={{flexDirection: 'row', gap: 8,}}>
            <Text style={{color:'#8284FA',fontWeight: '700'}}>Concluidas</Text>
            <Counter  counterNumber={4}/>
            </View>
         </View>
         <View style={{width: '90%'}}>
         <FlatList 
    data={tasks}
    keyExtractor={item =>item}
    renderItem={({item}) =>(
      <Task task={item}/>
    )}
    showsVerticalScrollIndicator={false}
    ListEmptyComponent={()=>(
        <View style={styles.emptyList}>
        <Image source={require('./img/Clipboard.png')}/>
        <View>
        <Text 
        style={[styles.emptyListText, {fontWeight: '700'}]}
        >Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.emptyListText}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
        </View>
      )}
    />
    </View>
        </View>
        </View>
    )
}