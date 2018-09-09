var Event = new Vue();

Vue.component('brook',{

    template:`
    <div>
    我说：<input type="text" v-model="i_said" @keyup="onClick" />
    </div>
    `,
    data:function () {
        return {

            i_said:''

        }
    },
    methods:{
        onClick:function () {
            Event.$emit('brook-said-sth',this.i_said)
        }
    }

});

Vue.component('su',{

    template:`
    <div>
    brook说：{{brook_said}}
    </div>
    `,
    data:function () {
        return{
            brook_said:''
        }
    },
    mounted:function () {
        var me  = this;
        Event.$on('brook-said-sth',function (data) {
            me.brook_said = data;
        })
    }


})

new Vue({

    el:'#app'

})