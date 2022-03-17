const Navbar = () => {
    return (
        <div className="border-0 leading-8 px-6 py-2
             bg-transparent text-neutral-500 
             grid grid-cols-8 gap-4 text-content"
        >
            <div className=" col-start1 col-end-2">
                Home
            </div>
            <div className="col-start-7 col-end-9 justify-end flex gap-8">
            <div className="">
                Blog
            </div>
            <div className="">
                Travel
            </div>
            <div className="">
                Dashboard
            </div>
            </div>
        </div>
    );
};

export default Navbar;