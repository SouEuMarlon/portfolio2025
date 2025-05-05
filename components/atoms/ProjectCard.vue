<script setup lang="ts">
import type { ProjectCardProps } from '@/types/PageData';

// Extend Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: Array<{
      event: string;
      project_card?: {
        title: string;
        description: string;
        url: string;
      };
    }>;
  }
}

defineProps<{
  item: ProjectCardProps;
}>();

const getDataLayer = (item: ProjectCardProps) => {
  const dataLayer = {
    event: 'project_card_click',
    project_card: {
      title: item.title,
      description: item.description,
      url: item.url || '',
    },
  };
  return dataLayer;
};

const handleClick = (item: ProjectCardProps) => {
  const dataLayer = getDataLayer(item);
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(dataLayer);
};
</script>

<template>
  <div class="bg-[#111] rounded-[12px] shadow-md border border-green-500 max-w-[678px] h-[623px] p-6 flex flex-col justify-between shadow_card cursor-grab">
    <!-- Imagem -->
    <NuxtImg
      :src="item.image.url"
      alt="Project image"
      class="rounded-[8px] mb-[34px] object-cover w-full h-[300px]"
      width="678"
      height="300"
      loading="lazy"
      sizes="(max-width: 768px) 100vw, 678px"
    />

    <!-- Conteúdo -->
    <div class="flex flex-col gap-[22px] flex-1">
      <h3 class="text-white text-xl font-bold flex items-center gap-1">
        {{ item.title }}
      </h3>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 tag_wrapper" v-html="item.tag" />

      <!-- Descrição -->
      <p class="text-white text-sm leading-relaxed mt-2">
        {{ item.description }}
      </p>
    </div>

    <!-- Link (espaço fixo garantido com min-h) -->
    <div class="min-h-[40px] mt-4">
      <NuxtLink
        v-if="item.link && item.url"
        :to="item.url"
        class="text-green-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        @click="handleClick(item)"
      >
        Ver projeto
      </NuxtLink>
    </div>
  </div>
</template>

<style >
.shadow_card {
  box-shadow: 0px 4px 4px 0px rgba(34, 171, 83, 0.20);
}
.tag_wrapper p {
  background: #4ac652;
  border-radius: 12px;
  color: #fff;
  font-family: "JetBrains Mono";
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  padding: 4px 12px;
  display: inline-block;
}
</style>