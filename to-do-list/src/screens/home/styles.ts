import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A1A1A',
        flex:1,
    },
    background: {
        height:173,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0D0D0D',
    },
    body: {
        alignItems: 'center',
    },
    counterBar: {
        width: "90%",
        height: 39,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#333333',
    },
    emptyList: {
        padding: 48,
        alignItems: 'center',
        gap: 16,
        
    },
    emptyListText: {
        color: '#808080',
    }
})