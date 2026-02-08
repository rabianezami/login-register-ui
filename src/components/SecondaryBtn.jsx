export default function SecondaryBtn({ onClick, children, disabled = false }) {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={`w-full bg-gray-200 rounded font-bold p-2 mb-2
                ${disabled
                    ? "bg-green-200 text-gray-400 cursor-not-allowed"
                    : "bg-green-800 text-white"
                }`}
        >
            {children}
        </button>

    )
}