<script setup>
import FolderItem from './FolderItem.vue'
import FileItem from './FileItem.vue'

defineProps({
    folder: Object
})
</script>

<template>
    <ul class="ml-4 border-l border-gray-200 pl-2">
        <li v-for="(item, name) in folder" :key="name">
            <div v-if="item.type === 'folder'">
                <FolderItem :name="name" :folder="item" />
            </div>
            <div v-else>
                <FileItem :name="name" />
            </div>
        </li>
    </ul>
</template>
