<script setup lang="ts">
import type { PageProps } from '@/types/PageData';

defineProps<{
  hero?: PageProps['object']['metadata']['hero'];
}>();
</script>

<template>
  <section 
    v-if="hero"
    class="flex flex-col items-center justify-center relative"
  >
    <div class="container flex flex-col items-center justify-center gap-[44px] mt-[110px] mb-[110px] px-4">
      <div class="w-[248px] h-[248px] rounded-full bg-[#fff] border-2 border-[#ffffff] flex items-center justify-center">
        <NuxtImg
          :src="hero.picture.url"
          alt="Hero image"
          class="rounded-full"
          width="240"
          height="240"
          sizes="(max-width: 768px) 100vw, 240px"
          preload
          priority
        />
     </div>
     <h1 class="font-[Poppins] font-semibold sm:text-[2rem] text-2xl max-w-[650px] text-center">{{ hero.heading }}</h1>
     <!-- Botões -->
     <nav class="flex justify-center">
       <ul class="flex gap-[20px]">
         <li v-for="(button, index) in hero.buttons" :key="index" class="">
           <NuxtLink :to="button.pdf ? button.pdf.url : button.url ?? ''" class="social_btn" :download="button.pdf?.url ? true : false" target="_blank" rel="noopener noreferrer">
             <NuxtImg
               :src="typeof button.icon === 'string' ? button.icon : button.icon?.url"
               alt="Icon"
               class=""
               width="24"
               height="24"
               loading="lazy"
             />
           </NuxtLink>
         </li>
       </ul>
     </nav>
    </div>

    <div class="mb-[180px] arrow_wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 animate-bounce text-[#4AC652]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>
