<template>
  <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
    <div class="bg-primary-900 text-white">
      <div class="site-container flex min-h-9 items-center justify-between gap-3 text-xs">
        <span class="font-medium tracking-wide text-slate-200">Miami, Florida · {{ $t('home.hero.badge') }}</span>
        <div class="flex items-center gap-2" aria-label="Language / Idioma">
          <button v-for="lang in ['en', 'es']" :key="lang" type="button" :lang="lang" :aria-pressed="locale === lang" :class="locale === lang ? 'text-accent-500' : 'text-slate-300'" class="px-1 py-2 font-semibold uppercase hover:text-white" @click="setLanguage(lang)">{{ lang }}</button>
        </div>
      </div>
    </div>
    <nav class="site-container">
      <div class="flex min-h-[84px] items-center justify-between gap-6">
        <router-link to="/" class="shrink-0" @click="mobileMenuOpen = false"><BrandLogo /></router-link>
        <div class="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 lg:flex">
          <router-link v-for="link in navLinks" :key="link.path" :to="link.path" class="rounded-full px-5 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:text-primary-900" exact-active-class="bg-white text-primary-900 shadow-sm">{{ $t(link.nameKey) }}</router-link>
        </div>
        <router-link to="/contact" class="hidden items-center gap-5 rounded-md bg-primary-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700 lg:inline-flex">{{ $t('nav.getInTouch') }} <span aria-hidden="true" class="text-accent-500">↗</span></router-link>
        <button type="button" :aria-expanded="mobileMenuOpen" :aria-label="$t('nav.menu')" aria-controls="mobile-navigation" class="rounded-md border border-slate-200 p-3 text-primary-900 lg:hidden" @click="mobileMenuOpen = !mobileMenuOpen">
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path v-if="!mobileMenuOpen" d="M3 6h18M3 12h18M3 18h18"/><path v-else d="m5 5 14 14M19 5 5 19"/></svg>
        </button>
      </div>
      <div id="mobile-navigation" v-show="mobileMenuOpen" class="space-y-2 border-t border-slate-200 py-4 lg:hidden">
        <router-link v-for="link in navLinks" :key="link.path" :to="link.path" class="block rounded-md px-4 py-3 font-medium text-slate-700" exact-active-class="bg-primary-50 text-primary-900" @click="mobileMenuOpen = false">{{ $t(link.nameKey) }}</router-link>
        <router-link to="/contact" class="block rounded-md bg-primary-900 px-4 py-3 text-center font-semibold text-white" @click="mobileMenuOpen = false">{{ $t('nav.getInTouch') }} ↗</router-link>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import BrandLogo from './BrandLogo.vue'
const mobileMenuOpen = ref(false)
const { locale } = useI18n({ useScope: 'global' })
const route = useRoute()
const navLinks = [
  { nameKey: 'nav.home', path: '/' },
  { nameKey: 'nav.products', path: '/products' },
  { nameKey: 'nav.about', path: '/about' },
  { nameKey: 'nav.contact', path: '/contact' }
]
function setLanguage(lang) {
  locale.value = lang
  try { localStorage.setItem('ky-locale', lang) } catch {}
}
watch(locale, lang => { document.documentElement.lang = lang }, { immediate: true })
watch(() => route.fullPath, () => { mobileMenuOpen.value = false })
</script>
