import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { User } from "../common/interface/common-interface";
import Input from "../components/Input";
import { getDataFromLocalStorage } from "../services/storageService";

export default function SignIn() {
  const navigate = useNavigate()
  const LoginBtnRef = useRef<HTMLButtonElement>(null);
  const BtnParentRef = useRef<HTMLDivElement>(null);
  const [buttonPosition, setButtonPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [error, setError] = useState<string>("");

  const [formData, setFormData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const validateFormData = () => {
    if (
      formData.email.trim().length === 0 ||
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
      return {
        isValid: false,
        message: "Password must be greter then 8 character",
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
    console.log(formData);
    
    const { isValid, message } = validateFormData();
    if (!isValid) {
      setError(message as string);
      return;
    }

    const usersString: string | null = getDataFromLocalStorage("users");
    if (!usersString) {
      setError("Users Not Found!");
      return;
    }
    const users: User[] = JSON.parse(usersString as string);
    const existingUser: User | undefined = users.find(
      (user: User) =>
        user.email === formData.email && user.password === formData.password
    );
    if (existingUser) {
      navigate(`/dashboard?email=${formData.email}`)
    } else {
      setError("Invalid credentials");
    }
  };

  const moveHandler = () => {
    const { isValid, message } = validateFormData();

    if (isValid) {
      setError(message as string);
      return;
    }
    const loginBtnPositionData = LoginBtnRef.current?.getBoundingClientRect();
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
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Welcome back! Please enter your details
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
          </div>
          <div className="w-full h-24" ref={BtnParentRef}>
            <button
              style={{
                left: `${buttonPosition.x}px`,
                top: `${buttonPosition.y}px`,
              }}
              ref={LoginBtnRef}
              onClick={handleSubmit}
              onMouseEnter={moveHandler}
              onMouseMove={moveHandler}
              className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 self-center"
            >
              Sign in
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="signup"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}