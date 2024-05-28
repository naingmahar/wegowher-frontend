import { Image, StyleSheet, View } from "react-native"
import Colors from "../res/Colors"
import Icons from "../res/Icons"
import { HiddenTexts } from "./HiddenText"
import { CardText } from "./CardText"
import { FC } from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import { payNow } from "../lib/axios"
import { useResetRecoilState, useSetRecoilState } from "recoil"
import {  chargeState, creditCardsState } from "../features/recoil/cards"
import { ICardRes } from "../models/Card"
const Omise = require('omise-react-native')

export interface ICreditCard {
    cardNumber:string,
    name:string,
    expires:string,
    token:string,
    index:number,
    onPay:()=>void
}
export const CreditCard:FC<ICreditCard> = (props) => {

    const setCharge = useSetRecoilState(chargeState)
    const setCard = useSetRecoilState(creditCardsState)

    const _onPay = (index:number) => {
        payNow({
            description: 'some description',
            amount: 500000, 
            currency: 'thb',
            capture: false,
            card: props.token,
            return_uri:"https://nicepage.com/website-templates/preview/success-coaching-and-management-81381?device=mobile"
        })
        .then((res)=>{
            props.onPay()
            setCard(cards=>{
                let newCards:ICardRes[] = []
                cards.map((card,index)=>{
                    if(index!==props.index) newCards.push(card)
                })
                return newCards
            })
            setCharge(res.data)
        })
        .catch((error)=>console.log("Error",error))
    }
    return(
        <TouchableOpacity onPress={()=>_onPay(props.index)} style={styles.container} >
            <Image source={Icons.visaXl} style={{marginBottom:20}} />
            <View style={{marginBottom:20}} >
                <HiddenTexts count={12} showText={props.cardNumber} />
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <CardText label="Name on Card" text={props.name} />
                <CardText label="Expires" text={props.expires} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        width:"100%",
        backgroundColor:Colors.white,
        borderRadius:20,
        padding:30,
        marginBottom:20
    }
  });