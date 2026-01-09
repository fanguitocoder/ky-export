<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-transparent"></div>
        <!-- Animated background pattern -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div class="absolute bottom-20 right-20 w-96 h-96 bg-accent-400 rounded-full blur-3xl animate-float" style="animation-delay: 1s;"></div>
        </div>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="animate-slide-up">
            <div class="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold">
              {{ $t('home.hero.badge') }}
            </div>
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              {{ $t('home.hero.title') }} <span class="text-accent-400">{{ $t('home.hero.titleHighlight') }}</span> {{ $t('home.hero.titleEnd') }}
            </h1>
            <p class="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              {{ $t('home.hero.subtitle') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link
                to="/products"
                class="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                {{ $t('home.hero.exploreProducts') }}
                <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </router-link>
              <router-link
                to="/contact"
                class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-all duration-200"
              >
                {{ $t('home.hero.getQuote') }}
              </router-link>
            </div>
            
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div class="text-3xl md:text-4xl font-bold text-accent-400">50+</div>
                <div class="text-sm text-gray-300 mt-1">{{ $t('home.hero.countries') }}</div>
              </div>
              <div>
                <div class="text-3xl md:text-4xl font-bold text-accent-400">10K+</div>
                <div class="text-sm text-gray-300 mt-1">{{ $t('home.hero.shipments') }}</div>
              </div>
              <div>
                <div class="text-3xl md:text-4xl font-bold text-accent-400">99%</div>
                <div class="text-sm text-gray-300 mt-1">{{ $t('home.hero.satisfaction') }}</div>
              </div>
            </div>
          </div>
          
          <div class="hidden md:block animate-fade-in">
            <div class="relative">
              <div class="aspect-square bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
                <img :src="heroImage" alt="KY EXPORT - Global Trade" class="w-full h-full object-cover" />
              </div>
              <!-- Decorative elements -->
              <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-500 rounded-full blur-3xl opacity-50"></div>
              <div class="absolute -top-6 -left-6 w-32 h-32 bg-primary-400 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Wave divider -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
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
const heroImage = `${import.meta.env.BASE_URL}images/hero-image.png`

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
