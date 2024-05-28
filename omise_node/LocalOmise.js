const Omise = require("omise")

class LocalOmise {
    omise = Omise({'publicKey': "pkey_test_5wvisbxphp1zapg8ie6",secretKey:"skey_test_5wvisdjjoqmfof5npzw"})
    

    getToken(props){
       return new Promise((resolve,reject)=>{
            this.omise.tokens.create({card:props},(err,res)=>{
                if(err) return reject(err)
                return resolve(res)
            })
       })
    }

    payNow(props){
        return new Promise((resolve,reject)=>{
            this.omise.charges.create(props,(err,res)=>{
                if(err) return reject(err)
                return resolve(res)
            })
        })
    }

    charge_list(){
        return new Promise((resolve,reject)=>{
            this.omise.charges.list({offset:598,limit: 10},(err,res)=>{
                if(err) return reject(err)
                return resolve(res)
            })
        })
    }
}

module.exports = new LocalOmise()