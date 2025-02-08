<template>
  <v-list class="d-flex text-mono text-mono-1" density="compact" rounded="shaped">
    <v-list-item>Electron v{{ versions.electron }}</v-list-item>
    <v-list-item>Chromium v{{ versions.chrome }}</v-list-item>
    <v-list-item>Node v{{ versions.node }}</v-list-item>
  </v-list>
</template>
<script setup>
  const props = defineProps({ versions: Object });
</script>
