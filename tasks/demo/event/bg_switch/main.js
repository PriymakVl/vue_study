const { createApp } = Vue;

createApp({
  data() {
    return {
      color: 'lightgray'
    };
  },
  methods: {
    setColor(newColor) {
      this.color = newColor;
    }
  }
}).mount('#app');