<script setup lang="ts">
// import { onMounted } from 'vue'

import HeroSection from '@/components/HeroSection.vue';
import { pt_br } from '@nuxt/ui/locale'
import ProjectSkeleton from '@/components/skeleton/ProjectSkeleton.vue';
import ExperienceSkeleton from '@/components/skeleton/ExperienceSkeleton.vue';
import HeroSkeleton from '@/components/skeleton/HeroSkeleton.vue';

const { pageData, error } = await usePageData()


useSeoMeta({
  title: 'Marlon Menezes | Desenvolvedor Front-End',
  ogTitle: 'Marlon Menezes | Desenvolvedor Front-End',
  ogDescription: 'Portfólio de Marlon Menezes, desenvolvedor front-end com experiência em Vue.js, Tailwind CSS e TypeScript.',
  ogImage: '/assets/img/profile.webp',
  ogUrl: 'https://marlonmenezes.dev',
  ogType: 'website',
  ogLocale: 'pt_BR',
  twitterCard: 'summary_large_image',
  twitterSite: '@soueumarlon',
  twitterTitle: 'Marlon Menezes - Desenvolvedor Front-End',
  twitterDescription: 'Desenvolvedor Front-End apaixonado por criar experiências web incríveis. Especializado em HTML, CSS e JavaScript, estou pronto para transformar suas ideias em sites responsivos e interativos. Com habilidades em frameworks modernos como Vue.js, Nuxt.js, TypeScript, TailwindCSS e SASS estou preparado para levar sua presença online ao próximo nível.',
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
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/assets/img/favicon.png',
    },
    {
      rel: 'apple-touch-icon',
      href: '/assets/img/favicon.png',
    },
  ],
  bodyAttrs: {
    class: 'bg-[#0f0f0f] text-[#ffffff] font-[Poppins] relative scroll-smooth overflow-x-hidden',
  },
  title: 'Marlon Menezes | Desenvolvedor Front-End',
  meta: [
    {
      name: 'description',
      content: 'Desenvolvedor Front-End apaixonado por criar experiências web incríveis. Especializado em HTML, CSS e JavaScript, estou pronto para transformar suas ideias em sites responsivos e interativos. Com habilidades em frameworks modernos como Vue.js, Nuxt.js, TypeScript, TailwindCSS e SASS estou preparado para levar sua presença online ao próximo nível.',
    },
    {
      name: 'keywords',
      content: 'Marlon Menezes, Desenvolvedor Front-end, Desenvolvedor, Front-end, HTML, CSS, JavaScript, Vue.js, Nuxt.js, TailwindCSS, Bootstrap, Web, Web Design, Web Development, Web Development, Web Developer, Web Designe, Web Design Responsivo, Acessibilidade Web, Cross-Browser Compatibility, Desenvolvimento Web Front-End, Front-End Web Development, Performance Web, Web Development Best Practices, Teste de Compatibilidade de Navegadores, Flexbox, CSS Grid Layout',
    },
  ],
})
if (error.value) {
  console.error('Error fetching page data:', error.value);
}

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('fade-in');
//       observer.unobserve(entry.target);
//     }
//   });
// }, {
//   threshold: 0.1,
// });

// onMounted(() => {
//   const sections = document.querySelectorAll('.reveal');
//   sections.forEach((section) => {
//     observer.observe(section);
//     section.classList.add('fade-in');
//   });
// });

</script>

<template>
<UApp :locale="pt_br">
  <div class="bg-[#0f0f0f] min-h-screen min-w-screen relative z-10">
    <!-- Background Balls -->
    <div class="absolute bg-white opacity-[2%] blur-2xl z-0 w-[600px] h-[600px] rounded-full top-0 right-0 md:block hidden"/>
    <div class="absolute bg-white opacity-[2%] blur-2xl z-0 w-[600px] h-[600px] rounded-full top-44 left-0 md:block hidden"/>
    <div class="absolute bg-white opacity-[2%] blur-2xl z-0 w-[600px] h-[600px] rounded-full bottom-0 right-0 md:block hidden"/>

    <!-- Header -->
    <HeaderPage />

    <!-- Hero Section -->
    <Suspense>
      <template #default>
        <HeroSection v-if="pageData?.object.metadata.hero" :hero="pageData.object.metadata.hero" />
      </template>

      <template #fallback>
        <HeroSkeleton/>
      </template>
    </Suspense>
    <!-- Projetos -->
    
    <Suspense>
      <template #default>
        <ProjectSection
          v-if="pageData?.object.metadata.project && pageData?.object.metadata.project.card && pageData?.object.metadata.project.card.length"
          :project="pageData.object.metadata.project"
          :item="pageData.object.metadata.project.card[0]"
        />
      </template>

      <template #fallback>
        <ProjectSkeleton/>
      </template>
    </Suspense>
    <!-- Experiencias -->

    <Suspense>
      <template #default>
        <ExperienceSection v-if="pageData?.object.metadata.experience" :experience="pageData.object.metadata.experience" />
      </template>

      <template #fallback>
        <ExperienceSkeleton/>
      </template>
    </Suspense>

    <!-- Sobre -->
    <Suspense>
      <template #default>
        <AboutSection v-if="pageData?.object.metadata.about" :about="pageData.object.metadata.about" />
      </template>

      <template #fallback>
        <ProjectSkeleton/>
      </template>
    </Suspense>

    <!-- Contato -->
    <Suspense>
      <template #default>
        <ContactSection v-if="pageData?.object.metadata.contact" :contact="pageData.object.metadata.contact" />
      </template>

      <template #fallback>
        <ProjectSkeleton/>
      </template>
    </Suspense>
     
    <!-- Footer -->    
    <FooterPage />
  </div>
</UApp>
</template>
