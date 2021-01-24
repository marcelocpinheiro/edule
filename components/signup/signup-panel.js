import ExternalInput from "../external-input";
import ExternalButton from '../external-button'
import ExternalPanel from "../external-panel";
import Router from "next/router";
import { useState } from 'react'

export default function SignupPanel({ onSubmitHandler, errors, success }) {

    const [fullname, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleSignupClick = () => {
        onSubmitHandler({ fullname, email, password, passwordConfirmation })
    }

    return (
        <ExternalPanel title="Cadastrar-se no Edule">
            {(errors.length > 0 && !success) && (<div className="my-2 p-2 bg-red-500 text-white border-red-800">
                { errors.map(error => (
                    <p>{error}</p>
                )) }
            </div>) }

            {success && (<div className="my-2 p-2 bg-green-500 text-white border-green-800">
                <p>Usuário cadastrado com sucesso. Clique em "Fazer login" para proceder com seu login</p>
            </div>) }
            <div className="my-2">
                <ExternalInput label="Nome-completo" type="text" onChangeHandler={setFullName}/>
            </div>
            <div className="my-2">
                <ExternalInput label="E-mail" type="email" onChangeHandler={setEmail}/>
            </div>
            <div className="my-2">
                <ExternalInput label="Senha" type="password" onChangeHandler={setPassword}/>
            </div>
            <div className="my-2">
                <ExternalInput label="Repita a senha" type="password" onChangeHandler={setPasswordConfirmation}/>
            </div>
            <div className="my-2 flex justify-between">
                <div className="w-1/4">
                    <ExternalButton type="success" onClickHandler={handleSignupClick}> Criar conta </ExternalButton>
                </div>
                <div className="w-2/4">
                    <ExternalButton type="link" onClickHandler={() => Router.push("/signin")}> Fazer login </ExternalButton>
                </div>
            </div>
        </ExternalPanel>
    )    
}