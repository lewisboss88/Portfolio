const year =document.querySelector("#cYear");
year.innerHTML = new Date().getFullYear();
function openNav(){
    if (window.innerWidth > 815){ 
    document.getElementById("side").style.width="100px";
    document.getElementById("burger").style.display="none";
    document.getElementById("butX").style.display="block";}
    else if (window.innerWidth > 420){
        document.getElementById("side").style.width="100%";
        document.getElementById("side").style.right="0rem";
        document.getElementById("side").style.top="170px";
        document.getElementById("side").style.overflowX="scroll";
        document.getElementById("burger").style.display="none";
        document.getElementById("butX").style.display="block";
    }
    else{
        document.getElementById("side").style.width="100%";
        document.getElementById("side").style.right="0rem";
        document.getElementById("side").style.top="87px";
        document.getElementById("side").style.overflowX="scroll";
        document.getElementById("burger").style.display="none";
        document.getElementById("butX").style.display="block";

    }


}
function closeNav(){
    document.getElementById("side").style.width="0";
    document.getElementById("burger").style.display="block";
    document.getElementById("butX").style.display="none";
}