<template>
    <div class="w-full p-3 h-16 md:h-16 flex justify-between align-center shadow-lg">
        <div class="cursor-pointer flex-wrap content-center">
            <font-awesome-icon :icon="['fas', 'bars']" size="2xl" style="color: #024873;" />
        </div>
        <div class="flex flex-wrap content-center gap-5">
            <select name="" id="">
                <option value="es">Español</option>
                <option value="en">Ingles</option>
            </select>
            <div class="cursor-pointer flex flex-wrap content-center">
                <font-awesome-icon :icon="['fas', 'moon']" size="2xl" style="color: #024873;" />
            </div>
            <div class=" h-full flex justify-between">
                <img class="h-full" alt="Vue logo" src="../assets/images/no-user.png">
                <div class="m-2 flex flex-wrap content-center gap-2 cursor-pointer hover:text-primary">
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