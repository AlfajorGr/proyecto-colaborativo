function validacionUser(user) {
    //desestructuracion
    const {name, age, correo} = user;

    if (!name || name.trim() == "") {
        return {valido: false, mensaje: "El nombre no puede ser vacio."};
    }

    if (age < 18) {
        return {valido: false, mensaje: "El usuario debe ser mayor a 18 años."};
    }

    if (!correo.includes("@")) {
        return {valido: false, mensaje: "El correo debe contener @"};
    }

    return{valido: true, mensaje: "El usuario es válido."}
    
}

//data de prueba
    const users = [
        {name: "alfajor", age: 24, correo: "alfajor@gmail.com"}
    ];

    users.forEach((u) => {
        const result = validacionUser(u);
        console.log(`Validando: ${u.name || "(sin nombre)"}`);
        console.log(result);
        console.log("--------------------------------------");
    });