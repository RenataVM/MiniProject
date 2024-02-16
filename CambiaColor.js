const backgroundSpan = document.querySelector(".row span");
const positionSpan = document.querySelectorAll(".row span")[1];
const positionLabel = document.querySelector(".boxDetection");
const buttonMeme = document.getElementById("buttomMeme");


const bodyElement = document.querySelector("body");
const changeColorButtom = document.querySelector("button");

const WindowHeight = (window.getComputedStyle(document.body).height).substring(0,(window.getComputedStyle(document.body).height).length-2) ;;
const WindowWidth = (window.getComputedStyle(document.body).width).substring(0,(window.getComputedStyle(document.body).width).length-2);

const ButtomH = (window.getComputedStyle(buttonMeme).height).substring(0,(window.getComputedStyle(buttonMeme).height).length-2) ;
const ButtomW = (window.getComputedStyle(buttonMeme).width).substring(0,(window.getComputedStyle(buttonMeme).width).length-2) ;

let memeCount=0;

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

buttomMeme.addEventListener("click",(evento)=>{
   if(memeCount<3) {
        let changeTop = (Math.random()*(WindowHeight- ButtomH));
        let changeLeft = (Math.random()*(WindowWidth- ButtomW));

        buttonMeme.style.marginTop= changeTop+"px";
        buttonMeme.style.marginLeft= changeLeft+"px";       
        
        alert("Sigue intentandolo");
   }
   
   memeCount++;
})
// document.body.style.setproperty('--pageColor', 'blue');

