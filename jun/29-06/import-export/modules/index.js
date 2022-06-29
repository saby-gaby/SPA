// import { withdraw as withdrawMoney, deposit } from "./banking.js";  
import * as banking from "./banking.js";  
import { greetUser } from "./user.js";
import getIban from "./account.js"; // -> gleich wie-> import {default as getIban} from "./account.js"
                                    // die name der function ist egal, wir können sie wie wir wollen nennen
console.log(greetUser("Saby"));
console.log(getIban());
// console.log(banking.withdrawMoney(500, 20));
console.log(banking.deposit(500, 2000));
console.log(banking.bankDetaiils.sparkasse.blz);
console.log(banking.atmGreeting);
