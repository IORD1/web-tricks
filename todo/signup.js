var usern;
var userp;
var uname;
var pnum;
var loc;
var area;
var crop;
var userpre;

let signupbut = document.getElementById("signupbut");
signupbut.addEventListener('click', event => {
   usern = document.getElementById("userin").value;
   userp = document.getElementById("passin").value;
   uname = document.getElementById("namein").value;
   pnum = document.getElementById("pnumin").value;
   loc = document.getElementById("locin").value;
   area = document.getElementById("areain").value;
   crop = document.getElementById("cropin").value;
   userpre = document.getElementById("passinre").value;
 
        if(usern == ""){
            alert("Enter Username");
        }else if(userp == ""){
            alert("Enter Password");
        }else if(uname == ""){
            alert("Enter you name");
        }else if(pnum == ""){
            alert("Enter Phone number");
        }else if(loc == ""){
            alert("Enter you location");
        }else if(area == ""){
            alert("Enter you farm's area");
        }else if(crop == ""){
            alert("Enter the crop you grow");
        }else if(area == ""){
            alert("Enter you ");
        }else if(userpre == ""){
            alert("Please re-enter your password");
        }else{
            if(userp != userpre){
                alert("Password doesn't match");
            }else{
                window.location.href = 'index.html';
                alert("Signed In");
            }
        }
    
   

});