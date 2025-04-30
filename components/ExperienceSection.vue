<script setup lang="ts">
import type { ExperienceCardProps } from '@/types/PageData';

defineProps<{
  experience: {
    card: ExperienceCardProps[];
  };
}>();
</script>

<template>
  <section id="experiencia" class="reveal">
    <div class="container mx-auto px-4 pt-8 pb-[64px] md:pb-[100px] relative">
      <SectionTitle
        icon="/assets/img/icons/work.svg"
        title="Experiência"
      />

      <div class="flex flex-col gap-4">
        <ul role="list" class="list-disc pl-5 marker:text-[#4AC652] marker:text-[24px] marker:animate-pulse marker:duration-1000">
          <li
            v-for="(item, index) in experience?.card"
            :key="index"
            class="mb-8"
          >
            <div class="flex flex-col">
              <p class="flex items-center mb-[4px] text-white text-sm">
                {{ item.position }}
              </p>
              <NuxtLink
              v-if="item.url" 
              :href="item.url" 
                target="_blank"
                rel="noopener noreferrer"
                class="text-[#4AC652] mb-[14px] text-[34px] font-bold underline underline-offset-4 decoration-1 decoration-white"
              >
                {{ item.firm }}
              </NuxtLink>
              <p v-else class="text-[#4AC652] mb-[14px] text-[34px] font-bold underline underline-offset-4 decoration-1 decoration-white">
                {{ item.firm }}
              </p>
              <p class="text-white text-sm mb-[20px]">
                {{ item.company_time }}
              </p>
              <p class="text-[16px] md:text-2xl text-white mb-[14px] font-[300]">
                {{ item.description }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>