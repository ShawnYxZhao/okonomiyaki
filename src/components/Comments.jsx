import { ReplyIcon } from '@heroicons/react/solid'
import useFetch from '../hooks/useFetch';
import Loading from '../pages/Loading';

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
                    <div className="leading-tight text-label text-black">{name}</div>
                </div>
                <div className="leading-snug text-content">{content}</div>
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

const Comments = () => {
    const { loading, error, data } = useFetch(`https://mochi1.herokuapp.com/api/messages?sort[0]=id%3Adesc`);
    if (loading) return <Loading/>;
    return (
        <div className="border-0 bg-white rounded-lg text-gray-500
            p-10 h-fit w-home mx-auto flex flex-col gap-6
        ">
            {data.map(message => (
                <div className='border-b last:border-0 pb-6 px-2'>
                    <Comment key={message.id} message={message.attributes}/>
                </div>
            ))}
        </div>
    );
}

export default Comments;