const { createApp } = Vue;

createApp({
    data() {
      return {
        mainImage: 'img/cat.jpg',
        thumbnails: [
          'img/dog.jpg',
          'img/mouse.jpg',
          'img/cat.jpg',
        ]
      };
    },
    methods: {
      changeImage(newSrc) {
        this.mainImage = newSrc;
      }
    }
  }).mount('#app');





