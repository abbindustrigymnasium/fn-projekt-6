<!-- default layout -->
<template>
    <div>
      <Navbar></Navbar>
      <slot />
      <Footer></Footer>
    </div>
</template>
  
<script>
  import Navbar from '../components/navbar.vue'
  import Footer from '../components/footer.vue'
  export default{
    data(){
      return{
        Navbar,
        Footer,
      }
    },
    components:{
      Navbar,
      Footer,
    }
  }
</script>