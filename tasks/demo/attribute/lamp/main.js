const { createApp } = Vue;

createApp({
  data() {
    return {
      isOn: false,
      bulbOn: 'img/pic_bulbon.gif',
      bulbOff: 'img/pic_bulboff.gif'
    };
  },
  methods: {
    turnOn() {
      this.isOn = true;
      document.body.style.backgroundColor = '#fffacd'; // светло-жёлтый
    },
    turnOff() {
      this.isOn = false;
      document.body.style.backgroundColor = '#2f2f2f'; // тёмно-серый
    }
  }
}).mount('#app');
