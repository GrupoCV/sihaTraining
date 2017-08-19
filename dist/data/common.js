"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListFromFirebaseObject = function (firebaseObject) {
    var array = new Array();
    if (!firebaseObject) {
        return array;
    }
    for (var id in firebaseObject) {
        if (firebaseObject.hasOwnProperty(id)) {
            var record = firebaseObject[id];
            record.id = id;
            array.push(record);
        }
    }
    return array;
};
