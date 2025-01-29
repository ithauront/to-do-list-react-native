import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

interface TaskProps {
    task: string,
    isCompleted?: string
}

export function Task({task, isCompleted}: TaskProps) {
    const [completed, setCompleted] = useState(false)

    function handleCompleteTask () {
        if(completed === false) {
            setCompleted(true)
        }
        else{ setCompleted(false)}
        console.log(completed)
    }
    return(
        <View style={styles.container} >
            <TouchableOpacity 
            style={completed?styles.buttonCheck:styles.button} 
            onPress={handleCompleteTask}>
                {completed?<Text>✔</Text>:null}
            </TouchableOpacity>
           
            <Text style={completed?styles.nameCheck:styles.name}>{task}</Text>
            <TouchableOpacity >
               <Image source={require('./img/trash.png')} />
            </TouchableOpacity>
        </View>
    )
}