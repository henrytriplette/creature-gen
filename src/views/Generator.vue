<template>
  <h4 class="uk-heading-line uk-text-uppercase"><span>{{ title }}</span></h4>
  <router-view></router-view>
</template>

<script>
export default {
  name: "Generator Container",
  data() {
    return {
      title: 'Generator'
    }
  },
  components: {},
  methods: {},
};
</script>
