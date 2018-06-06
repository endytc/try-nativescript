<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Product">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>

    <FlexboxLayout flexDirection="column" backgroundColor="#3c495e">
      <Label text="Terigu" height="70" backgroundColor="#43b883"/>
      <Label text="Kacang" height="70" backgroundColor="#1c6b48"/>
      <Label text="Teri" height="70" backgroundColor="#289062"/>
    </FlexboxLayout>


  </Page>
</template>

<script>
  export default {
    data () {
      return {
        surprise: false,
      };
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
