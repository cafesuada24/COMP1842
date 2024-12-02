// Create Vue app
const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
        };
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        removeFromCart(id) {
            const index = this.cart.indexOf(id);
            if (id > -1) {
                this.cart.splice(index, 1);
            }
        },
    },
});
