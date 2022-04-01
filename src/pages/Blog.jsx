import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
const Blog = () => {
    const { id } = useParams();
    const { loading, error, data } = useFetch(`http://localhost:1337/api/posts/${id}`);

    if (loading) return <p>Loading</p>;
    const { attributes: { title, content } } = data;
    return (  
        <div className="border text-center
                bg-white rounded-lg text-gray-500
            py-10 px-20 h-fit w-blog mx-auto
        ">
            <div className="text-black text-subtitle font-bold">
                {title}
            </div>
            <div className="text-black">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div> 
    );
}

export default Blog;