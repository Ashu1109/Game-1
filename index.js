var namep1 = prompt("Enter Name Of Player 1");
var namep2 = prompt("Enter Name Of Player 2");
document.querySelectorAll(".dice p")[0].textContent = namep1;
document.querySelectorAll(".dice p")[1].textContent = namep2;

function dice(){
    var p1= Math.floor(Math.random()*6)+1;
    var p2 = Math.floor(Math.random()*6)+1;
    if(p1>p2){
        document.querySelector(".container h1").textContent = "😀Player "+namep1+" win";
    }
    else if(p1 === p2){
        document.querySelector(".container h1").textContent = "😀Draw😃";
    }
    else{
        document.querySelector(".container h1").textContent = "Player "+namep2+" win😃";
    }
        document.querySelector(".dice .img1").setAttribute("src","images/dice"+p1+".png");
        document.querySelector(".dice .img2").setAttribute("src","images/dice"+p2+".png");
}
