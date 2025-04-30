<script setup lang="ts">
import type { ProjectCardProps } from '@/types/PageData';

defineProps<{
  item: ProjectCardProps;
}>();
</script>

<template>
  <div class="bg-[#111] rounded-[12px] shadow-md border border-green-500 max-w-[678px] h-[623px] p-6 flex flex-col justify-between shadow_card cursor-grab">
    <!-- Imagem -->
    <NuxtImg
      :src="item.image.url"
      alt="Project image"
      class="rounded-[8px] mb-4 object-cover w-full h-[300px]"
      width="678"
      height="300"
    />

    <!-- Conteúdo -->
    <div class="flex flex-col gap-2 flex-1">
      <h3 class="text-white text-xl font-bold flex items-center gap-1">
        {{ item.title }}
        <!-- <span class="text-green-500 text-sm">●</span> -->
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