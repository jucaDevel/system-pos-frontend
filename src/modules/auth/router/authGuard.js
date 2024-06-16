import store from '@/store'

const authGuard = async (to, from, next) => {
    const { status } = await store.dispatch('authStore/checkAuth')
    if(status) next()
    else next({name: 'login'})
}

export default authGuard