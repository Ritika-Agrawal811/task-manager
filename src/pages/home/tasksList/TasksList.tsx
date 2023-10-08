import useWindowSize from '../../../hooks/useWindowSize'

import SearchBox from '../../../components/SearchBox'
import Button from '../../../components/Button'
import { IoFilter, IoAddCircleOutline } from 'react-icons/io5'
import Table from '../../../components/Table'

const TasksList = () => {
    const { width } = useWindowSize()
    const labels = ['Title', 'Description', 'Due Date']

    return (
        <section className='mt-8'>
            <header className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between'>
                <div className='flex gap-4'>
                    <SearchBox />
                    <Button className='bg-slate-200 duration-150 hover:bg-slate-300 flex items-center gap-4'>
                        <IoFilter /> {width && width > 424 ? 'Filter' : ''}
                    </Button>
                </div>

                <Button className='bg-green-400 duration-150 hover:bg-green-500 flex items-center gap-4 justify-center'>
                    <IoAddCircleOutline size={26} /> Add Task
                </Button>
            </header>
            <main className='mt-4 border border-warning'>
                <Table labels={labels} />
            </main>
        </section>
    )
}

export default TasksList
