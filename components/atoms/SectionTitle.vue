<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
}>();
</script>

<template>
  <div class="flex items-center justify-center">    
    <h2 class="flex items-center text-3xl font-mono font-['JetBrains Mono'] text-center md:mb-[90px] mb-[65px] user-select-none select-none pointer-events-none">
      <NuxtImg
        :src="icon"
        :alt="`${title} logo`"
        class="inline-block mr-2"
        width="40"
        height="40"
      />
      {{ title }}
    </h2>
  </div>
</template>