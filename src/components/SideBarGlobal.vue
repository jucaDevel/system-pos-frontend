<template>
    <div class="bg-primary h-screen flex flex-col justify-between text-white">
        <div class="h-16 md:h-1/6 flex justify-rigth p-1 md:p-2">
            <img class="h-full" alt="Vue logo" src="../assets/images/logo.png">
        </div>
        <div class="flex-grow mt-5 p-2 md:p-5">
            <div class="grid grid-rows gap-4">
                <CustomListLinks/>
            </div>
        </div>
    </div>
</template>

<script>
import CustomListLinks from '@/components/CustomListLinks'
export default {
    components:{
        CustomListLinks
    }
}
</script>

<style>

</style>