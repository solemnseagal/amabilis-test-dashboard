<template>
  <div class="box-container mb-2">
    <div class="flex content align-center justify-between">
      <div class="desc">
        <h3>{{ title }}</h3>
        <h3>{{ amount }}</h3>
      </div>

      <div class="icon-div">
        <slot name="icon"/>
      </div>
    </div>

    <div class="arrow">
      <img src="../assets/icons/Arrow3.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
    props: ['title', 'amount']
};
</script>

<style lang="scss" scoped>
.box-container {
  width: 16rem;
  height: 8rem;
  background-color: #d0def4;
  border-radius: 8px;
  border: 0px;
  position: relative;
  padding-inline: 1.8rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

   @media only screen and (max-width: 625px) {
      width: 48%;
      min-width: 10rem;
      padding-inline: .5rem;
      margin-inline: auto;
      height: 6.5rem;
      }
}

 @media only screen and (max-width: 625px) {
      h3{
        font-size: .9rem;
        margin: .2rem 0;
      }
  }

.content{
    width: 100%;
    height: 100%;
    background: transparent;
}

.desc{
    width: fit-content;
    background: transparent;
    height: fit-content;

    h3{
        margin: .5rem 0;
        color: #1C2486;
        font-size: 1.1rem;
    }
}
.icon-div{
    background: transparent;
    width: fit-content;
    height: fit-content;
}

.arrow {
  position: absolute;
  width: 2.2rem;
  background: transparent;
  height: 1rem;
  bottom: 16px;
  right: 16px;
}
</style>