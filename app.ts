#! /usr/bin/env node
import inquirer from "inquirer";

let myAmount: number = 10000;
let myPin: number = 3399;

const userPin = await inquirer.prompt([
    { message: "Please Enter You Pin Code", type: "number", name: "pin" }
])

if (userPin.pin === myPin) {
    console.log("your pin is correct")

    const action = await inquirer.prompt([
        { message: "What do ypu wants to", type: "list", choices: ["withdraw", "check amount", "pass chase"], name: "user" }
    ])

    if (action.user === "withdraw") {
        const amount = await inquirer.prompt([
            { message: "How much you want to withdraw", type: "number", name: "user_amount" }
        ])

        if (amount.user_amount <= myAmount && amount.user_amount > 0) {
            myAmount -= amount.user_amount
            console.log(`your remaing balance is ${myAmount}`)
        } else {
            console.log(`incorrect balance`)
        }
    } else if (action.user === "pass chase") {
        const payment = await inquirer.prompt([
            { message: "How much do you wants to pass chase", type: "list", name: "chase", choices: [1000, 2000, 5000, 10000] }
        ])
        if(payment.chase === payment.chase){
            myAmount -= payment.chase
            console.log(`your balance is ${myAmount}`)
        }else{
            console.log("error")
        }
    } else {
        console.log(`Your current amount is ${myAmount}`)
    }

} else {
    console.log(`incorrect pin`)
}