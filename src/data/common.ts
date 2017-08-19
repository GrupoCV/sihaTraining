import { IModel } from "../core/models";

export const getListFromFirebaseObject = <TModel extends IModel>(firebaseObject: any) => {

    let array = new Array<IModel>();

    if (!firebaseObject) {
        return array;
    }

    for (let id in firebaseObject) {
        if (firebaseObject.hasOwnProperty(id)) {

            let record = firebaseObject[id] as IModel;
            record.id = id;
            array.push(record);
        }
    }

    return array;
}