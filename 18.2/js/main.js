var app = new Vue({

    el:'#app',
    data:{

        //foodList: ['葱','蒜','姜'],
        foodList: [
            {
                name:'葱',
                price:15,
                discount:.8,
            },
            {
                name:'蒜',
                price:10,
                discount:.5,
            },
            {
                name:'姜',
                price:8
            }
        ]

    }

});