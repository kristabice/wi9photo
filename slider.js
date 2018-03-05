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
            <b-nav-item href="slider.html" class="items">Home</b-nav-item>
            <b-nav-item-dropdown text="About" right>
            <b-dropdown-item href="/artist">Arist Statement</b-dropdown-item>
            <b-dropdown-item href="/about">About Wi9</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#" class="items">Contact</b-nav-item>
            <b-nav-item href="#" class="items">Consultations</b-nav-item>      

            <b-nav-item-dropdown text="Gallery" right>
            <b-dropdown-item href="#">Family</b-dropdown-item>
            <b-dropdown-item href="#">Senior Photos</b-dropdown-item>
            <b-dropdown-item href="#">Special Events</b-dropdown-item>
            <b-dropdown-item href="#">Wedding Day</b-dropdown-item>
            <b-dropdown-item href="#">Engagements</b-dropdown-item>
            <b-dropdown-item href="#">Bridals</b-dropdown-item>
            <b-dropdown-item href="#">Missionary</b-dropdown-item>
            <b-dropdown-item href="#">Models</b-dropdown-item>
            <b-dropdown-item href="#">Extended Family</b-dropdown-item>
            <b-dropdown-item href="#">Newborn</b-dropdown-item>
            <b-dropdown-item href="#">Maternity</b-dropdown-item>
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