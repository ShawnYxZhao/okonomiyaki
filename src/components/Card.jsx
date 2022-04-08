import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown'

const Card = (props) => {
    const { post, jotting, id, type='BLOG' } = props;
    let date;
    switch (type){
        case 'BLOG':
            date = new Date(post.publishedAt).toDateString();
            return (
                <Link to={`/post/${id}`}>
                    <div className="shadow-none hover:shadow-lg hover:cursor-pointer
                                    border rounded-lg bg-white mt-10 group
                    ">
                        <div className="text-center px-5 py-8 h-fit border-b border-gray-100
                        "> 
                            <div className='text-cardtitle text-black text-left font-medium
                                            mb-2
                            '>
                                {post.title}
                            </div>
                            <div className='text-content text-gray-500 text-left
                            '>
                                <ReactMarkdown children={post.preview.substring(0, 80)+'...'}/>
                            </div>
                        </div>
                        <div className="px-5 py-2.5 h-fit text-label text-gray-500">
                            {`Posted on ${date}`}
                        </div>
                    </div>
                </Link>
            );
        case 'JOTT':
            date = new Date(jotting.publishedAt).toDateString();
            return (
                    <div className="shadow-none hover:shadow-lg hover:cursor-pointer
                                    border rounded-lg bg-white group
                    ">
                        <div className=" px-6 py-6 h-fit border-b border-gray-100
                        "> 
                            <div className='mb-1 text-subtitle text-black text-left font-medium'>
                                {jotting.title}
                            </div>
                            <div className="h-fit text-label text-gray-500 mb-2">
                            {date}
                            </div>
                            <div className='text-content text-gray-500 text-left
                            '>
                                {jotting.content}
                            </div>
                        </div>
                    </div>
            );
    }
}

export default Card;