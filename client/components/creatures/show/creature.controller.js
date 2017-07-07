CreatureController.$inject = ["$stateParams", "creatureService"];

function CreatureController($stateParams, creatureService) {
    const vm = this;

    activate();

    function activate() {
        creatureService.getCreature($stateParams.id).then(res => {
            vm.creature = res;
        });
    }
}

export default CreatureController;