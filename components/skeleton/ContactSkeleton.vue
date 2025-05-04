<template>
  <section class="flex flex-col items-center justify-center gap-[28px] pt-8 pb-[64px] md:pb-[124px] animate-pulse">
    <!-- Placeholder do título -->
    <div class="h-12 bg-white/10 rounded w-full max-w-[290px]"/>

    <!-- Placeholder da descrição -->
    <div class="h-[60px] bg-white/10 rounded w-full max-w-[386px]"/>

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