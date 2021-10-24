<template>
  <div>
    <h1>Yield Farm Breakeven Calculator</h1>
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="yieldFarmType" @change="toggleYieldFarmType" v-model="yieldFarm">
      <label class="form-check-label" for="flexSwitchCheckDefault">{{ farmType }}</label>
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
      <div class="col" v-if="yieldFarm">
        <label for="tokenB">Token B</label>
        <input
                type="text"
                placeholder="Token B"
                class="form-control"
                v-model="tokenB"
                id="tokenB"
        />
      </div>
      <div class="col" v-if="tokenA">
        <label for="tokenR">Reward Token</label>
        <input
                type="text"
                placeholder="Token R"
                class="form-control"
                v-model="tokenR"
                id="tokenR"
                @change="rewardTokenOnChange()"
        />
      </div>
    </div>
    <div class="row mt-3" v-if="tokenA">
      <h3>Initial Price</h3>
      <div class="col">
        <label for="tokenAPrice">{{ tokenA }}</label>
        <div class="input-group">
          <span class="input-group-text">$</span>
          <input
                  type="number"
                  :placeholder="tokenA + ' Price'"
                  class="form-control"
                  v-model="tokenAPrice"
                  id="tokenAPrice"
                  @change="priceOnChange()"
          />
        </div>
      </div>
      <div class="col" v-if="showRewardTokenPrice">
        <label for="tokenAPrice">{{ tokenR }}</label>
        <div class="input-group">
          <span class="input-group-text">$</span>
          <input
                  type="number"
                  :placeholder="tokenR + ' Price'"
                  number
                  class="form-control"
                  v-model="tokenRPrice"
                  id="tokenRPrice"
          />
        </div>
      </div>
      <div class="col" v-if="yieldFarm">
        <label for="tokenBPrice">{{ tokenB }}</label>
        <div class="input-group">
          <span class="input-group-text">$</span>
          <input
                  type="number"
                  placeholder="{{ tokenB }} Price"
                  class="form-control"
                  v-model="tokenBPrice"
                  id="tokenBPrice"
                  @change="priceOnChange()"
          />
        </div>
      </div>
    </div>
    <div class="row mt-3" v-if="tokenR">
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
        <label for="depositFee">Deposit Fee</label>
        <div class="input-group">
          <input
                type="text"
                placeholder="Deposit Fee"
                class="form-control"
                v-model="depositFee"
                id="depositFee"
                @change="feeOnChange()"
          />
          <span class="input-group-text">%</span>
        </div>
      </div>
      <div class="col" v-if="show">
        <label for="decay">APR Decay</label>
        <input
                type="text"
                placeholder="APR Decay"
                class="form-control"
                v-model="decay"
                id="decay"
        />
      </div>
    </div>
    <div class="row mt-3" v-if="tokenA">
      <h3>Principle</h3>
      <div class="col">
        <label for="principle">Value</label>
        <div class="input-group">
          <span class="input-group-text">$</span>
          <input
                  type="text"
                  placeholder="Principle"
                  class="form-control"
                  v-model="principle"
                  id="principle"
                  @keyup="principleOnChange()"
          />
        </div>
      </div>
      <div class="col">
        <label for="tokenAQty">{{ tokenA }} Qty</label>
        <input
                type="text"
                placeholder="{{ tokenA }} Qty"
                class="form-control"
                v-model="tokenAQty"
                id="tokenAQty"
        />
      </div>
      <div class="col" v-if="yieldFarm">
        <label for="tokenBQty">{{ tokenB }} Qty</label>
        <input
                type="text"
                placeholder="{{ tokenB }} Qty"
                class="form-control"
                v-model="tokenBQty"
                id="tokenBQty"
        />
      </div>
    </div>
    <div class="row mt-3" v-if="depositFee && principle">
      <h3>Fees</h3>
      <div class="col">
        <label for="depositFeeValue">Fee Value</label>
        <div class="input-group">
          <span class="input-group-text">$</span>
          <input
                  type="text"
                  placeholder="Deposit Fee Value"
                  class="form-control"
                  readonly="true"
                  v-model="depositFeeValue"
                  id="depositFeeValue"
          />
        </div>
      </div>
      <div class="col">
        <label for="depositFeeQty">{{ tokenA }} Fee Qty</label>
        <input
                type="text"
                placeholder="Deposit Fee Qty"
                class="form-control"
                readonly="true"
                v-model="depositFeeQty"
                id="depositFeeQty"
        />
      </div>
    </div>
    <div class="row mt-3" v-if="tokenA">
      <h3>Initial Investment</h3>
      <div class="col">
        <label for="principle">Value</label>
        <div class="input-group">
          <span class="input-group-text">$</span>
          <input
                  type="text"
                  placeholder="Principle"
                  class="form-control"
                  v-model="principleAfterFee"
                  id="principleAfterFee"
          />
        </div>
      </div>
      <div class="col">
        <label for="tokenAQtyAfterFee">{{ tokenA }} Qty</label>
        <input
                type="text"
                :placeholder="tokenA + ' Qty'"
                class="form-control"
                v-model="tokenAQtyAfterFee"
                id="tokenAQtyAfterFee"
        />
      </div>
      <div class="col" v-if="yieldFarm">
        <label for="tokenBQtyAfterFee">{{ tokenB }} Qty</label>
        <input
                type="text"
                :placeholder="tokenB + ' Qty'"
                class="form-control"
                v-model="tokenBQtyAfterFee"
                id="tokenBQtyAfterFee"
        />
      </div>
    </div>
    <div class="row mt-3" v-if="totalYield">
      <h3>Rewards</h3>
      <div class="col">
        <div class="input-group">
          <span class="input-group-text">#</span>
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
          <span class="input-group-text">#</span>
          <input
                  type="text"
                  placeholder="Yield"
                  class="form-control"
                  v-model="dailyYield"
                  @change="dailyRewardChange()"
          />
        </div>
      </div>
      <div class="col">
        <div class="input-group">
          <span class="input-group-text">#</span>
          <input
                  type="text"
                  placeholder="Yield"
                  class="form-control"
                  v-model="hourlyYield"
          />
        </div>
      </div>
    </div>
    <div class="row mt-3" v-if="totalYield">
      <div class="col">
        <div class="input-group">
          <span class="input-group-text">$</span>
          <input
                  type="text"
                  placeholder="Yield"
                  class="form-control"
                  v-model="totalYieldValue"
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
                  v-model="dailyYieldValue"
                  @change="dailyRewardChange()"
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
                  v-model="hourlyYieldValue"
          />
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <p>Fee Breakeven in {{ Math.round(feeBreakevenHours) }} hours<span v-if="feeBreakevenDays > 1"> or {{ Math.round(feeBreakevenDays) }} days</span>.</p>
        <p>Principle Breakeven in {{ Math.round(principleBreakevenHours) }} hours or {{ Math.round(principleBreakevenDays) }} days.</p>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <button class="btn btn-warning" @click="reset">Reset</button>
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
      show: false,
      showRewardTokenPrice: false,
      yieldFarm: false,
      farmType: "Single Stake Farm",
      apr: 0,
      decay: 0,
      depositFee: 0,
      tokenA: "ELK",
      tokenB: "",
      tokenR: "TACO",
      tokenAPrice: 2.45693066183,
      tokenBPrice: 0,
      tokenRPrice: 5.335,
      tokenAQty: 0,
      tokenBQty: 0,
      principle: 0,
      principleAfterFee: 0,
      tokenAQtyAfterFee: 0,
      tokenBQtyAfterFee: 0,
      depositFeeValue: 0,
      depositFeeQty: 0,
      totalYield: 0,
      dailyYield: 0,
      hourlyYield: 0,
      totalYieldValue: 0,
      dailyYieldValue: 0,
      hourlyYieldValue: 0,
      feeBreakevenHours: 0,
      feeBreakevenDays: 0,
      principleBreakevenHours: 0,
      principleBreakevenDays: 0,
      status: "",
      service: "yield-farm-breakeven",
    }
  },
  methods: {
    toggleYieldFarmType(){
      this.farmType = this.yieldFarm ? "LP Yield Farm" : "Single Stake Farm"
      this.calculateLP()
    },
    validate(validArr: any[]) {
      let valid: any[] = []
      validArr.forEach((element: any) => {
        element = Number(element)

        if(element <= 0){
          valid.push(false)
        } 
      })
      return valid.every(Boolean)
    },
    reset() {
      this.apr = 0
      this.decay = 0
    },
    rewardTokenOnChange(){
      this.showRewardTokenPrice = this.tokenA == this.tokenR ? false : true
    },
    feeOnChange(){
      this.calculateFees()
    },
    priceOnChange(){
      this.calculateLP()
      this.calculateYield()
    },
    principleOnChange(){
      this.calculateFees()
      this.calculateLP()
      this.calculateYield()
    },
    aprOnChange(){
      this.calculateFees()
      this.calculateLP()
      this.calculateYield()
    },
    dailyRewardChange(){
      this.calculatePrinciple()
    },
    calculateFees(){
      let validArr = [this.depositFee, this.principle]

      if(this.validate(validArr)){
      let data = {
        depositFee: this.depositFee,
        tokenAPrice: this.tokenAPrice,
        tokenAQty: this.tokenAQty,
        principle: this.principle,
        service: 'calculateDepositFee',
      }
      
      CalculatorDataService.calculate(data)
      .then((response: ResponseData) => {
        this.depositFeeValue = response.data.depositFeeValue
        this.depositFeeQty = response.data.depositFeeQty
        this.tokenAPrice = response.data.tokenAPrice
        this.principle = response.data.principle
        this.principleAfterFee = response.data.principleAfterFee
        this.tokenAQtyAfterFee = response.data.tokenAQtyAfterFee
        this.status = response.data.status
      })
      }
    },
    calculatePrinciple(){
      let validArr = [this.apr, this.dailyYieldValue, this.tokenAPrice]

      if(this.validate(validArr)){
      let data = {
        apr: this.apr,
        dailyYieldValue: this.dailyYieldValue,
        tokenAPrice: this.tokenAPrice,
        service: 'calculatePrinciple',
      }
      
      CalculatorDataService.calculate(data)
      .then((response: ResponseData) => {
        this.totalYieldValue = response.data.totalYieldValue
        this.dailyYieldValue = response.data.dailyYieldValue
        this.hourlyYieldValue = response.data.hourlyYieldValue
        this.totalYield= response.data.totalYield
        this.dailyYield= response.data.dailyYield
        this.hourlyYield= response.data.hourlyYield
        this.principle = response.data.principle
        this.status = response.data.status
      })
      }
    },
    calculateYield(){
      let validArr = [this.apr, this.tokenAPrice, this.principle]

      if(this.validate(validArr)){
        let principle = 0
        if(this.depositFee > 0){
          principle = this.principle - this.depositFeeValue
        } else {
          principle = this.principle
        }
        let data = {
          apr: this.apr,
          tokenAPrice: this.tokenAPrice,
          principle: principle,
          depositFeeValue: this.depositFeeValue,
          service: 'calculateYield',
        }

        CalculatorDataService.calculate(data)
        .then((response: ResponseData) => {
          this.totalYield = response.data.totalYield
          this.dailyYield = response.data.dailyYield
          this.hourlyYield = response.data.hourlyYield
          this.totalYieldValue = response.data.totalYieldValue
          this.dailyYieldValue = response.data.dailyYieldValue
          this.hourlyYieldValue = response.data.hourlyYieldValue
          this.feeBreakevenHours = response.data.feeBreakevenHours
          this.feeBreakevenDays = response.data.feeBreakevenDays
          this.principleBreakevenHours = response.data.principleBreakevenHours
          this.principleBreakevenDays = response.data.principleBreakevenDays
          this.status = response.data.status
        })
      }
    },
    calculateLP(){
      let validArr = []
      if(this.yieldFarm){
        validArr = [this.tokenAPrice, this.tokenBPrice, this.principle]
      } else {
        validArr = [this.tokenAPrice, this.principle]
      }

      if(this.validate(validArr)){
        let data = {
          tokenAPrice: this.tokenAPrice,
          tokenBPrice: this.tokenBPrice,
          principle: this.principle,
          yieldFarm: this.yieldFarm,
          service: 'calculateLP',
        }

        CalculatorDataService.calculate(data)
        .then((response: ResponseData) => {
          this.tokenAQty = response.data.tokenAQty
          this.tokenBQty = response.data.tokenBQty
          this.status = response.data.status
          // console.log(response.data)
        })
      }
    },
  },
})
</script>
