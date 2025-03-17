<template>
  <div class="h-dvh w-screen">

    <Swirl></Swirl>

    <div class="text-white relative z-10 px-12 py-1 md:w-[70%] mx-auto">

      <img src="~/assets/img/kat-hartog-logo.svg" alt="Kat Hartog" height="64" width="64" class="animate-fade1 block my-20 md:my-[12vmin] mx-auto" />

      <h1 class="animate-fade2 mt-12 font-title font-semibold text-[36px] leading-[1.1] md:text-big-title md:leading-[1.05]">Working at the edge of creative technology</h1>

      <div class="lg:w-[60%]">
        <p class="animate-fade3 my-12 md:my-16 font-sans lg:text-[20px]">Hi, I&rsquo;m Kat. I&rsquo;m a full-stack web developer from Toronto with a background in experiential installations, art, media and design. Looking to collaborate on a project? Let&rsquo;s connect.</p>
      </div>

      <div class="animate-fade4 flex gap-2 mt-6 lg:text-[18px]">
        <NuxtLink
          class="py-1 underline decoration-transparent hover:decoration-white transition-colors underline-offset-2"
          target="blank" to="https://www.linkedin.com/in/kathrynhartog/">LinkedIn</NuxtLink>
        <span class="py-1">/</span>
        <NuxtLink
          class="py-1 underline decoration-transparent hover:decoration-white transition-colors underline-offset-2"
          target="blank" to="mailto:hello@kathartog.com">hello@kathartog.com</NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()

useHead({
  htmlAttrs: {
    class: 'bg-black',
  },
});

useSeoMeta({
  title: 'Kat Hartog / Toronto Web Developer',
  ogTitle: 'Kat Hartog / Toronto Web Developer',
  description: 'Creating engaging experiences on the web and elsewhere.',
  ogDescription: 'Creating engaging experiences on the web and elsewhere.',
  ogImage: config.public.siteURL + '/kat-hartog-og.png',
  twitterCard: 'summary_large_image',
})
</script>
