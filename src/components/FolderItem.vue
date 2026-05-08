<script setup lang="ts">
import FileTree from './FileTree.vue'
import { ref } from 'vue'
import type { FolderNode } from '@/types/fs'

defineProps<{
  name: string
  folder: FolderNode
}>()

const open = ref(false)

function toggle() {
  open.value = !open.value
}
</script>

<template>
  <div>
    <div class="flex items-center cursor-pointer hover:text-blue-500" @click="toggle">
      <span class="mr-2">{{ open ? '📂' : '🗂' }}</span>
      {{ name }}
    </div>
    <div v-if="open" class="ml-4">
      <FileTree :folder="folder.children" />
    </div>
  </div>
</template>
