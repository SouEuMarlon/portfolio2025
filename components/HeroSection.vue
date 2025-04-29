<script setup lang="ts">
import type { PageProps } from '@/types/PageData';

defineProps<{
  hero?: PageProps['object']['metadata']['hero'];
}>();
</script>

<template>
  <section 
    v-if="hero"
    class="flex flex-col items-center justify-center bg-[#0f0f0f] gap-[44px] mt-[110px] mb-[110px] px-4"
  >
    <div class="w-[248px] h-[248px] rounded-full bg-[#fff] border-4 border-[#ffffff] flex items-center justify-center">
       <NuxtImg
        :src="hero.picture.url"
        alt="Hero image"
        class="rounded-full object-cover"
        width="240"
        height="240"
        sizes="(max-width: 768px) 100vw, 240px"
        loading="lazy"
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
  </section>
</template>
