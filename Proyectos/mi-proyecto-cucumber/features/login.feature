Feature: Inicio de sesión
  Para acceder al panel principal de la aplicación
  Como usuario registrado
  Quiero iniciar sesión con mis credenciales válidas

  Scenario: Redirección exitosa al panel principal tras ingresar credenciales correctas
    Given que el usuario está en el formulario de inicio de sesión
    And el usuario ingresa un correo válido
    And el usuario ingresa una contraseña válida
    When el usuario presiona el botón "Iniciar sesión"
    Then el sistema debe redirigir al usuario al panel principal
