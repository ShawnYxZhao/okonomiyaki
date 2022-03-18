// External Modules
import TypeAnimation from 'react-type-animation';

// Components
import Button from '../components/Button';

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
                    sequence={['blogger;', 3000, 'traveller;', 3000, 'developer;', 3000]}
                    className="underline decoration-orange-300"
                    wrapper="span"
                />
                <div>Studying Computer Science at the <span className='text-yellow-500 font-normal'>University of Waterloo</span>; 
                    Previously at <span className='text-red-500 font-normal'>Nextroll</span> as Frontend Engineer, <span className='text-lime-500 font-normal'>Oanda</span> as Fullstack Developer;</div>
                </div>
            </div>
            <div>
                <Button text="Github"></Button>
            </div>
        </div>
    );
}

export default Home;