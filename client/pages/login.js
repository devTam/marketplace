import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { Context } from "../context/index";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";

function Login() {
  const [email, setEmail] = useState("tammy.batubo@gmail.com");
  const [password, setPassword] = useState("Tamee101");
  const [loading, setLoading] = useState(false);

  const { state, dispatch } = useContext(Context);
  const router = useRouter();
  const { user } = state;

  useEffect(() => {
    if (user) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });
      setLoading(false);
      dispatch({ type: "LOGIN", payload: data });

      localStorage.setItem("user", JSON.stringify(data));
      router.push("/user");

      toast.success("Login successful 🎉 ");
    } catch (err) {
      setLoading(false);
      toast.error(err.response.data.message);
      console.log(err);
    }
  };
  return (
    <div>
      <h1 className="bg-light p-5 text-center bg-primary">Login </h1>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control mb-4"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="form-control mb-4"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            type="submit"
            className="btn col-12 btn-primary"
            disabled={loading || !email || !password}
          >
            {loading ? <SyncOutlined spin={true} /> : "Login"}
          </button>
        </form>

        <p className="text-center pt-3">
          Not registered? <Link href="/register">Register</Link>
        </p>

        <p className="text-center">
          Forgot password? <Link href="/forgotPassword">Reset password</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
