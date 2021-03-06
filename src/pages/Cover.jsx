import { useState } from 'react';
import TypeAnimation from 'react-type-animation';
import Typed from 'react-typed';
import Typist from 'react-text-typist';
import { CursorClickIcon } from '@heroicons/react/solid';
import { useSelector, useDispatch } from 'react-redux';
import { updateVitals } from '../actions/vitals';


const Cover = () => {
    const [showHome, setShowHome] = useState(false);
    const { visited } = useSelector((state) => state.vitals);
    const dispatch = useDispatch();

    const clickCover = () => {
        setShowHome(true);
        setTimeout(() => dispatch(updateVitals({visited:true})), 1000);
    }
    return (
        <div 
        className={`cover fixed top-0 w-screen h-screen bg-white ${visited && 'hidden'} ${showHome && !visited && 'animate-fadeOut'}`}
        onClick={clickCover}
        >
            <div className='group mx-auto text-center font-medium absolute top-72 left-0 right-0'>
                {/* <Typed
                    className='text-title'
                    strings={['Hey, I\'m Shawn', '你好，我是Shawn']}
                    typeSpeed={160}
                    backSpeed={50}
                    backDelay={5000}
                    showCursor={false}
                    loop
                /> */}
                <Typist
                    className='text-[40px]'
                    sentences={['Hey, I\'m Shawn!', '你好，我是Shawn!', 'Bonjour, je suis Shawn!', 'こんにちは、私はショーンです!',]} 
                    loop={true}
                    typingSpeed={180}
                    deletingSpeed={50}
                    pauseTime={2000}
                    cursorSmooth
                    cursorBlinkSpeed={1500}
                />
                
            </div>
        </div>
    );
};

export default Cover;