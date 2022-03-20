var ran1=Math.floor(Math.random() * 6)+1;
var ran2=Math.floor(Math.random() * 6)+1;
var image1="images/dice"+ran1+".png";
var image2="images/dice"+ran2+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);
document.querySelectorAll("img")[1].setAttribute("src",image2);
if(ran1>ran2){
    document.querySelector("h1").innerHTML="🚩PLAYER 1 WINS !";
}else if(ran1<ran2){
    document.querySelector("h1").innerHTML="🚩PLAYER 2 WINS !";
}else{
    document.querySelector("h1").innerHTML="🚩DRAW 🚩";
}

