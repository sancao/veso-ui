<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-8">
        <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h4 class="title">Danh sách đại lý vé số</h4>
          <div class="table-responsive">
            <table class="table is-bordered is-striped is-narrow">
              <thead>
                <tr>
                  <th>Mã đại lý</th>
                  <th>Tên đại lý</th>
                  <th>Địa chỉ</th>
                  <th>Số điện thoại</th>
                  <th>Cấp đại lý</th>
                  <th>Đại lý quản lý</th>
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
                  <th>
                    <div class="level-item">
                      <tooltip label="View code" placement="right" size="small" :rounded="true">
                        <span class="icon">
                          <a href="#">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                          </a>
                        </span>
                      </tooltip>&nbsp;
                      <tooltip label="View code" placement="right" size="small" :rounded="true">
                        <span class="icon">
                          <a href="#">
                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                          </a>
                        </span>
                      </tooltip>&nbsp;
                      <tooltip label="View code" placement="right" size="small" :rounded="true">
                        <span class="icon">
                          <a href="#">
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                          </a>
                        </span>
                      </tooltip>
                    </div>
                  </th>
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
      </div>
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <div class="block">
            <p class="title is-5">Thông tin đại lý</p>
            <a class="link">Nhập thông tin đại lý (* là bắt buộc nhập)</a>
          </div>
          <div class="block">
            <label class="label">Tên đại lý</label>
            <p class="control">
              <input class="input" type="text" placeholder="Tên đại lý...">
            </p>
            <label class="label">Địa chỉ</label>
            <p class="control">
              <input class="input" type="text" placeholder="Địa chỉ...">
            </p>
            <label class="label">Số điện thoại</label>
            <p class="control">
              <input class="input" type="text" placeholder="Số điện thoại...">
            </p>
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
    export default {
        data: function () {
            return {
                filterValue: '',
                searchValue:'',
                sortKey:'', 
                sortOrders: [],
                dailys: [],
                columns: ['MaDaiLy','TenDaiLy','DiaChi','SoDienThoai','CapDaiLy','DaiLyQuanLy'],
                pagination: {
                    total: 0, 
                    per_page: 2,
                    from: 1, 
                    to: 0,
                    current_page: 1
                },
                offset: 4,
                pagesNumber:[],
                isActived:'',
                showRight:false, 
                showModal:false,
                show: false,
                label: 'loading...',
                overlay: true
            }
        },
        mounted() {
            let vm=this;
            vm.columns.forEach(function (key) {
                vm.sortOrders[key] = 1;
            });

            vm.getCompaniesPaging(vm.pagination.current_page);
        },
        computed: {
            filteredAndSortedData() {
                let vm=this;
                let sortKey = vm.sortKey;
                let order = vm.sortOrders[sortKey] || 1;
                // Apply filter first
                let result = vm.companies;
                if (vm.filterValue) {
                    result = result.filter(item =>vm.searchLike(item));
                }
                // Sort the remaining values
                if(vm.sortKey==='') return result;
                
                vm.sortKey='';
                return result.slice().sort(function (a, b) {
                    a = a[sortKey];
                    b = b[sortKey];
                    return (a === b ? 0 : a > b ? 1 : -1) * order;
                });
            }
        },
        methods: {
            getDaiLyPaging(page){
                let vm = this;
                debugger;
                //http://localhost:4000/users/authenticate
                axios.get('/dai-ly?page='+page+'&text='+vm.searchValue)
                    .then(function (resp) {
                        debugger;
                        vm.dailys=resp.data.data.data.data;
                        vm.pagination= resp.data.data.pagination;
                        vm.pagesNumber=vm.getPagesNumber(resp.data.data.data);
                        vm.isActived=vm.getIsActived(resp.data.data.pagination);
                    })
                    .catch(function (resp) {
                        debugger;
                        console.log(resp);
                        alert("Không thế hiển thị danh sách công ty, đã có lỗi !!!");
                });
            },
            deleteEntry(id, index) {
                if (confirm("Bạn thật sự muốn xóa?")) {
                    let app = this;
                    axios.delete('/api/v1/dai-ly/' + id)
                        .then(function (resp) {
                            app.dailys.splice(index, 1);
                        })
                        .catch(function (resp) {
                            alert("Could not delete company");
                        });
                }
            },
            searchLike:function(item){
                return item.madaily.includes(this.filterValue)
                ||item.tendaily.includes(this.filterValue)
                ||item.diachi.includes(this.filterValue)
                ||item.sodienthoai.includes(this.filterValue);
            },

            isNumeric:function(n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            },
            getIsActived: function (pagination) {
                return pagination.current_page;
            },
            getPagesNumber: function (pagination) {
                if (!pagination.to) {
                    return [];
                }
                var from = pagination.current_page - this.offset;
                if (from < 1) {
                    from = 1;
                }
                var to = from + (this.offset * 2);
                if (to >= pagination.last_page) {
                    to = pagination.last_page;
                }
                var pagesArray = [];
                while (from <= to) {
                    pagesArray.push(from);
                    from++;
                }
                return pagesArray;
            },
            changePage: function (page) {
                this.pagination.current_page = page;
                this.getDaiLyPaging(page);
            },
            sortBy: function(sortKey) { 
                debugger;
                this.sortKey = sortKey;
                this.sortOrders[sortKey] = this.sortOrders[sortKey] * -1;
            }
        }
    }
</script>

<style scoped>
</style>
