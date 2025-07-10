import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const InputSearch = (props) => {
    const { value, onChange, placeholder = "Search..." } = props;
    return (
    <div className='flex items-center gap-3'>
        <div className='relative'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <MagnifyingGlassIcon className='w-5 text-gray-400' />
            </div>
            <input
                type="text"
                name='search'
                className="block ps-10 py-5 px-2 h-8 outline-none bg-gray-100 text-gray-400 md:text-sm text-xs rounded-md"
                placeholder="Search movies ... "
            />
        </div>
    </div>
    );
};

export default InputSearch;