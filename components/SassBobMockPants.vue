<template>
  <div>
    <img src='/images/mocking-spongebob.jpeg' alt='Mocking Spongebob' class='mockpants-image' />
  </div>
</template>

<style>
.mockpants-image {
  animation: 2500ms appear;
  margin: auto;
  width: 50%;
  height: auto;

  @apply rounded-xl shadow-2xl mb-12;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
