<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <section class="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-5xl md:text-6xl font-display font-bold mb-6">Product Catalog</h1>
          <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Premium Milexus Products for Global Markets
          </p>
        </div>

        <!-- Search and Filter -->
        <div class="mt-12 max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Search -->
            <div class="md:col-span-2">
              <div class="relative">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search products..."
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
                class="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-400"
              >
                <option v-for="category in categories" :key="category" :value="category">
                  {{ category }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Results Info -->
        <div class="mb-8 flex justify-between items-center">
          <p class="text-gray-600">
            Showing <span class="font-semibold text-gray-900">{{ filteredProducts.length }}</span> products
            <span v-if="selectedCategory !== 'All'" class="text-primary-700">
              in {{ selectedCategory }}
            </span>
          </p>
          <button
            v-if="searchQuery || selectedCategory !== 'All'"
            @click="resetFilters"
            class="text-primary-700 hover:text-primary-800 font-medium"
          >
            Clear filters
          </button>
        </div>

        <!-- Products -->
        <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <div class="aspect-square bg-gray-200 overflow-hidden relative">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute top-4 right-4">
                <span class="px-3 py-1 bg-primary-700 text-white text-xs font-semibold rounded-full">
                  {{ product.category }}
                </span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{{ product.name }}</h3>
              <p class="text-gray-600 text-sm mb-4 line-clamp-3">{{ product.description }}</p>
              <button
                @click="requestQuote(product)"
                class="w-full bg-primary-700 text-white py-3 rounded-lg hover:bg-primary-800 transition-colors font-semibold flex items-center justify-center"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Request Quote
              </button>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div v-else class="text-center py-16">
          <svg class="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <h3 class="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
          <p class="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
          <button
            @click="resetFilters"
            class="px-6 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors font-semibold"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>

    <!-- Categories Overview -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-display font-bold text-gray-900 text-center mb-12">Browse by Category</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            v-for="category in categories.filter(c => c !== 'All')"
            :key="category"
            @click="filterByCategory(category)"
            class="p-6 bg-gradient-to-br from-primary-50 to-white border-2 border-primary-100 rounded-xl hover:border-primary-700 hover:shadow-lg transition-all group"
          >
            <div class="text-4xl mb-3">{{ getCategoryIcon(category) }}</div>
            <h3 class="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">{{ category }}</h3>
            <p class="text-sm text-gray-500 mt-1">{{ getProductCountByCategory(category) }} products</p>
          </button>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-display font-bold mb-6">Can't Find What You Need?</h2>
        <p class="text-xl text-gray-200 mb-8">
          Contact us for custom product inquiries and bulk orders
        </p>
        <router-link
          to="/contact"
          class="inline-flex items-center px-8 py-4 bg-white text-primary-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl"
        >
          Contact Us
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
import { useRouter } from 'vue-router'
import { products, categories } from '../data/products'

const router = useRouter()
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
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    )
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
    'Household': '🏠',
    'Cleaning': '🧹',
    'Personal Care': '💆',
    'Safety': '🛡️'
  }
  return icons[category] || '📦'
}

const requestQuote = (product) => {
  router.push({
    path: '/contact',
    query: { product: product.name }
  })
}
</script>
