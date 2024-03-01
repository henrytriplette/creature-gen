<template>
  <Header />
  <LeftBar />
  <div id="content" data-uk-height-viewport="expand: true">
    <div class="uk-container uk-container-expand">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { version } from "../package.json";
import UIkit from "uikit";
import Icons from 'uikit/dist/js/uikit-icons';

// Icons
UIkit.use(Icons);

// Components
import Header from "@/components/Header.vue";
import LeftBar from "@/components/LeftBar.vue";

export default {
  components: {
    Header,
    LeftBar,
  },
  setup() { },
  data() {
    return {
      name: "Luxottica - BigChain Playground",
    };
  },
  provide() {
    return {
    }
  },
  async mounted() {
    console.log("Ver:", version);
  },
  beforeUnmount() {
  },
  methods: {
  },
};
</script>
