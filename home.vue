<template>
  <div>
    <div>{{ id }}</div>
    <button @click="getUser(123)"></button>
  </div>
</template>

<script>
export default {
  components: {
    Navbar,
    Sidebar,
  },
  data() {
    return {
      id: -1,
      coin: 0,
    }
  },
  mounted() {
    this.getCurrentUser()
  },
  methods: {
    getUserProfileImage: () => {},
    getCurrentUser: () => {
      var decoded = jwt()
      this.id = decoded.id
    },
    getUser: () => {
      try {
        var id = 123
        console.log(id)
        console.log(this.id)

        const response = axios.get(
          `https://www.mocky.io/v2/5c77c5b330000051009d64c9/${id}`
        )
        console.log(response)
      } catch (err) {
        console.error(err)
      }
    },
  },
}
</script>
