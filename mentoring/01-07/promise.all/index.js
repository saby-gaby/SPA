const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hallo from promise1");
  }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("sorry, i am from promise2 rejected");
  }, 8000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hallo from promise3");
  }, 3000);
});

const promiseResolving = async () => {
    const response = await Promise.allSettled([promise1, promise2, promise3]);
    console.log(response);
};
// Promise.all akzeptiert keine Fehler -> wir bekommen ein Fehler.
// Promise.allSettled akzeptiert auch die Fehler -> wir bekommen ein Resultat.

promiseResolving()