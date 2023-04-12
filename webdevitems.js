
function previewOpenMenu(i){
    const menuP = document.getElementsByClassName("previewMenu");
    switch(i){
        case 0:
            menuP[0].style.transform = "scale(0)";
        break;
        case 1: 
            menuP[0].style.transform = "scale(1)";
        break;
        case 2:
            document.querySelector(".faceItem").classList.toggle("changeMenu");

    }
}

function previewMenuOpenClose(){
    document.querySelector(".faceItem2").classList.toggle("changeWraper");
    if(document.getElementById("previewOpenWraper").getAttribute("class") == "fas fa-bars"){
        document.getElementById("previewOpenWraper").setAttribute("class", "fas fa-x");
    }else document.getElementById("previewOpenWraper").setAttribute("class", "fas fa-bars");
}

/* digital analogic clock*/

const thh =document.querySelector("#hours");
const tmm =document.querySelector("#minutes");
const lmn = document.querySelector(".lmn");
const lhr = document.querySelector(".lhr");

const currentTime = () => {
    let hh = new Date().getHours(); 
    let mm = new Date().getMinutes(); 
    thh.innerHTML= hh;
    tmm.innerHTML= mm;
    let rotationM = (mm * 6) % 360; 
    let rotationH = (hh * 30) % 360;
    lmn.style.transform =`rotateZ( ${rotationM}deg)`; 
    lhr.style.transform =`rotateZ( ${rotationH}deg)`;  
}

currentTime();
setInterval(currentTime, 1000);