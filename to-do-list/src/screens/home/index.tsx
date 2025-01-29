import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Form } from "../components/form";
import { Counter } from "../components/counter";
import { Task } from "../components/tasks";

interface tasksData {
    id:string,
    description: string,
    completed: boolean
}

export function Home(){
   const [tasks, setTasks] = useState<tasksData[]>([
    { id:'1',  description:'Fazer as compras', completed: false},
     { id:'2',  description:'Lavar as roupas', completed: false}
    ])

    function handleToogleTask(id: string) {
        setTasks(prev=> prev.map(task=>task.id ===id
             ? {...task, completed:!task.completed}
            :task))
    }

    function handleDeleteTask(id: string) {
        setTasks((prev) => prev.filter((task) => task.id !== id))
      }

    const sortedTasks= [...tasks].sort((a,b)=>{
        return Number(a.completed) - Number(b.completed)})

    const completedCount = tasks.filter(task=>task.completed).length

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
            <Counter  counterNumber={completedCount}/>
            </View>
         </View>
         <View style={{width: '90%'}}>
         <FlatList 
    data={sortedTasks}
    keyExtractor={item =>item.id}
    renderItem={({item}) =>(
      <Task
       id={item.id}
       description={item.description}
       completed={item.completed}
       onToggleTask={handleToogleTask}
       onDeleteTask={handleDeleteTask}
       />
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