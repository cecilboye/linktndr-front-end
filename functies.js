function AddSollicitatie (idMedewerker, idVacature)
{
    let sollicitatie = {
        "medewerkerId": idMedewerker,
        "vacatureId": idVacature
    }

    fetch(URL + 'Sollicitatie/add',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(sollicitatie)
    })
    .then(a => {return true;});
    //.catch(error => {
    //    console.log("false");
    //});    
}
/*
function ShowSollicitatie (idMedewerker, idVacature)
{
    $('#SollicitatieModal').modal();

    fetch(URL + 'Medewerker' + idMedewerker)
        .then(res => res.json(), console.log("fetch complete"))
        .then(data =>
        {
            console.log(data);

            data.forEach(id => 
            {
                document.getElementById("SollicitatieModalText").innerHTML += (`<tr><td>Naam:</td><td>${id.firstName} ${id.lastName}</td><td>${id.dateOfBirth}</td><td width="100"></td></tr>`);
            })
        });
    
    fetch(URL + 'Vacature' + idVacature)
        .then(res => res.json(), console.log("fetch complete"))
        .then(data =>
        {
            console.log(data);

            data.forEach(id => 
            {
                document.getElementById("Medewerkers").innerHTML += (`<tr><td>${id.talentManager_Id}</td><td>${id.firstName}</td><td>${id.lastName}</td><td>${id.dateOfBirth}</td><td width="100"></td></tr>`);
            })
        });
    
    console.log("fetches called");
}*/

/* Sollicitatie status-enum:
Match
Sollicitatie
Reflection
Accept
Decline
*/