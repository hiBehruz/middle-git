<script setup>
import FileTree from './components/FileTree.vue'

const data = {
  root: {
    movies: {
      type: "folder",
      children: {
        Avengers: {
          type: "folder",
          children: {
            "Infinity War": { type: "file" },
            Endgame: { type: "file" }
          }
        },
        "Spider-Man": {
          type: "folder",
          children: {
            Homecoming: { type: "file" },
            "No Way Home": { type: "file" }
          }
        },
        "Iron Man": { type: "file" },
        "Doctor Strange": { type: "file" }
      }
    },
    comics: {
      type: "folder",
      children: {
        "X-Men": {
          type: "folder",
          children: {
            "Dark Phoenix Saga": { type: "file" },
            "Days of Future Past": { type: "file" }
          }
        },
        "Fantastic Four": {
          type: "folder",
          children: {
            "Galactus Trilogy": { type: "file" },
            "The Coming of Galactus": { type: "file" }
          }
        },
        "Captain America": { type: "file" },
        "Black Panther": { type: "file" }
      }
    }
  }
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">File System Viewer</h1>
    <FileTree :folder="data.root" />
  </div>
</template>




<!-- 
  <div class="p-10 items-center justify-center">
    <div class="relative">
      <img src="/search.svg" alt="search" class="absolute left-3 top-3 w-4 h-4">
      <input class="border border-gray-300 rounded-md py-2 pl-10 pr-4 outline-none focus:border-gray-500 transition"
        type="text" placeholder="Go in to" />
    </div>

  </div> -->
