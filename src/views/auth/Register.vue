<template>
  <div class="content has-text-centered">
    <h1 class="is-title is-bold">Register</h1>

    <div class="columns is-vcentered">
      <div class="column is-6 is-offset-3">
        <div class="box">
          <div v-show="error" style="color:red; word-wrap:break-word;">{{ error }}</div>
          <form v-on:submit.prevent="login">

            <label class="label">Name</label>
            <p class="control">
              <input v-model="data.body.name" class="input" type="text" placeholder=" John Macnamara">
            </p>

            <label class="label">Email</label>
            <p class="control">
              <input v-model="data.body.username" class="input" type="text" placeholder="email@example.org">
            </p>

            <label class="label">Password</label>
            <p class="control">
              <input v-model="data.body.password" class="input" type="password" placeholder="password">
            </p>

            <hr>
            <p class="control">
              <button type="submit" class="button is-primary">Đăng ký</button>
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
        body: {
          name: null,
          username: null,
          password: null
        }
      },
      error: null
    }
  },
  mounted () {
    if (this.$auth.redirect()) {
      console.log('Redirect from: ' + this.$auth.redirect().from.name)
    }
    // Can set query parameter here for auth redirect or just do it silently in login redirect.
  },
  methods: {
    register () {
      this.$auth.register({
        headers: {
          'Content-Type': 'application/json'
        },
        data: this.data.body,
        success (res) {
          console.log('Auth Success')
          // console.log('Token: ' + this.$auth.token())
          // console.log(res)
        },
        error (err) {
          if (err.response) {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            // console.log(err.response.status)
            // console.log(err.response.data)
            // console.log(err.response.headers)
            this.error = err.response.data
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', err.message)
          }
          console.log(err.config)
        }
      })
    }
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
