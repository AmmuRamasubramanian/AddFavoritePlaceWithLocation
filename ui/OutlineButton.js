import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

function OutlineButton({name, onPress, children}){
    return(
        <Pressable onPress={onPress} style={({pressed})=>[styles.container, pressed && styles.pressed]}>
            <Ionicons name={name} size={20} color="#f0cced" style={styles.icon} />
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    )
}

export default OutlineButton

const styles=StyleSheet.create({
    pressed:{
        opacity:0.7,
    },
    text:{
        color:'#f0cced',
        fontFamily:'poppinsregular'
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        margin:4,
        paddingHorizontal:12,
        paddingVertical:6,
        borderWidth:1,
        borderColor:'#f0cced',
        borderRadius:8,
    },
    icon:{
        marginRight:6
    }
})