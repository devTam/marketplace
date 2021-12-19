import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
      });
      setLoading(false);
      toast.success("Registration succesful 🎉  Please Login");
    } catch (err) {
      setLoading(false);
      toast.error(err.response.data.message);
      console.log(err);
    }
  };
  return (
    <div>
      <h1 className="bg-light p-5 text-center bg-primary">Register</h1>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            className="form-control mb-4 p-2"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
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
            disabled={loading || !name || !email || !password}
          >
            {loading ? <SyncOutlined spin={true} /> : "Register"}
          </button>
        </form>

        <p className="text-center p-3">
          Already registered? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
