const accountId = "12345"
let accountName = "Alok"
let accountEmail = "alok@gmil.com"
var accountPassword = "0000000"
accountCity = "Ayodhya"
let accountState = ""

//accountId="111" //Not Recomended "id me constant value hai aur constant value change nahi ho payegi"

console.log(accountId);
console.log(accountName);

accountName = "Rahul"

console.table([accountId, accountName, accountEmail, accountPassword, accountCity]);

/*
prefer not to use var bcoz of issue in block scope and functional scope
*/
accountName = "Lakshya"
accountEmail = "lakshya@gmil.com"
accountPassword = "999999"
accountCity = "Varanasi"


console.table([accountId, accountName, accountEmail, accountPassword, accountCity.accountState]);