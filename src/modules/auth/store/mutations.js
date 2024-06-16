export const setUserByLogin = (state, {user, token}) => {
    state.userLogged = { user: user}
    state.token = token
    state.status = 'authenticated'
}

export const logout = (state) => {
    state.userLogged = null,
    state.token = '',
    state.status = 'non-authenticated'

    sessionStorage.removeItem('user')
    sessionStorage.removeItem('token')
}