export default function PrimaryBtn({ disabled, children }) {
    return (
        <button
            disabled={disabled}
            type="submit"
            className={`w-full rounded p-2 font-semibold mb-2
              ${disabled
                    ? "bg-green-200 text-gray-400 cursor-not-allowed"
                    : "bg-green-800 text-white"
                }`}
        >
            {children}
        </button>
    )
}