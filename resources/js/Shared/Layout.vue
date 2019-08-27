<template>
  <main class="flex flex-col h-full bg-blue-400">
    <nav class="navbar bg-blue-500 py-4">
      <div class="container">
        <inertia-link class="text-xl font-semibold text-white" href="/">Laravel</inertia-link>
      </div>
    </nav>

    <div class="flex-1">
      <slot />
    </div>

    <footer class='w-full text-center border-t border-gray-600 p-4 pin-b'>
      This is our footer
    </footer>
  </main>
</template>
