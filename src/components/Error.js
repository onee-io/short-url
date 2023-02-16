import { useSelector } from "react-redux";

const Error = () => {
    const error = useSelector(state => state.error);
    if (!error) {
        return null;
    }
    return (
        <div className="py-4 font-mono text-lg text-red-600">
            {error}
        </div>
    );
}

export default Error;