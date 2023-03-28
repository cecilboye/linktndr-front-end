const URL = "https://localhost:7199/api/";

const uitstroomrichtingOptions = [
    "DevOps",
    "Informatie Analist",
    "C# programmeur",
    "Java Programmeur"
];

/*function includeHTML(userData) {
    var z, i, elmnt, file, xhttp;
    //Loop through a collection of all HTML elements:
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        //search for elements with a certain atrribute
        file = elmnt.getAttribute("lt-include-html");
        if (file) {
            //Make an HTTP request using the attribute value as the file name:
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200)
                    {
                        elmnt.innerHTML = this.responseText; 
                        document.getElementById("userName").innerHTML = `<span class="glyphicon glyphicon-user" style="color: white;"></span> ${userData.name}`;
                    }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    //Remove the attribute, and call this function once more:
                    elmnt.removeAttribute("lt-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            //Exit the function:
            return;
        }
    }
}*/

// after is een anonymous function
function onPageLoad(after) {
    if (!localStorage.getItem("Token")) {
        if (window.location.pathname == "/register.html")
        {
            AddHeader();
        }
        else
        {
            window.location.href = "./index.html";
            console.log(window.location.href);
        }
    }
    else {
        var userToken = localStorage.getItem('Token');
        if (!!userToken) {
            fetch(URL + 'user', {
                headers: {
                    'Authorization': userToken
                }
            })
                .then(response => response.json())
                .then(userData => {

                    //includeHTML(userData);
                    //console.log(userData);
                    AddHeader(userData);
                    after(userData);
                });
        }
    }
}

function AddHeader(data)
{
    let name = " Sign Up";
    let logoutButton = "";
    let href = "./register.html";

    if (data != null)
    {
        name = data.name;
        logoutButton = `<button onclick="logout()" class="btn btn-secondary" style="color: white; border-color: white; background-color: transparent">Log Out</button>`;
        href = "./";
    }

    /* Make an HTTP request using the attribute value as the file name: 
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200)
            {
                elmnt.innerHTML = this.responseText; 
                document.getElementById("userName").innerHTML = `<span class="glyphicon glyphicon-user" style="color: white;"></span> ${userData.name}`;
            }
            if (this.status == 404)
            { 
                elmnt.innerHTML = "Page not found."; 
            }
        }
    }
    xhttp.open("GET", file, true);
    xhttp.send();*/

    document.getElementById("header").innerHTML=
    `<nav class="navbar navbar-inverse" style="border-color: rgb(254, 75, 16);">
        <div class="container-fluid" style="background-image: linear-gradient(rgb(253, 43, 122),rgb(255, 106, 91));">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <img src="img/logo_header.png" href="index.html" style="height: 40px; width: 40px; margin-top: 5px;"></img>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                    <li style="margin-top: 8px">${logoutButton}</li>
                    <li id="usertype-menu-item"></li>
                    <li><a id="userName" href="${href}" style="color: white;"><span class="glyphicon glyphicon-user" style="color: white;"></span> ${name}</a></li>
                </ul>
            </div>
        </div>
    </nav>`;

    AddFooter();
}

function AddFooter()
{
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

function logout(){
    localStorage.clear();
    window.location.href = "./";
}