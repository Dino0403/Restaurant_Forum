<template>
  <div class="card">
    <div class="card-header">最新餐廳</div>
    <div class="card-body">
      <div v-for="restaurant in restaurants" v-bind:key="restaurant.id">
        <h4>
          <a href="#">{{ restaurant.name }}</a>
          <small>{{
            restaurant.Category ? restaurant.Category.name : "未分類"
          }}</small>
        </h4>
        <p>
          {{ restaurant.description }}
        </p>
        {{ restaurant.createdAt | fromNow }}
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  // filter 針對最後呈現的資料作格式化的動作
  filters: {
    fromNow(value) {
      if (!value) {
        return "-";
      }
      // 使用 moment 回傳 fromNow 時間
      return moment(value).fromNow();
    },
  },
  props: {
    restaurants: {
      type: Array,
      required: true,
    },
  },
};
</script>


<style scoped>
small {
  font-size: 10px;
}
</style>