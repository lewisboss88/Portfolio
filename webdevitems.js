
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