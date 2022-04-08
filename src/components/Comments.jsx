import { ReplyIcon } from '@heroicons/react/solid'
import useFetch from '../hooks/useFetch';
import Loading from '../pages/Loading';
import { useState } from 'react';

const CommentInput = (props) => {
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const { render, setRender, title } = props;

    const handleSubmit = () => {
        if (!name || !comment) return;
        fetch('https://mochi1.herokuapp.com/api/messages', {
            method: 'POST',
            body: JSON.stringify({
                'data':{
                    'name':name,
                    'content':comment
                }
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(()=>{
            setName('');
            setComment('');
            setRender(!render);
        })
    }

    return (
        <div className="border-0 border-b-0 bg-white rounded-t-lg text-gray-500
            p-10 pb-5 h-fit w-home mx-auto flex flex-col gap-5
        ">
            <div className="text-title text-black">{title}</div>
            <div>
            <div className="grid grid-cols-2">
                <input placeholder="Name" value={name} onChange={e => setName(e.target.value)}
                className="text-label  border border-b-0 rounded-tl-lg focus:outline-none px-4 py-1"/>
                <div disabled
                className="text-label border border-b-0 border-l-0 rounded-tr-lg focus:outline-none px-4 py-1"/>
            </div>
            <textarea placeholder="Leave a message! 🥸" value={comment} onChange={e => setComment(e.target.value)}
                className="block text-content resize-none border h-32 w-full p-4 focus:outline-none
            "/>
            <div className="grid grid-cols-2">
                <div placeholder="Who are you 🤔"
                className="text-label border border-t-0 rounded-bl-lg focus:outline-none px-4 py-1"/>
                <div onClick={handleSubmit}
                className="text-label border border-l-0 border-t-0 rounded-br-lg focus:outline-none px-4 py-1
                         text-center active:shadow-inner hover:cursor-pointer
                ">
                    Submit
                </div>
            </div>
            </div>
      </div>
    );
}

const Comment = (props) => {
    const { isReply, message } = props;
    const { name, content } = message;
    return (
        <div className="flex flex-row gap-2 content-center group">
            <div className={`bg-gray-200 rounded-lg ${ isReply? "w-9 h-9": "w-10 h-10" } flex`}>
                <ReplyIcon className='w-5 mx-auto opacity-0 group-hover:opacity-100
                         transition-opacity hover:text-black hover:cursor-pointer
                '/>
            </div>
            <div className="flex flex-col gap-1">
                <div className='flex gap-2'>
                    <div className="leading-snug text-label text-black">{name}</div>
                </div>
                <div className="leading-tight text-content">{content}</div>
            </div>
        </div>
    );
}

const Reply = () => {
    return (
        <div className='border-l-2 h-fit ml-5 mt-2 pl-5 pt-2 flex flex-col gap-5'>
            <Comment isReply />
        </div>
    );
}

const Comments = (props) => {
    const {title} = props;
    const [render, setRender] = useState(false);
    const { loading, error, data } = useFetch(`https://mochi1.herokuapp.com/api/messages?sort[0]=id%3Adesc`, render);
    if (loading) return <Loading/>;
    return (
        <>
        <CommentInput render={render} setRender={setRender} title={title}/>
        <div className="border-0 bg-white rounded-lg text-gray-500
            p-10 h-fit w-home mx-auto flex flex-col gap-6
        ">
            {data.map(message => (
                <div className='border-b last:border-0 pb-6 px-2'>
                    <Comment key={message.id} message={message.attributes}/>
                </div>
            ))}
        </div>
        </> 
    );
}

export default Comments;