export default function FormSwitch({ text, actionText, onClick }) {
    return (
        <p className="text-center text-sm">
            {text}
            <button
                type="button"
                onClick={onClick}
                className="underline ml-1 underline-offset-4"
            >
                {actionText}
            </button>
        </p>
    )
}