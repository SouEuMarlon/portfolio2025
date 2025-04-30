<template>
  <header class="px-5 pb-5 w-full flex justify-between md:justify-around items-center mx-auto mt-10 relative">
     <NuxtImg
      src="/assets/img/logo_mnz.svg"
      alt="Marlon Menezes logo"
      class="object-cover"
      width="172"
      height="48"
      sizes="(max-width: 768px) 100vw, 172px"
      loading="lazy"
    />

    <!-- Menu Desktop -->
    <nav class="hidden md:block">
      <ul class="flex gap-10">
        <li>
          <NuxtLink
            to="/"
            class="text-[#4AC652] font-[Poppins] font-medium text-[1.25rem] hover:text-[#4AC652] transition-colors duration-300" 
            @click="linkSelect"
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="#projetos"
            class="text-white font-[Poppins] font-medium text-[1.25rem] hover:text-[#4AC652] transition-colors duration-300" 
            @click="linkSelect"
          >
            Projetos
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="#experiencia"
            class="text-white font-[Poppins] font-medium text-[1.25rem] hover:text-[#4AC652] transition-colors duration-300" 
            @click="linkSelect"
          >
            Experiência
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="#sobre"
            class="text-white font-[Poppins] font-medium text-[1.25rem] hover:text-[#4AC652] transition-colors duration-300" 
            @click="linkSelect"
          >
            Sobre
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <!-- Botão de Menu Mobile -->
    <button class="md:hidden text-white focus:outline-none z-50" aria-label="Toggle menu" @click="isMenuOpen = !isMenuOpen">
      <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Menu Mobile -->
    <nav v-if="isMenuOpen" class="z-10 absolute top-full left-0 w-screen h-screen bg-[#0f0f0f] flex flex-col items-center py-6 md:hidden border-t border-[#ffffff]">
      <ul class="flex flex-col gap-6 justify-center items-center">
        <li>
          <NuxtLink
            to="/"
            class="text-[#4AC652] font-[Poppins] font-medium text-[1.25rem] hover:text-[#4AC652] transition-colors duration-300" 
            @click="linkSelect"
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="#projetos"
            class="text-white font-[Poppins] font-medium text-[1.25rem] hover:text-[#4AC652] transition-colors duration-300" 
            @click="linkSelect"
          >
            Projetos
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="#experiencia"
            class="text-white font-[Poppins] font-medium text-[1.25rem] hover:text-[#4AC652] transition-colors duration-300" 
            @click="linkSelect"
          >
            Experiência
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="#sobre"
            class="text-white font-[Poppins] font-medium text-[1.25rem] hover:text-[#4AC652] transition-colors duration-300" 
            @click="linkSelect"
          >
            Sobre
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const linkSelect = (event: Event) => {
  const target = event.target as HTMLElement
  const links = document.querySelectorAll('nav ul a')
  links.forEach(link => {
    if(link !== target) {
      link.classList.remove('text-[#4AC652]')
      link.classList.add('text-white')
    }
  })
  target.classList.remove('text-white')
  target.classList.add('text-[#4AC652]')
  isMenuOpen.value = false
}
</script>
