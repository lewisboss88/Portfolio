const year =document.querySelector("#cYear");
year.innerHTML = new Date().getFullYear();
function openNav(){
    if (window.innerWidth > 815){ 
    document.getElementById("side").style.width="433px";
    document.getElementById("burger").style.display="none";
    document.getElementById("butX").style.display="block";}
    else if (window.innerWidth > 420){
        document.getElementById("side").style.width="100%";
        document.getElementById("side").style.right="0rem";
        document.getElementById("side").style.top="197px";
        document.getElementById("side").style.overflowX="scroll";
        document.getElementById("burger").style.display="none";
        document.getElementById("butX").style.display="block";
    }
    else{
        document.getElementById("side").style.width="100%";
        document.getElementById("side").style.right="0rem";
        document.getElementById("side").style.top="103px";
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

const openIstruction = () =>{
    if(window.innerWidth < 421){ setTimeout(() => {document.querySelector(".instruction").style.transform="scale(1)";}, 500); } 
   
}

window.onload = openIstruction();
window.onresize = openIstruction();
window.onclick = () =>{document.querySelector(".instruction").style.transform="scale(0)" }