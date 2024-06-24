

const Header = () => {
    return (
        <header className="flex p-5">

            <div className="flex">
                <div className="w-0 h-0 
                border-l-[15px] border-l-transparent
                border-b-[25px] border-b-primary
                border-r-[15px] border-r-transparent
                transition-transform duration-500 ease-in-out
                transform hover:scale-105 hover:translate-y-1 hover:rotate-180" />
                <h1 className="text-2xl font-bold">Task List</h1>
            </div>


        </header>
    )
}

export default Header