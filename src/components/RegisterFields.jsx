import InputField from "./InputField";

export default function RegisterFields({register, errors, showPassword, setShowPassword}) {
  return (
    <>
      <InputField 
        label="Full Name"
        id="reg-fullName"
        type="text"
        placeholder="Your Full Name"
        register={register("fullName")}
        error={errors.fullName?.message}
        autoComplete="name"
      />

      <InputField 
        label="Email"
        id="reg-email"
        type="email"
        placeholder="khan@gmail.com"
        register={register("email")}
        error={errors.email?.message}
        autoComplete="email"
      />

      <InputField 
        label="Password"
        id="reg-password"
        type={showPassword ? "text" : "password"}
        placeholder="********"
        register={register("password")}
        error={errors.password?.message}
        autoComplete="new-password"
      />

      <InputField 
        label="Confirm password"
        id="reg-confirm-password"
        type={showPassword ? "text" : "password"}
        placeholder="********"
        register={register("confirmPassword")}
        error={errors.confirmPassword?.message}
        autoComplete="new-password"
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