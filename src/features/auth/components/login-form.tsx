"use client";

import { useAppForm } from "@/hooks/form";
import { FieldGroup, FieldSet } from "@/components/ui/field";
import { revalidateLogic } from "@tanstack/form-core";
import { userLoginSchema } from "@/features/auth/auth.schema";

export const LoginForm = () => {
    const form = useAppForm({
        defaultValues: {
            email: "",
            password: "",
        },
        validationLogic: revalidateLogic(),
        validators: {
            onDynamic: userLoginSchema,
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
                            name="email"
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
                    <form.SubmitButton label="Login" />
                </form.AppForm>
            </FieldGroup>
        </form>
    );
};
