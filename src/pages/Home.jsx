// External Modules
import TypeAnimation from 'react-type-animation';

// Components
import Button from '../components/Button';
import Card from '../components/Card';
import Cover from './Cover';
import Loading from './Loading';

// Hooks
import useFetch from '../hooks/useFetch';
import { useSelector } from 'react-redux';

// Icons
import { FaLinkedin } from 'react-icons/fa'; 
import { SiRiotgames } from 'react-icons/si';
import { ChatAlt2Icon, PencilAltIcon } from '@heroicons/react/solid';
import { ImGithub } from "react-icons/im";

const Home = () => {
    const { loading, error, data } = useFetch('https://mochi1.herokuapp.com/api/posts?sort[0]=id%3Adesc');
    const { visited } = useSelector((state) => state.vitals);
    if (loading && !visited) {
        return <Cover/>;
    } else if (loading) {
        return <Loading/>;
    }
    return (
        <>
        <Cover/>
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
                    <Button type="INFO" route='https://github.com/ShawnYxZhao' icon={<ImGithub className='h-5'/>} text=""></Button>
                </div>
                <div className='text-content'>
                    <Button type="INFO" route='https://www.linkedin.com/in/yuxiao-shawn-zhao-652908193/' icon={<FaLinkedin className='h-5'/>} text=""></Button>
                </div>
                <div className='text-content'>
                    <Button type="INFO" route='https://na.op.gg/summoners/na/Nw4Hs' icon={<SiRiotgames className='h-5'/>} text=""></Button>
                </div>
                <div className='text-content col-start-4 col-span-3'>
                    <Button type="MSG" route='/message' icon={<ChatAlt2Icon className='h-5'/>} text="Leave a message"></Button>
                </div>
            </div>
            <div className='posts'>
                {data.map(post => (
                    <Card key={post.id} id={post.id} post={post.attributes}/>
                ))}
            </div>
        </div>
        </>
        
    );
}

export default Home;