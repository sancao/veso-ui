import * as types from '../../mutation-types'
import lazyLoading from './lazyLoading'
// import charts from './charts'
// import uifeatures from './uifeatures'
// import components from './components'
// import tables from './tables'
import baocao from './baocao'

// show: meta.label -> name
// name: component name
// meta.label: display label

const state = {
  items: [
    {
      name: 'Đại lý vé số',
      path: '/dai-ly-ve-so',
      meta: {
        icon: 'fa-tachometer',
        link: 'veso/dailyveso.vue'
      },
      component: lazyLoading('veso', true)
    },
    {
      name: 'Người dùng',
      path: '/nguoi-dung',
      meta: {
        auth: true,
        icon: 'fa-users',
        link: 'veso/nguoidung.vue'
      },
      component: lazyLoading('veso', true)
    },
    {
      name: 'Chọn số',
      path: '/chon-so',
      meta: {
        auth: true,
        icon: 'fa-sort-numeric-asc',
        link: 'veso/chonso.vue'
      },
      component: lazyLoading('veso', true)
    },
    {
      name: 'Phát thưởng',
      path: '/phat-thuong',
      meta: {
        auth: true,
        icon: 'fa-money',
        link: 'veso/phatthuong.vue'
      },
      component: lazyLoading('veso', true)
    },
    {
      name: 'Nạp tiền',
      path: '/nap-tien',
      meta: {
        auth: true,
        icon: 'fa-refresh',
        link: 'veso/naptien.vue'
      },
      component: lazyLoading('veso', true)
    },
    {
      name: 'Số dư tài khoản',
      path: '/so-du-tai-khoan',
      meta: {
        auth: true,
        icon: 'fa-list-alt ',
        link: 'veso/sodutaikhoan.vue'
      },
      component: lazyLoading('veso', true)
    },
    {
      name: 'Trả tiền',
      path: '/tra-tien',
      meta: {
        auth: true,
        icon: 'fa-credit-card-alt',
        link: 'veso/tratien.vue'
      },
      component: lazyLoading('veso', true)
    },
    {
      name: 'Giao in phôi',
      path: '/giao-in-phoi',
      meta: {
        auth: true,
        icon: 'fa-rocket',
        link: 'veso/giaoinphoi.vue'
      },
      component: lazyLoading('veso', true)
    },
    {
      name: 'Người đặt vé',
      path: '/nguoi-dat-ve',
      meta: {
        auth: true,
        icon: 'fa-user-o',
        link: 'veso/nguoidatve.vue'
      },
      component: lazyLoading('veso', true)
    },
    {
      name: 'Nạp tiền người đặt vé',
      path: '/nap-tien-nguoi-dat-ve',
      meta: {
        auth: true,
        icon: 'fa-paypal',
        link: 'veso/naptiennguoidatve.vue'
      },
      component: lazyLoading('veso', true)
    },
    // charts,
    // uifeatures,
    // components,
    // tables,
    baocao
  ]
}

const mutations = {
  [types.EXPAND_MENU] (state, menuItem) {
    if (menuItem.index > -1) {
      if (state.items[menuItem.index] && state.items[menuItem.index].meta) {
        state.items[menuItem.index].meta.expanded = menuItem.expanded
      }
    } else if (menuItem.item && 'expanded' in menuItem.item.meta) {
      menuItem.item.meta.expanded = menuItem.expanded
    }
  }
}

export default {
  state,
  mutations
}
