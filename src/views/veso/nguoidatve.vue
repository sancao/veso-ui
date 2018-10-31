<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-8">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <h4 class="title">Danh sách người đặt vé</h4>
              <div class="table-responsive">
                <table class="table is-bordered is-striped is-narrow">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Họ tên</th>
                      <th>Số điện thoại</th>
                      <th>Khóa</th>
                      <th>Thao tác</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Year started</th>
                      <th>Links</th>
                      <th>Links</th>
                      <th>Links</th>
                      <th>Links</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
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
                      <td class="is-icon">
                        <a href="#">
                          <i class="fa fa-globe"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
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
                      <td class="is-icon">
                        <a href="#">
                          <i class="fa fa-globe"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
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
                      <td class="is-icon">
                        <a href="#">
                          <i class="fa fa-globe"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
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
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <div class="block">
            <p class="title is-5">Thêm người đặt vé</p>
            <a class="link">Nhập thông tin người đặt vé (* là bắt buộc nhập)</a>
          </div>
          <div class="block">
            <label class="label">Họ tên</label>
            <p class="control">
              <input class="input" type="text" placeholder="Họ và tên...">
            </p>
            <label class="label">Địa chỉ</label>
            <p class="control">
              <input class="input" type="text" placeholder="Địa chỉ...">
            </p>
            <label class="label">Địa chỉ</label>
            <div class="select is-fullwidth">
              <select v-model="params.dataPeriod">
                <option v-for="p in periods" :value="p" v-bind:key="p">{{p}}</option>
              </select>
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
