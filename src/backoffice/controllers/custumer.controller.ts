import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from "@nestjs/common";
import { ValidatorInterceptor } from "src/interceptors/validator.interceptor";
import { CreateCustomerContract } from "../contracts/customer.contracts";
import { Customer } from "../models/customer.model";
import { Result } from "../models/result.model";

@Controller('customers')
export class CustomerController {

    @Get()
    get() {
        return new Result(true, "Obteve todos os clientes", null, null);
    }

    @Get(':document')
    getByID(@Param('document') document: string) {
        return new Result(true, `Obteve o cliente ${document}`, null, null);
    }

    @Post()
    @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract()))
    post(@Body() body: Customer) {
        return new Result(true, "Usuário Criado", body, null);
    }

    @Put(':document')
    put(@Param('document') document: string, @Body() body: Customer) {
        return new Result(true, "Usuário atualizado com sucesso!", body, null)
    }

    @Delete(':document')
    delete(@Param('document') document: string) {
        return new Result(true, "Usuário deletado com sucesso!", null, null)
    }

}