Vue.component('cdptoggle',{
  props: ['name', 'interactor', 'setclass'],
  data (){
    return{
      check: false
    }
  },
  watch:{
    check: function(){
      this.interactor.setValue(this.check, 0);
    }
  },
  template: '\
  <label class="control switch" v-bind:class="setclass">\
    <input type="checkbox" name="checkbox" v-model="check">\
    <span class="control-indicator"></span>\
    <span class="control-label">{{name}}</span>\
  </label>'
});