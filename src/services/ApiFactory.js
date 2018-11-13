import PembukaanRoute from './pembukaan/PembukaanRoute'

const routes = {
    gameinfo: PembukaanRoute
}

export const ApiFactory = {
    get: name => routes[name]
}