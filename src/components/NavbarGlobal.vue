<template>
    <div class="w-full p-3 h-16 md:h-16 flex justify-between align-center shadow-lg">
        <div class="cursor-pointer flex-wrap content-center">
            <font-awesome-icon :icon="['fas', 'bars']" size="2xl" style="color: #024873;" />
        </div>
        <div class="flex flex-wrap content-center gap-5">   
            <select name="" id="" class="hover:text-secondaryLight border-2 rounded p-2">
                <option value="es">Español</option>
                <option value="en">Ingles</option>
            </select>
            <div class="cursor-pointer flex flex-wrap content-center">
                <font-awesome-icon :icon="['fas', 'moon']" size="2xl" class="text-secondary" />
            </div>
            <div class=" h-full flex justify-between mx-5">
                <img class="h-full rounded-full" alt="User Image" src="../assets/images/no-user.png">
                <div class="mx-5 flex flex-wrap content-center gap-2 cursor-pointer hover:text-secondaryLight">
                    <span>Juan</span>
                    <div>
                        <font-awesome-icon :icon="['fas', 'angle-down']" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>