import React from 'react'

const Login = () => {
  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Insira o e-mail'
              required
            />
            <input type='password' name='password' id='password' placeholder='Password' />
            <button type='submit'>Entrar</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login
