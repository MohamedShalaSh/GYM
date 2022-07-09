// ever thing about bar
document.querySelector(".bar").addEventListener("click", () => {
    document.querySelector(".THEbar").classList.toggle("bar-show");
    document.querySelector(".close1").classList.toggle("close1-show");
    bar.style.display="none"
});
document.querySelector(".close1").addEventListener("click", () => {
    document.querySelector(".THEbar").classList.toggle("bar-show");
    document.querySelector(".close1").classList.toggle("close1-show");
    bar.style.display=""
});
// -------------------------------------------------------------------------
// any Join button 
document.querySelector("#joinbtn3").addEventListener("click", () => {
    document.querySelector(".joinIN").classList.toggle("joinIN-show");
});
document.querySelector("#joinbtn2").addEventListener("click", () => {
    document.querySelector(".joinIN").classList.toggle("joinIN-show");
});
document.querySelector("#joinbtn1").addEventListener("click", () => {
    document.querySelector(".joinIN").classList.toggle("joinIN-show");
});
document.querySelector("#close2").addEventListener("click", () => {
    document.querySelector(".joinIN").classList.toggle("joinIN-show");
});
// ----------------------------------------------------------------------------
let why=document.getElementById('why');
let why2=document.getElementById('why2');
let plan=document.getElementById('plan');
let up=document.getElementById('up');
let icons=document.getElementById('icoons');
window.onscroll=function(){
    if(scrollY>=522){
        why.style.animation="why linear 1 3s";
        why2.style.animation="why2 linear 1 3s";
    }
    else{
        why.style.animation="none";
        why2.style.animation="none";
    }
    if(scrollY>=1000){
        plan.style.animation="plan linear 1 3s";
    }
    else{
        plan.style.animation="none";
    }
    if(scrollY>=2055){
        icons.style.animation="icoons linear 1 3s";
    }
    else{
        icons.style.animation="none";
    }
    if(scrollY>=100){
        up.style.display="block";
    }
    else{
        up.style.display="";
    }
}
// ----------------------------------------------
//  SETTING
document.querySelector(".slideBtn").addEventListener("click", () => {
    document.querySelector(".span").classList.toggle("span-show");
    document.querySelector(".slideBtn").classList.toggle("slideBtn-show");
    document.querySelector(".body").classList.toggle("pink-color");
});
document.querySelector(".boxBtn").addEventListener("click", () => {
    document.querySelector(".box").classList.toggle("box-show");
    document.querySelector(".rowsetting").classList.toggle("rowsetting-show");
});

document.querySelector(".slideBtn2").addEventListener("click", () => {
    document.querySelector(".span2").classList.toggle("span2-show");
    document.querySelector(".slideBtn2").classList.toggle("slideBtn2-show");
    document.querySelector(".body").classList.toggle("body-dark");
});
document.querySelector(".slideBtn3").addEventListener("click", () => {
    document.querySelector(".span3").classList.toggle("span3-show");
    document.querySelector(".slideBtn3").classList.toggle("slideBtn3-show");
    document.querySelector(".name").classList.toggle("name-show");
});
// -------------------------------------------------------------------------------
