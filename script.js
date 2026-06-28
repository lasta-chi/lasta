function login(){
    let username = prompt("Enter your username:");

    if(username==""){
        alert("Username cannot be empty.");
    }
    else if(username==null){
        alert("Login cancelled.");
    }
    else{
        alert("Welcome, " + username + "!");
    }
}

function toggleMode(){
    document.body.classList.toggle("dark");
}

function showMessage(){
    alert("Our BIM Lab provides practical learning with modern technology and real-world projects.");
}
