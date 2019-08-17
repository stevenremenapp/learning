function callMeMaybe() {
    const callMe = 'Hi! I am here!';
    setTimeout(() => {
        console.log(callMe);
    }, 4000);
}

callMeMaybe();