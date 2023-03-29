<template>
  <div class="form-container">
    <div class="grid">
      <custom-input
        title="Firstname"
        placeholderText="Enter Firstname"
      ></custom-input>
      <custom-input
        title="Lastname"
        placeholderText="Enter Lastname"
      ></custom-input>
      <custom-input title="Email" placeholderText="Enter Email"></custom-input>
      <custom-input
        title="Phone Number"
        placeholderText="Mobile Number"
      ></custom-input>
      <custom-input title="Date of Birth"></custom-input>
      <div class="formfield">
        <h4>Gender</h4>

        <div class="flex radio-div">
            <div class="flex align-center">
          <input type="radio" aria-selected="true" checked />
          <p>Male</p>
        </div>
        <div class="flex place-items-center">
          <input type="radio" aria-selected="" />
          <p>Female</p>
        </div></div>
      </div>
      <custom-input title="State" inputType="select"></custom-input>
      <custom-input title="LGA" inputType="select"></custom-input>
    </div>
    <custom-input class="mt-2" title="Address"></custom-input>

    <button class="mt-2">Proceed</button>
  </div>
</template>

<script>
import CustomInput from "./CustomInput.vue";
import "../assets/theme/form.scss";

export default {
  name: "FormField",
  components: {
    CustomInput,
  },
};
</script>

<style scoped lang="scss">

.grid{
}

.form-container{
  max-height: 50rem;
  height: calc(100vh - 8rem);
  margin: auto;
  overflow-y: scroll;

   @media only screen and (max-width: 625px) {
    display: flex;
      flex-direction: column;
     
      }
}

h4 {
    margin: .5rem 0;
    color: #404690;
  }
.radio-div{
    height: 3.5rem;
    display: flex;
    align-items: center;
    width: 100%;

    div{
        width: 5rem;
    }
    
    p{
        margin: 0;
    }
    input[type="radio"] {
  -ms-transform: scale(1.8);
  -webkit-transform: scale(1.8); 
  transform: scale(1.8);
  margin: 0 .5rem 0 0;
}
    
}

</style>