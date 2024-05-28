package com.omisepayment.omise

import android.util.Log
import co.omise.android.api.Client
import co.omise.android.api.RequestListener
import co.omise.android.models.CardParam
import co.omise.android.models.Token
import com.facebook.react.bridge.*

class OmiseModule(private val context: ReactApplicationContext) : ReactContextBaseJavaModule() {

    private val PUBLIC_KEY = "pkey_test_5wvisbxphp1zapg8ie6"

    @ReactMethod
    fun test(name:String,number: String,securityCode:String,promise: Promise){
        promise.resolve(number)
    }

    @ReactMethod
    fun getToken(name:String,number: String,expirationMonth:Int,expirationYear:Int,securityCode:String, promise: Promise) {

        val client = Client(PUBLIC_KEY)

        Log.d("name",name)
        Log.d("number",number)
        Log.d("expirationMonth",expirationMonth.toString())
        Log.d("expirationYear",expirationYear.toString())
        Log.d("securityCode",securityCode)


        val cardParam = CardParam(
            name = name,
            number = number,
            expirationMonth = expirationMonth,
            expirationYear = expirationYear,
            securityCode = securityCode
        )

        val request = Token.CreateTokenRequestBuilder(cardParam).build()

        client.send(request, object: RequestListener<Token> {
            override fun onRequestSucceed(model: Token) {
                // you created a token
                promise.resolve(model.id)
            }

            override fun onRequestFailed(throwable: Throwable) {
                // something bad happened
                promise.reject(throwable)
            }
        })
    }

    override fun getName(): String {
        return "OmiseModule"
    }
}
