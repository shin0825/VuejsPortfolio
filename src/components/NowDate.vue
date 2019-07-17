<template>
  <span>
    {{ showDate }}
  </span>
</template>

<script>
export default {
  data: function () {
    return {
      showDate: new Date().toLocaleDateString().replace(/\//g, '.')
    }
  },
}
</script>
