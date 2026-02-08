import InputField from "./InputField"

export default function LoginFields({ register, errors, showPassword, setShowPassword }) {
    return (
        <>
            <InputField
                label="Email"
                id="login-email"
                type="email"
                placeholder="khan@gmail.com"
                register={register("email")}
                error={errors.email?.message}
                autoComplete="email"
            />

            <InputField
                label="password"
                id="login-password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                register={register("password")}
                error={errors.password?.message}
                autoComplete="current-password"
            />


            <div className="flex items-center justify-between text-xs mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={(e) => setShowPassword(e.target.checked)}
                    />
                    Show password
                </label>
            </div>
        </>
    )
}