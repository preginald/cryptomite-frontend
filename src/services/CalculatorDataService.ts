import http from "../http-common";

class CalculatorDataService {
    calculate(data: any): Promise<any> {
      return http.post(data.service, data);
  }
}

export default new CalculatorDataService();