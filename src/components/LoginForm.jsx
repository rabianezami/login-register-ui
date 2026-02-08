import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "../validations/loginSchema";
import LoginFields from "./LoginFields";
import PrimaryBtn from "./PrimaryBtn";
import SecondaryBtn from "./SecondaryBtn";
import FormSwitch from "./FormSwitch";


export default function LoginForm({ onSwitchToRegister }) {
    const [showPassword, setShowPassword] = useState(false)
    const [success, setSuccess] = useState("")

    const { register, handleSubmit, reset,
        formState: { errors, isValid, isSubmitting, isDirty }
    } = useForm({
        resolver: yupResolver(loginSchema),
        mode: "onTouched"
    })

    function onSubmit(data) {
        console.log("LOGIN SUBMIT:", data)
        setSuccess("Submitted successfully.")
    }

    function handleReset() {
        reset()
        setShowPassword(false)
        setSuccess("")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {success && (
                <div className="mb-4 text-sm text-green-600">{success}</div>
            )}

            <LoginFields
                register={register}
                errors={errors}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
            />

            <div>
                <PrimaryBtn disabled={!isValid || isSubmitting}>
                    Login
                </PrimaryBtn>

                <SecondaryBtn onClick={handleReset} disabled={!isDirty || isSubmitting}>
                    Reset
                </SecondaryBtn>

                <FormSwitch
                    text="Don't have an account?"
                    actionText="Create one"
                    onClick={onSwitchToRegister}
                />
            </div>
        </form>
    )
}