//
//  LocalOmise.m
//  OmisePayment
//
//  Created by Naing Mahar on 22/05/2024.
//

#import <Foundation/Foundation.h>

#import "LocalOmise.h"
#import <React/RCTLog.h>

@implementation LocalOmise
RCT_EXPORT_MODULE()


RCT_EXPORT_METHOD(multiply:(double)a
                  b:(double)b
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    NSNumber *result = @(a * b);

    resolve(result);
}

RCT_EXPORT_METHOD(getToken:(NSString*)name
                  number:(NSString*)number
                  expirationMonth:(double)expirationMonth
                  expirationYear:(double)expirationYear
                  securityCode:(NSString*)securityCode
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
  NSNumber *expMonth = [NSNumber numberWithDouble:expirationMonth];
  NSNumber *expYear = [NSNumber numberWithDouble:expirationYear];


  
  TokenRequest* tokenRequest = [TokenRequest new];
  tokenRequest.publicKey = @"pkey_test_5wvisbxphp1zapg8ie6"; //required
  tokenRequest.card.name = @"JOHN DOE"; //required
  tokenRequest.card.city = @"Bangkok"; //required
  tokenRequest.card.postalCode = @"10320"; //required
  tokenRequest.card.number = number; //required
  tokenRequest.card.expirationMonth = [expMonth stringValue];//required
  tokenRequest.card.expirationYear = [expYear stringValue]; //required
  tokenRequest.card.securityCode = securityCode; //required
  
  //request
  Omise* omise = [Omise new];
  omise.delegate = self;
  [omise requestToken:tokenRequest];
    resolve(omise);
}

//#pragma OmiseRequestDelegate
//-(void)omiseOnFailed:(NSError *)error
//{
//    //handle error
//    //see OmiseError.h and .m
//  
//}
//
//-(void)omiseOnSucceededToken:(Token *)token
//{
//    //your code here
//    //ex.
//    NSString* brand = token.card.brand;
//    NSString* location = token.location;
//    BOOL livemode = token.livemode;
//}
  


//RCT_EXTERN_METHOD(getToken:(NSString*)name
//                  number:(NSString*)number
//                  expirationMonth:(double)expirationMonth
//                  expirationYear:(double)expirationYear
//                  securityCode:(NSString*)securityCode
//                  resolve:(RCTPromiseResolveBlock)resolve
//                  reject:(RCTPromiseRejectBlock)reject)
//{
//  resolve(name);
//  
//}


@end
