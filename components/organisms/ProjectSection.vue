<!-- eslint-disable vue/no-v-html -->
<script setup lang="ts">
import type { ProjectCardProps } from '@/types/PageData';
import ProjectCarousel from '../molecules/ProjectCarousel.vue';
import ProjectSkeleton from '@/components/skeleton/ProjectSkeleton.vue';
import SectionTitle from '../atoms/SectionTitle.vue';

defineProps<{
  item: ProjectCardProps;
  project: {
    card?: ProjectCardProps[];
  };
}>();
</script>

<template>
  <section id="projetos" class="reveal">
    <div class="container mx-auto px-4 pt-8 pb-[64px] md:pb-[174px] relative">
      <SectionTitle
        icon="/assets/img/icons/folder.svg"
        title="Projetos"
      />
      
      <ProjectCarousel v-if="project?.card?.length" :cards="project?.card || []" />
      <ProjectSkeleton v-else />
      
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