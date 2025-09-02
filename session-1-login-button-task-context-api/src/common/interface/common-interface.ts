import type React from "react";

export interface User {
  email: string;
  password: string;
  confirmPassword?: string;
}
export interface InputProps{
    id: string
    label: string
    name: string
    type: string
    className?: string
    placeholder: string
    value: string | number
    handleChange: (event: React.ChangeEvent<HTMLInputElement>)=>void
}