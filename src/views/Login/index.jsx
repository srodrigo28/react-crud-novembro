import { useState } from 'react';
import './styles.css';
import axios from 'axios';

export function Login(){
    const url = "https://macatto-api2.vercel.app/login";
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')

    const Validar = async (e) => {
        e.preventDefault();
        console.log(email, senha);

        try{
            const response = await axios.post(url,{
                email: email,
                senha: senha
            })
            console.log(response)
        }catch(err){
            if(error.response){
                setError('1. Erro falha no servidor')
            }else if(error.response == 400){
                setError('2. Usuário ou senha inválidos')
            }
        }
    }

    return(
        <>
        <form autoComplete='on' className='cxLogin'>
            <h1 className="text-center mt-5 mb-3">Bem vindo ao Sistema</h1>
            { error ? error.response : "" }
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
                <div className="col col-btn">
                    <button className="btn btn-outline-primary" onClick={ (e) => Validar(e) }>Entrar</button>
                    <button className="btn btn-outline-success">Registrar</button>
                </div>
            </div>
        </form>
        </>
    )
}