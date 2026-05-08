<script setup lang="ts">
import FolderItem from './FolderItem.vue'
import FileItem from './FileItem.vue'
import type { FsTree } from '@/types/fs'

defineProps<{
  folder: FsTree
}>()
</script>

<template>
  <ul class="ml-4 border-l border-gray-200 pl-2">
    <li v-for="(item, name) in folder" :key="name">
      <FolderItem v-if="item.type === 'folder'" :name="String(name)" :folder="item" />
      <FileItem v-else :name="String(name)" />
    </li>
  </ul>
</template>
