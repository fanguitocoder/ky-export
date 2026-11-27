<template>
  <article class="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors hover:border-accent-500">
    <div class="aspect-[5/4] overflow-hidden bg-white p-6">
      <img :src="product.image" :alt="name" loading="lazy" class="h-full w-full object-contain transition-transform duration-500 motion-safe:group-hover:scale-105" />
    </div>
    <div class="flex flex-1 flex-col border-t border-slate-100 p-5 sm:p-6">
      <p class="mb-2 text-xs font-semibold uppercase tracking-wider text-accent-800">{{ category }}</p>
      <h3 class="mb-2 text-lg font-bold leading-snug text-primary-900">{{ name }}</h3>
      <p class="mb-6 line-clamp-3 text-sm leading-relaxed text-slate-600">{{ description }}</p>
      <router-link :to="{ path: '/contact', query: { product: name } }" class="mt-auto flex items-center justify-between border-t border-slate-200 pt-4 font-semibold text-primary-900 hover:text-accent-800">
        {{ $t('products.requestQuote') }} <span aria-hidden="true">↗</span>
      </router-link>
    </div>
  </article>
</template>
<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const props = defineProps({ product: { type: Object, required: true } })
const { t } = useI18n()
const name = computed(() => t(props.product.translationKey + '.name'))
const description = computed(() => t(props.product.translationKey + '.description'))
const category = computed(() => t(({ Appliances: 'productCategories.appliances', Electronics: 'productCategories.electronics', 'Kitchen Appliances': 'productCategories.kitchenAppliances', 'Home Care': 'productCategories.homeCare' })[props.product.category] || 'productCategories.all'))
</script>
