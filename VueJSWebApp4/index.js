var app = new Vue({
    el: '#app',
    data: {
        message:'Hello VueJS'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join();
        }
    }
});