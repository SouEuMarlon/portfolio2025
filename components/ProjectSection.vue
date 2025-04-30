<!-- eslint-disable vue/no-v-html -->
<script setup lang="ts">
import type { ProjectCardProps } from '@/types/PageData';

defineProps<{
  item: ProjectCardProps;
  project: {
    card?: ProjectCardProps[];
  };
}>();
</script>

<template>
  <section id="projetos" class="">
    <div class="container mx-auto px-4 py-8 relative">
      <h2 class="text-3xl font-bold text-center mb-8">
        <NuxtImg
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
          alt="Vue.js logo"
          class="inline-block mr-2"
          width="40"
          height="40"
        />
        Projetos
      </h2>
      
      <ProjectCarousel :cards="project?.card || []" />
      
    </div>
  </section>
</template>

<style scoped>
.tag_wrapper p {
  background: #4AC652;
  border-radius: 12px;
  color: #FFF;
  font-family: "JetBrains Mono";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  padding: 4px 12px;
}
</style>