const BASEURL = "https://localhost:7199";

// after is een anonymous function
function onPageLoad(after) {
    if (!localStorage.getItem("Token")) {
        window.location.href = "./index.html";
    }else{
        var userToken = localStorage.getItem('Token');
        if (!!userToken) {
            fetch('https://localhost:7199/api/user', {
                headers: {
                    'Authorization': userToken
                }
            })
            .then(response => response.json())
            .then(userData => {
                console.log(userData);
                document.getElementById("usertype-menu-item").innerHTML = userData.name;
                after(userData);
            });
        }

    }    
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

function logout(){
    localStorage.clear();
    window.location.href = "./";
}