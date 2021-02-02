class GhController {
    constructor (input){
        this._model = new GhModel(input);
        this._model.openRequest();
        this._view = new GhViews(this._model);
    }

}