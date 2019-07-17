<template>
  <span>
    {{ showDate }}
  </span>
</template>

<script>
export default {
  data: function () {
    return {
      nowDate: new Date()
    }
  },
  computed: {
    showDate: function () {
      return this.nowDate.toLocaleString().replace(/\//g, '.')
    }
  },
  methods: {
    refresh: function () {
      this.nowDate = new Date()
      const self = this
      setTimeout(() => { self.refresh() }, 1000)
    }
  },
  created: function () {
    this.refresh()
  }
}
</script>
