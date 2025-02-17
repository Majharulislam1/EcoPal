

const Navbar = () => {
    return (
        <div className="border">
            <div className="px-4 mx-auto max-w-7xl sm:px-6">
                <div className="relative py-6">
                    <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                        <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <a href="#"><span className="sr-only">Company Name</span>
                                    <img className="w-auto h-8 sm:h-10" src="https://www.svgrepo.com/show/448244/pack.svg" loading="lazy" width="202" height="40" />
                                </a>
                                <div className="flex items-center -mr-2 md:hidden">
                                  
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex md:space-x-10 list-none">
                            <li>
                                <a href="#" className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                                    target="">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                                    target="">Gallary
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                                    target="_blank">Blog
                                </a>
                            </li>
                        </div>
                        <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                            <div className="inline-flex rounded-full shadow">
                                <div href="#"
                                    className="inline-flex items-center px-4 py-2 text-base text-black font-semibold bg-primary border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50 ">
                                    Sign in
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;