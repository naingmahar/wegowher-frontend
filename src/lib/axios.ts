import axios from 'axios'
import { ICardRes } from '../models/Card'
import Base64 from 'base-64'
import { IChargeRes } from '../models/Charge';
const pkgConfig = require("../../package.json");

const vaultEndpoint = "https://vault.omise.co/";
const apiEndpoint = "https://api.omise.co/";

const OmiseVersion = "2015-11-17"
const PUBLIC_KEY = "pkey_test_5wvisbxphp1zapg8ie6"
const SECRET_KEY = "skey_test_5wvisdjjoqmfof5npzw"

const getHeaders = (key:string) => {
        let headers = {
            'Authorization': 'Basic ' + Base64.encode(key + ":"),
            'User-Agent': pkgConfig.name + "/" + pkgConfig.version,
            'Content-Type': 'application/json',
            'Omise-Version':OmiseVersion
        };

        return headers;
}


const ValtInstance = axios.create(
    {
        baseURL:vaultEndpoint,
        headers:getHeaders(PUBLIC_KEY)
    })
const OmiseInstance = axios.create({baseURL:apiEndpoint,headers:getHeaders(SECRET_KEY)})


export interface ICard{
    name:string,
    expiration_month:string,
    expiration_year:string,
    number:number|string,
    city:string,
    postal_code:string,
    security_code:string
}

export interface IPay{ 
    description: string,
    amount: number,
    currency: 'thb'|'usd',
    capture: boolean,
    card: string,
    return_uri:string
  }

export const getToken = (param:{card:ICard}):Promise<{data:ICardRes}> => {
    return ValtInstance.post("tokens",param)
}   

export const payNow = (param:IPay):Promise<{data:IChargeRes}> => {
    return OmiseInstance.post("charges",param)
}


class LocalOmise{

}