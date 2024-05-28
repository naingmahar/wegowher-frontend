import { Text, View } from "react-native"
import Colors from "../res/Colors"
import { FC } from "react"

const HiddenText = (props:{withSpace:boolean}) => {
    const SIZE =6
    return (
        <View style={{
            width:SIZE,
            height:SIZE,
            backgroundColor:Colors.text_main,
            borderRadius:SIZE/2,
            marginRight:props.withSpace?25:5,
            opacity:0.4
        }}></View>
    )
}

interface IHiddenTextProps {
    count:number,
    showText:string
}
export const HiddenTexts:FC<IHiddenTextProps> = (props)=> {
    let UI = [];
    for (let index = 0; index < props.count; index++) {
        let isWithSpace = (index+1) % 4 == 0 ? true : false
        UI.push(<HiddenText key={index} withSpace={isWithSpace} />)
    }
    UI.push(<Text  key={props.count+1} style={{fontWeight:500}}>{props.showText}</Text>)
    return (
        <View style={{flexDirection:"row", marginTop:10,alignItems:"center"}}>
            {UI}
        </View>
    )
}

