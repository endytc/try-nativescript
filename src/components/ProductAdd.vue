<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Add Product">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <StackLayout backgroundColor="#3c495e">
      <Label text="Product" />
      <TextField v-model="name" />
      <Label text="Price" />
      <TextField v-model="price" />
      <Label text="Stock" />
      <TextField v-model="stock" />
      <Button @tap="simpan" text="Save" class="btn btn-primary"/>
    </StackLayout>


  </Page>
</template>

<script>
  import { mapActions } from 'vuex';
  import firebase from 'firebase/app';
  // import firebase from 'nativescript-plugin-firebase';
  require('firebase/storage');
  require("firebase/auth");
  require("firebase/database");
  require("firebase/firestore");
  require("firebase/messaging");
  require("firebase/functions");

  export default {  
     data () {
      return {
        name:'Supermi',
        price:1900,
        stock:20
      };  
    },
    computed: {
      },
    methods: {
      simpan(){
        firebase.initializeApp({
          apiKey: "AIzaSyC5jtZIqUYmwi_U_eC2Gj2Iss7FFNIbDc8",
          authDomain: "coba-native-script.firebaseapp.com",
          databaseURL: "https://coba-native-script.firebaseio.com",
          projectId: "coba-native-script",
          storageBucket: "coba-native-script.appspot.com",
          messagingSenderId: "960212838613"
        });
        console.log(this.name);
        firebase.database().ref('product').set({
          name: this.name,
          price: this.price,
          stock: this.stock,
        });
        // const productCollection = firebase.firestore().collection("products");
        // productCollection.add({
        //   name: this.name,
        //   price: this.price,
        //   stock: this.stock,
        // }).then(documentRef => { 
        //   console.log(this.name+' added with auto-generated ID: ${documentRef.id}');
        // });
        
        alert({
          title: "Your title",
          message: "Your message",
          okButtonText: "Your OK button text"
        }).then(() => {
          console.log("Alert dialog closed");
        });
      }
    },
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
