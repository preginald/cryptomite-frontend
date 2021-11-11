<template>
  <div>
    <h4>Get token details by contract address</h4>
    <div class="row">
      <div class="col">
        <input
          type="text"
          placeholder="Wallet Address"
          class="form-control"
          v-model="senderAddress"
          id="walletAddress"
        />
      </div>
      <div class="col">
        <input
          type="text"
          placeholder="Token Address"
          class="form-control"
          v-model="tokenAddress"
          id="tokenAddress"
        />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <button class="btn btn-primary full-width" @click="calculate">
          Calculate
        </button>
      </div>
    </div>

    <div class="row mt-3" v-if="token.reserves.length > 1">
      <div class="col">
        <label for="token0">{{ pair.token0.symbol }}</label>
        <input
          type="text"
          placeholder="USDC"
          class="form-control"
          v-model="pair.token0.qty"
          id="token0"
          @keyup="calculatePrice1"
        />
      </div>
      <div class="col">
        <label for="token1">{{ pair.token1.symbol }}</label>
        <input
          type="text"
          :placeholder="token.symbol"
          class="form-control"
          v-model="pair.token1.qty"
          id="token1"
          @keyup="calculatePrice0"
        />
      </div>
    </div>
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        :checked="debug"
        @change="debug = !debug"
      />
      <label class="form-check-label" for="flexSwitchCheckChecked"
        >Checked switch checkbox input</label
      >
    </div>

    <div
      class="alert alert-success mt-3"
      role="alert"
      v-if="status == 'success'"
    >
      <pre v-if="debug">{{ token }}</pre>
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
      debug: true,
      tokenAddress: "0x76e63a3E7Ba1e2E61D3DA86a87479f983dE89a7E",
      senderAddress: "0xC05E18305293cA3d27f58127Bb54411a1211f805",
      token: {
        symbol: "",
        name: "",
        decimals: 0,
        totalSupply: 0,
        balance: 0,
        reserves: [],
      },
      pair: {
        token0: {
          symbol: "USDC",
          qty: 0,
        },
        token1: {
          symbol: "",
          qty: 1,
        },
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
    calculatePrice0() {
      this.pair.token0.qty =
        (this.token.reserves[0]["reserve"] /
          this.token.reserves[1]["reserve"]) *
        this.pair.token1.qty;
    },
    calculatePrice1() {
      this.pair.token1.qty =
        (this.token.reserves[1]["reserve"] /
          this.token.reserves[0]["reserve"]) *
        this.pair.token0.qty;
    },
    calculate() {
      if (this.validate()) {
        let data = {
          tokenAddress: this.tokenAddress,
          senderAddress: this.senderAddress,
          service: this.service,
        };
        CalculatorDataService.calculate(data).then((response: ResponseData) => {
          this.token.symbol = response.data.symbol;
          this.token.name = response.data.name;
          this.token.decimals = response.data.decimals;
          this.token.balance = response.data.balance;
          this.token.totalSupply = response.data.totalSupply;
          this.token.reserves = response.data.reserves;
          this.status = response.data.status;
          this.calculatePrice0();
          this.pair.token1.symbol = this.token.symbol;
        });
      } else {
        this.status = "error";
      }
    },
  },
});
</script>
