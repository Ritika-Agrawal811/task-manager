import { useState } from 'react'
import { auth } from '../../config/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
    const [register, setRegister] = useState(false)
    const [user, setUser] = useState({ email: '', password: '' })
    const navigate = useNavigate()

    const toggleFormHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        setRegister(!register)
    }

    const registerHandler = async () => {
        if (user.email && user.password) {
            try {
                await createUserWithEmailAndPassword(auth, user.email, user.password)
            } catch (error) {
                console.error(error)
            } finally {
                setUser({ email: '', password: '' })
                navigate('/user')
            }
        }
    }

    const loginHandler = async () => {
        if (user.email && user.password) {
            try {
                await signInWithEmailAndPassword(auth, user.email, user.password)
            } catch (error) {
                console.error(error)
            } finally {
                setUser({ email: '', password: '' })
                navigate('/user')
            }
        }
    }

    return (
        <section className='min-h-screen flex items-center bluish-green'>
            <div className='w-full sm:w-96 lg:w-1/3 mx-auto p-3'>
                <h2 className='text-center text-3xl md:text-4xl font-bold mb-8 text-green-400 font-red-hat'>
                    {register ? 'Register' : 'Sign In'}
                </h2>
                <form className='flex flex-col'>
                    <label
                        htmlFor='useremail'
                        className='text-slate-200 md:text-lg mb-2 font-medium'
                    >
                        Email
                    </label>
                    <input
                        type='email'
                        placeholder='user@example.com'
                        id='useremail'
                        className='border-0 p-3 mb-6 bluish-gray rounded-lg text-white'
                        value={user.email}
                        onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
                    />
                    <label
                        htmlFor='userpassword'
                        className='text-slate-200 md:text-lg mb-2 font-medium'
                    >
                        Password
                    </label>
                    <input
                        type='password'
                        id='userpassword'
                        className='border-0 p-3 mb-4 bluish-gray rounded-lg text-white'
                        value={user.password}
                        onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
                    />
                </form>
                {!register && (
                    <div className='flex justify-end'>
                        <a href='/' className='font-medium text-green-400'>
                            Forgot Password?
                        </a>
                    </div>
                )}

                {register ? (
                    <button
                        className='bg-green-400 duration-150 hover:bg-green-500 w-full mt-6 p-2.5 rounded-lg font-medium text-lg'
                        onClick={registerHandler}
                    >
                        Sign Up
                    </button>
                ) : (
                    <button
                        className='bg-green-400 duration-150 hover:bg-green-500 w-full mt-6 p-2.5 rounded-lg font-medium text-lg'
                        onClick={loginHandler}
                    >
                        Login
                    </button>
                )}

                <div className='flex justify-center mt-3'>
                    <a href='/' className='font-medium text-green-400' onClick={toggleFormHandler}>
                        {register
                            ? 'Already a User? Click to login.'
                            : 'New User? Click to register.'}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default RegisterForm
