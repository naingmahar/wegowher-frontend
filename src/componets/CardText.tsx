import { StyleSheet, Text, View } from "react-native"
import Colors from "../res/Colors"

export const CardText = (props:{label:string,text:string}) => {
    return(
        <View>
            <Text style={styles.label}>{props.label}</Text>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label:{
        fontSize:12,
        marginBottom:10,
        color:Colors.test_description,
        fontWeight:"500",
        opacity:0.5
    },
    text: {
        fontWeight:"500",
        color:Colors.text_main
    }
  });