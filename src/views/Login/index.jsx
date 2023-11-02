import { useState } from 'react';
import './styles.css';

export function Login(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return(
        <>
        <form autoComplete='off'>
            <h1 className="text-center mt-5 mb-3">Bem vindo ao Sistema</h1>
            <div className="row">
                <div className="col">
                    <label htmlFor='email'>E-mail</label>
                    <input 
                        id='email' 
                        type="text" 
                        placeholder="Email"
                        className="form-control"
                        onChange={ e => setEmail(e.target.value)} value={email}
                    />
                </div>
                <div className="col">
                    <label htmlFor='senha'>Senha</label>
                    <input 
                        id='senha' 
                        type="password" 
                        placeholder="***********************"
                        className="form-control"
                        onChange={ e => setSenha( e.target.value)} value={senha}
                    />
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <button className="btn btn-outline-primary">Entrar</button>
                    <button className="btn btn-outline-success">Registrar</button>
                </div>
            </div>
        </form>
        <div>
            <p>E-mail: { email } </p>
            <p>Senha:  { senha } </p>
        </div>
        </>
    )
}