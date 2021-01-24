import { firebase, database } from '../../libs/firebase'
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
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
        const uid = userCredential.user.uid

        const userObj = {
            fullname: req.body.fullname,
            email: req.body.email,
            uid
        }

        database.ref(`users`).push(userObj, (error) => {
            if(error) {
                res.statusCode = 500
                res.json({
                    errors: ['Erro interno. Tente novamente mais tarde.']
                })
            }
        })

        res.statusCode = 200
        res.json({
            message: "Usuário cadastrado com sucesso"
        })
        return
    } catch (error) {
        if(error.code == 'auth/email-already-in-use') {
            res.statusCode = 400
            res.json({
                errors: ['Já existe um usuário com este e-mail']
            })
            return
        }

        res.statusCode = 500
        res.json({
            errors: ['Não foi possível cadastrar o usuário. Por favor, tente novamente mais tarde.']
        })
        return
        
    }
  }
  