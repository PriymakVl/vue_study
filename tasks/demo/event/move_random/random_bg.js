const { createApp } = Vue;

createApp({
  data() {
    return {
      x: 100,
      y: 100,
      bgColor: '#cccccc',
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

      this.bgColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }
  }
}).mount('#app');