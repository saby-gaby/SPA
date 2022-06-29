import { bankDetaiils } from "./banking.js";

const getRandomInt = (n) => {
    let nInt = "";
    for (let i = 0; i < n; i++){
        const num = Math.floor(Math.random() * 10);
        nInt+=num.toString()
    }
    return nInt
}

export default () => {
    let iban = "DE";
    const blz = bankDetaiils.sparkasse.blz
    const checkNumber = getRandomInt(2);
    const accountNumber = getRandomInt(13)
    iban = iban + checkNumber + blz + accountNumber;
    return iban;
}