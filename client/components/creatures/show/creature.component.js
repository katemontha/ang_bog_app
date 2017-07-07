import CreatureController from './creature.controller';
import creatureHtml from './creature.html';
const creatureComponent = {
    controller: CreatureController,
    template: creatureHtml
};
angular.module('BogApp').component("creature", creatureComponent);