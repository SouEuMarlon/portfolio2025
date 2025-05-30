<script setup lang="ts">
import type { PageProps } from '@/types/PageData';

defineProps<{
  contact?: PageProps['object']['metadata']['contact'];
}>();

type ContactType = PageProps['object']['metadata']['contact'];
type ContactButton = ContactType extends { buttons: infer B } ? B extends Array<infer U> ? U : never : never;

const getDataLayer = (button: ContactButton) => {
  const dataLayer = {
    event: 'contact_button_click',
    contact_section: {
      button: {
        url: button.url,
        pdf: button.pdf?.url,
      },
    },
  };
  return dataLayer;
};
const handleClick = (button: ContactButton) => {
  const dataLayer = getDataLayer(button);
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(dataLayer);
};
</script>

<template>
  <section id="contato" class="reveal flex flex-col items-center justify-center gap-[28px] pt-8 pb-[64px] md:pb-[124px] relative">
    <h3 class="font-mono text-3xl text-center text-white font-[300]">
      {{ contact?.title }}
    </h3>
    <p class="max-w-[386px] text-center font-['Poppins] text-[20px] text-white font-[300] leading-[30px]">
        {{ contact?.description }}
    </p>
    <div class="">
      <nav class="flex justify-center">
        <ul class="flex gap-[20px]">
          <li v-for="(button, index) in contact?.buttons" :key="index" class="">
            <NuxtLink 
              :to="button.pdf ? button.pdf.url : button.url ?? ''" 
              class="social_btn" 
              :download="button.pdf?.url ? true : false" 
              target="_blank" 
              rel="noopener noreferrer"
              @click="handleClick(button)"
            >
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
  </section>
</template>