const accountId = 144553 
let accountEmail = "yash@google.com"
var accountPassword = "12345"
accountCity = "Ghaziabad"
let accountState;

// accountId = 2 // not allowed 

accountEmail = "random@google.com"
accountPassword = "11092003"
accountCity = "Sasaram"

console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope. 
*/