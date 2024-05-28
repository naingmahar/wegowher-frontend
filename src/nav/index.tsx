import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/home';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icons from '../res/Icons';
import { AddCard } from '../screens/addCard';
import { Redirect } from '../screens/redirect';

type RootStackParamList = {
    Cards: undefined;
    AddCard: undefined;
    Redirect:  undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const getHeaders = (oldHeader:string) => {
    if(oldHeader == "Cards") return oldHeader
    return " "
}

const RootNav = () => {
    return(
        <RootStack.Navigator initialRouteName="Cards" screenOptions={({navigation})=>{
            return{
                headerLeft:()=>{
                    return (
                        <TouchableOpacity style={{marginLeft:20}} onPress={()=>navigation.navigate("Cards")}>
                            <Image source={Icons.back} />
                        </TouchableOpacity>)
                },
                headerTitle:(header)=>{return <Text style={{fontSize:16,fontWeight:700}}>{getHeaders(header.children)}</Text>},
                headerTitleAlign:"center",
                headerTitleStyle:{
                    fontWeight:"700"
                }
            }
        }}>
            <RootStack.Screen name="Cards" component={Home} options={(props)=>{
                return {
                    headerRight:()=>{
                        return (
                            <TouchableOpacity style={{marginRight:20}} onPress={()=>props.navigation.navigate("AddCard")}>
                                {<Image source={Icons.add} />}
                            </TouchableOpacity>)
                    }}
            }} />
            <RootStack.Screen
                name="AddCard"
                component={AddCard}
            />
            <RootStack.Screen name="Redirect" component={Redirect} />
        </RootStack.Navigator>
    )
}

export default RootNav;