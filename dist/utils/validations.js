"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validations;
(function (Validations) {
    Validations.esStringRequeridoValido = function (value) {
        if (!value) {
            return false;
        }
        if (value.trim().length < 1) {
            return false;
        }
        return true;
    };
    Validations.esNumeroRequeridoValido = function (value, minValue) {
        if (!value) {
            return false;
        }
        else {
            if (isNaN(value)) {
                return false;
            }
            else if (minValue && value && value < minValue) {
                return false;
            }
        }
        return true;
    };
})(Validations = exports.Validations || (exports.Validations = {}));
