// External Modules
import TypeAnimation from 'react-type-animation';
import axios from 'axios';

// Components
import Button from '../components/Button';
import Card from '../components/Card';

// Hooks
import useFetch from '../hooks/useFetch'

// Icons
import { FaGithub, FaLinkedin, FaExpand } from 'react-icons/fa'; 
import { SiRiotgames } from 'react-icons/si'

const Home = () => {
    const { loading, error, data } = useFetch('http://localhost:1337/api/posts?sort[0]=id%3Adesc');
    
    if (loading) return <p>Loading...</p>
    return (
        <div className="w-home mx-auto">
            <div className='bio'>
                <div className="text-black text-title font-medium">
                    Hey, I'm Shawn!
                </div>
                <div className='text-subtitle text-gray-500 font-light'>
                <span className=''>I'm a </span>
                <TypeAnimation
                    cursor={false}
                    repeat={Infinity}
                    sequence={['developer;', 3000, 'travel lover;', 3000, 'gamer;', 3000]}
                    className="underline decoration-orange-300"
                    wrapper="span"
                />
                <div>Studying Computer Science at the <span className='text-yellow-500 font-normal'>University of Waterloo</span>; 
                    Previously at <span className='text-red-500 font-normal'>Nextroll</span> as Frontend Engineer, <span className='text-lime-500 font-normal'>Oanda</span> as Fullstack Developer;</div>
                </div>
            </div>
            <div className='info grid grid-cols-5 gap-4 mt-3'>
                <div className='text-content'>
                    <Button type="INFO" route='https://github.com/ShawnYxZhao' icon={<FaGithub className=''/>} text="Github"></Button>
                </div>
                <div className='text-content'>
                    <Button type="INFO" route='https://www.linkedin.com/in/yuxiao-shawn-zhao-652908193/' icon={<FaLinkedin className='text-blue-5000'/>} text="LinkedIn"></Button>
                </div>
                <div className='text-content'>
                    <Button type="INFO" route='https://na.op.gg/summoners/na/Nw4Hs' icon={<SiRiotgames className='text-red-5000'/>} text="League"></Button>
                </div>
                <div className='text-content col-start-4 col-span-2'>
                    <Button type="INFO" icon={<FaExpand className=''/>} text="More"></Button>
                </div>
            </div>
            <div className='posts'>
                {data.map(post => (
                    <Card id={post.id} post={post.attributes}/>
                ))}
            </div>
        </div>
    );
}

export default Home;