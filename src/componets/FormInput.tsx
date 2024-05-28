import { FC } from "react";
import { StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from "react-native";
import Colors from "../res/Colors";

export type IFormInput =  {
    label:string,
    style?:StyleProp<ViewStyle>,
    placeholder:string,
    value?:string,
    onChange?:(props:string)=>void
}

export const FormLabel =(props:{children:string}) => {
    return <Text style={{fontWeight:500,color:Colors.text_main}}>{props.children}</Text>
}
export const FormInput:FC<IFormInput> =(props) => {
    return (
        <View style={[props.style,styles.container]}>
            <FormLabel>{props.label}</FormLabel>
            <View style={styles.input}>
                <TextInput
                    style={{flex:1}}
                    placeholder={props.placeholder}
                    onChangeText={props.onChange}
                    value={props.value}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10
    },
    input: {
        flexDirection:'row',
        height:40,
        maxWidth:"100%",
        justifyContent:"center",
        alignItems:"center",
        marginVertical: 8,
        borderWidth: 0.5,
        paddingHorizontal:10,
        borderColor:"grey",
        borderRadius:5
      },
  });