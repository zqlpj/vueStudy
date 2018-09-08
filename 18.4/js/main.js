var app = new Vue({

    el:'#app',
    data:{

    },
    methods:{

        onClick:function () {
            console.log("click");
        },
        mouseEnter:function () {
            console.log("mouseenter");
        },
        mouseLeave:function () {
            console.log("mouseLeave")
        },
        onSubmit:function () {
            console.log("submit");
        },
        onKeyUp:function () {
            console.log("keyup enter")
        }

    }

})