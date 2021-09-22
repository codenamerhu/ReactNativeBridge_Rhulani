//
//  Person.swift
//  ReactNativeBridge_Rhulani
//
//  Created by Rhulani Ndhlovu on 2021/09/22.
//

import Foundation

@objc(Person) class Person: NSObject {
  
  @objc static var fullname = ""
  
  let lastnames = [
    "Ndhlovu",
    "Kgarosi",
    "Nkosi",
    "Doe",
    "Smith",
    "Chan",
    "Carter",
  ]
  
  @objc func retrieveFirstName(_ name: String){
    
    Person.fullname = "\(name) \(generateName())"
  }
  
  func generateName() -> String{
    let _subscript = Int.random(in: 0..<lastnames.count)
    
    return lastnames[_subscript]
  }
  
  @objc func getFullName(_ response: RCTResponseSenderBlock){
    response([NSNull(), Person.fullname])
  }
}
