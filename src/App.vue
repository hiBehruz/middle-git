<script setup lang="ts">
import FileTree from "./components/FileTree.vue";
import type { FsTree } from "./types/fs";
import rawData from "../data.json";

const data = rawData as { root: FsTree };
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">File System Viewer</h1>
    <FileTree :folder="data.root" />
  </div>
</template>
