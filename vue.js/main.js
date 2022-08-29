Vue.directive('my-directive', {
    bind: function(el) {
        el.innerHTML = '<p>バインド中</p>';
    },
    update: function (el, binding) {
        el.innerHTML = '<p>' + binding.oldValue + '→' + binding.value + '</p>';
    },
    unbind: function (el) {
        el.innerHTML = '<p>バインドしてない</p>';
        console.log(el.innerHTML);
    },
})

function initial() {
    new Vue({
        el: '#msg',
        data: {
            val: '',
            message: 'this is message'
        },
        methods: {
            myfunc: function () {
                this.message = this.val;
            }
        }
    });
}