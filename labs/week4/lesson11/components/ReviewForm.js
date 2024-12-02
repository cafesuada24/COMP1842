app.component('review-form', {
    template:
        /*html*/
        `<form action="" class="reiview-form" @submit.prevent='onSubmit'>
            <h3>Leave a review</h3>
            <label for="name"></label>
            <input type="text" id="name" v-model='name' />

            <label for="review">Review:</label>
            <textarea name="" id="review" v-model='review'></textarea>
            
            <label for="rating"></label>
            <select name="" id="rating" v-model.number='rating'>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>

            <input class="button" type="submit" value="Submit">
        </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
        };
    },
    methods: {
        onSubmit() {
            if (
                this.name === '' ||
                this.review === '' ||
                this.rating === null
            ) {
                alert('Review is incomplete. Please fill out every field');
                return;
            }
            const productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
            };
            this.$emit('review-submitted', productReview);
            this.name = '';
            this.review = '';
            this.rating = null;
        },
    },
});
