<template>
  <div>
    <h1>Yield Farm Breakeven Calculator</h1>
    <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" id="yieldFarmType" @change="toggleYieldFarmType" v-model="yieldFarm">
    <label class="form-check-label" for="flexSwitchCheckDefault">{{ farmType }}</label>
  </div>
      <div class="row">
      <div class="col">
        <label for="apr">Starting APR</label>
        <div class="input-group">
        <input
                type="text"
                placeholder="Starting APR"
                class="form-control"
                v-model="apr"
                id="apr"
                @change="aprOnChange()"
        />
        <span class="input-group-text">%</span>
        </div>
      </div>
      <div class="col">
        <label for="decay">APR Decay</label>
        <input
                type="text"
                placeholder="APR Decay"
                class="form-control"
                v-model="decay"
                id="decay"
        />
      </div>
      <div class="col">
        <label for="principle">Principle</label>
        <div class="input-group">
        <span class="input-group-text">$</span>
        <input
                type="text"
                placeholder="Principle"
                class="form-control"
                v-model="principle"
                id="principle"
                @change="principleOnChange()"
        />
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <div class="input-group">
          <span class="input-group-text">$</span>
          <input
                  type="text"
                  placeholder="Yield"
                  class="form-control"
                  v-model="totalYield"
          />
        </div>
      </div>
      <div class="col">
        <div class="input-group">
          <span class="input-group-text">$</span>
          <input
                  type="text"
                  placeholder="Yield"
                  class="form-control"
                  v-model="dailyYield"
          />
        </div>
      </div>
      <div class="col">
        <div class="input-group">
          <span class="input-group-text">$</span>
          <input
                  type="text"
                  placeholder="Yield"
                  class="form-control"
                  v-model="hourlyYield"
          />
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label for="tokenA">Token A</label>
        <input
                type="text"
                placeholder="Token A"
                class="form-control"
                v-model="tokenA"
                id="tokenA"
        />
      </div>
      <div class="col">
        <label for="tokenB">Token B</label>
        <input
                type="text"
                placeholder="Token B"
                class="form-control"
                v-model="tokenB"
                id="tokenB"
        />
      </div>
      <div class="col">
        <label for="tokenR">Reward Token</label>
        <input
                type="text"
                placeholder="Token R"
                class="form-control"
                v-model="tokenR"
                id="tokenR"
        />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label for="tokenAPrice">{{ tokenA }} Price</label>
        <div class="input-group">
          <span class="input-group-text">$</span>
          <input
                  type="text"
                  placeholder="Token A Price"
                  class="form-control"
                  v-model="tokenAPrice"
                  id="tokenAPrice"
                  @change="priceOnChange()"
          />
        </div>
      </div>
      <div class="col">
        <label for="tokenBPrice">{{ tokenB }} Price</label>
        <div class="input-group">
          <span class="input-group-text">$</span>
          <input
                  type="text"
                  placeholder="Token B Price"
                  class="form-control"
                  v-model="tokenBPrice"
                  id="tokenBPrice"
                  @change="priceOnChange()"
          />
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label for="tokenAQty">{{ tokenA }} Qty</label>
        <input
                type="text"
                placeholder="Token A Qty"
                class="form-control"
                v-model="tokenAQty"
                id="tokenAQty"
        />
      </div>
      <div class="col">
        <label for="tokenBQty">{{ tokenB }} Qty</label>
        <input
                type="text"
                placeholder="Token B Qty"
                class="form-control"
                v-model="tokenBQty"
                id="tokenBQty"
        />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <button class="btn btn-primary" @click="calculate">Calculate</button>
        <button class="btn btn-warning mx-3" @click="reset">Reset</button>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import CalculatorDataService from '../../services/CalculatorDataService'
import ResponseData from "../../types/ResponseData"

export default defineComponent({
  name: "SimpleCalculator",
  data() {
    return { 
      yieldFarm: true,
      farmType: "LP Yield Farm",
      apr: 0,
      decay: 0,
      tokenA: "DGOLD",
      tokenB: "USDC",
      tokenR: "DGOLD",
      tokenAPrice: 2.30,
      tokenBPrice: 1.09,
      tokenAQty: 0,
      tokenBQty: 0,
      principle: 1000.00,
      totalYield: 0,
      dailyYield: 0,
      hourlyYield: 0,
      status: "",
      service: "yield-farm-breakeven"
    }
  },
  methods: {
    toggleYieldFarmType(){
      this.farmType = this.yieldFarm ? "LP Yield Farm" : "Single Stake Farm"
    },
    validate() {
      let valid = true
      return valid
    },
    reset() {
      this.apr = 0
      this.decay = 0
    },
    priceOnChange(){
      this.calculateLP()
    },
    principleOnChange(){
      this.calculateLP()
    },
    aprOnChange(){
      this.calculateYield()
    },
    calculateYield(){
      let data = {
        apr: this.apr,
        principle: this.principle,
        service: 'calculateYield',
      }
      CalculatorDataService.calculate(data)
      .then((response: ResponseData) => {
        this.totalYield = response.data.totalYield
        this.dailyYield = response.data.dailyYield
        this.hourlyYield = response.data.hourlyYield
        this.status = response.data.status
      })
    },
    calculateLP(){
      let data = {
        tokenAPrice: this.tokenAPrice,
        tokenBPrice: this.tokenBPrice,
        principle: this.principle,
        service: 'calculateLP',
      }

      CalculatorDataService.calculate(data)
      .then((response: ResponseData) => {
        this.tokenAQty = response.data.tokenAQty
        this.tokenBQty = response.data.tokenBQty
        this.status = response.data.status
        // console.log(response.data)
      })
    },
  },
})
</script>
