let result = document.querySelector("#result")

let userinput ={
    pin:1234,
    balance: 0
}
pincheck = () => {
 let input = document.querySelector("#atm-bar").value
 if(input === ""){
    result.innerHTML =`First Enter Your password `
    return false
 }
 if(parseInt(input) === userinput.pin ){
    result.innerHTML =`Your password is Correct`
    return true
  }else{
    result.innerHTML =`Your password is Incorrect`
    return false

 }
}


checkbalance = () => {
if(pincheck()){

    result.innerHTML = ` Your  Balance is $ ${userinput.balance}`
}
}

deposite =()=>{
 if(!pincheck())return
    let amount = parseFloat(prompt(`Plese Enter Your Deposite Amount`))
    if(pincheck()){
        userinput.balance = userinput.balance +amount
        result.innerHTML =`$ ${amount} Deposite. & Your Current Balance is ${userinput.balance}`
    }

}

withdraw =()=>{
  if(!pincheck()){
   return
  }
 let amount =parseFloat(prompt(`Plese enter Your Withdraw Amount `))
 if(amount > userinput.balance)
    result.innerHTML = `Your Balance is Insuffuicient`
else{
    userinput.balance = userinput.balance  - amount
    result.innerHTML = `$ ${amount} witdraw. &  Your Current Balance is ${userinput.balance}`

 }
}

document.querySelector("#btn-check-pin").addEventListener("click",pincheck)
document.querySelector("#btn-check-balance").addEventListener("click",checkbalance)
document.querySelector("#btn-Deposite").addEventListener("click",deposite)
document.querySelector("#btn-with").addEventListener("click",withdraw)




