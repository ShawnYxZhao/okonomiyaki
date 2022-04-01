// Icons
import { HomeIcon, TemplateIcon, GlobeIcon, PencilAltIcon } from '@heroicons/react/outline'

// Components
import Button from './Button';

const Navbar = () => {
    return (
        <div className="border-0 px-8 py-4
             bg-transparent text-neutral-500 w-full
             grid grid-cols-8 gap-4 text-content tracking-wider fixed top-0"
        >
            <div className="col-start1 col-end-2 justify-left flex">
                <Button route="/" icon={<HomeIcon className='h-5 w-5'/>} text={'Home'}/>
            </div>
            <div className="col-start-8 col-end-9 justify-end flex gap-1">
                <Button route="/travel" icon={<GlobeIcon className='h-5 w-5'/>} text={'Travel'}/>
            </div>
        </div>
    );
};

export default Navbar;