"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var gameData_service_1 = require("./gameData.service");
var AppComponent = (function () {
    function AppComponent(_gameData) {
        this._gameData = _gameData;
        this.show = true;
        this.mainData = [];
        this.selection = [];
    }
    AppComponent.prototype.toggleShow = function () {
        this.show = !this.show;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.mainData = this._gameData.getData();
    };
    AppComponent.prototype.exist = function (newData) {
        return this.selection.indexOf(newData) > -1;
    };
    AppComponent.prototype.toggleSelection = function (newData) {
        var idx = this.selection.indexOf(newData);
        if (idx > -1) {
            this.selection.splice(idx, 1);
        }
        else {
            this.selection.push(newData);
            console.log(this.selection);
        }
    };
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styles: [
            'li {list-style: none; }.main-container{min-width:200px; background: whitesmoke; border: 1px solid grey; display:inline-block; padding:5px;} ul{padding: 0;margin:0} '
        ],
        template: "\n\n\n  <div class=\"main-container\"  >\n    <span (click)=\"toggleShow()\">\n    Game \n    </span>     \n    <div *ngIf=\"show\" style=\"margin-top:10px;\">\n     <input [(ngModel)]=\"term\">\n  \n  <ul>\n      <li *ngFor=\"let data of mainData  | mySort:term\">\n      <input id=\"{{data.name}}\" type=\"checkbox\" value=\"{{data.name}}\" [checked]=\"exist(data.name)\" (click)=\"toggleSelection(data.name)\" />\n      <label for=\"{{data.name}}\">{{data.name}}</label>\n      </li>\n  </ul>\n    </div>\n  </div>\n  \n  <h1> slected shorting array</h1>\n    <ul>\n      <li *ngFor=\"let data of selection\">\n        {{data}}\n      </li>\n  </ul>\n\n  "
    }),
    __metadata("design:paramtypes", [gameData_service_1.gameData])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map