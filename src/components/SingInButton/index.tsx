import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'

import style from './styles.module.scss'

export function SignInButton() {
  const { data: session } = useSession();

  return session ? (
    <button
      type='button'
      className={style.singInButton}
      onClick={() => {signOut()}}
    >
      <FaGithub color='#04D361' />
      Matheus Salinas
      <FiX className={style.closeIcon} />
    </button>
  ) : (
    <button 
      type='button'
      className={style.singInButton}
      onClick={() => {signIn('github')}}
    >
      <FaGithub 
        color='#EBA417' 
      />
      Sign in with GitHub
    </button>
  )
}