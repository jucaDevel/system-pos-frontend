<template>
  <div class="flex h-screen">
    <SideBarGlobal class="w-1/5"/>
    <div class="flex flex-col w-4/5">
      <NavbarGlobal/>
      <div class="flex-grow bg-gray-100 p-4">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarGlobal from '@/components/NavbarGlobal'
import SideBarGlobal from '@/components/SideBarGlobal'
export default {
    name:'App',
    components:{
      NavbarGlobal,
      SideBarGlobal
    }
  }
</script>
