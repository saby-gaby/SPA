const delivery = new Promise(handleDelivery);

const iAmAtHome = false;

function handleDelivery(success, failure){
    setTimeout(() => {
        if (iAmAtHome) {
            success("Sabine")
        } else {
            failure("Bissiger Hund")
        }
    }, 5000);
}

// then wird nur bei success aufgeführt
delivery.then(packageDelivered)

//catch nur bei failure
delivery.catch(deliveryFailed)

function packageDelivered(recepient) {
    console.log('Packet ist da!', recepient);
}

function deliveryFailed(reason) {
    console.log("Konnte nicht zugestellt werden :(", reason);
}

console.log(delivery);