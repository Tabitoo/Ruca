let header = document.getElementById("header");
let secondHeader = document.getElementById("second-header")

let scrolltop = 0;

addEventListener("scroll", () => {

    if(scrolltop >= 200){
        scrolltop = window.pageYOffset;
        header.classList.add("header--scroll")
    }else{
        
        console.log(scrolltop) 
        scrolltop = window.pageYOffset;
        header.classList.remove("header--scroll")
    }
})