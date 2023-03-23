const BASEURL = "https://localhost:7199";

window.onload = function(){

    //localStorage.clear();
    if (localStorage.getItem("UserData") === null) {
        window.location.href = "./";
    }else{
        var userData = JSON.parse(localStorage.getItem('UserData') );
        console.log(userData);
        document.getElementById("usertype-menu-item").innerHTML = userData["usertype"];
    }    
}

function updateUserTypeMenuItem(usertype) {
    const usertypeMenuItem = document.getElementById('usertype-menu-item');
    usertypeMenuItem.innerHTML = `<a href="#">${usertype}</a>`;
}