<script setup>
defineProps({
    name: String
})
</script>

<template>
    <div class="flex items-center text-gray-700 hover:text-gray-900">
        <span class="mr-2">📄</span> {{ name }}
    </div>
</template>
