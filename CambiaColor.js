/*declaraciones
 ********************************************************************************************/

const backgroundSpan = document.querySelector(".row span");
const positionSpan = document.querySelectorAll(".row span")[1];
const positionLabel = document.querySelector(".boxDetection");
const buttonMeme = document.getElementById("buttomMeme");

const contImgviolet =  document.getElementById("memeVioleta");
const contImgred =  document.getElementById("memeRojo");


const bodyElement = document.querySelector("body");
const changeColorButtom = document.querySelector("button");

const WindowHeight = (window.getComputedStyle(document.body).height).substring(0,(window.getComputedStyle(document.body).height).length-2) ;;
const WindowWidth = (window.getComputedStyle(document.body).width).substring(0,(window.getComputedStyle(document.body).width).length-2);

const ButtomH = (window.getComputedStyle(buttonMeme).height).substring(0,(window.getComputedStyle(buttonMeme).height).length-2) ;
const ButtomW = (window.getComputedStyle(buttonMeme).width).substring(0,(window.getComputedStyle(buttonMeme).width).length-2) ;

const ButtomPositionX = window.getComputedStyle(buttonMeme).clientX;
const ButtomPositionY =window.getComputedStyle(buttonMeme).clientY;

let memeCount=0;

class memeCreateImg{
    constructor(name,description){
        this.name=name;
        this.src=this.name+".jpg";
        this.description=description;       
    }
    
};

const newImgred = new memeCreateImg("red","this is the red meme");
const newImgviolet = new memeCreateImg("violet","this is the violet meme");

const getColor = ()=>{
    colorBackground = window.getComputedStyle(bodyElement).backgroundColor;
    if(colorBackground==="rgb(255, 0, 0)"){
        backgroundSpan.textContent= "red";
    }else{
        backgroundSpan.textContent= "blue violet";
    }
}

const createContImg=(Img)=>{
        
        let figure = document.createElement("figure");
        figure.setAttribute("id","figureId"+Img.name);
        let img = document.createElement("img");
        img.setAttribute("src",Img.src);
        img.setAttribute("alt",Img.description);
        img.className="imgSize";
        let imgCaption = document.createElement("figcaption",Img.description);

        figure.append(img);
        figure.append(imgCaption);
                
        if(Img.name==="red"){            
            contImgred.append(figure);
        }else{
            contImgviolet.append(figure);
        }
        
 
}



/*addEvents
 ********************************************************************************************/

changeColorButtom.addEventListener("click",()=>{
    bodyElement.classList.toggle("changeColor");
    getColor();
    let deleteFigure;
    // buttonMeme.style.clientX= ButtomPositionX;
    // buttonMeme.style.clientY= ButtomPositionY;   
    memeCount=0;
    if(colorBackground==="rgb(255, 0, 0)"){
        deleteFigure = document.getElementById("figureIdviolet");
        deleteFigure ? deleteFigure.remove():null;   
    }else{
        deleteFigure = document.getElementById("figureIdred");
        deleteFigure ? deleteFigure.remove() :null;    
    }
})

positionLabel.addEventListener("mousemove",(event)=>{
    positionSpan.textContent = event.clientY + "-" + event.clientX;
})

positionLabel.addEventListener("mouseleave",()=>{
    positionSpan.textContent = "-";
})

buttonMeme.addEventListener("click",()=>{

   if(memeCount<3) {
        let changeTop = (Math.random()*(WindowHeight- ButtomH));
        let changeLeft = (Math.random()*(WindowWidth- ButtomW));

        buttonMeme.style.marginTop= changeTop+"px";
        buttonMeme.style.marginLeft= changeLeft+"px";       
        
        alert("Sigue intentandolo");
   }else{
        // const Imag = new memeCreateImg("test","test2");
        getColor();
        if(colorBackground==="rgb(255, 0, 0)"){
            createContImg(newImgred);
            memeCount=0;
        }else{
            createContImg(newImgviolet);
            memeCount=0;
        }
        
        // Imag.mensaje();
   }
   
   memeCount++;
})

/* functions
*********************************************************************************************/
 getColor();




// document.body.style.setproperty('--pageColor', 'blue');

