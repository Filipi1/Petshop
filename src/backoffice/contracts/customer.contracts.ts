import { Customer } from "../models/customer.model";
import { Contract } from "./contract";
import { Flunt } from "../../utils/flunt"

export class CreateCustomerContract implements Contract {
    errors: any[];
    
    validate(model: Customer): boolean {
        const flunt = new Flunt();

        flunt.hasMinLen(model.name, 5, 'Nome Inválido');
        flunt.isEmail(model.email, 'Email Inválido');
        flunt.isFixedLen(model.document, 11, 'CPF Inválido');
        flunt.hasMinLen(model.password, 5, 'Senha Inválida');
        this.errors = flunt.errors;

        return flunt.isValid()
    }
}