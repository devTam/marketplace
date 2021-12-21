import axios from "axios";
import { useRouter } from "next/router";
import { useReducer, createContext, useEffect } from "react";

const initialState = {
  user: null,
};

const Context = createContext();

const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const router = useRouter();
  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(localStorage.getItem("user")),
    });
  }, []);
  //   log user out when token expires
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (
        error.response.status === 401 &&
        response.config &&
        !response.config.__isRetryRequest
      ) {
        return new Promise((resolve, reject) => {
          axios
            .get("/api/logout")
            .then(() => {
              dispatch({ type: "LOGOUT" });
              localStorage.removeItem("user");
              router.push("/login");
              resolve(error);
            })
            .catch(() => {
              reject(error);
            });
        });
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    const getCsrfToken = async () => {
      const { data } = await axios.get("/api/csrf-token");
      axios.defaults.headers["X-CSRF-Token"] = data.csrfToken;
    };
    getCsrfToken();
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
