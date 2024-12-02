app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        },
    },
    template:
        /*html*/
        `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img
                        :src="image"
                        :class="{ outOfStockImage: !inStock }"
                        alt=""
                    />
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p v-if="inventory > 10">In Stock</p>
                    <p v-else-if="inventory <= 10 && inventory > 0">
                        Almost sold out
                    </p>
                    <p v-else>Out of Stock</p>

                    <p>Shipping: {{ shipping }}</p>
                    <ul>
                        <li v-for="detail in details">{{ detail }}</li>
                    </ul>
                    <p>Colors</p>
                    <div
                        v-for="(variant, index) in variants"
                        :key="variant.id"
                        @mouseover="updateVariant(index)"
                        class="color-circle"
                        :style="{ backgroundColor: variant.color }"
                    ></div>
                    <p>Sizes</p>
                    <ul>
                        <li v-for="size in sizes">{{ size }}</li>
                    </ul>
                    <button
                        class="button"
                        @click="addToCart"
                        :disabled="!inStock"
                        :class="{ disabledButton: !inStock}"
                    >
                        Add to cart
                    </button>
                    <button class="button" @click="removeFromCart">
                        Remove from Cart
                    </button>
                </div>
            </div>
        </div>`,

    data() {
        return {
            product: 'Socks',
            brand: 'GW Brand',
            selectedVariant: 0,
            inventory: 0,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {
                    id: 2234,
                    color: 'green',
                    image: './assets/images/socks_green.jpg',
                    quantity: 50,
                },
                {
                    id: 2235,
                    color: 'blue',
                    image: './assets/images/socks_blue.jpg',
                    quantity: 0,
                },
            ],
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        };
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeFromCart() {
            this.cart -= 1;
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
    },
    computed: {
        title() {
            return (
                this.brand +
                ' ' +
                this.product +
                (this.onSale ? ' is on sale' : '')
            );
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        },
        shipping() {
            return this.premium ? 'free' : '$2.99';
        },
    },
});
