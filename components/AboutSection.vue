<script setup lang="ts">
import type { PageProps } from '@/types/PageData';

defineProps<{
  about?: PageProps['object']['metadata']['about'];
}>();
</script>

<template>
  <section id="sobre" class="reveal">
    <div class="container mx-auto px-4 pt-8 pb-[64px] md:pb-[124px] relative">
      <SectionTitle
        icon="/assets/img/icons/taunt.svg"
        title="Sobre mim"
      />

      <div class="flex items-center justify-between flex-col gap-12 md:gap-[46px] lg:gap-[120px] md:flex-row">
        <div class="description_wrapper" v-html="about?.description"/>
        <NuxtImg
          v-if="about?.picture"
          :src="about.picture.url"
          alt="Imagem de perfil - seção sobre mim"
          class="rounded-full object-cover mb-4"
          width="240"
          height="240"
          sizes="(max-width: 768px) 100vw, 240px"
          loading="lazy"
        />
      </div>      
    </div>
  </section>
</template>

<style>
.description_wrapper p{
  color: #fff;
  font-size: 22px;
  line-height: 30px;
  font-weight: 300;
}

@media screen and (max-width: 768px) {
  .description_wrapper p{
    font-size: 18px;
    line-height: 26px;
  }  
}  
</style>