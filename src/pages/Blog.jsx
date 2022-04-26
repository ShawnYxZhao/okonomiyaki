import useFetch from "../hooks/useFetch"
import { useParams } from "react-router-dom"
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import { marked } from 'marked'
import Loading from "./Loading"
import MDEditor from '@uiw/react-md-editor';

const Blog = () => {
    const { id } = useParams();
    const { loading, error, data } = useFetch(`https://mochi1.herokuapp.com/api/posts/${id}?populate=*`);

    if (loading) return <Loading/>;

    const { attributes: { title, content, music, publishedAt } } = data;
    const { data: { attributes: { url } } } = music;
    const date = new Date(publishedAt).toDateString();

    return (  
        <div className="border-0
                bg-white rounded-lg text-gray-500
            p-10 h-fit w-home mx-auto
        ">
            {/* <div className="mb-10">
            <audio 
                controls
                autoPlay
                src={`https://mochi1.herokuapp.com${url}`}
            />
            </div> */}
            <div className="text-black text-title font-medium mb-1 ">
                {title}
            </div>
            <div className=" text-label text-gray-500 mb-5">
                    {`Posted on ${date} · ${content.length} words`}
                </div>
            <div className="text-black">
                <div data-color-mode="light">
                    <MDEditor.Markdown data-color-mode="light" source={content} />
                </div>
            </div>
        </div> 
    );
}

export default Blog;