//RESUELVE TUS EJERCICIOS AQUI

//Ejercicio 1

function getAllBreeds(){
    return fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(razas => Object.keys(razas.message));
}

//Ejercicio 2

function getRandomDog(){
    return fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(img => img.message);
}
         
//Ejercicio 3

function getAllImagesByBreed(){
    return fetch("https://dog.ceo/api/breed/komondor/images")
    .then(res => res.json())
    .then(img => img.message);
}

//Ejercicio 4

function getAllImagesByBreed2(breed){
    return fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then(res => res.json())
    .then(img => img.message);

}


//Ejercicio 5

//Ejercicio 6

//Ejercicio 7

//Ejercicio 8

//Ejercicio 9


