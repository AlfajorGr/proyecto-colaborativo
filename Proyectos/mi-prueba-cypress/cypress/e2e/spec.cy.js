describe('Galería de Gatitos 🐾', () => {
  it('muestra y actualiza un michi aleatorio desde TheCatAPI', () => {

    // 🧩 Inyectamos una mini página con HTML dinámico
    cy.document().then((doc) => {
      doc.open()
      doc.write(`
        <html>
          <body style="display:flex;flex-direction:column;align-items:center;gap:10px;font-family:sans-serif;">
            <h2>🐱 Michi al azar</h2>
            <img id="cat-image" width="300" style="border-radius:10px;">
            <button id="new-cat" style="padding:8px 16px;">Nuevo Michi</button>
            <p id="status" style="color:#666;font-size:14px;"></p>
            <script>
              async function loadCat() {
                const status = document.getElementById('status');
                status.textContent = 'Cargando michi... 😺';
                const res = await fetch('https://api.thecatapi.com/v1/images/search');
                const data = await res.json();
                const url = data[0].url;
                document.getElementById('cat-image').src = url;
                status.textContent = 'Michi cargado 🐾';
              }
              document.getElementById('new-cat').addEventListener('click', loadCat);
              loadCat(); // Carga inicial
            </script>
          </body>
        </html>
      `)
      doc.close()
    })

    // 💬 Verifica que la imagen inicial cargue correctamente
    cy.get('#cat-image', { timeout: 10000 })
      .should('have.attr', 'src')
      .and('include', 'https://cdn2.thecatapi.com/')

    // 🧠 Ahora hacemos clic en "Nuevo Michi" y comprobamos que la imagen cambie
    cy.get('#cat-image').invoke('attr', 'src').then((firstUrl) => {
      cy.get('#new-cat').click()
      cy.get('#cat-image', { timeout: 10000 })
        .should('have.attr', 'src')
        .and('not.eq', firstUrl)
    })
  })
})
