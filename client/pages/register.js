import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8000/api/register", {
        name,
        email,
        password,
      });
  
      toast.success(data.message);
      
    } catch (err) {
      toast.error(err.response.data.message);
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
            type="text"
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
          <button type="submit" className="btn col-12 btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
