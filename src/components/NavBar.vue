<template>
  <nav class="bg-white shadow-md fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center">
          <img :src="logoSrc" alt="KY EXPORT" class="h-16 w-auto" />
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-gray-700 hover:text-primary-700 font-medium transition-colors duration-200 relative group"
            active-class="text-primary-700"
          >
            {{ $t(link.nameKey) }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-700 transition-all duration-200 group-hover:w-full"></span>
          </router-link>
          <router-link
            to="/contact"
            class="bg-primary-700 text-white px-6 py-2.5 rounded-lg hover:bg-primary-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            {{ $t('nav.getInTouch') }}
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-gray-700 hover:text-primary-700 focus:outline-none"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-200">
        <div class="px-4 pt-2 pb-4 space-y-2">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="mobileMenuOpen = false"
            class="block px-4 py-3 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 font-medium transition-colors"
            active-class="bg-primary-50 text-primary-700"
          >
            {{ $t(link.nameKey) }}
          </router-link>
          <router-link
            to="/contact"
            @click="mobileMenuOpen = false"
            class="block text-center bg-primary-700 text-white px-4 py-3 rounded-lg hover:bg-primary-800 transition-colors"
          >
            {{ $t('nav.getInTouch') }}
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
  <div class="h-20"></div> <!-- Spacer for fixed navbar -->
</template>

<script setup>
import { ref, computed } from 'vue'

const mobileMenuOpen = ref(false)
const logoSrc = computed(() => `${import.meta.env.BASE_URL}images/ky-export-logo.webp`)

const navLinks = [
  { nameKey: 'nav.home', path: '/' },
  { nameKey: 'nav.about', path: '/about' },
  { nameKey: 'nav.products', path: '/products' },
  { nameKey: 'nav.contact', path: '/contact' }
]
</script>
