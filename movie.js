
let artisteAPI = "https://musicdemons.com/api/v1/artist";
let input_value;

let pushe = document.querySelector(".pushe");


//----------------- fonction prendre la valeur entree ------------
let capcha = document.querySelector("#choper");


function clicked() {
    input_value = document.querySelector('#choper').value;
    return input_value;
   
}



//----------------- fin fonction --------------------




fetch(artisteAPI, {
    method : "GET", 
    // body : JSON.stringify(),
    // headers : {
    //     "Content-Type" : "application/json"
    // }
    // --------> le body et le headers sont seulement necessaires avec la méthode POST <--------
    // --------> le json vient automatiquement avec "parse" donc pas besoin de préciser <--------

}).then(res => res.json())   //<--- on cree une variable qui va prendre les données du GET
.then(response=> {
    
    for (let i in response){   //<--- parcours toute la liste des artistes et va les afficher dans la console
    // console.log(response[i]);   //<----|

    let myResponse = response[i].name;



    console.log(myResponse);
      if (myResponse == `${input_value}`){
        document.querySelector('.remplissage').innerHTML = myResponse;
        
      }   
}});


// capcha.addEventListener('keyup', clicked);
pushe.addEventListener('click', clicked);




