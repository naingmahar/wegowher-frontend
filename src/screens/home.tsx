import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../res/Colors";
import { FC, useEffect } from "react";
import { NavigationProp } from "@react-navigation/native";
import {  useRecoilValue } from "recoil";
import {  creditCardsState } from "../features/recoil/cards";
import { CreditCard } from "../componets/CreditCard";

export const Home = ({navigation}:{ navigation:NavigationProp<any> }) => {
    const cards = useRecoilValue(creditCardsState)
    return (
        <View style={styles.container}>
            {
                cards.length != 0 && cards.map((card,index)=>{
                    return (<CreditCard 
                                key={card.id}
                                cardNumber={card.card.last_digits} 
                                expires={`${card.card.expiration_month}/${card.card.expiration_year}`} 
                                name={card.card.name} 
                                index={index}
                                token={card.id}
                                onPay={()=>navigation.navigate("Redirect")}
                            />)
                })
            }
            {cards.length == 0 && <CardNotFound nextPage={()=>navigation.navigate("AddCard")} />}
        </View>
    )
}

const CardNotFound:FC<{hide?:boolean,nextPage:()=>void}> = (props) => {
    if(props.hide)return <View />
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={{ fontSize: 40 }}>💳</Text>
            <Text style={[styles.descriptionText]}>No Cards Found</Text>
            <Text style={styles.descriptionText}>We recommend adding a card for easy payment</Text>

            <TouchableOpacity onPress={props.nextPage}>
                <Text style={styles.labelButton}> Add New Card</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //   justifyContent:"center",
        alignItems: "center",
        padding: 30
    },
    descriptionText: {
        color: Colors.text_main,
        fontSize: 16,
        textAlign: "center",
        marginBottom: 10
    },
    labelButton: {
        color: Colors.main,
        fontWeight: "500",
        fontSize: 16
    }
});