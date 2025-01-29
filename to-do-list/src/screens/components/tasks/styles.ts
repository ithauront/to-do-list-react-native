import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 64,
        backgroundColor: '#262626',
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: "space-between",
        padding: 12
    },
    button: {
        width: 24,
        height: 24,
        borderRadius: '100%',
        borderWidth: 2,
        borderColor: '#4EA8DE',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonCheck: {
        width: 24,
        height: 24,
        borderRadius: '100%',
        borderWidth: 2,
        borderColor: '#5E60CE',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5E60CE'
    },
    name: {
        color: '#F2F2F2',
        fontWeight: '700'
    },
    nameCheck: {
        color: '#808080',
        fontWeight: '700',
        textDecorationLine: 'line-through'
    }
})