<template>
  <div class="flex h-screen overflow-hidden">
    <SideBarGlobal class="hidden md:w-1/6 md:block"/>
    <div class="flex flex-col w-full md:w-5/6">
      <NavbarGlobal/>
      <div class="flex-grow p-2 flex flex-col items-center justify-start overflow-auto">
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
