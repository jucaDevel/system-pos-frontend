<template>
    <div class="flex items-center justify-center w-full">
        <div class="flex justify-between border-2 h-5/6 w-10/12 rounded-lg">
            <div class="bg-primary w-2/4 rounded-lg rounded-r-none">

            </div>
            <div class="w-2/4 flex flex-col items-center justify-center">
                <h1 class="font-bold text-secondary text-3xl">Login</h1>
                <form class="flex flex-col justify-around h-5/6 w-8/12" @submit.prevent="login">
                    <div class="flex flex-col gap-10 justify-center">
                        <div class="relative flex flex-col">
                            <div class="absolute inset-y-0 left-0 flex items-center justify-center px-2 bg-gray-200 rounded rounded-r-none border-2 border-gray-400">
                                <font-awesome-icon :icon="['fas', 'at']" size="2xl" class="text-secondary"/>
                            </div>
                            <input
                              class="peer p-3 pl-16 rounded focus:outline-none transition-all duration-200 ease-in-out"
                              type="text"
                              name="username"
                              placeholder=" "
                              v-model="userName"
                              >
                            <label
                              for="username"
                              :class="`pointer-events-none absolute top-3 left-16 text-gray-500 transition-transform origin-[0_0] transform 
                              ${userName.length > 0 ?'-translate-y-8 -translate-x-14':'-translate-y-6'} scale-75 duration-200 
                              ease-in-out peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:-translate-x-14 peer-placeholder-shown:scale-100 
                              peer-placeholder-shown:-translate-y-0`"
                              >Usuario</label>
                        </div>
                        <div class="relative flex flex-col">
                            <div class="absolute inset-y-0 left-0 flex items-center justify-center px-2.5 bg-gray-200 rounded rounded-r-none border-2 border-gray-400">
                                <font-awesome-icon :icon="['fas', 'lock']" size="2xl" class="text-secondary"/>
                            </div>
                            <input
                              class="peer p-3 px-16 rounded focus:outline-none transition-all duration-200 ease-in-out"
                              type="password"
                              name="password"
                              placeholder=" "
                              id="passwordField"
                              v-model="password"
                              >
                            <label
                              for="password"
                              :class="`pointer-events-none absolute top-3 left-16 text-gray-500 transition-transform origin-[0_0] transform 
                              ${password.length > 0 ?'-translate-y-8 -translate-x-14':'-translate-y-6'} scale-75 duration-200 ease-in-out peer-focus:scale-75 
                              peer-focus:-translate-y-8 peer-focus:-translate-x-14 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0`">
                              Contraseña</label>
                            <div class="absolute inset-y-0 right-0 flex items-center justify-center px-2 cursor-pointer" @click="onShowPassword">
                                <font-awesome-icon :icon="['far', 'eye']" size="2xl" class="text-secondary" v-if="!showPassword"/>
                                <font-awesome-icon :icon="['fas', 'eye']" size="2xl" class="text-secondary" v-else/>
                            </div>
                        </div>
                        <div class="bg-red-300 rounded flex justify-center py-2" v-if="messageError.length > 0">
                            <p class="text-red-900">{{messageError}}</p>
                        </div>
                        <div class="flex justify-between">
                            <div class="flex gap-3">    
                                <span class="text-gray-500">Recordarme</span>
                                <input class="form-checkbox h-5 w-5 text-secondary rounded" type="checkbox" name="" id="">
                            </div>
                            <span class="text-secondary cursor-pointer">¿Olvidaste la contraseña?</span>
                        </div>
                    </div>
                    <button class="border-2 p-3 rounded-lg bg-primary text-white" type="submit">Iniciar sesion</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore()
        const showPassword = ref(false)
        const userName = ref('')
        const password = ref('')
        const messageError = ref('')
        const onShowPassword = () => {
            const passwordField = document.querySelector('#passwordField')
            if(!showPassword.value){
                passwordField.type = 'text'
                showPassword.value = true
            }
            else if(showPassword.value){
                passwordField.type = 'password'
                showPassword.value = false
            }
        }

        const login = async () => {
            const payload = {
                userName: userName.value,
                password: password.value
            }
            const {status, message} = await store.dispatch('userStore/getUserByLogin',payload)
            if (!status) {
                messageError.value = message
            }else{
                messageError.value = ''
            }
        }

        return{
            showPassword,
            userName,
            password,
            messageError,

            onShowPassword,
            login
        }
    }
}
</script>

<style>

</style>