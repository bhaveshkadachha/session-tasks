import React, { useRef, useState } from "react";
import type { User } from "../common/interface/common-interface";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { getDataFromLocalStorage, setDataToLocalStorage } from "../services/storageService";

export default function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<User>({
    confirmPassword: "",
    email: "",
    password: "",
  });
  const [buttonPosition, setButtonPosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });
  const [error, setError] = useState<string>("");
  const signupBtnRef = useRef<HTMLButtonElement>(null);
  const BtnParentRef = useRef<HTMLDivElement>(null);

  const validateFormData = () => {
    if (
      formData.email.trim().length === 0 ||
      formData.confirmPassword.trim().length === 0 ||
      formData.password.trim().length === 0
    ) {
      return { isValid: false, message: "Fields can not be empty!" };
    }

    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      return { isValid: false, message: "Please enter valid email" };
    }

    if (formData.password.trim().length < 8) {
      console.log(formData.password);

      return {
        isValid: false,
        message: "Password must be greter then 8 character",
      };
    }

    if (formData.password !== formData.confirmPassword) {
      return {
        isValid: false,
        message: "Password and confirm password must be same",
      };
    }

    return { isValid: true };
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    const { isValid, message } = validateFormData();
    if (!isValid) {
      setError(message as string);
      return;
    }

    const usersString: string | null = getDataFromLocalStorage("users");
    if (!usersString) {
      setDataToLocalStorage("users", JSON.stringify([formData]));
    } else {
      const users = JSON.parse(usersString);
      const existingUser = users.find(
        (user: User) => user.email === formData.email
      );
      if (existingUser) {
        setError("Email exist");
        return;
      }
      users.push({
        email: formData.email,
        password: formData.password,
      });
      setDataToLocalStorage("users", JSON.stringify(users));
    }
    alert("Signup successful");
    navigate('/')
  };

  const moveHandler = () => {
    const { isValid, message } = validateFormData();
    if (isValid) {
      setError(message as string);
      return;
    }
    const loginBtnPositionData = signupBtnRef.current?.getBoundingClientRect();
    const loginBtnParentPositionData =
      BtnParentRef.current?.getBoundingClientRect();
    const maxX =
      loginBtnParentPositionData!.width - loginBtnPositionData!.width;
    const maxY =
      loginBtnParentPositionData!.height - loginBtnPositionData!.height;
    const randX = Math.random() * maxX;
    const randY = Math.random() * maxY;
    setButtonPosition({ x: randX, y: randY });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign up to get started
          </p>
        </div>
        <div>{error && <p className="text-red-500">{error}</p>}</div>

        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <Input
              label="Email address"
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
              value={formData.email}
              handleChange={handleChange}
            />
            <Input
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              handleChange={handleChange}
            />
            <Input
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              handleChange={handleChange}
            />
          
          </div>

          <div className="w-full h-24" ref={BtnParentRef}>
            <button
              onClick={handleSubmit}
              onMouseMove={moveHandler}
              ref={signupBtnRef}
              style={{
                left: `${buttonPosition.x}px`,
                top: `${buttonPosition.y}px`,
              }}
              className="group relative size-fit flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 cursor-pointer"
            >
              Sign up
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/"
                className="font-medium text-indigo-600 hover:text-indigo-500 relative"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
