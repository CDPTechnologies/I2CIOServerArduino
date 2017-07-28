Vue.component('cdpbutton',{
  props: ['name', 'interactor', 'setclass'],
  methods: {
    down: function () {
      this.interactor.setValue(true,0);
    },
    up: function (){
      this.interactor.setValue(false,0);
    }
  },
  template: '\
  <button v-on:mousedown="down()" v-on:mouseup="up()" @touchstart="down()" @touchend="up()" v-bind:class="setclass">\
  {{name}}\
  </button>'
});