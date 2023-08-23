import React from "react";

import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Botao ({ labelbutton, onpress}) {


    return(
        <TouchableOpacity
        style={styles.button}
        onPress={onpress}> 
        
        <Text style={styles.buttonText}>
           { labelbutton}
            
        
        </Text>
        </TouchableOpacity>
    
)
    }

const styles = StyleSheet.create({

    button: {
        backgroundColor: 'black',
        paddingVertical: 14,
        marginTop: 40,
        borderRadius: 15,
        width: '45%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20
    },

    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize: 15,
        textAlign:  'center'
        
    }

})