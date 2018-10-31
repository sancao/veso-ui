<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-6">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <h4 class="title">Danh sách số dư tài khoản</h4>
              <div class="table-responsive">
                <table class="table is-bordered is-striped is-narrow">
                  <thead>
                    <tr>
                      <th>Tên đại lý</th>
                      <th>Số dư</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Open source projects</th>
                      <th>Year started</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <td class="is-icon">
                        <i class="fa fa-android"></i>
                      </td>
                      <td>
                        <a href="#">Android</a>
                      </td>
                    </tr>
                    <tr>
                      <td class="is-icon">
                        <i class="fa fa-firefox"></i>
                      </td>
                      <td>
                        <a href="#">Firefox</a>
                      </td>
                    </tr>
                    <tr>
                      <td class="is-icon">
                        <i class="fa fa-linux"></i>
                      </td>
                      <td>
                        <a href="#">Linux</a>
                      </td>
                    </tr>
                    <tr>
                      <td class="is-icon">
                        <i class="fa fa-wordpress"></i>
                      </td>
                      <td>
                        <a href="#">WordPress</a>
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

const api = '/MODApis/Api/v2/InteractiveChart/json'

export default {
  components: {
    Chart
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
