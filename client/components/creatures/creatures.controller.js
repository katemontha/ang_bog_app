CreaturesController.$inject = ["creaturesService"];

function CreaturesController() {
    var vm = this;

    activate();

    function activate() {
        creaturesService.getCreatures().then(res => {
            vm.creatures = res;
        });
    }
}
export default CreaturesController;