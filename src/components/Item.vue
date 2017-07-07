<template>
  <div class="tabber-item" @click="fn()">
      <span v-show="bol"><slot name="normalImg"></slot><br></span>
      <span v-show="!bol"><slot name="activeImg"></slot><br></span>
      <span v-text="txt"></span>
  </div>
</template>
<script>
  export default {
    name: 'Item',
    props:["txt","id","mark"],
    computed:{
        bol(){
            if(this.$parent.select==this.id){return false}
            return true
        }
    },
    methods:{
      fn(){
        if(this.$route.path.indexOf("/"+this.id)!==-1){return false};
        this.$router.push("/"+this.id+`?id=${this.mark}`);
        this.$emit("koko",this.id)
      }
    }
  }
</script>
<style>
  .tabber-item{width:20%;height:0.6rem;float:left;color:grey;font-size:0.12rem}
  .tabber-item img{width:0.3rem}
</style>

