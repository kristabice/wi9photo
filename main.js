// create a new Vue 
var demo = new Vue({
    el:'#main',

    data: {
        active: 'home',
        show_tooltip: false,
        text_content: 'Edit me.'
    },

    methods:{
        makeActive: function(item){
            this.active = item;
        },
         hideTooltip: function(){
            // When a model is changed, the view will be automatically updated.
            this.show_tooltip = false;
        },
        toggleTooltip: function(){
            this.show_tooltip = !this.show_tooltip;
        }
    }
})


