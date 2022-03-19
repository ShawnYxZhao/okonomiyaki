import { Link } from "react-router-dom";

const Button = (props) => {
    const { icon="", text="", route="/", type="NAV" } = props;
    switch(type) {
        case "NAV":
            return (
                <Link to={route}>
                    <div className="cursor-pointer flex gap-1 hover:bg-neutral-100 px-5 py-1 rounded-lg w-fit">
                        <div className=" self-center">{icon}</div>
                        {text}
                    </div>
                </Link>
            );
        case "INFO":
            return (
                <Link to={route}>
                    <div className="border border-gray-300 bg-white cursor-pointer 
                    hover:shadow-md rounded-md flex gap-1 justify-center py-1">
                        <div className="self-center">{icon}</div>
                        {text}
                    </div>
                </Link>
            );
    }
}

export default Button;