<script setup lang="ts">
import type { ProjectCardProps } from '@/types/PageData';
import ProjectCard from '@/components/ProjectCard.vue';

defineProps<{
  cards: ProjectCardProps[];
}>();
</script>

<template>
  <UCarousel
    v-if="cards.length"
    :items="cards"
    class="w-full md:max-w-[678px] mx-auto"
    :ui="{
      container: 'py-4',
      dots: '-bottom-6 inset-x-0',
      dot: 'w-6 h-1',
      prev: 'bottom-0 absolute w-10 h-10 flex items-center justify-center rounded-full cursor-pointer max-[768px]:hidden',
      next: 'bottom-0 absolute w-10 h-10 flex items-center justify-center rounded-full cursor-pointer max-[768px]:hidden',
    }"    
    arrows
    dots
    :slides-per-view="1"
    :gap="0"
    :autoplay="false"
  >
    <template #default="{ item }">
      <ProjectCard v-if="item" :item="item as ProjectCardProps" />
    </template>
  </UCarousel>
</template>
