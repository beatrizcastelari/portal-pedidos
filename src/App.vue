<template>
  
  <MenuComponent/>
  <BodyComponent/>
  
  
</template>

<script>
import BodyComponent from "./components/BodyComponent.vue";
import MenuComponent from "./components/MenuComponent.vue";

export default {
  name: 'App',
  components: {
    MenuComponent,
    BodyComponent,
}
}
</script>

