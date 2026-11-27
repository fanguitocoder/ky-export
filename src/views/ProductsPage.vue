<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <section class="bg-primary-900 text-white py-20">
      <div class="site-container">
        <div class="max-w-4xl">
          <h1 class="text-5xl md:text-6xl font-display font-bold mb-6">{{ $t('products.hero.title') }}</h1>
          <p class="text-xl md:text-2xl text-gray-200 max-w-3xl">
            {{ $t('products.hero.subtitle') }}
          </p>
        </div>

        <!-- Search and Filter -->
        <div class="mt-10 max-w-4xl">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Search -->
            <div class="md:col-span-2">
              <div class="relative">
                <input
                  v-model="searchQuery"
                  type="search"
                  :aria-label="$t('products.search')"
                  :placeholder="$t('products.search')"
                  class="w-full px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-400"
                />
                <svg class="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
            </div>
            
            <!-- Category Filter -->
            <div>
              <select
                v-model="selectedCategory"
                :aria-label="$t('products.categories.title')"
                class="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-400"
              >
                <option v-for="category in categories" :key="category" :value="category">
                  {{ getCategoryLabel(category) }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-20">
      <div class="site-container">
        <!-- Results Info -->
        <div class="mb-8 flex justify-between items-center">
          <p class="text-gray-600">
            {{ $t('products.showing') }} <span class="font-semibold text-gray-900">{{ filteredProducts.length }}</span> {{ $t('products.products') }}
            <span v-if="selectedCategory !== 'All'" class="text-primary-700">
              {{ $t('products.in') }} {{ getCategoryLabel(selectedCategory) }}
            </span>
          </p>
          <button
            v-if="searchQuery || selectedCategory !== 'All'"
            @click="resetFilters"
            class="text-primary-700 hover:text-primary-800 font-medium"
          >
            {{ $t('products.clearFilters') }}
          </button>
        </div>

        <!-- Products -->
        <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-7">
          <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
        </div>

        <!-- No Results -->
        <div v-else class="text-center py-16">
          <svg class="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ $t('products.noResults.title') }}</h3>
          <p class="text-gray-600 mb-4">{{ $t('products.noResults.message') }}</p>
          <button
            @click="resetFilters"
            class="px-6 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors font-semibold"
          >
            {{ $t('products.noResults.button') }}
          </button>
        </div>
      </div>
    </section>

    <!-- Categories Overview -->
    <section class="py-20 bg-white">
      <div class="site-container">
        <h2 class="text-3xl font-display font-bold text-gray-900 text-center mb-12">{{ $t('products.categories.title') }}</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            v-for="category in categories.filter(c => c !== 'All')"
            :key="category"
            @click="filterByCategory(category)"
            class="p-6 bg-gradient-to-br from-primary-50 to-white border-2 border-primary-100 rounded-xl hover:border-primary-700 hover:shadow-lg transition-all group"
          >
            <div class="text-4xl mb-3">{{ getCategoryIcon(category) }}</div>
            <h3 class="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">{{ getCategoryLabel(category) }}</h3>
            <p class="text-sm text-gray-500 mt-1">{{ getProductCountByCategory(category) }} {{ $t('products.products') }}</p>
          </button>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-primary-900 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-display font-bold mb-6">{{ $t('products.cta.title') }}</h2>
        <p class="text-xl text-gray-200 mb-8">
          {{ $t('products.cta.subtitle') }}
        </p>
        <router-link
          to="/contact"
          class="inline-flex items-center px-8 py-4 bg-white text-primary-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl"
        >
          {{ $t('products.cta.button') }}
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import { useI18n } from 'vue-i18n'
import { products, categories } from '../data/products'

const { t } = useI18n()
const searchQuery = ref('')
const selectedCategory = ref('All')

const filteredProducts = computed(() => {
  let filtered = products

  // Filter by category
  if (selectedCategory.value !== 'All') {
    filtered = filtered.filter(p => p.category === selectedCategory.value)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(p => {
      const name = getProductName(p).toLowerCase()
      const description = getProductDescription(p).toLowerCase()
      const categoryLabel = getCategoryLabel(p.category).toLowerCase()
      return name.includes(query) || description.includes(query) || categoryLabel.includes(query)
    })
  }

  return filtered
})

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = 'All'
}

const filterByCategory = (category) => {
  selectedCategory.value = category
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const getProductCountByCategory = (category) => {
  return products.filter(p => p.category === category).length
}

const getCategoryIcon = (category) => {
  const icons = {
    'Appliances': '🏠',
    'Electronics': '💡',
    'Kitchen Appliances': '🍽️',
    'Home Care': '🧹',
    'All': '📦'
  }
  return icons[category] || '📦'
}

const getCategoryLabel = (category) => {
  const map = {
    'All': 'productCategories.all',
    'Appliances': 'productCategories.appliances',
    'Electronics': 'productCategories.electronics',
    'Kitchen Appliances': 'productCategories.kitchenAppliances',
    'Home Care': 'productCategories.homeCare'
  }
  return t(map[category] || map['All'])
}

const getProductName = (product) => t(`${product.translationKey}.name`)
const getProductDescription = (product) => t(`${product.translationKey}.description`)

</script>
