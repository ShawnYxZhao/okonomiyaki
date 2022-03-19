// External Modules
import TypeAnimation from 'react-type-animation';

// Components
import Button from '../components/Button';

// Icons
import { FaGithub, FaLinkedin, FaExpand } from 'react-icons/fa'; 
import { SiRiotgames } from 'react-icons/si'

const Home = () => {
    return (
        <div className="">
            <div className='bios'>
                <div className="text-black text-title font-medium">
                    Hey, I'm Shawn!
                </div>
                <div className='text-subtitle text-gray-500 font-light'>
                <span className=''>I'm a </span>
                <TypeAnimation
                    cursor={false}
                    repeat={3}
                    sequence={['gamer;', 3000, 'traveller;', 3000, 'developer;', 3000]}
                    className="underline decoration-orange-300"
                    wrapper="span"
                />
                <div>Studying Computer Science at the <span className='text-yellow-500 font-normal'>University of Waterloo</span>; 
                    Previously at <span className='text-red-500 font-normal'>Nextroll</span> as Frontend Engineer, <span className='text-lime-500 font-normal'>Oanda</span> as Fullstack Developer;</div>
                </div>
            </div>
            <div className='grid grid-cols-5 gap-4 mt-3'>
                <div className='text-content'>
                    <Button type="BIO" icon={<FaGithub className=''/>} text="Github"></Button>
                </div>
                <div className='text-content'>
                    <Button type="BIO" icon={<FaLinkedin className='text-blue-500'/>} text="LinkedIn"></Button>
                </div>
                <div className='text-content'>
                    <Button type="BIO" icon={<SiRiotgames className='text-red-500'/>} text="League"></Button>
                </div>
                <div className='text-content col-start-4 col-span-2'>
                    <Button type="BIO" icon={<FaExpand className=''/>} text="More"></Button>
                </div>
            </div>
        </div>
    );
}

export default Home;