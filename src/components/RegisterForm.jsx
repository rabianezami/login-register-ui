import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../validations/registerSchema";
import RegisterFields from "./RegisterFields";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
import FormSwitch from "./FormSwitch";

export default function RegisterForm({ onSwitchToLogin }) {
    const [showPassword, setShowPassword] = useState(false)
    const [success, setSuccess] = useState("")

    const { register, handleSubmit, reset,
        formState: { errors, isValid, isSubmitting, isDirty },
    } = useForm({
        resolver: yupResolver(registerSchema),
        mode: "onTouched",
    })

    function onSubmit(data) {
        console.log("REGISTER SUBMIT:", data)
        setSuccess("Registered successfully")
    }

    function handleReset() {
        reset()
        setShowPassword(false)
        setSuccess("")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {success && (
                <div className="text-green-600 mb-4">{success}</div>
            )}

            <RegisterFields
                register={register}
                errors={errors}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
            />

            <div>
                <PrimaryBtn disabled={!isValid || isSubmitting}>
                    Create account
                </PrimaryBtn>

                <SecondaryBtn onClick={handleReset} disabled={!isDirty || isSubmitting}>
                    Reset
                </SecondaryBtn>

                <FormSwitch
                    text="Already have an account?"
                    actionText="Login"
                    onClick={onSwitchToLogin}
                />
            </div>
        </form>
    )
}