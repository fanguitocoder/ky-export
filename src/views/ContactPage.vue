<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <section class="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-6xl font-display font-bold mb-6">{{ $t('contact.hero.title') }}</h1>
        <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
          {{ $t('contact.hero.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <h2 class="text-3xl font-display font-bold text-gray-900 mb-6">{{ $t('contact.form.title') }}</h2>
            <div v-if="productInterest" class="mb-4 p-3 rounded-lg bg-primary-50 border border-primary-100 text-primary-800 text-sm font-medium flex items-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>Inquiry about {{ productInterest }}</span>
            </div>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                  {{ $t('contact.form.name') }} <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.name"
                  type="text"
                  id="name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  :placeholder="$t('contact.form.namePlaceholder')"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                  {{ $t('contact.form.email') }} <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.email"
                  type="email"
                  id="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  :placeholder="$t('contact.form.emailPlaceholder')"
                />
              </div>

              <!-- Phone -->
              <div>
                <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
                  {{ $t('contact.form.phone') }}
                </label>
                <input
                  v-model="formData.phone"
                  type="tel"
                  id="phone"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  :placeholder="$t('contact.form.phonePlaceholder')"
                />
              </div>

              <!-- Company -->
              <div>
                <label for="company" class="block text-sm font-semibold text-gray-700 mb-2">
                  {{ $t('contact.form.company') }}
                </label>
                <input
                  v-model="formData.company"
                  type="text"
                  id="company"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  :placeholder="$t('contact.form.companyPlaceholder')"
                />
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-semibold text-gray-700 mb-2">
                  {{ $t('contact.form.subject') }} <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.subject"
                  type="text"
                  id="subject"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  :placeholder="$t('contact.form.subjectPlaceholder')"
                />
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
                  {{ $t('contact.form.message') }} <span class="text-red-500">*</span>
                </label>
                <textarea
                  v-model="formData.message"
                  id="message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  :placeholder="$t('contact.form.messagePlaceholder')"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-primary-700 text-white py-4 rounded-lg hover:bg-primary-800 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <span v-if="!isSubmitting">{{ $t('contact.form.submit') }}</span>
                <span v-else class="flex items-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ $t('contact.form.sending') }}
                </span>
              </button>
            </form>

            <!-- Success Message -->
            <transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 transform scale-95"
              enter-to-class="opacity-100 transform scale-100"
            >
              <div v-if="showSuccess" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div class="flex items-start">
                  <svg class="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div>
                    <h3 class="font-semibold text-green-900">{{ $t('contact.form.successTitle') }}</h3>
                    <p class="text-sm text-green-700 mt-1">{{ $t('contact.form.successMessage') }}</p>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <!-- Contact Details -->
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h2 class="text-2xl font-display font-bold text-gray-900 mb-6">{{ $t('contact.info.title') }}</h2>
              
              <div class="space-y-6">
                <!-- Address -->
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="font-semibold text-gray-900 mb-1">{{ $t('contact.info.addressLabel') }}</h3>
                    <p class="text-gray-600">{{ $t('contact.info.address') }}</p>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="font-semibold text-gray-900 mb-1">{{ $t('contact.info.emailLabel') }}</h3>
                    <a :href="emailHref" class="text-primary-700 hover:text-primary-800">{{ contactEmail }}</a>
                  </div>
                </div>

                <!-- Phone -->
                <div class="flex items-start">
                  <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h3 class="font-semibold text-gray-900 mb-1">{{ $t('contact.info.phoneLabel') }}</h3>
                    <a :href="whatsappHref" class="text-primary-700 hover:text-primary-800">{{ contactPhone }}</a>
                    <p class="text-sm text-gray-500 mt-1">{{ $t('contact.info.phoneNote') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="bg-gradient-to-br from-primary-700 to-primary-900 text-white rounded-xl shadow-lg p-8">
              <h3 class="text-xl font-bold mb-4">{{ $t('contact.businessHours.title') }}</h3>
              <div class="space-y-2 text-gray-200">
                <div class="flex justify-between">
                  <span>{{ $t('contact.businessHours.weekdays') }}</span>
                  <span class="font-semibold">{{ $t('contact.businessHours.weekdaysHours') }}</span>
                </div>
                <div class="flex justify-between">
                  <span>{{ $t('contact.businessHours.saturday') }}</span>
                  <span class="font-semibold">{{ $t('contact.businessHours.saturdayHours') }}</span>
                </div>
                <div class="flex justify-between">
                  <span>{{ $t('contact.businessHours.sunday') }}</span>
                  <span class="font-semibold">{{ $t('contact.businessHours.sundayHours') }}</span>
                </div>
              </div>
              <p class="text-sm text-gray-300 mt-4">
                {{ $t('contact.businessHours.note') }}
              </p>
            </div>

            <!-- Quick Links -->
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h3 class="text-xl font-bold text-gray-900 mb-4">{{ $t('contact.quickActions.title') }}</h3>
              <div class="space-y-3">
                <router-link
                  to="/products"
                  class="flex items-center text-primary-700 hover:text-primary-800 font-medium group"
                >
                  <svg class="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                  {{ $t('contact.quickActions.browse') }}
                </router-link>
                <router-link
                  to="/about"
                  class="flex items-center text-primary-700 hover:text-primary-800 font-medium group"
                >
                  <svg class="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                  {{ $t('contact.quickActions.about') }}
                </router-link>
                <a
                  :href="whatsappHref"
                  class="flex items-center text-primary-700 hover:text-primary-800 font-medium group"
                >
                  <svg class="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                  {{ $t('contact.quickActions.call') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t } = useI18n()

const formData = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const productInterest = ref(null)
const contactEmail = computed(() => t('contact.info.email'))
const contactPhone = computed(() => t('contact.info.phone'))
const emailHref = computed(() => `mailto:${contactEmail.value}`)
const whatsappHref = computed(() => `https://wa.me/${contactPhone.value.replace(/\D/g, '')}`)

const applyProductPrefill = () => {
  if (productInterest.value) {
    formData.value.subject = `Inquiry about ${productInterest.value}`
    formData.value.message = `Hello,\n\nI am interested in learning more about ${productInterest.value}. Please provide information about:\n\n- Pricing and minimum order quantities\n- Shipping options and delivery times\n- Product specifications\n\nThank you!`
  }
}

// Prepopulate form if coming from product page
onMounted(() => {
  if (route.query.product) {
    productInterest.value = route.query.product
    applyProductPrefill()
  }
})

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate API call (replace with actual form submission)
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  console.log('Form submitted:', formData.value)
  
  // Show success message
  showSuccess.value = true
  isSubmitting.value = false
  
  // Reset form
  formData.value = {
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  }

  applyProductPrefill()
  
  // Hide success message after 5 seconds
  setTimeout(() => {
    showSuccess.value = false
  }, 5000)
}
</script>
