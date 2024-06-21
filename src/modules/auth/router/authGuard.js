import store from '@/store'

export const authUserGuard = async (to, from, next) => {
    const { status } = await store.dispatch('authStore/checkAuth')
    if(status){
        next()
    }
    else {
        next({name:'login'})
    }
}

export const loginGuard = async (to, from, next) => {
    const { status } = await store.dispatch('authStore/checkAuth')
    if(status){
        if(to.name !== 'login')next()
        else next({name: 'main'})
    }
    else {
        next()
    }
}