let jugadores = ['joscriss', 'cris', 'errosr', 'jochis']

let contenedorchips = document.querySelector('#contenedor-chips')

let AgregarJugador =
    document.querySelector("#AgregarJugador")

let ruleta =
    document.querySelector('#wheel')

const renderizaJugadores = () => {

    contenedorchips.innerHTML = ''

    ruleta.innerHTML = ''

    ruleta.style.setProperty(
        '--count',
        Math.max(jugadores.length, 1)
    )

    for (let i = 0; i < jugadores.length; i++) {

        // chips
        let span = document.createElement('span')

        span.className = "chip"

        span.textContent = jugadores[i]

        contenedorchips.appendChild(span)

        // nombres dentro de ruleta
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

renderizaJugadores()