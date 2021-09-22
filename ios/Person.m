//
//  Person.m
//  ReactNativeBridge_Rhulani
//
//  Created by Rhulani Ndhlovu on 2021/09/22.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
@interface RCT_EXTERN_MODULE(Person,NSObject)
RCT_EXTERN_METHOD(retrieveFirstName: (NSString *)name)
RCT_EXTERN_METHOD(getFullName: (RCTResponseSenderBlock)response)
@end
