import { Link } from "react-router-dom";

const Card = (props) => {
    const { post, id } = props;
    const { title, content } = post;
    console.log(id);
    return (
        <Link to={`/post/${id}`}>
            <div className="border text-center
                bg-white rounded-lg hover:shadow-lg
                p-10 h-fit mt-10 shadow-none hover:cursor-pointer
            "> 
                <div className='text-title text-black text-left font-medium'>
                    {title}
                </div>
                <div className='text-content text-gray-500 text-left'>
                    {content.substring(0, 80)+'...'}
                </div>
            </div>
        </Link>
    );
}

export default Card;