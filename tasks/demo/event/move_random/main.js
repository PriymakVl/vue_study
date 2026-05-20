const { createApp } = Vue;

createApp({
  data() {
    return {
      x: 100,
      y: 100,
      boxWidth: 100,
      boxHeight: 100
    };
  },
  methods: {
    moveBox() {
      const maxX = window.innerWidth - this.boxWidth;
      const maxY = window.innerHeight - this.boxHeight;

      this.x = Math.floor(Math.random() * maxX);
      this.y = Math.floor(Math.random() * maxY);

    }
  }
}).mount('#app');