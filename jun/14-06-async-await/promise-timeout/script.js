function createTimeout(time) {
  return new Promise((resolve, reject) => {
    setTimeout(()=>resolve(), time * 1000);
  });
}

async function timerStart(time) {
  await createTimeout(time);
  console.log("Zeit abgelaufen!");
}

timerStart(5);
