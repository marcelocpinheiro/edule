
import ExternalButton from '../external-button'
import Router from 'next/router'

const MainHeaderContent = () => {

    const onSignupClickHandler = () => {
        Router.push("/signup")
    }

    const onSigninClickHandler = () => {
        Router.push("/signin")
    }

    return (
        <div className="flex justify-between">
            <ExternalButton onClickHandler={onSignupClickHandler}>Criar Conta</ExternalButton>
            <ExternalButton onClickHandler={onSigninClickHandler}>Entrar</ExternalButton>
        </div>
    )
}

export default MainHeaderContent