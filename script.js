let heartCount = 0;

// function to get heart count
// --------------------------
function getHeartCount(){
    const heartCountElement = document.getElementById("heart-count").querySelector("p");
    
    heartCount++;
    
    heartCountElement.textContent = heartCount;
}

let copyCount = 0;
// function to get copy count
function getCopyCount(){
    const copyCountElement = document.getElementById("copy-count");

    copyCount++;
    
    alert("Number is copied");
    
    copyCountElement.textContent = copyCount;
}

// copy to clipboard
function copyToClipboard(serviceNumberId) {
    
    const serviceNumberElement = document.getElementById(serviceNumberId);

    const serviceNumber = serviceNumberElement.innerText;

    navigator.clipboard.writeText(serviceNumber)
        .then(() => {
            alert("Number copied to clipboard: " + serviceNumber);
        })
        .catch(err => {
            console.error("Failed to copy text: ", err);
            alert("Failed to copy the number. Please try again.");
        });
}

// copy buttons
// --------------------

// National Emergency Number
document.getElementById('nen-copy-btn').addEventListener ("click", function(e){
    e.preventDefault();
    getCopyCount()
    copyToClipboard('nen-service-no')
})
// Police Helpline Number
document.getElementById('police-copy-btn').addEventListener ("click", function(e){
    e.preventDefault();
    getCopyCount()
    copyToClipboard('police-service-no')
})
// Fire Service Number
document.getElementById('fire-copy-btn').addEventListener ("click", function(e){
    e.preventDefault();
    getCopyCount()
    copyToClipboard('fire-service-number')
})
// Ambulance Service
document.getElementById('ambulance-copy-btn').addEventListener ("click", function(e){
    e.preventDefault();
    getCopyCount()
    copyToClipboard('ambulance-service-number')
})
// Women & Child Helpliner
document.getElementById('wc-copy-btn').addEventListener ("click", function(e){
    e.preventDefault();
    getCopyCount()
    copyToClipboard('wc-service-number')
})
// Anti-Corruption Helpline 
document.getElementById('anti-corruption-copy-btn').addEventListener ("click", function(e){
    e.preventDefault();
    getCopyCount()
    copyToClipboard('anti-corruption-service-number')
})
// Electricity Helpline
document.getElementById('elect-copy-btn').addEventListener ("click", function(e){
    e.preventDefault();
    getCopyCount()
    copyToClipboard('elect-service-number')
})
// Brac Helpline
document.getElementById('brac-copy-btn').addEventListener ("click", function(e){
    e.preventDefault();
    getCopyCount()
    copyToClipboard('brac-service-number')
})
// Bangladesh Railway Helpline
document.getElementById('bd-rail-copy-btn').addEventListener ("click", function(e){
    e.preventDefault();
    getCopyCount()
    copyToClipboard('bd-rail-service-number')
})



// heart button
// ----------------------
// National Emergency Number
document.getElementById('nen-heart-button').addEventListener ("click", function(e){
    e.preventDefault();
    getHeartCount(heartCount)
})

// Police Helpline Number
document.getElementById('police-heart-button').addEventListener ("click", function(e){
    e.preventDefault();
    getHeartCount(heartCount)
})

// Fire Service Number
document.getElementById('fire-heart-button').addEventListener ("click", function(e){
    e.preventDefault();
    getHeartCount(heartCount)
})


// Ambulance Service
document.getElementById('ambulance-heart-button').addEventListener ("click", function(e){
    e.preventDefault();
    getHeartCount(heartCount)
})

// Women & Child Helpline
document.getElementById('wc-heart-button').addEventListener ("click", function(e){
    e.preventDefault();
    getHeartCount(heartCount)
})

// Anti-Corruption Helpline
document.getElementById('anti-corp-heart-button').addEventListener ("click", function(e){
    e.preventDefault();
    getHeartCount(heartCount)
})

// Electricity Helpline
document.getElementById('elect-heart-button').addEventListener ("click", function(e){
    e.preventDefault();
    getHeartCount(heartCount)
})

// Brac Helpline
document.getElementById('brac-heart-button').addEventListener ("click", function(e){
    e.preventDefault();
    getHeartCount(heartCount)
})

// Bangladesh Railway Helpline
document.getElementById('bd-rail-heart-button').addEventListener ("click", function(e){
    e.preventDefault();
    getHeartCount(heartCount)
})



// coin/call button
// -----------------
let coinCount = 100;

const coinCountElement = document.getElementById("coin-count").querySelector("p");

const callButtons = document.querySelectorAll('[id$="-call-btn"]');

// function to get coin count
// --------------------------
function getCoinCount(serviceName, serviceNumber){

    if (coinCount >= 20) {
        coinCount -= 20;
        coinCountElement.textContent = coinCount;
        alert(`Calling ${serviceName}: ${serviceNumber}`)
        return true; 
    } else {
        alert("You don't have enough coins!");
        return false; 
    }
    
}


// National Emergency Number
document.getElementById('nen-call-btn').addEventListener ("click", function(e){
    e.preventDefault();
    const serviceName = document.getElementById("nen-service-name").innerText
    const serviceNumber = document.getElementById("nen-service-no").innerText
    getCoinCount(serviceName, serviceNumber)
})

// Police Helpline Number
document.getElementById('police-call-btn').addEventListener ("click", function(e){
    e.preventDefault();
    const serviceName = document.getElementById("police-service-name").innerText
    const serviceNumber = document.getElementById("police-service-no").innerText
    getCoinCount(serviceName, serviceNumber)
})

// Fire Service Number
document.getElementById('fire-call-btn').addEventListener("click", function(e){
    e.preventDefault();
    const serviceName = document.getElementById("fire-service-name").innerText;
    const serviceNumber = document.getElementById("fire-service-number").innerText;
    getCoinCount(serviceName, serviceNumber);
});

// Ambulance Service
document.getElementById('ambulance-call-btn').addEventListener ("click", function(e){
    e.preventDefault();
    const serviceName = document.getElementById("ambulance-service-name").innerText
    const serviceNumber = document.getElementById("ambulance-service-number").innerText
    getCoinCount(serviceName, serviceNumber)
})

// Women & Child Helpline
document.getElementById('wc-call-btn').addEventListener ("click", function(e){
    e.preventDefault();
    const serviceName = document.getElementById("wc-service-name").innerText
    const serviceNumber = document.getElementById("wc-service-number").innerText
    getCoinCount(serviceName, serviceNumber)
})

// Anti-Corruption Helpline 
document.getElementById('anti-corruption-call-btn').addEventListener ("click", function(e){
    e.preventDefault();
    const serviceName = document.getElementById("anti-corruption-service-name").innerText
    const serviceNumber = document.getElementById("anti-corruption-service-number").innerText
    getCoinCount(serviceName, serviceNumber)
})

// Electricity Helpline
document.getElementById('elect-call-btn').addEventListener ("click", function(e){
    e.preventDefault();
    const serviceName = document.getElementById("elect-service-name").innerText
    const serviceNumber = document.getElementById("elect-service-number").innerText
    getCoinCount(serviceName, serviceNumber)
})

// Brac Helpline
document.getElementById('brac-call-btn').addEventListener ("click", function(e){
    e.preventDefault();
    const serviceName = document.getElementById("brac-service-name").innerText
    const serviceNumber = document.getElementById("brac-service-number").innerText
    getCoinCount(serviceName, serviceNumber)
})

// National Emergency Number
document.getElementById('bd-rail-call-btn').addEventListener ("click", function(e){
    e.preventDefault();
    const serviceName = document.getElementById("bd-rail-service-name").innerText
    const serviceNumber = document.getElementById("bd-rail-service-number").innerText
    getCoinCount(serviceName, serviceNumber)
})

// document.getElementById('nen-copy-btn').addEventListener("click", function(e) {
//     e.preventDefault();

//     // Select the service number element using its ID.
//     const serviceNumberElement = document.getElementById("nen-service-no");

//     // Get the text content (the phone number) from that element.
//     const serviceNumber = serviceNumberElement.innerText;

//     // Use the modern Clipboard API to write the text to the clipboard.
//     navigator.clipboard.writeText(serviceNumber)
//         .then(() => {
//             // This code runs if the copy was successful.
//             alert("Number copied to clipboard: " + serviceNumber);
//         })
//         .catch(err => {
//             // This code runs if there was an error.
//             console.error("Failed to copy text: ", err);
//             alert("Failed to copy the number. Please try again.");
//         });
// });
