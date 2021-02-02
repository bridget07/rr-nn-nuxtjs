const cookieparser = process.server ? require('cookieparser') : undefined
export const store = () => {
    return {
        user: null
    }
}
export const mutations = {
    setUser(state, data){
        // console.log('mmuutation', state)
        state.user = data
    }
}
export const actions = {
    nuxtServerInit({ commit }, { req }){
        let user = null

        if(req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                user = JSON.parse(parsed.user)
            } catch (err) {

            }
        }
        commit('setUser', user)
    }
}