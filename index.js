let jugadores = ['joscriss', 'chris', 'error404', 'jochis','Abner']
let contenedorchips = document.querySelector('#contenedor-chips')
let AgregarJugador =
    document.querySelector("#AgregarJugador")
let ruleta =
    document.querySelector('#wheel')
let botonGirar=document.querySelector('#spinButton')
let inicio=0
let result=document.querySelector('#result')
let posicionActual=0

const renderizaJugadores = () => {

    contenedorchips.innerHTML = ''

    ruleta.innerHTML = ''

    ruleta.style.setProperty(
        '--count',
        Math.max(jugadores.length, 1)
    )

    for (let i = 0; i < jugadores.length; i++) {
        let span = document.createElement('span')
        span.className = "chip"
        span.textContent = jugadores[i]
        contenedorchips.appendChild(span)

        let spanRuleta =
            document.createElement('span')

        spanRuleta.textContent = jugadores[i]

        spanRuleta.style.setProperty(
            '--index',
            i + 1
        )

        spanRuleta.className =
            `wheel__label wheel__label--${i + 1}`

        ruleta.appendChild(spanRuleta)

    }

}

AgregarJugador.addEventListener(
    "submit",
    (event) => {

        event.preventDefault()

        let nombre =
            event.target.participantName.value

        if (nombre.trim() !== '') {

            jugadores.push(nombre)

            AgregarJugador.reset()

            renderizaJugadores()

        }

    }
)
const girarRuleta = () => {
    //Divido los grados (360) dentro de los paritcipantes.
    let espacioPorParticipante = 360 / jugadores.length
    //Luego 5 vueltas por defecto.
    let grados = (360) * 5
    //Luego voy a generar un numero aleatorio entre el numero de participantes
    let numeroAleatorio = Math.floor(Math.random() * ((jugadores.length-1)  - 0 + 1)) + 0
    console.log(numeroAleatorio)
    let posicionDeGanador = (numeroAleatorio * espacioPorParticipante + (espacioPorParticipante/2));
    let extra = 90 - posicionDeGanador
    posicionActual =  extra - posicionActual
    inicio += grados + posicionActual;

    ruleta.style.setProperty('transition', 'transform 4s ease-out')
    ruleta.style.transform = `rotate(${inicio}deg)`;

    setTimeout(() => {
        result.textContent = jugadores[(numeroAleatorio)]
    }, 4100)

}
botonGirar.addEventListener('click', girarRuleta )

renderizaJugadores()

