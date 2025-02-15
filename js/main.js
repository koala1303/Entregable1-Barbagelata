// Lista de Mascotas Disponibles
const mascotas = [
    { nombre: "Stich", tipo: "Perro", edad: 2 },
    { nombre: "Oreo", tipo: "Gato", edad: 3 },
    { nombre: "Canela", tipo: "Perro", edad: 1 },
    { nombre: "Chato", tipo: "Gato", edad: 5 }
];

// Función para obtener la lista de mascotas
function obtenerListaMascotas() {
    if (mascotas.length === 0) return "Actualmente no hay mascotas disponibles.";
    
    return mascotas.map(mascota => `• ${mascota.nombre} - ${mascota.tipo} - ${mascota.edad} años`).join("\n");
}

// Función para mostrar las mascotas en la consola
function mostrarMascotasEnConsola() {
    console.log("🐶🐱Lista de mascotas disponibles:");
    console.log(obtenerListaMascotas());
}

// Función para adoptar una mascota
function adoptarMascota() {
    if (mascotas.length === 0) {
        alert("No hay mascotas disponibles en este momento.");
        return;
    }

    mostrarMascotasEnConsola();

    let nombreMascota;
    let index;

    do {
        let mensajeMascotas = `Mascotas disponibles para adopción:\n${obtenerListaMascotas()}\n\nEscribe el nombre de la mascota que deseas adoptar:`;
        nombreMascota = prompt(mensajeMascotas);
        
        if (!nombreMascota) {
            alert("Debes ingresar un nombre.");
            return;
        }

        index = mascotas.findIndex(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());

        if (index === -1) {
            alert("Lo siento, no tenemos esa mascota. Vuelve a intentarlo.");
        }
    } while (index === -1);

    let mascotaAdoptada = mascotas.splice(index, 1)[0];
    alert(`¡Felicidades! Acabas de adoptar a ${mascotaAdoptada.nombre}.`);
    console.log(`✅ ${mascotaAdoptada.nombre} ha sido adoptado.`);
}

// Función principal para iniciar el simulador
function iniciarSimulador() {
    mostrarMascotasEnConsola();

    let deseaAdoptar;

    do {
        if (mascotas.length === 0) {
            alert("No hay más mascotas disponibles. ¡Gracias por visitar!");
            console.log("No hay más mascotas disponibles.");
            return;
        }

        deseaAdoptar = confirm("¿Quieres adoptar una mascota?");
        
        if (deseaAdoptar) {
            adoptarMascota();
            mostrarMascotasEnConsola();
        }
    } while (deseaAdoptar);
    
    alert("¡Gracias por visitar!");
    console.log("Fin del simulador.");
}

// Ejecuta el simulador
iniciarSimulador();
