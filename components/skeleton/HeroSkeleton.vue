<script setup lang="ts">
</script>

<template>
  <section
    class="flex flex-col items-center justify-center bg-[#0f0f0f] gap-[44px] mt-[110px] mb-[110px] px-4 animate-pulse"
  >
    <!-- Placeholder da imagem -->
    <div class="w-[248px] h-[248px] rounded-full bg-white/10 border-4 border-white/20"/>

    <!-- Placeholder do título -->
    <div class="h-12 bg-white/10 rounded w-[80%] max-w-[650px]"/>

    <!-- Placeholder dos botões -->
    <nav class="flex justify-center mt-2">
      <ul class="flex gap-[20px]">
        <li v-for="n in 4" :key="n">
          <div class="w-[40px] h-[40px] bg-white/10 rounded-[4px]"/>
        </li>
      </ul>
    </nav>
  </section>
</template>
