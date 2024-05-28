import {  Alert, Button, Image, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import Icons from "../res/Icons";
import { FormInput, FormLabel } from "../componets/FormInput";
import Colors from "../res/Colors";
import { useRef, useState } from "react";
import { ICard, getToken } from "../lib/axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import { creditCardsState } from "../features/recoil/cards";
import OmiseModule from "../native-module/Omise";
import { NavigationProp } from "@react-navigation/native";
import { wordsSplit } from "../lib/utils";
// import Omise from "omise";
// import LocalOmise from "../lib/LocalOmise";
const Omise = require('omise-react-native');

export const AddCard = ({navigation}:{ navigation:NavigationProp<any> }) => {

    const [number,onChangeNumber] =  useState("");
    const [expires,onChangeExpires] =  useState("");
    const name = useRef("");
    const expiration_month = useRef("");
    const expiration_year = useRef("");
    const cvv = useRef("123");

    const setCard= useSetRecoilState(creditCardsState)

    const _onChangeExpires =(val:string)=>{
        let newVal = wordsSplit(val,expires,"/",2,5)
        onChangeExpires(newVal)
        expiration_month.current=newVal.split("/")[0]
        expiration_year.current=newVal.split("/")[1]
    }

    const _onChangeNumber = (val:string) => {
        let newVal = wordsSplit(val,number," ",4,20)
        onChangeNumber(newVal)
    }

    const onAddCard = () => {
        if(!number||!name||!expiration_year||!cvv){
            Alert.alert("Invalid Card","Please fill all text fields")
        }else{

            const param:ICard = {
                name:name.current,
                expiration_month:expiration_month.current,
                expiration_year:expiration_year.current,
                number,
                city:'Bangkok',
                postal_code:"10160",
                security_code:cvv.current
            }
            getToken({card:param})
                    .then(newCard=>{
                        console.log("Cards",newCard.data.id)
                        setCard(cards=>[...cards,...[newCard.data]])
                        navigation.navigate("Cards")
                    })
                    .catch(error=>console.log("Error",error.response.data))
        }
    }

    return (
        <View style={{flex:1,paddingVertical:20,paddingHorizontal:50}}>
            <View style={styles.container}>
                <View>
                    <FormLabel>ATM/Debit/Credit card number</FormLabel>
                    <View style={styles.input}>
                        <TextInput
                            style={{flex:1}}
                            placeholder="0000 0000 0000 0000"
                            onChangeText={_onChangeNumber}
                            value={number}
                        />
                        <View style={{flexDirection:"row",justifyContent:"center",alignItems:'center'}} >
                            <Image source={Icons.visa} style={styles.paymentIcon} />
                            <Image source={Icons.master} style={styles.paymentIcon} />
                            <Image source={Icons.jcb} style={styles.paymentIcon} />
                        </View>
                    </View>
                </View>
                <FormInput label="Name On Card" placeholder="Ty Lee" style={{width:"100%"}} onChange={(val)=>name.current=val} />
                <View style={styles.splitView}>
                    <FormInput 
                        label="Expired date" 
                        placeholder="MM/YY" 
                        style={{width:"48%"}} 
                        value={expires}
                        onChange={_onChangeExpires} 
                    />
                    <FormInput label="CVV" placeholder="" style={{width:"48%"}} onChange={(val)=>cvv.current=val} />
                </View>
                <View style={[styles.splitView,{width:"70%",marginTop:15}]}>
                    <Image source={Icons.visaGray} />
                    <Image source={Icons.masterGray} />
                    <Image source={Icons.omise} />
                </View>
            </View>
            <TouchableOpacity style={styles.btn} onPress={onAddCard}>
                <Text style={styles.btnText}>Add Card</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    //   justifyContent:"center",
      alignItems:"center",
    },
    paymentIcon:{
        marginHorizontal:5
    },
    btnText:{
        color:Colors.white,
        fontWeight:"500"
    },
    btn:{
        borderRadius:20,
        backgroundColor:Colors.main,
        justifyContent:"center",
        alignItems:"center",
        padding:10
    },
    input: {
        flexDirection:'row',
        height:40,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        marginVertical: 12,
        borderWidth: 0.5,
        paddingHorizontal:10,
        borderColor:"grey",
        borderRadius:5
    },
    splitView:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between"
    }
  });