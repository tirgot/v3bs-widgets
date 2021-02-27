<template>
  <div class="card bg-light p-2" :style="blockstyle" @dblclick="expandText"><slot /></div>
</template>

<script>
export default {
  name: 'HeightedText',
  props: ['height'],
  data(){
    return {
      blockstyle: {
        'max-height': (this.height ? this.height : '80px'),
        'overflow': 'hidden',
        'white-space': 'pre-wrap'
      }
    }
  },
  methods: {
    expandText(){
      this.blockstyle = {'white-space': 'pre-wrap',}
    }
  }
}
</script>

