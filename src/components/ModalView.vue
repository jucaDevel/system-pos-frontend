<template>
  <div class="modal-background fade-in" @click.self="$emit('on:close')">
    <div class="bg-white rounded w-6/12 h-5/6 flex flex-col justify-between">
        <div class="flex justify-between bg-gray-200 p-4 rounded">
            <slot name="header"/>
            <span class="cursor-pointer" @click="$emit('on:close')">
                <font-awesome-icon :icon="['far', 'circle-xmark']" size="2xl" class="text-secondary"/>
            </span>
        </div>
        <slot name="body"/>
        <div class="bg-gray-200 p-2 rounded">
            <slot name="footer"/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
}

.modal-container {
    width: 250px;
    height: 250px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    color: red;
}
</style>>