"use strict";
// variablen müssen definiert mit const, let oder var
// in Funktionen Parameter sollen verschiedene Namen haben
// 'this' können wir nur in object benutzen, ohne strict-mode bekommen wir window-object, sonst -> undefined)
// Verhindert Nutzung von reservierte Wörter als variablen-namen.
// Man kann "use strict" nur in bestimmten Kontext benutzen(z.b. in eine function)

const userList = ["Mercedes", "Denis"];

// const let = 'The Letters'

const user = {
    name: "Maxim",
    greetUser: function () {
        alert(`Hello, ${this.name}`)
    }
}

function getUserData(name,id) {
    console.log(this);
}

getUserData();

userList.push("Salem")
