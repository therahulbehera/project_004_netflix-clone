import Input from "@/components/Input";
import { useCallback, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pswd, setPswd] = useState("");

  const [varient, setVarient] = useState("login");

  const toggleVarient = useCallback(() => {
    setVarient((currentVarient) =>
      currentVarient == "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-30 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
              <h2 className="text-white text-4xl mb-8 font-semibold">
                {varient == "login" ? "Sign In" : "Register"}
              </h2>
              <div className="flex flex-col gap-4">
                {varient == "register" && (
                  <Input
                    id="name"
                    label="Username"
                    onChange={(e: any) => setName(e.target.value)}
                    value={name}
                    type="text"
                  />
                )}
                <Input
                  id="email"
                  label="Email"
                  onChange={(e: any) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                />
                <Input
                  id="password"
                  label="Password"
                  onChange={(e: any) => setPswd(e.target.value)}
                  value={pswd}
                  type="password"
                />
              </div>
              <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-500 transition">
                {varient == "login" ? "Log In" : "Sign Up"}
              </button>
              <p className="text-neutral-500 mt-12">
                {varient == "login"
                  ? "First Time using Netflix? "
                  : "Already have an account? "}
                <span
                  onClick={toggleVarient}
                  className="text-white ml-1 hover:underline cursor-pointer"
                >
                  {varient == "login" ? "Create an Account" : "Log In"}
                </span>
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Auth;
