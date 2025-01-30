import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

interface FormProps{
    onTaskAdd: (description:string)=>void
}

export function Form ({onTaskAdd}:FormProps) {
     const [isFocused, setIsFocused] = useState(false);
     const [description, setDescription] = useState('')
     function handleOnTaskAdd(){
        onTaskAdd(description)
        setDescription('')
     }


    return (
        <View style={styles.formContainer} >
        <View style={styles.form}>
            <TextInput 
            style={[
                styles.input,
                { borderColor: isFocused ? '#5E60CE' : '#0D0D0D' },
            ]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setDescription}
            value={description}
             />
            <TouchableOpacity style={styles.button} onPress={handleOnTaskAdd}>
                <Text style={styles.buttonText}>⊕</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}