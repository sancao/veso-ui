<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <div class="columns is-vcentered">
                <div class="column is-8 is-offset-2">
                  <form>
                      <label class="label">Ngày</label>
                      <p class="control">
                        <datepicker :inputClass="{ test: true }" :config="{ wrap: true }" readonly>
                          <a class="button" data-toggle><i class="fa fa-calendar"></i></a>
                          <a class="button" data-clear><i class="fa fa-close"></i></a>
                        </datepicker>
                      </p>
                      <label class="label">Đại lý</label>
                      <div class="select is-primary">
                        <select>
                          <option>Select dropdown</option>
                          <option>With options</option>
                        </select>
                      </div>
                      <hr>
                      <div class="control is-horizontal">
                        <div class="control">
                          <p class="buttons">
                            <button type="submit" class="button is-primary">Xem tổng hợp</button>
                            <button class="button is-default">Xuất file PDF</button>
                            <button class="button is-default">Xuất file XLS</button>
                            <button class="button is-default">Xuất file XLSX</button>
                            <button class="button is-default">Xuất file RTF</button>
                          </p>
                        </div>
                      </div>
                      
                    </form>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'vue-bulma-chartjs'
import Datepicker from 'vue-bulma-datepicker'
const api = '/MODApis/Api/v2/InteractiveChart/json'

export default {
  components: {
    Chart,
    Datepicker
  },

  data () {
    return {
      params: {
        symbol: 'AAPL',
        numberOfDays: 450,
        dataPeriod: 'Month'
      },
      symbols: ['AAPL', 'MSFT', 'JNJ', 'GOOG'],
      periods: ['Day', 'Week', 'Month', 'Quarter', 'Year'],
      data: [],
      labels: [],
      isloading: false,
      options: {
        legend: { display: false },
        animation: { duration: 0 },
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'month'
            }
          }]
        }
      }
    }
  },

  computed: {
    stockData () {
      return {
        labels: this.labels,
        datasets: [{
          fill: false,
          lineTension: 0.25,
          data: this.data,
          label: 'Close price',
          pointBackgroundColor: '#1fc8db',
          pointBorderWidth: 1
        }]
      }
    }
  },

  methods: {
    loadData () {
      this.isloading = true
      this.labels.length = 0
      this.data.length = 0
      this.$http({
        url: api,
        transformResponse: [(data) => {
          return JSON.parse(data.replace(/T00:00:00/g, ''))
        }],
        params: {
          parameters: {
            Normalized: false,
            NumberOfDays: parseInt(this.params.numberOfDays),
            DataPeriod: this.params.dataPeriod,
            Elements: [{'Symbol': this.params.symbol, 'Type': 'price', 'Params': ['c']}]
          }
        }
      }).then((response) => {
        let dates = response.data.Dates
        let price = response.data.Elements[0].DataSeries.close.values
        this.data.push(...price)
        this.labels.push(...dates)
        this.isloading = false
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
</style>
