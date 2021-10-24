<template>
  <div>
    <h1 @click="loadData">Chain explorer</h1>
    <input
      type="text"
      @change="loadData"
      v-model="csvFilePath"
      placeholder="csv file"
      class="form-control"
    />
  </div>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Timestamp</th>
          <th scope="col">DateTime</th>
          <th scope="col">From</th>
          <th scope="col">To</th>
          <th scope="col">Value</th>
          <th scope="col">ContractAddress</th>
          <th scope="col">TokenName</th>
          <th scope="col">TokenSymbol</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in jsonData" :key="row.Txhash">
          <td scope="row">
            <a :href="row.TxhashLink">{{
              row.Txhash.substr(row.Txhash.length - 6)
            }}</a>
          </td>
          <td>{{ row.UnixTimestamp }}</td>
          <td>{{ row.DateTime }}</td>
          <td>{{ row.From.substr(row.From.length - 6) }}</td>
          <td>{{ row.To.substr(row.To.length - 6) }}</td>
          <td>{{ row.Value }}</td>
          <td>{{ row.ContractAddress }}</td>
          <td>{{ row.TokenName }}</td>
          <td>{{ row.TokenSymbol }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CalculatorDataService from "../../services/CalculatorDataService";
import ResponseData from "../../types/ResponseData";

export default defineComponent({
  name: "Chain",
  data() {
    return {
      jsonData: {},
      csvFilePath: "./.temp/dump.csv",
      status: "",
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
    loadData() {
      let data = {
        service: "csvToJson",
        csvFilePath: this.csvFilePath,
      };
      CalculatorDataService.calculate(data).then((response: ResponseData) => {
        this.jsonData = response.data;
        // console.log(response.data);
      });
    },
  },
});
</script>