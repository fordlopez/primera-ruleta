let jugadores = ['Joscress', 'Chris', 'Abner', 'Error404', 'Jochis']
let contenedorChips = document.querySelector('#contenedor-chips')
let formAgregarJugador = document.querySelector('#AgregarJugador')
let ruleta = document.querySelector('#wheel')
let botonGirar = document.querySelector('#spinButton')
let result = document.querySelector('#result')
let inicio = 0;

const renderizarJugadores = () => {
    contenedorChips.innerHTML = ''
    ruleta.innerHTML = ''

    ruleta.style.setProperty('--count', Math.max(jugadores.length, 1))

    for (let i = 0; i < jugadores.length; i++) {
        let span = document.createElement('span')
        span.className = 'chip'
        span.textContent = jugadores[i]
        contenedorChips.appendChild(span)

        let spanRuleta = document.createElement('span')
        spanRuleta.textContent = jugadores[i]
        spanRuleta.className = 'wheel__label'
        spanRuleta.style.setProperty('--index', i + 1)
        ruleta.appendChild(spanRuleta)
    }
}


formAgregarJugador.addEventListener('submit', (event) => {
    event.preventDefault()
    jugadores.push(event.target.participantName.value)
    formAgregarJugador.reset();
    renderizarJugadores();
})


const girarRuleta = () => {
    if (jugadores.length === 0) return // Evita dividir entre cero si no hay participantes.

    const flechaGanadora = 270 // La flecha visual está arriba: 270deg (equivale a -90deg).
    const vueltasExtra = 5 // Cantidad de vueltas show antes de caer en el ganador.
    const espacioPorParticipante = 360 / jugadores.length // Tamaño angular de cada sector.
    const numeroAleatorio = Math.floor(Math.random() * jugadores.length) // Índice ganador aleatorio entre 0 y n-1.

    const centro = -180 + (numeroAleatorio + 0.5) * espacioPorParticipante // Centro real del sector ganador (ajustado 90deg por la geometría de transform en CSS).
    //342
    const objetivo = flechaGanadora - centro // Rotación objetivo para alinear ese centro con la flecha.

    const objetivoNorm = ((objetivo % 360) + 360) % 360 // Normaliza el objetivo al rango [0, 360).
            //342

    const actualNorm = ((inicio % 360) + 360) % 360 // Normaliza la rotación acumulada actual al rango [0, 360).
           //0

    const delta = (objetivoNorm - actualNorm + 360) % 360 // Giro mínimo positivo para pasar de actual a objetivo.
           //342
           //2142
    const giroTotal = vueltasExtra * 360 + delta // Suma vueltas show más el ajuste exacto final.

    inicio += giroTotal // Acumula rotación para mantener continuidad entre tiradas.

    ruleta.style.setProperty('transition', 'transform 4s ease-out') // Define la animación del giro.
    ruleta.style.transform = `rotate(${inicio}deg)` // Aplica la rotación acumulada real.

    setTimeout(() => {
        result.textContent = jugadores[(numeroAleatorio)]
    }, 4100)

}

botonGirar.addEventListener('click', girarRuleta);

renderizarJugadores();