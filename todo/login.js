

 let loginbutton = document.getElementById("loginbutton");
 loginbutton.addEventListener('click', event => {
    var reusern = document.getElementById("usernamein").value;
    var reuserp = document.getElementById("passwordin").value;
    if(reusern == ""){
        alert("Please enter Username");
    }else if(reuserp == ""){
        alert("Please enter Password");
    }else{
        if(reusern == "pratham" && reuserp == "123"){
            window.location.href = 'index.html';
            alert("Logged In");
        }else{
            alert("Please enter valid credentials");
        }
    }
    

 });
