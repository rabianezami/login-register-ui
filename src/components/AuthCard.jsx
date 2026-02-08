export default function AuthCard({ title, children }) {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100 py-2">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow">
                <div className="text-center mb-6">
                    <h1 className="font-semibold text-2xl">{title}</h1>
                </div>
                {children}
            </div>
        </section>
    )
}