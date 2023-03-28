const BASEURL = "https://localhost:7199";

// after is een anonymous function
function onPageLoad(after) {
    if (!localStorage.getItem("Token")) {
        if (window.location != "./index.html") {
            window.location.href = "./index.html";
        }
    }
    else {
        var userToken = localStorage.getItem('Token');
        if (!!userToken) {
            fetch('https://localhost:7199/api/user', {
                headers: {
                    'Authorization': userToken
                }
            })
                .then(response => response.json())
                .then(userData => {
                    AddHeader();

                    // document.getElementById("usertype-menu-item").innerHTML = userData.name;

                    after(userData);
                });
        }
    }
}

function AddHeader(data) {
    let navButton = '';

    switch(data){
        case "login":
            navButton = '<a class="btn btn-outline-light me-2" href="./index.html" role="button" style="--bs-btn-hover-color:#fd2b7a;">Login</a>';
        break;
        case "register":
            navButton = '<a class="btn btn-outline-light me-2" href="./register.html" role="button" style="--bs-btn-hover-color:#fd2b7a;">Register</a>';
        break;
        default:
            navButton = '<button onclick="logout()" class="btn btn-outline-light me-2" style="--bs-btn-hover-color:#fd2b7a;">Log Out</button>';
        break;
    }

    document.getElementById("header").innerHTML=
    `<nav class="navbar navbar-inverse" style="border-color: rgb(254, 75, 16);height:50px;">
        <div class="container-fluid" style="background-image: linear-gradient(rgb(253, 43, 122),rgb(255, 106, 91));">
            <div class="navbar-header">
                <img src="img/logo_header.png" href="index.html" style="height: 40px; width: 40px; margin-top: 5px;"></img>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                    <li style="margin-top: 8px">logoutButton</li>
                    <li id="usertype-menu-item"></li>
                    <li><a id="userName" href="" style="color: white;"><span class="glyphicon glyphicon-user" style="color: white;"></span> ${name}</a></li>
                </ul>
            </div>
        </div>
    </nav>`;

    document.getElementById("header").innerHTML= `
    <header class="p-1 text-white gradientbackground">
        <div class="container">
            <div class="d-flex justify-content-between bd-highlight">
                <div class="p-2 bd-highlight"><img src="img/logo_header.png" class="bi me-2" width="40px" height="40px"/></div>
                <div class="p-2 bd-highlight">            
                    <div class="text-end">
                        ${navButton}
                    </div>
                </div>
            </div>
        </div>
    </header>`;

    document.getElementById("footer").innerHTML=
    `<div>
        <div class="container-fluid" style="background-image: linear-gradient(white, rgb(255, 163, 155)); position: fixed; bottom: 3%; width: 100%; height: 8%; z-index: -1;"></div>
        <div class="container-fluid" style="background-image: linear-gradient(rgb(255, 163, 155), rgb(255, 106, 91)); position: fixed; bottom: 0%; width: 100%; height: 3%; z-index: -1; color: white; text-align: end; font-size: x-small;">LinkTindr® is een product van KlasVanFebruari LLC inc.</div>
    </div>`;
}

function logout() {
    localStorage.clear();
    window.location.href = "./";
}

function updateUserTypeMenuItem(usertype) {
    const usertypeMenuItem = document.getElementById('usertype-menu-item');
    usertypeMenuItem.innerHTML = `<a href="#">${usertype}</a>`;
}

function formattedDate(d = new Date) {
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return `${day}/${month}/${year}`;
}