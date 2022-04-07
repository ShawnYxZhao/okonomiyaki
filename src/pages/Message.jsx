import { useState } from "react";

import Comments from "../components/Comments";

const CommentInput = () => {
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    return (
        <div className="border-0 border-b-0 bg-white rounded-t-lg text-gray-500
            p-10 pb-5 h-fit w-home mx-auto flex flex-col gap-5
        ">
            <div className="text-title text-black">Messages</div>
            <div>
            <div className="grid grid-cols-2">
                <input placeholder="Who are you 🤔" value={name} onChange={e => setName(e.target.value)}
                className="text-label  border border-b-0 rounded-tl-lg focus:outline-none px-4 py-1"/>
                <input disabled
                className="text-label border border-b-0 border-l-0 rounded-tr-lg focus:outline-none px-4 py-1"/>
            </div>
            <textarea placeholder="Leave a message 🥸" value={comment} onChange={e => setComment(e.target.value)}
                className="block text-content resize-none border h-32 w-full p-4 focus:outline-none
            "/>
            <div className="grid grid-cols-2">
                <div placeholder="Who are you 🤔"
                className="text-label border border-t-0 rounded-bl-lg focus:outline-none px-4 py-1"/>
                <div
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

const Message = () => {
    return (
        <>
        <CommentInput/>
        <Comments/>
        </>
    );
}

export default Message;