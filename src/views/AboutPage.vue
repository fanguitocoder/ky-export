<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <section class="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-6xl font-display font-bold mb-6">{{ $t('about.hero.title') }}</h1>
        <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
          {{ $t('about.hero.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Mission, Vision, Values -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Mission -->
          <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('about.mission.title') }}</h2>
            <p class="text-gray-600 leading-relaxed">
              {{ $t('about.mission.content') }}
            </p>
          </div>

          <!-- Vision -->
          <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
            <div class="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('about.vision.title') }}</h2>
            <p class="text-gray-600 leading-relaxed">
              {{ $t('about.vision.content') }}
            </p>
          </div>

          <!-- Values -->
          <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('about.values.title') }}</h2>
            <ul class="text-gray-600 space-y-2">
              <li class="flex items-start">
                <span class="text-primary-700 mr-2">•</span>
                <span>{{ $t('about.values.integrity') }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-700 mr-2">•</span>
                <span>{{ $t('about.values.excellence') }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-700 mr-2">•</span>
                <span>{{ $t('about.values.innovation') }}</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary-700 mr-2">•</span>
                <span>{{ $t('about.values.partnership') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Story -->
    <section class="py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-display font-bold text-gray-900 mb-4">{{ $t('about.story.title') }}</h2>
          <div class="w-24 h-1 bg-primary-700 mx-auto"></div>
        </div>
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-600 text-lg leading-relaxed mb-6">
            {{ $t('about.story.p1') }}
          </p>
          <p class="text-gray-600 text-lg leading-relaxed mb-6">
            {{ $t('about.story.p2') }}
          </p>
          <p class="text-gray-600 text-lg leading-relaxed">
            {{ $t('about.story.p3') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Operations -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-display font-bold text-gray-900 mb-4">{{ $t('about.operations.title') }}</h2>
          <p class="text-xl text-gray-600">{{ $t('about.operations.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="relative">
            <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div class="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ $t('about.operations.consultation.title') }}</h3>
              <p class="text-gray-600">
                {{ $t('about.operations.consultation.description') }}
              </p>
            </div>
            <div class="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
              <svg class="w-8 h-8 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>

          <div class="relative">
            <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div class="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ $t('about.operations.sourcing.title') }}</h3>
              <p class="text-gray-600">
                {{ $t('about.operations.sourcing.description') }}
              </p>
            </div>
            <div class="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
              <svg class="w-8 h-8 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>

          <div class="relative">
            <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div class="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ $t('about.operations.logistics.title') }}</h3>
              <p class="text-gray-600">
                {{ $t('about.operations.logistics.description') }}
              </p>
            </div>
            <div class="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
              <svg class="w-8 h-8 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
              </svg>
            </div>
          </div>

          <div>
            <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div class="w-12 h-12 bg-primary-700 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                4
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ $t('about.operations.support.title') }}</h3>
              <p class="text-gray-600">
                {{ $t('about.operations.support.description') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Expertise -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-display font-bold text-gray-900 mb-4">{{ $t('about.expertise.title') }}</h2>
          <p class="text-xl text-gray-600">{{ $t('about.expertise.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg class="w-16 h-16 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ $t('about.expertise.quality.title') }}</h3>
            <p class="text-gray-600">{{ $t('about.expertise.quality.description') }}</p>
          </div>

          <div class="text-center">
            <div class="w-32 h-32 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg class="w-16 h-16 text-accent-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ $t('about.expertise.logistics.title') }}</h3>
            <p class="text-gray-600">{{ $t('about.expertise.logistics.description') }}</p>
          </div>

          <div class="text-center">
            <div class="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg class="w-16 h-16 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ $t('about.expertise.compliance.title') }}</h3>
            <p class="text-gray-600">{{ $t('about.expertise.compliance.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-display font-bold mb-6">{{ $t('about.cta.title') }}</h2>
        <p class="text-xl text-gray-200 mb-8">
          {{ $t('about.cta.subtitle') }}
        </p>
        <router-link
          to="/contact"
          class="inline-flex items-center px-8 py-4 bg-white text-primary-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-xl"
        >
          {{ $t('about.cta.button') }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
// About page with mission, vision, and operations
</script>
