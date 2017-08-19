import { dataBase } from "../initDatabase";
import { getListFromFirebaseObject } from "./common";
import { FirebaseEntities } from "../core/constants";
import { CursosModel } from "../core/models";

export namespace Cursos {

    export const getCursosDocente = (chatId: number, idDocente: number): Promise<Array<CursosModel>> => {
        return dataBase.ref(FirebaseEntities.cursos).orderByChild("idDocente").equalTo(idDocente).once('value')
            .then((snapshot: any) => {
                return getListFromFirebaseObject<CursosModel>(snapshot.val());
            })
            .catch((error: any) => {
                console.log("Cursos/getCursosDocente" + error);
            });
    }
}