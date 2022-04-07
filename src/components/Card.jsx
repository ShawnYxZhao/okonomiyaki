import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown'

const Card = (props) => {
    const { post, id } = props;
    const { title, preview, publishedAt } = post;
    const date = new Date(publishedAt).toDateString();
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
                        {title}
                    </div>
                    <div className='text-content text-gray-500 text-left
                    '>
                        <ReactMarkdown children={preview.substring(0, 80)+'...'}/>
                    </div>
                </div>
                <div className="px-5 py-2.5 h-fit text-label text-gray-500">
                    {`Posted on ${date}`}
                </div>
            </div>
        </Link>
    );
}

export default Card;