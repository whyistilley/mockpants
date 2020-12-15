<template>
<div class='md:w-full m-4'>
  <form>
    <div class='mutator'>
      <label class='mutator-label' for='mutator-input'>{{ label }}</label>
      <textarea id='mutator-input' v-model='text' placeholder='Type something in here to mutate it!'/>
    </div>
    <button @click='this.handleClick' class='mutator-btn'>{{ btnLabel }}</button>
    <button @click='this.handleCopy' :class='{ "disabled": canCopy }' class='mutator-btn'>Copy</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'Mutator',
  data() {
    return {
      text: '',
      btnLabel: 'Mutate',
      label: 'text to mutate'
    }
  },
  computed: {
    canCopy() {
      return !this.text;
    }
  },
  methods: {
    handleClick: function (event) {
      event.preventDefault()
      switch (this.btnLabel) {
        case 'Mutate':
          this.label = 'mutated text';
          this.btnLabel = 'Reset';
          this.mutateText(this.text);
          break;
        case 'Reset':
          this.label = 'text to mutate';
          this.btnLabel = 'Mutate';
          this.text = '';
          break;
        default:
          this.label = 'text to mutate';
          this.btnLabel = 'Reset';
          this.text = '';
      }
    },
    mutateText: function (text) {
      let mutatedText = ''
      for (let i = 0; i < text.length; i++) {
        i % 2 ? mutatedText += text[i].toLowerCase() : mutatedText += text[i].toUpperCase()
      }
      this.text = mutatedText;
    },
    handleCopy: async function (event) {
      event.preventDefault()
      if (this.text) {
        await navigator.clipboard.writeText(this.text);
      }
    }
  }
}
</script>

<style scoped>
.mutator {
  @apply mb-2;
}

.mutator-label {
  @apply block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2;
}

#mutator-input {
  @apply appearance-none resize-none shadow-md block w-full bg-gray-100 text-gray-700 rounded py-3 px-4 mb-3 h-64 leading-tight;
}

.mutator-btn {
  @apply text-white bg-green-600 rounded px-4 py-2 text-lg shadow;
}
.mutator-btn:hover {
  @apply bg-green-700;
}

.mutator-btn:focus {
  @apply outline-none;
}

#mutator-input:focus {
  @apply outline-none bg-white;
}

.disabled {
  @apply opacity-50 cursor-not-allowed;
}
</style>
