"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mySort = (function () {
    function mySort() {
    }
    mySort.prototype.transform = function (data, term) {
        if (term === undefined) {
            console.log("sssssss");
            return data;
        }
        ;
        return data.filter(function (dataEl) {
            return dataEl.name.toLowerCase().includes(term.toLowerCase());
        });
    };
    return mySort;
}());
mySort = __decorate([
    core_1.Pipe({
        name: 'mySort'
    })
], mySort);
exports.mySort = mySort;
//# sourceMappingURL=sort.pipe.js.map