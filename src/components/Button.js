const Button = ({ label, onClick }) => {
    return (
        <button
            className="px-4 py-3 rounded-lg bg-black font-mono font-bold text-lg text-yellow-100"
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button;