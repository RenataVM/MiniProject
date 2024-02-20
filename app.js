// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

const nav=document.querySelector(".parent");

window.addEventListener("scroll",()=>{
    const scrollHeight= window.scrollY;
    const navHeight= nav.getBoundingClientRect().height; 
    if (scrollHeight > navHeight) {
        nav.classList.add("links-scroll");
      } else {
        nav.classList.remove("links-scroll");
      }
    
})