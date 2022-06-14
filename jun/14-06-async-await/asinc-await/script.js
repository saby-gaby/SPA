const iWillCleanMyRoom = new Promise((resolve, reject) => {
    setTimeout(() => resolve("All clean!"), 2000)
    //reject()
})

const bringGarbage = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("all gone!")
    }, 2500)
})

// iWillCleanMyRoom.then(() => console.log("Nice! Here is your ice cream!"));

// async = Asynchrone Function, die auf promises warten kann
async function momWatching() {
    // Pause in der Function, bis die Promise aufgelöst wird
    const result = await iWillCleanMyRoom;
    console.log(result, "Nice! Here is your ice cream!"); 4
    const resultGarbage = await bringGarbage;
    console.log(resultGarbage, "Good boy! Go play in your clean room.");
}

momWatching();