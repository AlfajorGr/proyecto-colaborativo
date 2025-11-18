const users = [
    {id: 1, name: "Alfajor", age: 24, correo: "alfajor@gmail.com"},
    {id: 2, name: "Baboso", age: 5, correo: "baboso@gmail.com"}
];

function searchUserPorId(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((u) => u.id === id);

            if (user) {
                resolve(user);
            } else {
                reject(`X No se encontró usuario por ID ${id}`);
            }
        }, 1000);
    })
}

async function viewser(id) {
    try {
        const user = await searchUserPorId(id);
        console.log("Usuario encontrado.");
        console.log(user);
    } catch (error) {
        console.error("Error al buscar usuario.");
        console.error(error);
    }
}

viewser(3);