<template>
  <div>
    <tabs animation="slide" :only-fade="false">
      <tab-pane label="Phát thưởng">
        <div class="tile is-ancestor">
          <div class="tile is-parent is-8">
            <article class="tile is-child box">
                <tabs type="toggle" class="tab-content">
                  <tab-pane label="Dùng máy quét">
                    <div class="table-responsive">
                      <p class="control has-addons">
                        <input class="input input-list" type="text" placeholder="Nhập từ khóa...">
                        <a class="button is-info">Kiếm</a>
                      </p>
                      <table class="table is-bordered is-striped is-narrow">
                        <thead>
                          <tr>
                            <th>Số dự thưởng</th>
                            <th>Mệnh giá</th>
                            <th>Lô dự thưởng</th>
                            <th>Đài dự thưởng</th>
                            <th>Ngày dự thưởng</th>
                            <th>Tiền trúng thưởng</th>
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
                            <td class="is-icon">
                              <a href="#">
                                <i class="fa fa-globe"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </tab-pane>
                  <tab-pane label="Nhập tay">
                    <div class="table-responsive">
                      <div class="columns">
                        <div class="column">
                          <datepicker :inputClass="{ test: true }" :config="{ wrap: true }" readonly>
                            <a class="button" data-toggle><i class="fa fa-calendar"></i></a>
                            <a class="button" data-clear><i class="fa fa-close"></i></a>
                          </datepicker>
                        </div>
                        <div class="column">
                          <input class="input input-list" type="text" placeholder="Nhập từ khóa...">
                          <a class="button is-info">Kiếm</a>
                        </div>
                        <div class="column">
                          <input class="input input-list" type="text" placeholder="Nhập từ khóa">
                          <a class="button is-info">Kiếm</a>
                        </div>
                      </div>
                      <table class="table is-bordered is-striped is-narrow">
                        <thead>
                          <tr>
                            <th>Số dự thưởng</th>
                            <th>Mệnh giá</th>
                            <th>Lô dự thưởng</th>
                            <th>Đài dự thưởng</th>
                            <th>Ngày dự thưởng</th>
                            <th>Tiền trúng thưởng</th>
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
                            <td class="is-icon">
                              <a href="#">
                                <i class="fa fa-globe"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </tab-pane>
                </tabs>
            </article>
          </div>
        
          <div class="tile is-parent is-4">
            <article class="tile is-child box">
              <div class="block">
                <p class="title is-5">Thông tin khách hàng</p>
                <a class="link">Nhập thông tin khách hàng (* là bắt buộc nhập)</a>
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
                <label class="label">Điện thoại</label>
                <p class="control">
                  <input class="input" type="text" placeholder="Điện thoại...">
                </p>
                <div class="control is-horizontal">
                  <div class="control">
                    <p class="buttons">
                    <a class="button is-primary">
                    <span class="icon is-small">
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
      </tab-pane>
      <tab-pane label="Danh sách phát thưởng">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <div class="columns">
                <div class="column">
                  <div class="buttons has-addons is-left">
                    <span class="button is-success is-selected">Đã phát</span>
                    <span class="button">Đã hủy</span>
                  </div>
                </div>
                <div class="column">
                  <div class="control is-horizontal">
                    <div class="control-label">
                      <label class="label">Từ ngày</label>
                    </div>
                    <div class="control is-grouped">
                      <p class="control is-expanded">
                        <datepicker :inputClass="{ test: true }" :config="{ wrap: true }" readonly>
                          <a class="button" data-toggle><i class="fa fa-calendar"></i></a>
                          <a class="button" data-clear><i class="fa fa-close"></i></a>
                        </datepicker>
                      </p>
                    </div>
                  </div>
                  <div class="control is-horizontal">
                    <div class="control-label">
                      <label class="label">Đến ngày</label>
                    </div>
                    <div class="control is-grouped">
                      <p class="control is-expanded">
                        <datepicker :inputClass="{ test: true }" :config="{ wrap: true }" readonly>
                          <a class="button" data-toggle><i class="fa fa-calendar"></i></a>
                          <a class="button" data-clear><i class="fa fa-close"></i></a>
                        </datepicker>
                      </p>
                      <p class="buttons">
                        <a class="button is-primary"><span class="icon is-small">
                            <i class="fa fa-check"></i>
                          </span><span>Kiếm</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table is-bordered is-striped is-narrow">
                  <thead>
                    <tr>
                      <th>Số phiếu trả thưởng</th>
                      <th>Họ tên người trúng</th>
                      <th>Địa chỉ</th>
                      <th>Số điện thoại</th>
                      <th>Tiền trúng thưởng</th>
                      <th>Ngày trả thưởng</th>
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
      </tab-pane>
    </tabs>
  </div>
</template>

<script>
import { Tabs, TabPane } from 'vue-bulma-tabs'
import Datepicker from 'vue-bulma-datepicker'

export default {
  components: {
    Tabs,
    TabPane,
    Datepicker
  },

  data () {
    return {
      items: [
        {
          icon: 'image',
          label: 'Pictures',
          desc: 'Simple responsive horizontal navigation tabs, with different styles'
        },
        {
          icon: 'music',
          label: 'Music',
          desc: 'Music Tab'
        },
        {
          icon: 'film',
          label: 'Videos',
          desc: 'Video Tab'
        },
        {
          icon: 'file-text-o',
          label: 'Documents',
          desc: 'Document Tab'
        }
      ]
    }
  },

  mounted () {
    this.items.splice(0, 1)
    setInterval(() => {
      this.randomTabs()
    }, 3000)
  },

  methods: {
    randomTabs () {
      this.items.unshift(this.items.pop())
    }
  }
}
</script>

<style lang="scss">
.tabs {
  margin: 0px;
  
}
.tab-content {
    margin: 0px !important;
  }
.input-list{
  max-width: 150px !important;
}
</style>
