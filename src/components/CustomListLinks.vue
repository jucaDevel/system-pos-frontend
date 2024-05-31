<template>
    <div class="hover:text-customHover" v-for="link in listLinks" :key="link.to">
        <router-link :to="{name:link.to}">{{link.name}}</router-link>
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
                    name:"Home"
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