<template>
    <div class="hover:text-primary active:text-primary" v-for="link in listLinks" :key="link.to">
        <router-link class="text-xl" v-slot="{isActive}" :to="{name:link.to}">
            <a :class="isActive ? 'active-link':''">{{link.name}}</a>
        </router-link>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        return{
            listLinks: ref([
                {
                    to:'home',
                    name:"Dashboard"
                },
                {
                    to:'products',
                    name:"Productos"
                },
            ])
        }
    }
}
</script>

<style>

</style>