<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-7">
        <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h4 class="title">Danh sách đại lý vé số</h4>
          <div class="table-responsive">
            <table class="table is-bordered is-striped is-narrow">
              <thead>
                <tr>
                  <th>Số dự thưởng</th>
                  <th>Tiền dự thưởng</th>
                  <th>Lô dự thưởng</th>
                  <th>Đài dự thưởng</th>
                  <th>Mobile</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>1</th>
                  <th>Open source projects</th>
                  <th>Year started</th>
                  <th>Links</th>
                  <th>Links</th>
                  <th>Links</th>
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
                  <td>
                    2003
                  </td>
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
                </tr>
                <tr>
                  <td class="is-icon">
                    <i class="fa fa-firefox"></i>
                  </td>
                  <td>
                    <a href="#">Firefox</a>
                  </td>
                  <td>
                    2003
                  </td>
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
                </tr>
                <tr>
                  <td class="is-icon">
                    <i class="fa fa-linux"></i>
                  </td>
                  <td>
                    <a href="#">Linux</a>
                  </td>
                  <td>
                    2003
                  </td>
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
                </tr>
                <tr>
                  <td class="is-icon">
                    <i class="fa fa-wordpress"></i>
                  </td>
                  <td>
                    <a href="#">WordPress</a>
                  </td>
                  <td>
                    2003
                  </td>
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
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </div>
      </div>
      <div class="tile is-parent is-5">
        <article class="tile is-child box">
          <div class="block">
            <p class="title is-5">Đặt vé số</p>
            <a class="link">Nhập thông tin đặt vé số (* là bắt buộc nhập)</a>
          </div>
          <div class="columns is-horizontal">
            <div class="column">
              <div class="control">
                <label class="label">Số dự thưởng</label>
                <input class="input" type="text" placeholder="Text input">
              </div>
              <div class="control">
                <label class="label">Tiền dự thưởng</label>
                <input class="input" type="text" placeholder="Text input">
              </div>
              <div class="control">
                <label class="label">Mệnh giá 10.000</label>
                <input class="input" type="text" placeholder="Text input">
              </div>
              <div class="control">
                <label class="label">Ngày dự thưởng</label>
                <input class="input" type="text" placeholder="Text input">
              </div>
            </div>
            <div class="column">
              <div class="control">
                <label class="label">Hạn mức con số</label>
                <input class="input" type="text" placeholder="Text input">
              </div>
              <div class="control">
                <label class="label">&nbsp;</label>
                <label class="checkbox">
                  <input type="checkbox">
                  <label class="label">Mệnh giá 20.000</label>
                </label>
              </div>
              <div class="control">
                <label class="label">Mệnh giá 20.000</label>
                <input class="input" type="text" placeholder="Text input">
              </div>
              <div class="control">
                <label class="label">&nbsp;</label>
                <label class="checkbox">
                  <label class="label">&nbsp;</label>
                  <input type="checkbox">
                  <label class="label">Đài mặt định</label>
                </label><br/>
              </div>
            </div>
            <div class="column">
              <div class="control">
                <label class="label">Tổng hạn mức</label>
                <input class="input" type="text" placeholder="Text input">
              </div>
              <div class="control">
                <label class="label">Lô dự thưởng</label>
                <input class="input" type="text" placeholder="Text input">
              </div>
              <div class="control">
                <label class="label">Mệnh giá 50.000</label>
                <input class="input" type="text" placeholder="Text input">
              </div>
              <div class="control">
                <label class="label">Đài dự thưởng</label>
                <input class="input" type="text" placeholder="Text input">
              </div>
            </div>
          </div>
          <div class="control is-horizontal">
            <div class="control">
              <p class="buttons">
                <a class="button is-primary" 
                :class="{'is-loading': isloading}" 
                @click="loadData"><span class="icon is-small">
                  <i class="fa fa-check"></i>
                </span><span>Thêm</span>
                </a>
                <a class="button is-danger is-outlined">
                  <span>Xóa</span>
                  <span class="icon is-small">
                    <i class="fa fa-times"></i>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </article>
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
