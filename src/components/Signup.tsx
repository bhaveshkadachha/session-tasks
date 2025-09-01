import React, { useRef, useState } from "react";
import type { User } from "../common/interface/User";
import { Link } from "react-router-dom";

export default function Signup() {
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

    const usersString: string | null = localStorage.getItem("users");
    if (!usersString) {
      localStorage.setItem("users", JSON.stringify([formData]));
    } else {
      const users: User[] = JSON.parse(usersString);
      const existingUser = users.find(
        (user: User) => user.email === formData.email
      );
      if (existingUser) {
        setError("Email exist");
        return;
      }
      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful")
    }
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
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
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
