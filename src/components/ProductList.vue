<template>
  <div :class="$style.productList">
    <div :class="$style.productListTitle">
      <h2>{{title}}</h2>
    </div>

    <ul :class="$style.productItems">
      <li :class="$style.productItem" v-for="product in products" :key="product.id">
        <div :class="$style.productItemImage"></div>
        <div :class="$style.productItemMeta">
          <span>{{product.name}}</span>
          <span>
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
          </span>
          <span>&#8358;{{parseInt(product.price, 10).toLocaleString()}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ProductList extends Vue {
  @Prop() private products!: any[];

  @Prop() private title!: string;
}
</script>

<style lang="scss" module scoped>
.productList {
  box-shadow: var(--generic-shadow);
  margin-top: 50px;
}

.productListTitle {
  border-bottom: 1px solid rgb(230, 230, 230);
  padding: 15px;

  h2 {
    font-size: 14px;
    margin: 0;
    text-transform: uppercase;
  }
}

.productItems {
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 20px 15px;
}

.productItem {
  border: 1px solid rgb(230, 230, 230);
  display: flex;
  flex-direction: column;
  width: 23%;

  .productItemImage {
    background-image: url("../assets/product.jpg");
    background-position: center;
    background-size: cover;
    height: 300px;
    margin-bottom: 10px;
  }
}

.productItemMeta {
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  span {
    margin-bottom: 10px;

    &:first-child {
      font-weight: bold;
    }
  }
}
</style>
