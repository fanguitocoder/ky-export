<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative isolate overflow-hidden bg-[#0b1929] text-white">
      <div class="absolute inset-0 -z-10 bg-gradient-to-br from-[#142c45] via-[#0b1929] to-[#101f31]"></div>
      <div class="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:min-h-[640px] lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <div class="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#d5b16b]">
            <span class="h-px w-8 bg-[#d5b16b]"></span>
            {{ $t('home.hero.badge') }}
          </div>
          <h1 class="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            {{ $t('home.hero.title') }}
            <span class="block text-[#d5b16b]">{{ $t('home.hero.titleHighlight') }}</span>
          </h1>
          <p class="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">{{ $t('home.hero.subtitle') }}</p>
          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <router-link to="/products" class="inline-flex min-h-[54px] items-center justify-center gap-4 rounded-md bg-[#d5b16b] px-7 py-3 font-semibold text-[#0b1929] transition-colors hover:bg-[#e8c88a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              {{ $t('home.hero.exploreProducts') }} <span aria-hidden="true">↗</span>
            </router-link>
            <router-link to="/contact" class="inline-flex min-h-[54px] items-center justify-center rounded-md border border-white/40 px-7 py-3 font-semibold transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              {{ $t('home.hero.getQuote') }}
            </router-link>
          </div>
        </div>
        <div class="relative overflow-hidden rounded-xl border border-white/10 bg-[#142c45] p-3 sm:p-5">
          <div class="grid grid-cols-2 gap-3 sm:gap-4">
            <div v-for="(product, index) in featuredProducts.slice(0, 4)" :key="product.id" class="overflow-hidden rounded-md bg-white">
              <img :src="product.image" :alt="getProductName(product)" :loading="index === 0 ? 'eager' : 'lazy'" class="aspect-[4/3] w-full object-contain p-3 sm:p-5" />
            </div>
          </div>
          <div class="mt-4 flex items-center justify-between gap-3 px-1 text-sm text-slate-300">
            <span>Milexus</span>
            <router-link to="/products" class="font-medium text-[#d5b16b] hover:underline">{{ $t('home.featuredProducts.viewAll') }} <span aria-hidden="true">↗</span></router-link>
          </div>
        </div>
      </div>
      <div class="border-t border-white/15 bg-white/[0.03]">
        <div class="mx-auto grid max-w-7xl gap-5 px-5 py-7 sm:grid-cols-3 sm:px-8">
          <div v-for="item in ['quality', 'delivery', 'reach']" :key="item" class="flex items-center gap-3 text-sm font-medium text-slate-200 sm:justify-center">
            <span aria-hidden="true" class="h-2 w-2 shrink-0 rounded-full bg-[#d5b16b]"></span>
            {{ $t('home.whyChoose.' + item + '.title') }}
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {{ $t('home.featuredProducts.title') }}
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {{ $t('home.featuredProducts.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div
            v-for="product in featuredProducts"
            :key="product.id"
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <div class="aspect-square bg-gray-200 overflow-hidden">
              <img
                :src="product.image"
                :alt="getProductName(product)"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div class="p-6">
              <div class="text-sm text-primary-600 font-semibold mb-2">{{ product.category }}</div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ getProductName(product) }}</h3>
              <p class="text-gray-600 mb-4 line-clamp-2">{{ getProductDescription(product) }}</p>
              <button
                @click="contactAboutProduct(product)"
                class="w-full bg-primary-700 text-white py-3 rounded-lg hover:bg-primary-800 transition-colors font-semibold"
              >
                {{ $t('home.featuredProducts.requestQuote') }}
              </button>
            </div>
          </div>
        </div>

        <div class="text-center">
          <router-link
            to="/products"
            class="inline-flex items-center px-8 py-4 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {{ $t('home.featuredProducts.viewAll') }}
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {{ $t('home.whyChoose.title') }}
          </h2>
          <p class="text-xl text-gray-600">{{ $t('home.whyChoose.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-8 rounded-xl bg-gradient-to-br from-primary-50 to-white hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ $t('home.whyChoose.quality.title') }}</h3>
            <p class="text-gray-600">{{ $t('home.whyChoose.quality.description') }}</p>
          </div>

          <div class="text-center p-8 rounded-xl bg-gradient-to-br from-accent-50 to-white hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ $t('home.whyChoose.delivery.title') }}</h3>
            <p class="text-gray-600">{{ $t('home.whyChoose.delivery.description') }}</p>
          </div>

          <div class="text-center p-8 rounded-xl bg-gradient-to-br from-primary-50 to-white hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ $t('home.whyChoose.reach.title') }}</h3>
            <p class="text-gray-600">{{ $t('home.whyChoose.reach.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">
          {{ $t('home.cta.title') }}
        </h2>
        <p class="text-xl text-gray-200 mb-8">
          {{ $t('home.cta.subtitle') }}
        </p>
        <router-link
          to="/contact"
          class="inline-flex items-center px-8 py-4 bg-white text-primary-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
        >
          {{ $t('home.cta.button') }}
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { products } from '../data/products'

const router = useRouter()
const { t } = useI18n()
const featuredProducts = computed(() => products.filter(p => p.featured).slice(0, 6))

const getProductName = (product) => t(`${product.translationKey}.name`)
const getProductDescription = (product) => t(`${product.translationKey}.description`)

const contactAboutProduct = (product) => {
  router.push({
    path: '/contact',
    query: { product: getProductName(product) }
  })
}
</script>
