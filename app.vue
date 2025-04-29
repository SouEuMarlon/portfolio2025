<script setup lang="ts">
// import { getData } from '@/utils/get-data';
import HeroSection from '@/components/HeroSection.vue';
const { pageData, error } = await usePageData()

useSeoMeta({
  title: 'Marlon Menezes - Desenvolvedor Front-End',
  ogTitle: 'Marlon Menezes - Desenvolvedor Front-End',
  ogDescription: 'Portfólio de Marlon Menezes, desenvolvedor front-end com experiência em Vue.js, Tailwind CSS e TypeScript.',
  ogImage: '/assets/img/profile.webp',
  ogUrl: 'https://marlonmenezes.dev',
  ogType: 'website',
  ogLocale: 'pt_BR',
  twitterCard: 'summary_large_image',
  twitterSite: '@soueumarlon',
  twitterTitle: 'Marlon Menezes - Desenvolvedor Front-End',
  twitterDescription: 'Portfólio de Marlon Menezes, desenvolvedor front-end com experiência em Vue.js, Tailwind CSS e TypeScript.',
  twitterImage: '/assets/img/profile.webp',
  twitterCreator: '@soueumarlon',
  twitterImageAlt: 'Marlon Menezes - Desenvolvedor Front-End',
  twitterImageWidth: '1200',
  twitterImageHeight: '630'  
})
useHead({
  htmlAttrs: {
    lang: 'pt-BR',
  },
  bodyAttrs: {
    class: 'bg-[#0f0f0f] text-[#ffffff] font-[Poppins] relative scroll-smooth overflow-x-hidden',
  },
  title: 'Marlon Menezes - Portfólio',
  meta: [
    {
      name: 'description',
      content: 'Portfólio de Marlon Menezes, desenvolvedor front-end com experiência em Vue.js, Tailwind CSS e TypeScript.',
    },
    {
      name: 'keywords',
      content: 'Marlon Menezes, portfólio, desenvolvedor front-end, Vue.js, Tailwind CSS, TypeScript',
    },
  ],
})

// const pageData = await getData();
// console.log(pageData);

if (error.value) {
  console.error('Error fetching page data:', error.value);
}
</script>

<template>  
  <div class="bg-[#0f0f0f] min-h-screen min-w-screen relative">
    <div class="absolute inset-0 bg-white opacity-10 z-0 w-2 h-2 rounded-full animate-ping top-0 right-0">
      <!-- bolas do bg -->
    </div>
    <!-- Header -->
    <HeaderPage />

    <!-- Hero Section -->
    <Suspense>
      <template #default>
        <HeroSection v-if="pageData?.object.metadata.hero" :hero="pageData.object.metadata.hero" />
      </template>

      <template #fallback>
        <div class="flex justify-center items-center h-96 text-white">Carregando conteúdo...</div>
      </template>
    </Suspense>
    <!-- Projetos -->
    <!-- Experiencias -->
    <!-- Sobre -->
     
    <!-- Footer -->
    <footer class="bg-[#0f0f0f] text-center py-4">
      <p class="text-sm text-[#ffffff]">Desenvolvido por Marlon Menezes</p>
    </footer>
  </div>
</template>
