import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
    const varToken = 'f72b4b712b5be75f0e12d7c824c5ef8b6ebc7c8694310d04fa57030affbb570257fe408d7a9efe6298c45cea8ecb195f6534f5bb1893e982f76fa7f13597f0cb138c8f71815ea31e0898e41f81276f00e73f620ef8eb38d84fb45564153db7ea68195e798e99f1cd69122f9f4c31dc115346e81183ddd6e4a68b19df13e547be';

    const [posts, setPosts] = useState([]);
    const fetchData = () => {
        axios({
            method: 'get', //you can set what request you want to be
            url: 'http://localhost:1337/api/posts',
            headers: {
                Authorization: 'Bearer ' + varToken
            }
        }).then(response => {
            setPosts(response.data.data);
        })
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    //console.log(posts[0].attributes.Title);
    if (posts && posts[0]) {
        return (
            <div className="mt-16">
                <div className="border text-center
                     bg-white rounded-lg text-gray-500
                    p-10 h-fit
                ">
                    <div>
                        {posts[0].attributes.title}
                    </div>
                    <div>
                        {posts[0].attributes.content}
                    </div>
                    
                </div> 
            </div>
        );
    }
    return null;
    
}

export default Blog;