<template>
  <div class="container">
    <div>
      <div>
        <h1 class='title'>MockBob SassyPants</h1>
        <h2 class='subtitle'>A Spongebob Mocking Text Mutator</h2>
      </div>
      <MockBobSassyPants />
      <Mutator />
    </div>
  </div>
</template>

<script>
import MockBobSassyPants from '~/components/MockBobSassyPants'
import Mutator from '~/components/Mutator'
export default {
  components: {
    MockBobSassyPants,
    Mutator
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  @apply block uppercase tracking-wide text-gray-100 text-xl font-bold mb-2 underline text-center;
}
.subtitle {
  @apply block uppercase tracking-wide text-gray-100 font-bold mb-4 text-center;
}
</style>
