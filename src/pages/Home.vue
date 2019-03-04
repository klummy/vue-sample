<template>
  <div :class="$style.pageWrapper">
    <Nav/>

    <main :class="$style.main">
      <header :class="$style.homeHeader">
        <ul :class="$style.categoriesBlock">
          <li :class="$style.categoryBlockItem">
            <span>Categories</span>
          </li>

          <li :class="$style.categoryBlockItem" v-for="category in categories" :key="category.id">
            <span>{{category.name}}</span>
            <i class="material-icons">keyboard_arrow_right</i>
          </li>
        </ul>

        <div :class="$style.headerBanner"></div>
      </header>

      <ProductList :products="products.slice(0, 4)" title="Explore New Stuff"/>

      <ProductList :products="products.slice(0, 4)" title="Explore New Stuff"/>
    </main>

    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import reqClient from '@/libs/reqClient';

import Footer from '@/components/Footer.vue';
import ProductList from '@/components/ProductList.vue';
import Nav from '@/components/Nav.vue';

@Component({
  components: {
    Footer,
    ProductList,
    Nav,
  },
})
export default class Home extends Vue {
  private categories: any[] = [];

  private products: any[] = [];

  loadCategories() {
    reqClient
      .get('categories')
      .then((response) => {
        this.categories = response.data;
      })
      .catch((err) => {
        console.log('err => ', err);
      });
  }

  loadProducts() {
    reqClient
      .get('products')
      .then((response) => {
        this.products = response.data as any[];
        console.log('this.products => ', this.products);
      })
      .catch((err) => {
        console.log('err => ', err);
      });
  }

  mounted() {
    this.loadCategories();
    this.loadProducts();
  }
}
</script>

<style lang="scss" module>
.pageWrapper {
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}

.main {
  flex: 1;
  margin: 0 auto;
  max-width: var(--page-width);
  padding: 10px;
  width: 100%;
}

.homeHeader {
  display: flex;
  flex-wrap: wrap;
}

.categoriesBlock {
  box-shadow: var(--generic-shadow);
  list-style: none;
  margin: 0;
  margin-right: 15px;
  padding: 0;
  width: 300px;
}

.categoryBlockItem {
  background-color: #fff;
  border-bottom: 1px solid rgb(230, 230, 230);
  cursor: pointer;
  display: flex;
  font-size: 14px;
  opacity: 0.7;
  padding: 20px 15px;
  transition: background-color 0.3s ease-in-out;

  &:first-child {
    background-color: #15aa38;
    color: #fff;
    text-transform: uppercase;
  }

  &:hover {
    background-color: rgb(230, 230, 230);
    opacity: 1;
  }

  i {
    font-size: 18px;
    margin-left: auto;
  }
}

.headerBanner {
  border: 1px solid #eee;
  flex: 1;
}
</style>
