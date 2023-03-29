<template>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
            <div class="modal-default-button" @click="$emit('close')">
               <img src="../assets/icons/close.svg" alt="">
              </div>
            <slot name="body">
              
            </slot>
          </div>  
    
      </div>
    </div>
</template>

<script>
export default {
    data: function() {
    return {
      showModal: false
    }
  }
}
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 45%;
  min-width: 21rem;
  background: #F6F9FF;
  height: 100%;
  padding: 2rem 1rem;
  margin: 0 0 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;

   @media only screen and (max-width: 625px) {
      margin-inline: auto !important;
      padding-inline: 0;
      }
}

.modal-default-button {
  float: right;
  margin-right: 2rem;
  cursor: pointer;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>