import { NavigationProp } from "@react-navigation/native"
import {  View } from "react-native"
import WebView from "react-native-webview"
import { useRecoilValue } from "recoil"
import { chargeState } from "../features/recoil/cards"

export const Redirect = (props:{navigation:NavigationProp<any>}) => {
    const charge = useRecoilValue(chargeState)
    console.log(charge)
    return(
        <View style={{flex:1}}>
            <WebView
                style={{flex: 1}}
                originWhitelist={['*']}
                source={{uri:charge?.authorize_uri||""}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                onNavigationStateChange={(e)=>{
                    if(e.url === charge?.return_uri){
                        setTimeout(()=>{
                            props.navigation.navigate("Cards")
                        },5000)
                    }
                }}
            />
        </View>
    )
}