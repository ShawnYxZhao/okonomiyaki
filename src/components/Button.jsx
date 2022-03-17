import { Link } from "react-router-dom";

const Button = (props) => {
    const { icon="", text="", route="/" } = props;
    return (
        <Link to={route}>
            <div className="cursor-pointer flex gap-1 hover:bg-neutral-100 px-5 py-1 rounded-lg">
                    {icon}
                    {text}
            </div>
        </Link>
    );
}

export default Button;