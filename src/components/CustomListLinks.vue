<template>
    <div class="hover:text-neutralLight active:text-primary" v-for="link in listLinks" :key="link.to">
        <router-link class="text-lg flex gap-6 flex-wrap content-center" v-slot="{isActive}" :to="{name:link.to}">
            <font-awesome-icon :icon="[link.icon[0], link.icon[1]]" size="lg" :class="isActive ? 'active-link':''" />
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
                    name:"Dashboard",
                    icon:['fas','chart-line']
                },
                {
                    to:'products',
                    name:"Productos",
                    icon:['fas','table-list']
                },
            ])
        }
    }
}
</script>

<style>

</style>