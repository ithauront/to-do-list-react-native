import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

interface TaskProps {
    id: string,
    description: string,
    completed?: boolean,
    onToggleTask: (id:string)=>void
    onDeleteTask: (id:string) => void
}

export function Task({id, description, completed, onToggleTask, onDeleteTask}: TaskProps) {

    return(
        <View style={styles.container} >
            <TouchableOpacity 
            style={completed?styles.buttonCheck:styles.button} 
            onPress={()=>onToggleTask(id)}>
                {completed?<Text>✔</Text>:null}
            </TouchableOpacity>
           
            <Text style={completed?styles.nameCheck:styles.name}>{description}</Text>
            <TouchableOpacity onPress={()=>onDeleteTask(id)}>
               <Image source={require('./img/trash.png')} />
            </TouchableOpacity>
        </View>
    )
}