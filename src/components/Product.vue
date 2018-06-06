<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Product">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/product')"/>
    </ActionBar>

    <FlexboxLayout flexDirection="column" backgroundColor="#3c495e">
      <FlexboxLayout flexDirection="row" justifyContent="center">
        <Button class="btn btn-primary" @tap="$router.push('/addProduct')">Add Product</Button>
      </FlexboxLayout>
      <ListView for="item in productList" @itemTap="onItemTap"> 
        <v-template>
          <Label :text="item.name" /> 
        </v-template>
      </ListView>
    </FlexboxLayout>


  </Page>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {  
     data () {
      return {
        productList:[
          {name:'Supermi Rasa Ayam',harga:2000,stok:20},
          {name:'Supermi Rasa Soto',harga:2200,stok:20},
          {name:'Supermi Rasa Ini Rasamu',harga:2600,stok:20},
          {name:'Supermi Goreng',harga:2600,stok:20},
        ]
      };  
    },
    computed: {
      message () {
        return this.$store.state.counter.count.toString();
      },
      surprise () {
        return (this.$store.state.counter.count >= 6);
      },
    },
    methods: mapActions([
      'decrement',
      'increment',
    ]),
  };
</script>

<style scoped>
  .hello-world {
    margin: 20;
  }

  Label {
    color: red;
  }
</style>
