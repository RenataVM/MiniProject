const backgroundSpan = document.querySelector(".row span");
const positionSpan = document.querySelectorAll(".row span")[1];
const positionLabel = document.querySelector(".boxDetection");



const bodyElement = document.querySelector("body");
const changeColorButtom = document.querySelector("button");


const getColor = ()=>{
    colorBackground = window.getComputedStyle(bodyElement).backgroundColor;
    if(colorBackground==="rgb(255, 0, 0)"){
        backgroundSpan.textContent= "red";
    }else{
        backgroundSpan.textContent= "blue violet";
    }
}

 getColor();

changeColorButtom.addEventListener("click",(event)=>{
    bodyElement.classList.toggle("changeColor");
    getColor();
})

positionLabel.addEventListener("mousemove",(event)=>{
    positionSpan.textContent = event.clientY + "-" + event.clientX;
})

positionLabel.addEventListener("mouseleave",(event)=>{
    positionSpan.textContent = "-";
})

// document.body.style.setproperty('--pageColor', 'blue');

