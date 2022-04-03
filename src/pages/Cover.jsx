import { useState } from 'react';
import TypeAnimation from 'react-type-animation';
import Typed from 'react-typed';
import Typist from 'react-text-typist';




const Cover = () => {
    const [showHome, setShowHome] = useState(false);
    return (
        <div 
        className={`cover fixed top-0 w-screen h-screen bg-white ${showHome && 'transition-opacity duration-1000 opacity-0'}`}
        onClick={() => setShowHome(true)}
        >
            <div className='group w-fit mx-auto text-center font-medium absolute top-72 left-0 right-0'>
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
                    sentences={['Hey, I\'m Shawn!', '你好，我是肖恩!', 'Bonjour, je suis Shawn!', 'こんにちは、私はショーンです!',]} 
                    loop={true}
                    typingSpeed={180}
                    deletingSpeed={50}
                    pauseTime={2000}
                    cursorSmooth
                    cursorBlinkSpeed={1500}
                />
                {/* <div className='border-gray-400 text-content border-0 w-fit mx-auto py-1 px-16 rounded-lg mt-10 font-medium
                                  hover:shadow-md hover:cursor-pointer	'
                    onClick={() => setShowHome(true)}                 
                >
                    Enter
                </div> */}
            </div>
        </div>
    );
};

export default Cover;