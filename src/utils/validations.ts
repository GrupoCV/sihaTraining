export namespace Validations {

    export const esStringRequeridoValido = (value: string) => {

        if (!value) {
            return false;
        }

        if (value.trim().length < 1) {
            return false;
        }

        return true;
    }

    export const esNumeroRequeridoValido = (value: any, minValue?: number): boolean => {

        if (!value) {
            return false;
        }
        else {
            if (isNaN(value)) {
                return false;
            } else if (minValue && value && value < minValue) {
                return false;
            }
        }

        return true;
    }

}