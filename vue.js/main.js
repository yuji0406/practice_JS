function initial() {

    new Vue({
        el: '#msg',
        data: {
            woTax: '0'
        },
        computed: {
            wTax: {
                get: function () {
                    return parseInt(this.woTax * 1.08);
                },
                set: function (val) {
                    this.woTax = Math.ceil(val / 1.08);
                }
            }
        }
    })
}