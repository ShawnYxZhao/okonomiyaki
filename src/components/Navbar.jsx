// Icons
//import { HomeIcon, ChartPieIcon, GlobeIcon, PencilAltIcon } from '@heroicons/react/outline'
import { HomeIcon, LocationMarkerIcon, AdjustmentsIcon, PencilAltIcon, BookmarkAltIcon } from '@heroicons/react/solid'

// Components
import Button from './Button';

const Navbar = () => {
    return (
        <div className="border-0 px-8 py-4 z-10
             bg-white text-neutral-500 w-full
             grid grid-cols-8 gap-4 text-content tracking-wider fixed top-0"
        >
            <div className="col-start1 col-end-2 justify-left flex">
                <Button route="/" icon={<HomeIcon className='h-5 w-5'/>} text={'Home'}/>
            </div>
            <div className="col-start-8 col-end-9 justify-end flex gap-0">
                <Button route="/jotting" icon={<BookmarkAltIcon className='h-5 w-5'/>} text={'Jotting'}/>
                <Button route="/travel" icon={<LocationMarkerIcon className='h-5 w-5'/>} text={'Travel'}/>
                <Button route="/travel" icon={<AdjustmentsIcon className='h-5 w-5'/>} text={'Panel'}/>
            </div>
        </div>
    );
};

export default Navbar;