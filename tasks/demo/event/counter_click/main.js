const app = Vue.createApp({
    data() {
        return {
            count: 0
        };
    },
    methods: {
        increment() {
            this.count++;
        }
    }
});

app.mount('#app');
