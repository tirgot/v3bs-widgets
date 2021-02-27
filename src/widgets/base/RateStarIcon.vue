<template>
  <span style="color:#ffc107" title="score">
    <i v-for="i in star_full" class="fas fa-star fa-fw"></i>
    <i v-if="star_mid == 'full'" class="fas fa-star fa-fw"></i>
    <i v-else-if="star_mid == 'half'" class="fas fa-star-half-alt fa-fw"></i>
    <i v-for="i in star_empty" class="far fa-star fa-fw"></i>
  </span>
</template>

<script>
export default {
  name: 'RateStarIcon',
  props: ['score'],
  data(){
    return {
      star_full: Math.floor(this.score),
      star_mid: ((this.score % 1) < 0.25) ? false : ((this.score < 0.75) ? 'half' : 'full'),
      star_empty: 0
    }
  },
  beforeMount() {
    this.star_empty = 5 - this.star_full - (this.star_mid ? 1 : 0);
  }
}
</script>

