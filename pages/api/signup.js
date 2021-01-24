import { database } from '../../libs/firebase'
import { generateHash } from '../../utils/password'
import { validateEmail } from '../../utils/validations'

export default async (req, res) => {

    const errors = [];

    if(!req.body.password) errors.push("O campo \"Senha\" é obrigatório");
    if(!req.body.passwordConfirmation) errors.push("O campo \"Confirmação de Senha\" é obrigatório");
    if(!req.body.email) errors.push("O campo \"E-mail\" é obrigatório");
    if(!req.body.fullname) errors.push("O campo \"Nome completo\" é obrigatório");

    //Rules validations
    if(errors.length == 0) {
        if(!validateEmail(req.body.email)) errors.push("E-mail inválido");
        if(req.body.password !== req.body.passwordConfirmation) errors.push("A confirmação de senha deve ser igual a senha");
    }

    if(errors.length > 0) {
        res.statusCode = 400
        res.json({
            errors
        })
        return;
    }

    try {
        const userObj = {
            fullname: req.body.fullname,
            password: await generateHash(req.body.password),
            email: req.body.email
        }
    
        database.ref("users").push(userObj, (error) => {
            if(error) {
                console.error(error)
                res.statusCode = 500
                res.json({
                    errors: ['Erro interno. Tente novamente mais tarde.']
                })
            }

            res.statusCode = 201
            res.json({ message: 'Usuário criado' })
        })
    } catch {
        res.statusCode = 500
        res.json({
            errors: ['Erro interno. Tente novamente mais tarde.']
        })
    }
  }
  