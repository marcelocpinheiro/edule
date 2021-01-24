const { atom } = require('recoil')

const userState = atom({
    key: 'userState',
    default: {
        logged: false,
        token: null,
        name: null,
        email: null
    }
})

const loadingState = atom({
    key: 'loadingState',
    default: false
})

export { userState, loadingState }