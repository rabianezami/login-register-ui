import InputField from "./InputField";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function RegisterFields({ register, errors, showPassword, setShowPassword }) {

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
      >

        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 "
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      </InputField>

      <InputField
        label="Confirm password"
        id="reg-confirm-password"
        type={showPassword ? "text" : "password"}
        placeholder="********"
        register={register("confirmPassword")}
        error={errors.confirmPassword?.message}
        autoComplete="new-password"
      >

        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      </InputField>

      <div className="mb-4">
        <label className="flex items-center gap-2 text-xs cursor-pointer">
          <input
            type="checkbox"
            {...register("terms")}
          />
          I agree to the Terms & conditions
        </label>

        {errors.terms && (
          <p>
            {errors.terms?.message}
          </p>
        )}
      </div>

    </>
  )
}