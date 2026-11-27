<template>
  <span class="inline-flex items-center gap-3" :class="light ? 'text-white' : 'text-primary-900'">
    <svg viewBox="0 0 64 64" class="h-11 w-11 shrink-0" aria-hidden="true">
      <rect width="64" height="64" rx="12" fill="#0B1929"/>
      <path d="M10 18h7v13l13-13h10L25 33l15 15H30L17 35v13h-7z" fill="#fff"/>
      <path d="M33 18h8l8 12 7-12h8L52 38v10h-7V38z" fill="#D5B16B" transform="translate(-3 0)"/>
      <path d="M49 9h8v8m0-8-9 9" stroke="#D5B16B" stroke-width="2" fill="none"/>
    </svg>
    <span class="leading-none">
      <span class="block font-display text-xl font-extrabold tracking-tight">KY <span class="font-semibold">EXPORT</span></span>
      <span class="mt-1 block text-[9px] font-semibold uppercase tracking-[.22em] opacity-75">{{ $t('home.hero.badge') }}</span>
    </span>
  </span>
</template>
<script setup>
defineProps({ light: Boolean })
</script>
