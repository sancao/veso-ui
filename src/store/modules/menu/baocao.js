import lazyLoading from './lazyLoading'

export default {
  name: 'Tổng hợp',
  path: '/bao-cao',
  meta: {
    icon: 'fa-bar-chart-o',
    expanded: false,
    link: 'veso/index.vue'
  },
  component: lazyLoading('veso', true),

  children: [
    {
      name: 'Dự thưởng',
      path: 'du-thuong',
      component: lazyLoading('veso/rp_duthuong'),
      meta: {
        link: 'veso/rp_duthuong.vue'
      }
    },
    {
      name: 'Dự thưởng theo mệnh giá',
      path: 'du-thuong-theo-menh-gia',
      component: lazyLoading('veso/rp_duthuongtheomenhgia'),
      meta: {
        link: 'veso/rp_duthuongtheomenhgia.vue'
      }
    },
    {
      name: 'Dự thưởng theo đại lý',
      path: 'du-thuong-theo-dai-ly',
      component: lazyLoading('veso/rp_duthuongtheodaily'),
      meta: {
        link: 'veso/rp_duthuongtheodaily.vue'
      }
    },
    {
      name: 'Trúng thưởng',
      path: 'trung-thuong',
      component: lazyLoading('veso/rp_trungthuong'),
      meta: {
        link: 'veso/rp_trungthuong.vue'
      }
    },
    {
      name: 'Doanh thu tiêu thụ',
      path: 'doanh-thu-tieu-thu',
      component: lazyLoading('veso/rp_doanhthutieuthu'),
      meta: {
        link: 'veso/rp_doanhthutieuthu.vue'
      }
    },
    {
      name: 'Biến động tài khoản',
      path: 'bien-dong-tai-khoan',
      component: lazyLoading('veso/rp_biendongtaikhoan'),
      meta: {
        link: 'veso/rp_biendongtaikhoan.vue'
      }
    },
    {
      name: 'In phôi',
      path: 'in-phoi',
      component: lazyLoading('veso/rp_inphoi'),
      meta: {
        link: 'veso/rp_inphoi.vue'
      }
    },
    {
      name: 'Trúng thưởng hằng ngày',
      path: 'trung-thuong-hang-ngay',
      component: lazyLoading('veso/rp_trungthuonghangngay'),
      meta: {
        link: 'veso/rp_trungthuonghangngay.vue'
      }
    }
  ]
}
