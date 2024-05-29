const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

var img = document.createElement("img");
var img1 = document.createElement("img");
var img2 = document.createElement("img");

img.src = "pictures/rock2.jpg";
img1.src = "pictures/paper.webp";
img2.src = "pictures/scissor.jpg";

setTimeout(() => rock.textContent = "", 2000);
setTimeout(() => paper.textContent = '', 3500);
setTimeout(() => scissor.textContent = '', 4500);

setTimeout(() => rock.appendChild(img), 2000);
setTimeout(() => paper.appendChild(img1), 3500);
setTimeout(() => scissor.appendChild(img2), 4500);

const startup = document.getElementById("start");

startup.addEventListener("click" , () => {
    window.scrollBy({
        top:950,
        behavior:'smooth'
    });
});

// This will store the image URLs
let images = '';

const sign1 = document.getElementById("player-sign1-img");
const sign2 = document.getElementById("player-sign2-img");
const sign3 = document.getElementById("player-sign3-img");

const server = document.getElementById("server-sign-img");

function getRandomValue() {
    return Math.floor(Math.random() * 3) + 1;
}

function setServerImage() {
    const value = getRandomValue();
    images = `url('computer sign/${value}.png')`; // Reset images each time
    server.style.backgroundImage = images;
}

const select = (event) => {
    if (event.target === sign1) {
        sign2.style.display = 'none';
        sign3.style.display = 'none';
        playerchoice=3;
    } else if (event.target === sign2) {
        sign1.style.display = 'none';
        sign3.style.display = 'none';
        playerchoice =2
    } else if (event.target === sign3) {
        sign1.style.display = 'none';
        sign2.style.display = 'none';
        playerchoice=1
    }

    const serverchoice=setServerImage();
    determinewinner(playerchoice,serverchoice)
}
function determinewinner(playerchoice,serverchoice){
    const result=document.getElementById("result");
    if (playerchoice === serverchoice){
        result.textContent="its a tie";

    }else if (
        (playerchoice ===1 && serverchoice === 3) ||
        (playerchoice ===2 && serverchoice === 1) ||
        (playerchoice === 3 && serverchoice === 2) 
    ){

         
        result.textContent="you win ";
    }else {
        result.textContent="you lose "
    }

    
}
// Add event listeners
sign1.addEventListener('click', select);
sign1.addEventListener('click', () => {
    window.scroll({
        top:2500,
        behavior:'smooth'
    })
})
sign2.addEventListener('click', select);
sign2.addEventListener('click', () => {
    window.scroll({
        top:2500,
        behavior:'smooth'
    })
})
sign3.addEventListener('click', select);
sign3.addEventListener('click', () => {
    window.scroll({
        top:2500,
        behavior:'smooth'
    })
})


const lastbtm=document.getElementById("retry-sbm")
lastbtm.addEventListener("click" , () => {
    window.scrollBy({
        top:-1500,
        behavior:'smooth'
    });
});
