import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    formContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -27,
        marginBottom: 42,
        
    },
    form: {
         flexDirection: 'row',
         width: '90%',
        },
 
     input: {
       height: 54,
       backgroundColor: '#262626',
       borderRadius: 6,
       borderWidth: 1,
       color: '#FDFCFE',
       padding: 16,
       fontSize: 16,
       flex: 1,
       marginRight: 4
     },
 
     button: {
       width: 52,
       height: 52,
       borderRadius: 6,
       backgroundColor: '#1E6F9F',
       alignItems: 'center',
       justifyContent: 'center'
     }, 
 
     buttonText: {
       color: '#F2F2F2', 
       fontSize: 24
     },
})