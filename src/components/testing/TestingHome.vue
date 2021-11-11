<template>
  <div>
    <h1>A collection of testing functions</h1>
    <div>
      <div class="col">
        <ul>
          <li>
            <a href="/testing/get-token-by-contract"
              >Get token details by contract address</a
            >
          </li>
          <li>
            <a href="/testing/get-matic-balance"
              >Get MATIC balance by address</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div
      class="alert alert-success mt-3"
      role="alert"
      v-if="status == 'success'"
    >
      {{ balance.wei }}
      {{ balance.decimal }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CalculatorDataService from "../../services/CalculatorDataService";
import ResponseData from "../../types/ResponseData";

export default defineComponent({
  name: "Test",
  data() {
    return {
      tokenAddress: "",
      balance: {
        wei: 0,
        decimal: 0,
      },
      status: "",
      service: "getToken",
    };
  },
  methods: {
    validate() {
      let valid = true;
      // let valid = false
      // if(typeof(this.num1) == 'number' && typeof(this.num2) == 'number'){
      //   valid = true
      // }
      // console.log(valid)
      return valid;
    },
    calculate() {
      if (this.validate()) {
        let data = {
          tokenAddress: this.tokenAddress,
          service: this.service,
        };
        CalculatorDataService.calculate(data).then((response: ResponseData) => {
          this.balance.wei = response.data.balance_wei;
          this.balance.decimal = response.data.balance_decimal;
          this.status = response.data.status;
        });
      } else {
        this.status = "error";
      }
    },
  },
});
</script>
