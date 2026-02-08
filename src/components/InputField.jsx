export default function InputField({
    label,
    id,
    type = "text",
    placeholder,
    register,
    error,
    autoComplete,
}) {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-medium mb-1">
                {label}
            </label>

            <input
                id={id}
                type={type}
                placeholder={placeholder}
                autoComplete={autoComplete}
                {...register}
                className={`w-full rounded-md border px-3 py-2 text-sm outline-none
                   ${error ? "border-red-500" : "border-gray-300 focus:border-blue-500"}
                `}
            />

            {error && (
                <p className="mt-1 text-xs text-red-500">{error}</p>
            )}
        </div>
    )
}