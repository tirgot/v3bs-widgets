<template>
  <div v-if="reviews.length > 0">
    <div v-for="review in reviews" class="small mb-2" :key="review.id">
      <div class="d-flex">
        <span><RateStarIcon :score="review.score" /></span>
        <span class="ms-auto">{{ review.date_created }}</span>
      </div>
      <div>{{ review.product_title }}</div>
      <HeightedText v-if="review.body" height="80px" :key="review.id">{{ review.body }}</HeightedText>
    </div>
  </div>
  <div v-else class="alert alert-warning text-align">
    --- Customer not placed an order yet. ---
  </div>
</template>

<script>

import RateStarIcon from "../../widgets/base/RateStarIcon.vue";
import HeightedText from "../../widgets/base/HeightedText.vue";
export default {
  name: 'TabReview',
  components: {HeightedText, RateStarIcon},
  props: ['reviews']
}
</script>
