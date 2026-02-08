export default function InputField({
    label,
    id,
    type = "text",
    placeholder,
    register,
    error,
    autoComplete,
    children,
}) {
    return (
        <div className="mb-4 relative">
            <label htmlFor={id} className="block text-sm font-medium mb-1">
                {label}
            </label>

            <div className="relative">
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    {...register}
                    className={`w-full rounded-md border px-3 py-2 text-sm outline-none
                       ${error ? "border-red-500" : "border-gray-300 focus:border-blue-500"}
                       ${children ? "pr-10" : ""}  
                    `}
                />

                {children && (
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-auto">
                        {children}
                    </div>
                )}
            </div>

            {error && (
                <p className="mt-1 text-xs text-red-500">{error}</p>
            )}
        </div>
    )
}
