const { Given, When, Then } = require("@cucumber/cucumber");

Given('que el usuario está en el formulario de inicio de sesión', function () {
  console.log("Usuario abre la página de inicio de sesión");
});

Given('el usuario ingresa un correo válido', function () {
  console.log("Usuario ingresa un correo válido");
});

Given('el usuario ingresa una contraseña válida', function () {
  console.log("Usuario ingresa una contraseña válida");
});

When('el usuario presiona el botón "Iniciar sesión"', function () {
  console.log("Usuario presiona el botón Iniciar Sesión");
});

Then('el sistema debe redirigir al usuario al panel principal', function () {
  console.log("Usuario es redirigido al panel principal");
});
