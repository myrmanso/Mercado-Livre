import axios from 'axios'

const configBusca = {
    baseURL : 'https://api.mercadolibre.com/',
    timeout: 1000,
}

const protocoloBusca = axios.create(configBusca)

//Função para autenticação do usuário na página
// const valueBusca = () => localStorage.getItem('valueBusca') ? true : false

export const getBusca = () => {
    let keyValue = localStorage.getItem('valueBusca')
    const urlBusca = `/sites/MLA/search?q=${keyValue}`
    return protocoloBusca.get(urlBusca)
}

const configDetalhe = {
    baseURL: 'https://api.mercadolibre.com/items/',
    // timeout: 1000,
}

const protocoloDetalhe = axios.create(configDetalhe)
let keyId = localStorage.getItem('id')

export const getDetalhe = () => {
    const urlDetalhe = `/${keyId}`
    return protocoloDetalhe.get(urlDetalhe)
}

export const getDescricao = () => {
    const urlDescricao = `/${keyId}/description`
    return protocoloDetalhe.get(urlDescricao)
}