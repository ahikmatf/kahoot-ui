import ApiController from '../ApiController'

const resource = '/gameinfo'
export default {
    get() {
        return ApiController.get(`${resource}`)
    },
    getGameById(gameId) {
        return ApiController.get(`${resource}/${gameId}`)
    }
}