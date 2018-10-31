<template>
  <div class="content">

    <div class="columns is-vcentered">
      <div class="column is-6 is-offset-3">
        
        <div class="box">
          <h1 class="is-title is-bold">Đăng nhập</h1>
          <hr>
          <div v-show="error" style="color:red; word-wrap:break-word;">{{ error }}</div>
          <form v-on:submit.prevent="login">
            <label class="label">Email</label>
            <p class="control">
              <input v-model="data.username" class="input" type="text" placeholder="email@example.org">
            </p>
            <label class="label">Mật khẩu</label>
            <p class="control">
              <input v-model="data.password" class="input" type="password" placeholder="password">
            </p>

            <p class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="data.rememberMe">
                Ghi nhớ đăng nhập
              </label>
            </p>

            <hr>
            <p class="control">
              <button type="submit" class="button is-primary">Đăng nhập</button>
              <button class="button is-default">Hủy</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      data: {
        username: null,
        password: null,
        rememberMe: false
      },
      error: null
    }
  },
  computed: {
      loggingIn () {
          return this.$store.state.authentication.status.loggingIn;
      }
  },
  created () {
      // reset login status
      this.$store.dispatch('authentication/logout');
  },
  mounted () {
    if (this.$auth.redirect()) {
      console.log('Redirect from: ' + this.$auth.redirect().from.name)
    }
    // Can set query parameter here for auth redirect or just do it silently in login redirect.
  },
  methods: {
    login (e) {
        this.submitted = true;
        const { username, password } = this.data;
        const { dispatch } = this.$store;
        if (username && password) {
            dispatch('authentication/login', { username, password });
        }
    }
    // login () {
    //   var redirect = this.$auth.redirect()
    //   this.$auth.login({
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     data: JSON.stringify(this.data.body),
    //     rememberMe: this.data.rememberMe,
    //     redirect: {name: redirect ? redirect.from.name : 'Home'},
    //     success (res) {
    //       console.log('Auth Success')
    //       // console.log('Token: ' + this.$auth.token())
    //       // console.log(res)
    //     },
    //     error (err) {
    //       if (err.response) {
    //         // The request was made, but the server responded with a status code
    //         // that falls out of the range of 2xx
    //         // console.log(err.response.status)
    //         // console.log(err.response.data)
    //         // console.log(err.response.headers)
    //         this.error = err.response.data
    //       } else {
    //         // Something happened in setting up the request that triggered an Error
    //         console.log('Error', err.message)
    //       }
    //       console.log(err.config)
    //     }
    //   })
    // }
  }
  // filters: {
  //   json: function (value) {
  //     console.log(value)
  //     return value
  //   }
  // }

}
</script>

<style lang="scss" scoped>
.is-title {
    text-transform: capitalize;
}
</style>
