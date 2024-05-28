// import Omise from 'omise';

interface IPay{

}
class LocalOmise {
    private omise = Omise({'publicKey': "pkey_test_5wvisbxphp1zapg8ie6",secretKey:"skey_test_5wvisdjjoqmfof5npzw"})
    

    getToken(props:Omise.Tokens.ICard):Promise<Omise.Tokens.IToken|undefined>{
       return new Promise((resolve,reject)=>{
            this.omise.tokens.create({card:props},(err,res)=>{
                if(err) return reject(err)
                return resolve(res)
            })
       })
    }

    payNow(props:Omise.Charges.IRequest){
        return new Promise((resolve,reject)=>{
            this.omise.charges.create(props,(err,res)=>{
                if(err) return reject(err)
                return resolve(res)
            })
        })
    }
}

export default new LocalOmise()