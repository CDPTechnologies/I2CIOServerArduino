Vue.component('cdprange',{
  props: ['name', 'interactor', 'setclass', 'minimum', 'maximum', 'stepsize'],
  methods:{
    up: function(){
      this.interactor.setValue(this.interactor.value, 0);
    }
  },

  template: '\
    <input\
      class=""\
      type="range"\
      v-model.number="interactor.value"\
      v-on:mouseup="up()"\
      @touchend="up()"\
      v-bind:min="minimum"\
      v-bind:max="maximum"\
      v-bind:step="stepsize"\
      v-bind:class="setclass"/>'
});