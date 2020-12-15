<template>
  <div class="container">
    <div>
      <h1 class='title'>Mockpants: The Spongebob Mocking Text Mutator</h1>
      <SassBobMockPants />
      <Mutator />
    </div>
  </div>
</template>

<script>
import SassBobMockPants from '~/components/SassBobMockPants'
import Mutator from '~/components/Mutator'
export default {
  components: {
    SassBobMockPants,
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
  @apply block uppercase tracking-wide text-gray-100 text-xl font-bold mb-4 underline text-center;
}
</style>
