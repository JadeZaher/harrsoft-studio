<template>
  <div id="app-layout" class="bg-stone-100 min-h-screen flex flex-col justify-between items-center ">
    <header class=" fixed p-5 flex items-center px-12 w-full z-20">
      <nav class="flex justify-between items-center w-full ">
        <NuxtLink to="/" class="font-bold bg-stone-200 p-5  rounded-xl">
          Home
        </NuxtLink>
        <div class="flex gap-[4em] self-start p-5 bg-stone-200 rounded-xl">
          <NuxtLink class="font-bold" to="/about">
            About
          </NuxtLink>
          <NuxtLink class="font-bold" to="/about">
            Services
          </NuxtLink>
          <NuxtLink class="font-bold" to="/about">
            Projects
          </NuxtLink>
          <NuxtLink class="font-bold" to="/posts">
            Blog
          </NuxtLink>
        </div>
      </nav>
    </header>

    <slot />
    <footer class=" bottom-0">
      <div>
        <p>Website created by</p>
        <p>HarrSoft Studio.</p>
        <!-- <div id="boring-links">
            <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
            <NuxtLink to="/tos">Terms of Service</NuxtLink>
          </div> -->
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* #boring-links > * {
  margin-left: 1rem;
  margin-right: 1rem;
} */

.router-link-exact-active {
  @apply text-primary;
}
</style>
