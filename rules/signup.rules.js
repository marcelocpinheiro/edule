import { validateEmail } from '../utils/validations'
import { signup } from '../services/signup.service'

export async function handleSubmitRule(payload, setErrors, setSuccess, setLoading) {
    const errors = [];

    //Required validations
    if(!payload.password) errors.push("O campo \"Senha\" é obrigatório");
    if(!payload.passwordConfirmation) errors.push("O campo \"Confirmação de Senha\" é obrigatório");
    if(!payload.email) errors.push("O campo \"E-mail\" é obrigatório");
    if(!payload.fullname) errors.push("O campo \"Nome completo\" é obrigatório");

    //Rules validations
    if(errors.length == 0) {
        if(!validateEmail(payload.email)) errors.push("E-mail inválido");
        if(payload.password !== payload.passwordConfirmation) errors.push("A confirmação de senha deve ser igual a senha");
    }

    if(errors.length > 0){
        setErrors(errors);
        return;
    }
    
    setLoading(true)

    try{
        await signup(payload)
        setSuccess(true)
    } catch (e) {
        console.log(e)
        setErrors(["Não foi possível cadastrar-se. Por favor, verifique os valores inseridos"])
    } finally {
        setLoading(false)
    }
}