// Create Vue app
const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inventory: 8,
            onSale: true,
        };
    },
});
