import { dataBase } from "../initDatabase";
import { getListFromFirebaseObject } from "./common";
import { UsuarioModel } from "../core/models";
import { FirebaseEntities } from "../core/constants";

export namespace Usuarios {

    export const getUsuarioByDocumento = (documento: string): Promise<any> => {

        return dataBase.ref(FirebaseEntities.usuarios).once("value")
            .then((snapshot: any) => {

                if (!snapshot.val()) {
                    return null;
                }

                const usuarios = getListFromFirebaseObject<UsuarioModel>(snapshot.val());
                let usuarioAutenticado = usuarios[usuarios.findIndex(function (usuario: UsuarioModel) { return usuario.id == documento; })] as UsuarioModel;

                return usuarioAutenticado;
            })
            .catch((error: any) => {
                console.log("Usuarios/getUsuarioByDocumento: " + error);
                return null;
            });
    }

}