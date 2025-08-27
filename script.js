let heartCount = 0;

// document.getElementById('nen-heart-button').addEventListener("click", function(e){
//     e.preventDefault();

//     const heartCountElement = document.getElementById("heart-count").querySelector("p");

//     heartCount++;

//     heartCountElement.textContent = heartCount;
// });

// function to get heart count
function getHeartCount(){
    const heartCountElement = document.getElementById("heart-count").querySelector("p");

    heartCount++;

    heartCountElement.textContent = heartCount;
}

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

