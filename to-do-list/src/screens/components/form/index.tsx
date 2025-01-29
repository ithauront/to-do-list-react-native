import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export function Form () {
     const [isFocused, setIsFocused] = useState(false);
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
             />
            <TouchableOpacity style={styles.button} onPress={()=>console.log('apertou o botão')}>
                <Text style={styles.buttonText}>⊕</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}