const app = Vue.createApp({
    data() {
        return {
            colorBtn: 'black'
        };
    },
    methods: {
        changeColor() {
            this.colorBtn = 'red';
        }
    }
})

app.mount('#app');






