import Ember from 'ember';

export default Ember.Component.extend({
  canUpdate: false,
  hasHarvested: false,
  actions: {
    destroyPlant: function() {
      this.sendAction('routeDestroyPlant', this.get('plant'));
    },
    updatePlant: function() {
      this.set('plant.category', Ember.$('select').val());
      this.set('plant.plantedOn', new Date(this.get('plant.plantedOn')));
      this.set('plant.expectedHarvest', new Date(this.get('plant.expectedHarvest')));
      this.sendAction('routeUpdatePlant', this.get('plant'));
      this.set('canUpdate', false);
      this.set('hasHarvested', false);
    },
    edit: function(){
      this.toggleProperty('canUpdate');
    },
    harvested: function(){
      this.toggleProperty('hasHarvested');
    },
    harvestPlant: function() {
      this.set('plant.harvest', 'true');
      this.sendAction('routeUpdatePlant', this.get('plant'));
      this.set('canUpdate', false);
      this.set('hasHarvested', false);
    }
  }
});
