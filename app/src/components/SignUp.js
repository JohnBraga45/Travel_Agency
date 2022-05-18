import React from 'react'

const SignUp = () => {
  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control'>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Nome do usuário'
              required
            />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Insira o email'
              required
            />
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Escolha a tua password'
            />
            <input
              type='password'
              name='password2'
              id='password2'
              placeholder='Confirme a password'
            />
            <button type='submit'>Criar Conta</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default SignUp
