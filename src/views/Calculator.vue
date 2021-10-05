<template>
  <div>
    <h1>This is the Simple Calculator</h1>
    <div class="row">
      <div class="col">
        <input
                type="text"
                placeholder="First Number"
                class="form-control"
                v-model="num1"
                id="num1"
        />
      </div>
      <div class="col">
        <input
                type="text"
                placeholder="Second Number"
                class="form-control"
                v-model="num2"
                id="num2"
        />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <select v-model="operation" id="operation" class="form-control">
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
        </select>
      </div>
      <div class="col">
        <button class="btn btn-primary full-width" @click="calculate">Calculate</button>
      </div>
    </div>
  </div>

  <div class="alert alert-success mt-3" role="alert" v-if="status=='success'">
    {{ sum }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CalculatorDataService from '../services/CalculatorDataService'
import ResponseData from "../types/ResponseData"

export default defineComponent({
  name: "SimpleCalculator",
  data() {
    return { 
      num1: 0,
      num2: 0,
      operation: "add",
      sum: "",
      status: "",
      service: "simple-calculator"
    }
  },
  methods: {
    validate() {
      let valid = true
      // let valid = false
      // if(typeof(this.num1) == 'number' && typeof(this.num2) == 'number'){
      //   valid = true
      // }
      // console.log(valid)
      return valid
    },
    calculate() {
      if(this.validate()) {
        let data = {
          num1: this.num1,
          num2: this.num2,
          operation: this.operation,
          service: this.service,
        }
        CalculatorDataService.calculate(data)
        .then((response: ResponseData) => {
          this.sum = response.data.sum
          this.status = response.data.status
          // console.log(response.data)
        })
      } else {
        this.status = "error"
      }
    }
  }
})
</script>
