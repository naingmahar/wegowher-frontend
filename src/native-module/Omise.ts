import { NativeModules } from "react-native";
import { ICardRes } from "../models/Card";
const { OmiseModule } = NativeModules;

interface OmiseModuleInterface {
    test:(name:string,number: String,securityCode:String)=>Promise<string>,
    getToken: (
        name:String,
        number: String,
        expirationMonth:number,
        expirationYear:number,
        securityCode:String) => Promise<ICardRes>
  }
  
  export default OmiseModule as OmiseModuleInterface;