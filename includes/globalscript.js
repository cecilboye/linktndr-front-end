const BASEURL = "https://localhost:7199";

window.onload = function(){
    var arr = JSON.parse( localStorage.getItem('userData') );
    console.log(arr["Usertype"]);

    document.getElementById("usertype-menu-item").innerHTML = arr["Usertype"];
    //localStorage.clear();
}

function submitForm(e) {
    e.preventDefault();

    fetch('https://localhost:7199/api/Users/check', {
    
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        updateUserTypeMenuItem(data.usertype);
    })
    .catch(error => console.error(error));
}

function updateUserTypeMenuItem(usertype) {
    const usertypeMenuItem = document.getElementById('usertype-menu-item');
    usertypeMenuItem.innerHTML = `<a href="#">${usertype}</a>`;
}