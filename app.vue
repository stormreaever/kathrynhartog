<template>
  <div class="p-6 flex items-center gap-6 md:gap-12">

    <div class="bg-slate-200 w-1/4 h-[calc(100svh-48px)] min-w-9">

      <img src="~/assets/img/swirl-vertical.jpg" alt="" class="h-full w-full object-cover" />

    </div>

    <div class="max-w-[384px] md:ml-[15%] mr-6 md:mr-12 pb-12">

      <img src="~/assets/img/kat-hartog-logo.svg" alt="Kat Hartog" height="48" width="48" />

      <h1 class="mt-12 font-serif font-semibold text-xl leading-[1.3]">Hi, I&rsquo;m Kat. I&rsquo;m an experienced
        full-stack
        web developer located in Toronto. </h1>

      <p class="my-5 font-serif">With a background in experiential installations, art, media and design, I work at the
        intersection of creativity and technology. If you have a project or just want to chat, let&rsquo;s connect.</p>

      <div class="flex gap-2 mt-6 text-kh-red text-sm">
        <NuxtLink
          class="py-1 underline decoration-transparent hover:decoration-kh-red transition-colors underline-offset-2"
          target="blank" to="https://www.linkedin.com/in/kathrynhartog/">LinkedIn</NuxtLink>
        <span class="py-1">/</span>
        <NuxtLink
          class="py-1 underline decoration-transparent hover:decoration-kh-red transition-colors underline-offset-2"
          target="blank" to="https://www.instagram.com/kat_hartog_/">Instagram</NuxtLink>
        <span class="py-1">/</span>
        <NuxtLink
          class="py-1 underline decoration-transparent hover:decoration-kh-red transition-colors underline-offset-2"
          target="blank" to="https://github.com/stormreaever">GitHub</NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  title: 'Kat Hartog / Toronto Web Developer',
  meta: [
    { name: 'description', content: 'Creating engaging experiences on the web and elsewhere.' }
  ],
})
</script>
