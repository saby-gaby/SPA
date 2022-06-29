const bankDetaiils = {
    sparkasse: {
        blz: 51151,
        location: "Berlin"
    }
}

const atmGreeting = "Wilkommen! Wie viel Geld möchtest du abheben?";

const withdraw = (balance, amount) => {
  
  if (balance>=amount) {
    balance -= amount;
    return balance;
  } else {
    console.log("Bist Arm digga.");
  }
}

const deposit = (balance, amount) => {
    balance += amount;
    return balance
}

export{withdraw, deposit, bankDetaiils, atmGreeting}
