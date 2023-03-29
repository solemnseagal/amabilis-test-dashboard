<template>
  <div class="formfield">
    <h4>{{ title }}</h4>
    <div class="selectdiv" v-if="inputType==='select'">
    <select :name="selectName" :id="selectId"></select>
    </div>
    <div v-else class="inputdiv">
    <input type="text" :placeholder="placeholderText" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    title: {
        type: String,
        required: true
    },
    placeholderText: {
        type: String,
        default: (props) => props.title
    },
    inputType:{
        type: String,
    },
    selectName: {
        type: String,
    },
    selectId:{
        type: String
    }
  }
};
</script>

<style scoped lang="scss">
.formfield {

  h4 {
    margin: .5rem 0;
    color: #404690;
  }

  .inputdiv{
    width: 100%;
  }

  input, select {
    width: 100%;
    height: 3.5rem;
    border-radius: 8px;
    outline: 0px;
    background: white;
    border: 2px solid #0d6cea;
    padding-inline: 0.5rem;
    font-size: 1rem;
    
  }

  .selectdiv {
  position: relative;
  /*Don't really need this just for demo styling*/
 
  float: left;
  width: 100%;
}

.selectdiv:after {
  content: '\f078';
   background: url('../assets/icons/Arrow.png') no-repeat center;
   background-size: 10px;
  font: normal normal normal 17px/1 FontAwesome;
  color: #333;
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  right: 14px;
  /*Adjust for position however you want*/
  
  top: 18px;
  padding: 0 0 2px;
  border-bottom: 1px solid #999;
  /*left line */
  
  position: absolute;
  pointer-events: none;
}

  select::-ms-expand {
     display: none;
}

select{
    -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  display: block;
  padding: 0px 24px;
  font-size: 16px;
  line-height: 1.75;
  color: #333;
  background-image: none;
  -ms-word-break: normal;
  word-break: normal;
}
}
</style>