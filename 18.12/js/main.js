Vue.component('alert',{

    template:
    `
        <button @click="on_click">
            点我        
        </button>
    `,
    props:['msg'],
    methods:{
        on_click:function () {
            alert(this.msg);
        }

    }

});

Vue.component('user',{

    template:`
    <a :href="'/user/'+username">{{username}}</a>
    `,
    props:['username']

})

new Vue({

    el:'#app'

})