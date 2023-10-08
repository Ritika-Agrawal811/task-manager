import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { FaBell } from 'react-icons/fa6'
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

    const signOutHandler = async () => {
        try {
            await signOut(auth)
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <header className='bluish-green text-white py-4'>
            <nav className='px-2 sm:px-4 md:px-0 md:w-4/5 mx-auto flex items-center justify-between'>
                <div>
                    <Link to='/' className='text-green-400 text-2xl font-red-hat font-medium'>
                        TaskSync
                    </Link>
                </div>

                <ul className='flex items-center text-xl gap-4 md:gap-6'>
                    <li
                        className='cursor-pointer duration-75 hover:text-green-400'
                        title='notification'
                    >
                        <FaBell />
                    </li>
                    <li
                        className='cursor-pointer duration-75 hover:text-green-400'
                        title='sign out'
                        onClick={signOutHandler}
                    >
                        <FiLogOut />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
