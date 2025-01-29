/****************************************************
                      FETCH API
*****************************************************/

/*Fetch API:  en javascript permite hacer solicitudes http de manera sencilla
utilizando promesas. Se usa principalmente para obtener y enviar datos a un servidor de BDD*/

/*ESTRUCTURA*/

// fetch('https://jsonplaceholder.typicode.com/posts/1')//URL de la api a consumir
// .then(response => response.json())//convertir la respuesta de la api en formato json
// .then(data => console.log(data))//mostrar los datos obtenidos
// .catch(error => console.error('Error: ', error));//captura de un posible error, solicitud


/*METODO POST*/

// fetch('https://jsonplaceholder.typicode.com/posts'), {
//     method: 'POST',
//     header: {
//         'Content-Type':'application/json'
//     },
//     body: JSON.stringify({
//         title: 'Nuevo Post',
//         body: 'Contenido del Post',
//         userID: 1
//     })
// }
// .then(response => response.json())//convertir la respuesta de la api en formato json
// .then(data => console.log('Respuesta: ', data))//mostrar los datos obtenidos
// .catch(error => console.error('Error: ', error));//captura de un posible error, solicitud

/*Con funciones asincronas async/await*/

// async function obtenerDatos() {
//     try {
//         let response = await
//         fetch('https://jsonplaceholder.typicode.com/posts/1');
//         let data = await response.json();
//         console.log(data)
//     }catch(error){
//         console.error('Error: ', error);
//     }
// }

// console.log('Datos obtneidos ', obtenerDatos());

//Cuando utilizamos fetch api?
//Cuando necesitamos hacer solicitudes o peticiones HTTP al navegador
//para interactuar con apos rest(JSON, placeholder, Firebase, etc)

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    const lista = document.getElementById('users');
    users.array.forEach(user => {
        const li = document.createElement('li')
        li.textContent = 'Usuario 1:'+ user.name;
        lista.appendChild(li);
    });
})
.catch(error => console.error('Error: ', error));