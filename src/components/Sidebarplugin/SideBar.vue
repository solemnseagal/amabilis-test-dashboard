<template>
  <div class="sidebar">
    <div class="sidebar-wrapper">
      <div class="logo">
        <a href="/">
        <img src="../../assets/icons/logo.png" alt="">
        </a>
      </div>
      <slot>

      </slot>
      <ul class="nav">
       
        <slot name="links">
         
        </slot>
      </ul>
    </div>
    
  </div>
</template>
<script>

  export default {
    props: {
      title: {
        type: String,
        default: "360 Corporation"
      },
      
    },
  };
</script>
