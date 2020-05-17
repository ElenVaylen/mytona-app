import React, {useState} from 'react'
import {ContentBg} from '../../containers/ContentBg/ContentBg'
import {PageTitle} from '../../components/PageTitle/PageTitle'
import {InputField} from '../../components/InputField/InputField'
import {Button} from '../../components/Button/Button'
import {Error} from '../../components/Error/Error'
import {useHistory} from 'react-router-dom'
import {getLocalstorage, setLocalstorage} from '../../redux/helpers'
import {useDispatch} from 'react-redux'
import {userRegisterSuccess} from '../../redux/user/actions'

export const Register = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [errorFields, setErrorFields] = useState([])
  const history = useHistory()
  const dispatch = useDispatch()

  const formSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    setError('')
    setErrorFields([])
    if (password !== passwordRepeat) {
      setError('Different passwords')
      setErrorFields(['password', 'passwordCopy'])
      setLoading(false)
      return false
    }
    const users = getLocalstorage('users')
    const findSameEmail = users.find(item => item.email === email)
    if (findSameEmail) {
      setError('Such user already exists')
      setLoading(false)
      return false
    }
    let newUser = {
      'email': email,
      'name': name,
      'password': password
    }
    if (!users) {
      setLocalstorage('users', [newUser])
    } else {
      setLocalstorage('users', [...users, newUser])
    }
    setLoading(false)
    dispatch(userRegisterSuccess({success: 'You have successfully registered'}))
    history.push('/login')
    return false
  }

  const getWrongField = (nameField) => {
    return errorFields.find(item => item === nameField)
  }

  return (
    <div className="register">
      <ContentBg>
        <PageTitle title='Sign up' />
        <form onSubmit={formSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <InputField type='email' htmlFor='email' title='Email' required onChange={(e) => setEmail(e.target.value)} value={email}/>
            </div>
            <div className="form-group col-md-6">
              <InputField type='text' htmlFor='name' title='Name' required onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            <div className="form-group col-md-6">
              <InputField error={getWrongField('password')} type='password' htmlFor='password' title='Password' required onChange={(e) => setPassword(e.target.value)} value={password}/>
            </div>
            <div className="form-group col-md-6">
              <InputField error={getWrongField('passwordCopy')} type='password' htmlFor='passwordCopy' title='Repeat password' required onChange={(e) => setPasswordRepeat(e.target.value)} value={passwordRepeat}/>
            </div>
          </div>
          {error &&
            <Error msg={error}/>
          }
          <div className="d-flex justify-content-end mt-2">
            <Button title='Create account' type='submit' disabled={loading}/>
          </div>
        </form>
      </ContentBg>
    </div>
  )
}