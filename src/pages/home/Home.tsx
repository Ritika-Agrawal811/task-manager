import TasksList from './tasksList/TasksList'

const Home = () => {
    return (
        <main className='mt-8 px-2 sm:px-4 md:px-0 md:w-4/5 mx-auto'>
            <h2 className='font-red-hat font-medium text-xl sm:text-2xl'>Tasks</h2>
            <TasksList />
        </main>
    )
}

export default Home
