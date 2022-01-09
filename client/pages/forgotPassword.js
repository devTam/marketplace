import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import { Context } from "../context";
import { useRouter } from "next/router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const {
    state: { user },
  } = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/forgotPassword`, {
        email,
      });
      setLoading(false);
      setSuccess(true);
      toast.success("Check your email for the secret code");
    } catch (err) {
      setLoading(false);
      toast.error(err.response.data.message);
      console.log(err);
    }
  };

  return (
    <>
      <h1 className="bg-light p-5 text-center bg-primary">Forgot password</h1>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control mb-4"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <button
            type="submit"
            className="btn btn-primary btn-block w-100 mb-4"
            disabled={loading}
          >
            {loading ? <SyncOutlined spin /> : "Send me the secret code"}
          </button>
        </form>
        {success && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter the secret code"
              className="form-control mb-4"
              onChange={(e) => setToken(e.target.value)}
              value={token}
            />
            <input
              type="password"
              placeholder="Enter your new password"
              className="form-control mb-4"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
            />
            <button
              type="submit"
              className="btn btn-primary btn-block w-100"
              disabled={loading}
            >
              {loading ? <SyncOutlined spin /> : "Change my password"}
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default ForgotPassword;
