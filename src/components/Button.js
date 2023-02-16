const Button = ({ label, onClick }) => {
    return (
        <button
            className="px-4 py-3 rounded-lg bg-black border-r-4 border-b-4 border-yellow-500 font-mono font-bold text-lg text-yellow-100"
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button;