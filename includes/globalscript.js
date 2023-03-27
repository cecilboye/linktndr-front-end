const BASEURL = "https://localhost:7199";

// after is een anonymous function
function onPageLoad(after) {
    if (!localStorage.getItem("Token")) 
    {
        if (window.location != "./index.html")
        {
            window.location.href = "./index.html";
        }
    }
    else
    {
        var userToken = localStorage.getItem('Token');
        if (!!userToken) {
            fetch('https://localhost:7199/api/user', {
                headers: {
                    'Authorization': userToken
                }
            })
            .then(response => response.json())
            .then(userData => {
                document.getElementById("usertype-menu-item").innerHTML = userData.name;

                after(userData);
            });
        }
    }    
}
           
function logout(){
    localStorage.clear();
    window.location.href = "./";
}

function updateUserTypeMenuItem(usertype) {
    const usertypeMenuItem = document.getElementById('usertype-menu-item');
    usertypeMenuItem.innerHTML = `<a href="#">${usertype}</a>`;
}

