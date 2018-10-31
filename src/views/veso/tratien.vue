<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <h4 class="title">Danh sách trả tiền</h4>
              <div class="columns is-horizontal">
                <div class="column">
                  <div class="control">
                    <label class="label">Số dư tài khoản</label>
                    <input class="input" type="text" placeholder="Text input" disabled>
                  </div>
                </div>
                <div class="column">
                  <div class="control">
                    <label class="label">Số tiền trả</label>
                    <input class="input" type="text" placeholder="Text input">
                  </div>
                </div>
                <div class="column">
                  <div class="control">
                    <label class="label">&nbsp;</label>
                    <a class="button is-primary">
                      <span>Trả tiền</span>
                    </a>
                  </div>
                </div>
                <div class="column">
                  <div class="control">
                    <label class="label">Ngày trả</label>
                    <datepicker :inputClass="{ test: true }" :config="{ wrap: true }" readonly>
                      <a class="button" data-toggle><i class="fa fa-calendar"></i></a>
                      <a class="button" data-clear><i class="fa fa-close"></i></a>
                    </datepicker>
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table is-bordered is-striped is-narrow">
                  <thead>
                    <tr>
                      <th>Số tiền</th>
                      <th>Ngày trả</th>
                      <th>Hủy</th>
                      <th>Thao tác</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>1</th>
                      <th>Open source projects</th>
                      <th>Year started</th>
                      <th>Links</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <td class="is-icon">
                        <a href="#">
                          <i class="fa fa-github"></i>
                        </a>
                      </td>
                      <td class="is-icon">
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </td>
                      <td class="is-icon">
                        <a href="#">
                          <i class="fa fa-globe"></i>
                        </a>
                      </td>
                      <td class="is-icon">
                        <a href="#">
                          <i class="fa fa-globe"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="is-icon">
                        <a href="#">
                          <i class="fa fa-github"></i>
                        </a>
                      </td>
                      <td class="is-icon">
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </td>
                      <td class="is-icon">
                        <a href="#">
                          <i class="fa fa-globe"></i>
                        </a>
                      </td>
                      <td class="is-icon">
                        <a href="#">
                          <i class="fa fa-globe"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="is-icon">
                        <a href="#">
                          <i class="fa fa-github"></i>
                        </a>
                      </td>
                      <td class="is-icon">
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </td>
                      <td class="is-icon">
                        <a href="#">
                          <i class="fa fa-globe"></i>
                        </a>
                      </td>
                      <td class="is-icon">
                        <a href="#">
                          <i class="fa fa-globe"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="is-icon">
                        <a href="#">
                          <i class="fa fa-github"></i>
                        </a>
                      </td>
                      <td class="is-icon">
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </td>
                      <td class="is-icon">
                        <a href="#">
                          <i class="fa fa-globe"></i>
                        </a>
                      </td>
                      <td class="is-icon">
                        <a href="#">
                          <i class="fa fa-globe"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
