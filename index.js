let juagadores=['joscriss','cris','errosr','jochis']
let contenedorchips=document.querySelector('#contenedor-chips')
let AgregarJugador=document.querySelector("#AgregarJugador")
let ruleta=document.querySelector('#wheel')

const renderizajuagadores=()=>{
contenedorchips.innerHTML=''

ruleta.style.setProperty('--count', Math.max(jugadores.length, 1))

    for(let i=0;i<juagadores.length;i++){
    let span=document.createElement('span')
    span.className="chip"
    span.textContent=juagadores[i]
    contenedorchips.appendChild(span)

  /*   ruleta.append(span) */
    let spanRuleta=document.createElement('span')
spanRuleta.textContent=juagadores[i]
spanRuleta.style.setProperty('--index', i + 1)
    spanRuleta.className="wheel__label wheel__label--1 ${i+1}"
    releta.appendChild(spanRuleta)
}

AgregarJugador.addEventListener("submit",(eval)=>{
eval.preventDefaut()
spanRuleta.className = 'wheel__label'
console.log(eval.target.AgregarJugador.value)
juagadores.push(event.target.participantName.value)
AgregarJugador.reset()
renderizajuagadores()
})
}
renderizajuagadores()