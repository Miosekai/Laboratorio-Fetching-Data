let canvas;
let button1, button2, button3, button4, button5;
let URL1 = 'https://catfact.ninja/fact';
let URL2 = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
let URL3 = 'https://dog.ceo/api/breeds/image/random';
let URL4 = 'https://api.coindesk.com/v1/bpi/currentprice.json';
let URL5 = 'https://randomuser.me/api/';
let catFact = null;
let dogImage = null;
let vista = null;
let imageDog = null;
let link = null;
let usPopulation = null;
let bitcoin = null;
let user = null;
let cambioApi = 0;
let img;


function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    img = loadImage('pantalla.png');
}

function draw() {
    background(img);
    
    newCursor();
    if (catFact != null) {
        textSize(20);
        textWrap(WORD);
        text(catFact.fact,130, 400, 460)
    }

    if (dogImage != null) {
        image(imageDog, 130, 200, 400);
    }

    if (usPopulation != null) {
        textSize(20);
        textWrap(WORD);
        text(usPopulation.data[0].Population, 199, 430, 800)
    }

    if (bitcoin != null) {
        textSize(20);
        textWrap(WORD);
        text(bitcoin.bpi.USD.rate,199, 430, 800)
    }

    if (user != null) {
        textSize(20);
        textWrap(WORD);
        text(user.results[0].name.first + " " + user.results[0].name.last, 199, 430, 800)
    }

// 199, 430, 800
    button1 = createButton('Random');
    button1.position(1319, 525);
    button1.mousePressed(changeBG); 

    button = createButton('Bitcoin Price');
    button.position(990, 449);
    button.mousePressed(buttonBitcoin);
    //435

    button2 = createButton('Random dog');
    button2.position(1350, 375);
    button2.mousePressed(buttonDog);

    button3 = createButton('Random fact - Cat');
    button3.size(324,57);
    button3.position(1350, 450);
    button3.mousePressed(buttonCat);
    

    button4 = createButton('Random user');
    button4.position(987, 369);
    button4.mousePressed( buttonUser);}
    //button4.size(200,150);

    button5 = createButton('US population');
    button5.position(970, 529);
    button5.mousePressed(buttonPoblacion);




function mousePressed() {

if(dist(mouseX,mouseY, 990, 449) < 100){

    fetch(URL4)
    .then(response => response.json())
    .then(data => {
        bitcoin = data
        console.log(bitcoin.bpi.EUR.rate)
        dogImage = null;
        catFact = null;
        user = null;
        usPopulation = null;
    })


}

}

function buttonBitcoin(){

    fetch(URL4)
    .then(response => response.json())
    .then(data => {
        bitcoin = data
        console.log(bitcoin.bpi.EUR.rate)
        dogImage = null;
        catFact = null;
        user = null;
        usPopulation = null;
    })

}

function buttonDog(){

    fetch(URL3)
                .then(response => response.json())
                .then(data => {
                    dogImage = data
                    console.log(dogImage.message)
                    imageDog = loadImage(dogImage.message);
                    bitcoin = null;
                    user = null;
                    usPopulation = null;
                    catFact = null;
                });

}


function buttonCat(){

    fetch(URL1)
    .then(response => response.json())
    .then(data => {
        catFact = data
        console.log(catFact.fact)
        dogImage = null;
        bitcoin = null;
        user = null;
        usPopulation = null;
    })

}

function buttonUser(){

    fetch(URL5)
                .then(response => response.json())
                .then(data => {
                    user = data
                    console.log(user.results[0].name.first)
                    dogImage = null;
                    catFact = null;
                    bitcoin = null;
                    usPopulation = null;
                })
}


function buttonPoblacion(){

    fetch(URL2)
                .then(response => response.json())
                .then(data => {
                    usPopulation = data
                    console.log(usPopulation.data[0].Population)
                    dogImage = null;
                    catFact = null;
                    bitcoin = null;
                    user = null;
                })


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}

function changeBG() {

    cambioApi = parseInt(random(5));
    console.log(cambioApi)
   

    switch (cambioApi) {
        // Gatos
        case 0:
            fetch(URL1)
                .then(response => response.json())
                .then(data => {
                    catFact = data
                    console.log(catFact.fact)
                    dogImage = null;
                    bitcoin = null;
                    user = null;
                    usPopulation = null;
                })

            break;

            // Perros
        case 1:

            fetch(URL3)
                .then(response => response.json())
                .then(data => {
                    dogImage = data
                    console.log(dogImage.message)
                    imageDog = loadImage(dogImage.message);
                    bitcoin = null;
                    user = null;
                    usPopulation = null;
                    catFact = null;
                });



            break;

        case 2:
            // Población
            fetch(URL2)
                .then(response => response.json())
                .then(data => {
                    usPopulation = data
                    console.log(usPopulation.data[0].Population)
                    dogImage = null;
                    catFact = null;
                    bitcoin = null;
                    user = null;
                })

            break;

        case 3:
            // BitCoin

            fetch(URL4)
                .then(response => response.json())
                .then(data => {
                    bitcoin = data
                    console.log(bitcoin.bpi.EUR.rate)
                    dogImage = null;
                    catFact = null;
                    user = null;
                    usPopulation = null;
                })
            break;

            // User
        case 4:
            fetch(URL5)
                .then(response => response.json())
                .then(data => {
                    user = data
                    console.log(user.results[0].name.first)
                    dogImage = null;
                    catFact = null;
                    bitcoin = null;
                    usPopulation = null;
                })

            break;

    }

}
