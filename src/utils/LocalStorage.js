export const obtenerLocalStorage = () => {
    const fisico = localStorage.getItem('modal')
    if (fisico === null) {
        return undefined
    }
    return JSON.parse(fisico)
}

export const guardarLocalStorage = (state) => {
    const fisicoState = JSON.stringify(state)
    localStorage.setItem('modal', fisicoState)
}
