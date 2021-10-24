<template>
<div>
    <h1>This is a test</h1>
    <div class="row">
        <div class="col">
            <input
                type="text"
                placeholder="Wallet"
                class="form-control"
                v-model="walletAddress"
                id="walletAddress"
        />
        </div>
    </div>
    <div class="row mt-3">
        <div class="col">
            <button class="btn btn-primary full-width" @click="calculate">Calculate</button>
        </div>
    </div>

    <div class="row mt-3">
        <div class="col">
            <label for="walletBalance">Balance</label>
            <input
                type="text"
                placeholder="Balance"
                class="form-control"
                v-model="balance.decimal"
                id="walletBalance"
                readonly="true"
                />
        </div>
    </div>

    <div class="alert alert-success mt-3" role="alert" v-if="status=='success'">
        {{ balance.wei }}
        {{ balance.decimal }}
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CalculatorDataService from '../../services/CalculatorDataService'
import ResponseData from "../../types/ResponseData"

export default defineComponent({
  name: "Test",
  data() {
    return { 
      walletAddress: "",
      balance: {
          wei: 0,
          decimal: 0
      },
      status: "",
      service: "test"
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
          walletAddress: this.walletAddress,
          service: this.service,
        }
        CalculatorDataService.calculate(data)
        .then((response: ResponseData) => {
          this.balance.wei = response.data.balance_wei
          this.balance.decimal = response.data.balance_decimal
          this.status = response.data.status
        })
      } else {
        this.status = "error"
      }
    }
  }
})
</script>
