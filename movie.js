let API = "a49f54f4";

let input_value;

let pushe = document.querySelector(".find1");
let reset = document.querySelector(".reset");
let remplirImage = document.querySelector(".remplissageImage");
let remplirText = document.querySelector(".remplissageText");

let defaultImage ="https://giphy.com/gifs/sorry-shame-my-bad-3ohc1ffY03hnhRUyUU";

let titre = " ";
// document.querySelector('#choper').value;
let idFilm = "";
let a = " ";
let b = "";

//----------------- fonction prendre la valeur entree ------------
let capcha = document.querySelector("#choper");

let resetMe = () => {
    let removeImg=document.querySelector("#listimg");
    let removeText=document.querySelector("#listtxt");
    // remplirImage.innerHTML="";
    // remplirText.innerHTML="";
    removeImg.removeChild(removeImg.childNodes[0]);
    removeText.removeChild(removeText.childNodes[0]);
}

function clicked() {
    titre = document.querySelector('#choper').value;

    fetch(`http://www.omdbapi.com/?apikey=${API}&t=${titre}`)

        .then(res => res.json()) //<--- on cree une variable qui va prendre les données du GET
        .then(response => {

            // console.log(response);

            console.log(response.Plot);
            a += `
                <li>${response.Plot}
                `
                b += `
                <li><img id="ptext" src=${response.Poster} />
                `
              
            document.querySelector("#listimg").innerHTML = b;
            document.querySelector("#listtxt").innerHTML = a;
            
        });

}


//TEST fetch image //

// let myImage = document.querySelector("#testimg");

// fetch('images/viagra.jpg')
// .then(function(response) {
//   return response.blob();
// })
// .then(function(myBlob) {
//   let objectURL = URL.createObjectURL(myBlob);
//   myImage.src = objectURL;
// });

//----------------- fin fonction --------------------




// fetch(API, {
//     method : "POST", 
//     body : JSON.stringify(),
//     headers : {
//         "Content-Type" : "application/json"
//     }
//     // --------> le body et le headers sont seulement necessaires avec la méthode POST <--------
//     // --------> le json vient automatiquement avec "parse" donc pas besoin de préciser <--------

// }).then(res => res.json())   //<--- on cree une variable qui va prendre les données du GET
// .then(response=> {

//     for (let i in response){   //<--- parcours toute la liste des artistes et va les afficher dans la console
//     console.log(response[i]);   //<----|

//     let myResponse = response[i].name;



//     console.log(myResponse);
//       if (myResponse == `${input_value}`){
//         document.querySelector('.remplissage').innerHTML = myResponse;

//       }   
// }});

// fetch(`http://www.omdbapi.com/?apikey=${API}&t=${titre}`) 

//     .then(res => res.json()) //<--- on cree une variable qui va prendre les données du GET
//     .then(response => {

//         console.log(response);

//             if (response.Plot !== clicked){
//                 console.log(response.Plot);
//                 a +=
//                 `
//                 <p>${response.Plot}</p>
//                 `
//                 remplir.innerHTML=a;
//             }
//         });


// capcha.addEventListener('keyup', clicked);
pushe.addEventListener('click', clicked);
reset.addEventListener('click', resetMe);