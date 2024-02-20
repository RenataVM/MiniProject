// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

const nav = document.querySelector(".parent");
const links = document.querySelector(".links");
const linksContainer = document.querySelector(".links-container");

window.addEventListener("scroll",()=>{
    const scrollHeight= window.scrollY;
    const navHeight= nav.getBoundingClientRect().height; 
    if (scrollHeight > navHeight) {
        nav.classList.add("links-scroll");
      } else {
        nav.classList.remove("links-scroll");
      }
    
})

// links.addEventListener("click",()=>{
//   const linksHeight = linksContainer.getBoundingClientRect().height;
//   const containerHeight = links.getBoundingClientRect().height
//   if (containerHeight===0){
//     links.style.height=`${linksHeight}px`;
//   }
//   else{
//     links.style.height=0;
//   }
//   console.log(links.getBoundingClientRect().height);
// })

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = links.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains(".parent");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});