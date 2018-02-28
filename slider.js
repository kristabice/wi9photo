Vue.component('tabs', {
    template: `
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive } "> 
                <a :href="tab.href" @click = "selectTab(tab)">{{ tab.name }}<a></li>
            </ul>
        </div>

        <div class="tab-details">
            <slot></slot>
        </div>
    </div>
    `,

    data() {
        return {tabs: []}
    },


    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            })
          
        },
    }
});



Vue.component('tab', {
    template:`
    <div v-show = "isActive" ><slot></slot><div>
    `,

    props: {
        name: {required: true},
        selected: {default: false},
    },

    data() {
        return {
            isActive: false
        }
    },

    computed: {

        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }

    },

    mounted() {
        this.isActive = this.selected;
    },
});

Vue.component('gallery', {

}),

Vue.component('navigation', {
    template:`
        
        <b-navbar toggleable="md" type="dark" variant="info" class="pull-right" class="navColor align-items-end">

        <b-navbar-toggle target="nav_collapse" data-toggle></b-navbar-toggle>

        <div class="logo-container">
        <b-navbar-brand href="#"><img src="img/ogo.jpg" alt="wi9 logo"></b-navbar-brand>
        </div>
        <b-collapse is-nav id="nav_collapse" class="flex-row-reverse">

            <b-navbar-nav>
            <b-nav-item href="#" class="items">Link</b-nav-item>
            <b-nav-item href="#" class="items">Disabled</b-nav-item>

            <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown>
            </b-navbar-nav>

            

        </b-collapse>
        </b-navbar>

    `,
})

new Vue({
    el:'#root',
    data: {
  slide: 0,
  sliding: null
},
methods: {
  onSlideStart: function(slide) {
    this.sliding = true
  },
  onSlideEnd: function(slide) {
    this.sliding = false
  }
}
    
 
});