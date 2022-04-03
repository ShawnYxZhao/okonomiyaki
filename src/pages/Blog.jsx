import useFetch from "../hooks/useFetch"
import { useParams } from "react-router-dom"
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import { marked } from 'marked'

const Blog = () => {
    const { id } = useParams();
    const { loading, error, data } = useFetch(`http://localhost:1337/api/posts/${id}`);

    if (loading) return <p>Loading</p>;
    const { attributes: { title, content } } = data;
    const html = marked.parse(`# This is a header\n\n\nAnd this is a paragraph`);
    return (  
        <div className="border
                bg-white rounded-lg text-gray-500
            py-10 px-20 h-fit w-blog mx-auto
        ">
            <div className="text-black text-title text-center font-medium">
                {title}
            </div>
            <div className="text-black">
                <ReactMarkdown remarkPlugins={[remarkBreaks]} children={content}/>
            </div>
        </div> 
    );
}

export default Blog;