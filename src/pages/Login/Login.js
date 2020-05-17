import React, {useState} from 'react'
import {ContentBg} from '../../containers/ContentBg/ContentBg'
import {PageTitle} from '../../components/PageTitle/PageTitle'
import {InputField} from '../../components/InputField/InputField'
import {Button} from '../../components/Button/Button'
import {getLocalstorage, setLocalstorage} from '../../redux/helpers'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {userLogin, userLoginError, userLoginSuccess} from '../../redux/user/actions'
import {Error} from '../../components/Error/Error'


export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const formSubmit = (event) => {
    event.preventDefault()
    const users = getLocalstorage('users')
    const sameEmail = users.find(item => item.email === email)
    if (sameEmail) {
      if (sameEmail.password === password && sameEmail.email === email) {
        dispatch(userLogin({email, name: sameEmail.name}))
        dispatch(userLoginSuccess({success: 'You are logged in'}))
        setLocalstorage('currentUser', {email, name: sameEmail.name})
        history.push('/')
      } else {
        setError('Incorrect login data')
        dispatch(userLoginError({ error: 'Incorrect login data'}))
      }
    } else {
      setError('You need to register first')
      dispatch(userLoginError({ error: 'You need to register first'}))
    }
    return false
  }

  return (
    <div className="login">
      <ContentBg>
        <PageTitle title='Sign in' />
        <form onSubmit={formSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <InputField type='email' htmlFor='email' title='Email' required onChange={(e) => setEmail(e.target.value)} value={email}/>
            </div>
            <div className="form-group col-md-6">
              <InputField type='password' htmlFor='password' title='Password' required onChange={(e) => setPassword(e.target.value)} value={password}/>
            </div>
          </div>
          {error &&
          <Error msg={error}/>
          }
          <div className="d-flex justify-content-end mt-2">
            <Button title='Login' type='submit' />
          </div>
        </form>
      </ContentBg>
    </div>
  )
}