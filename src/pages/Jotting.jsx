import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

const Jotting = () => {
    const { loading, error, data } = useFetch('https://mochi1.herokuapp.com/api/jottings?sort[0]=id%3Adesc');
    if (loading) return <Loading/>;
    console.log(data);
    return (
        <div className="w-home mx-auto p-10
        ">
            <div className="text-title mb-5">
                Jottings
            </div>
            <div className="flex flex-col gap-10">
            {data.map(jotting => (
                    <Card key={jotting.id} type='JOTT' jotting={jotting.attributes}/>
                ))}
            </div>
        </div> 
    );
}

export default Jotting;