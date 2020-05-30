// #DEMONHACKER
function signin(){
    var x =document.getElementById("user").value
    var y =document.getElementById("pass").value
    
    
    if(x!=""&&y!=""){
        
        document.getElementById("form").style.display="none"
document.getElementById("h1").innerHTML="Your info"
document.getElementById("h1").style.width="80%"
document.getElementById("h1").style.transform="translate(-15%,-10%)"
document.getElementById("para1").style.display="block"
document.getElementById("para2").style.display="block"
document.getElementById("para3").style.display="block"
document.getElementById("para4").style.display="block"
document.getElementById("para1").innerHTML="USERNAME"
document.getElementById("para2").innerHTML=x
document.getElementById("para3").innerHTML="PASSWORD"
document.getElementById("para4").innerHTML=y
document.getElementById("div").style.top="30px"
document.getElementById("signout").style.display="block"
    }
    else{
        alert("Invalid Username or Password")
    }
    
}
function signinbtn(){
    setTimeout(signin,300)
}
function signoutbtn(){
    setTimeout(signout,300)
}
function signout(){
    document.getElementById("form").style.display="block"
document.getElementById("h1").innerHTML="Log in"
document.getElementById("h1").style.width="50%"
document.getElementById("h1").style.transform="translate(0%,0%)"
document.getElementById("para1").style.display="none"
document.getElementById("para2").style.display="none"
document.getElementById("para3").style.display="none"
document.getElementById("para4").style.display="none"

document.getElementById("div").style.top="80px"
document.getElementById("signout").style.display="none"
}

function hover1(){
    var select = document.getElementById("select");
    var d = select.options[select.selectedIndex].text;
    if(d=="Green"){
        document.getElementById("sign").style.backgroundColor = "lightgreen"
        document.getElementById("signout").style.backgroundColor = "lightgreen"
        document.getElementById("sign").style.color = "white"
        document.getElementById("signout").style.color = "white"
    }
    else if(d=="Red"){
        document.getElementById("sign").style.backgroundColor = "pink"
        document.getElementById("signout").style.backgroundColor = "pink"
        document.getElementById("sign").style.color = "white"
        document.getElementById("signout").style.color = "white"}
    if(d=="Blue"){
        document.getElementById("sign").style.backgroundColor = "skyblue"
        document.getElementById("signout").style.backgroundColor = "skyblue"
        
    document.getElementById("sign").style.color = "white"
        document.getElementById("signout").style.color = "white"
    }
    else if(d=="Orange"){
        document.getElementById("sign").style.backgroundColor = "lightyellow"
        document.getElementById("signout").style.backgroundColor = "lightyellow"
        document.getElementById("sign").style.color = "black"
        document.getElementById("signout").style.color = "black"}
}
function hover12(){
        document.getElementById("sign").style.background = "none"
    document.getElementById("signout").style.background = "none"
    var select = document.getElementById("select");
    var d = select.options[select.selectedIndex].text;
    if(d=="Green"){
        document.getElementById("sign").style.color = "lightgreen"
        document.getElementById("signout").style.color = "lightgreen"
    }
    else if(d=="Red"){
        document.getElementById("sign").style.color = "pink"
        document.getElementById("signout").style.color = "pink"
    }
    if(d=="Blue"){
        document.getElementById("sign").style.color = "skyblue"
        document.getElementById("signout").style.color = "skyblue"
    }
    else if(d=="Orange"){
        document.getElementById("sign").style.color = "lightyellow"
        document.getElementById("signout").style.color = "lightyellow"
    }
    }

       
function select(){
    var select = document.getElementById("select");
    var d = select.options[select.selectedIndex].text;
    if(d=="Green"){
    document.getElementById("label2").style.color = "lightgreen"
        document.getElementById("body").style.background = "linear-gradient(to right,black,green 200%)"
       document.getElementById("h1").style.color = "#00A86B"
       document.getElementById("h1").style.borderBottom ="4px solid rgba(80,200,120,0.5)"
       document.getElementById("h1").style.textShadow = "0px 0px 10px rgba(80,200,120,0.5)"
       document.getElementById("user").style.borderBottom = "1px solid #50C878"
       document.getElementById("pass").style.borderBottom = "1px solid #50C878"
       document.getElementById("sign").style.border = "1px solid #50c878"
       document.getElementById("sign").style.color = "lightgreen"
       document.getElementById("sign").style.boxShadow = "0px 0px 5px green"
       document.getElementById("label").style.color = "lightgreen"
       document.getElementById("para1").style.color = "#00A86B"
       document.getElementById("para1").style.textShadow = "0px 0px 10px rgba(80,200,120,0.5)"
       document.getElementById("signout").style.border = "1px solid #50c878"
       document.getElementById("signout").style.color = "lightgreen"
       document.getElementById("signout").style.boxShadow = "0px 0px 5px green"
       document.getElementById("para3").style.color = "#00A86B"
       document.getElementById("para3").style.textShadow = "0px 0px 10px rgba(80,200,120,0.5)"
       document.getElementById("para2").style.color = "#66CDAA"
       document.getElementById("para4").style.color = "#66CDAA"
       document.getElementById("span").style.display = "none"
    }
    else if(d=="Blue"){
    document.getElementById("label2").style.color = "skyblue"
     document.getElementById("body").style.background = "linear-gradient(to right,black,blue 200%)"
       document.getElementById("h1").style.color = "#4169e1"
       document.getElementById("h1").style.borderBottom ="4px solid rgba(0,71,171,0.9)"
       document.getElementById("h1").style.textShadow = "0px 0px 10px rgb(0,71,171)"
       document.getElementById("user").style.borderBottom = "1px solid #89CFF0"
       document.getElementById("pass").style.borderBottom = "1px solid #89CFF0"
       document.getElementById("sign").style.border = "1px solid #6495ed"
       document.getElementById("sign").style.color = "#89CFF0"
       document.getElementById("label").style.color = "#89CFF0"
       document.getElementById("sign").style.boxShadow = "0px 0px 5px skyblue"
       document.getElementById("para1").style.color = "#4169e1"
       document.getElementById("para1").style.textShadow = "0px 0px 10px rgb(0,71,171)"
       document.getElementById("signout").style.border = "1px solid #6495ed"
       document.getElementById("signout").style.color = "#89CFF0"
       document.getElementById("signout").style.boxShadow = "0px 0px 5px skyblue"
       document.getElementById("para3").style.color = "#4169e1"
       document.getElementById("para3").style.textShadow = "0px 0px 10px rgb(0,71,171)"
       document.getElementById("para2").style.color = "#4682b4"
       document.getElementById("para4").style.color = "#4682b4"
      document.getElementById("span").style.display = "none"
      }
    else if(d=="Red"){
       document.getElementById("label2").style.color = "pink"
        document.getElementById("body").style.background = "linear-gradient(to right,black,red 200%)"
       document.getElementById("h1").style.color = "#de1738"
       document.getElementById("h1").style.borderBottom ="4px solid rgb(185,46,52)"
       document.getElementById("h1").style.textShadow = "0px 0px 10px rgba(255,0,0,0.8)"
       document.getElementById("user").style.borderBottom = "1px solid pink"
       document.getElementById("pass").style.borderBottom = "1px solid pink"
       document.getElementById("sign").style.border = "1px solid #de1738"
       document.getElementById("sign").style.color = "pink"
       document.getElementById("label").style.color = "#89CFF0"
       document.getElementById("sign").style.boxShadow = "0px 0px 5px #b92e34"
       document.getElementById("para1").style.color = "#de1738"
       document.getElementById("para1").style.textShadow = "0px 0px 10px rgba(255,0,0,0.8)"
       document.getElementById("signout").style.border = "1px solid #de1738"
       document.getElementById("signout").style.color = "pink"
       document.getElementById("signout").style.boxShadow = "0px 0px 5px #b92e34"
       document.getElementById("para3").style.color = "#de1738"
       document.getElementById("para3").style.textShadow = "0px 0px 10px rgba(255,0,0,0.8)"
       document.getElementById("para2").style.color = "#F19CBB"
       document.getElementById("para4").style.color = "#F19CBB"
      document.getElementById("span").style.display = "none"
      document.getElementById("label").style.color = "pink"
    }
    else if(d=="Orange"){
        document.getElementById("label2").style.color = "yellow"
     document.getElementById("body").style.background = "linear-gradient(to right,black,orange 200%)"
       document.getElementById("h1").style.color = "#ffa500"
       document.getElementById("h1").style.borderBottom ="4px solid #cc5500"
       document.getElementById("h1").style.textShadow = "0px 0px 10px rgba(255,179,71,0.8)"
       document.getElementById("user").style.borderBottom = "1px solid lightyellow"
       document.getElementById("pass").style.borderBottom = "1px solid lightyellow"
       document.getElementById("sign").style.border = "1px solid #ffb347"
       document.getElementById("sign").style.color = "lightyellow"
       document.getElementById("label").style.color = "#89CFF0"
       document.getElementById("sign").style.boxShadow = "0px 0px 5px rgb(255,179,71)"
       document.getElementById("para1").style.color = "#ffa500"
       document.getElementById("para1").style.textShadow = "0px 0px 10px rgba(255,179,71,0.8)"
       document.getElementById("signout").style.border = "1px solid #ffb347"
       document.getElementById("signout").style.color = "lightyellow"
       document.getElementById("signout").style.boxShadow = "0px 0px 5px rgb(255,179,71)"
       document.getElementById("para3").style.color = "#ffa500"
       document.getElementById("para3").style.textShadow = "0px 0px 10px rgba(255,179,71,0.8)"
       document.getElementById("para2").style.color = "lightyellow"
       document.getElementById("para4").style.color = "lightyellow"
      document.getElementById("span").style.display = "none"
      document.getElementById("label").style.color = "lightyellow"
    }
}