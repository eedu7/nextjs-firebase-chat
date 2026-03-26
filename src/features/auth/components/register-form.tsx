"use client";

import { FieldGroup, FieldSet } from "@/components/ui/field";
import { useAppForm } from "@/hooks/form";
import { revalidateLogic } from "@tanstack/form-core";
import { userRegisterSchema } from "@/features/auth/auth.schema";
import { useAuth } from "@/features/auth/context/auth-context";

export const RegisterForm = () => {
    const { register } = useAuth();
    const form = useAppForm({
        defaultValues: {
            email: "",
            password: "",
        },
        validationLogic: revalidateLogic(),
        validators: {
            onDynamic: userRegisterSchema,
        },
        onSubmit: ({ value }) => {
            register.mutate(value);
        },
    });
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
            }}
        >
            <FieldGroup>
                <FieldSet>
                    <FieldGroup>
                        <form.AppField
                            name="email"
                            children={(field) => (
                                <field.TextField
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                    type="email"
                                    required
                                />
                            )}
                        />
                        <form.AppField
                            name="password"
                            children={(field) => (
                                <field.PasswordField
                                    label="Password"
                                    autoComplete="password"
                                    required
                                />
                            )}
                        />
                    </FieldGroup>
                </FieldSet>
                <form.AppForm>
                    <form.SubmitButton
                        label="Register"
                        isPending={register.isPending}
                    />
                </form.AppForm>
            </FieldGroup>
        </form>
    );
};
