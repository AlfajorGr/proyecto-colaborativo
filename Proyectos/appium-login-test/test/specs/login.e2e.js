const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe("Prueba de Login", () => {
    it("Debe hacer login correctamente", async () => {

        // Esperar que cargue la app
        await driver.pause(3000);

        // Localizadores (IDs de ejemplo)
        const emailInput = await $("~input-email");
        const passwordInput = await $("~input-password");
        const loginButton = await $("~btn-login");

        // Interacciones
        await emailInput.setValue("usuario@correo.com");
        await passwordInput.setValue("123456");

        await loginButton.click();

        // Validación del dashboard o mensaje de bienvenida
        const welcomeMessage = await $("~welcome-text");
        const isDisplayed = await welcomeMessage.isDisplayed();

        assert.ok(isDisplayed, "❌ No se mostró el mensaje de bienvenida");

        // Captura de pantalla
        await driver.saveScreenshot("./evidencias/login_exitoso.png");
 });
});
