const app = Vue.createApp({
    data() {
        return {
            count: 0
        };
    },
    methods: {
        increase() {
            this.count++;
        },
        decrease() {
            this.count--;
        },
        reset() {
            this.count = 0;
        }
    }
});

app.mount('#app');
