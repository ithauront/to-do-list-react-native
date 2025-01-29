import { Text, View } from "react-native"
import { styles } from "./styles"

interface CounterProps {
counterNumber: number
}
export function Counter({counterNumber}:CounterProps) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{counterNumber}</Text>
        </View>
    )
}