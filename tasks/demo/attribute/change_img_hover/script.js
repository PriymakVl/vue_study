const { createApp } = Vue;

  createApp({
    data() {
      return {
        originalImage: 'img/cat.jpg',
        hoverImageSrc: 'img/dog.jpg',
        currentImage: ''
      };
    },
    created() {
      this.currentImage = this.originalImage;
    },
    methods: {
      hoverImage() {
        this.currentImage = this.hoverImageSrc;
      },
      resetImage() {
        this.currentImage = this.originalImage;
      }
    }
  }).mount('#app');