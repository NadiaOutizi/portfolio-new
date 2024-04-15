const styleSwitcherToggler=document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle('open');
});
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    localStorage.setItem("color",color);
    ChangeColor();
}
function ChangeColor(){
    alternateStyle.forEach((style)=>{
        if(localStorage.getItem("color") === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    });
}
const dayNight=document.querySelector("day-night");
windows.addEventListener("load",()=>{
    if(document.body.classList.contains('dark'))
    {
        dayNight.querySelector("i").classList.add("fa-sun")
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})