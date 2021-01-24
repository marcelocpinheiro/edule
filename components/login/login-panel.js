import ExternalInput from "../external-input";
import ExternalButton from '../external-button'
import ExternalPanel from "../external-panel";

export default function LoginPanel() {
    return (
        <ExternalPanel title="Entrar no Edule">
            <div className="my-2">
                <ExternalInput label="E-mail" type="email" onChangeHandler={console.log}/>
            </div>
            <div className="my-2">
                <ExternalInput label="Senha" type="password" onChangeHandler={console.log}/>
            </div>
            <div className="my-2 flex justify-between">
                <div className="w-1/4">
                    <ExternalButton> Entrar </ExternalButton>
                </div>
                <div className="w-2/4">
                    <ExternalButton type="link"> Esqueci minha senha </ExternalButton>
                </div>
            </div>
        </ExternalPanel>
    )    
}