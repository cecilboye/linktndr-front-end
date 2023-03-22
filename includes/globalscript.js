const BASEURL = "https://localhost:7199";

window.onload = function(){

    //localStorage.clear();
    /*var arr = JSON.parse( localStorage.getItem('userData') );
    console.log(arr["Usertype"]);

    document.getElementById("usertype-menu-item").innerHTML = arr["Usertype"];
    */
}

function updateUserTypeMenuItem(usertype) {
    const usertypeMenuItem = document.getElementById('usertype-menu-item');
    usertypeMenuItem.innerHTML = `<a href="#">${usertype}</a>`;
}