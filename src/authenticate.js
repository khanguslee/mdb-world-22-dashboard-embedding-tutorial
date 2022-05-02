import jwt from "jsonwebtoken";
import { toggleView } from "./helper";

const USERS_DB = [
  {
    email: "jason@chartyco.com",
    location: "New York",
  },
  {
    email: "emily@chartyco.com",
    location: "Seattle",
  },
];

export const login = function () {
  const username = document.getElementById("username").value;

  const user = USERS_DB.find((u) => u.email === username);

  const token = jwt.sign(
    { username, location: user ? user.location : "" },
    "secret",
    {
      expiresIn: "4h", // expires in 4 hours
      algorithm: "HS256",
    }
  );
  window.sessionStorage.setItem("jwtToken", token);
  window.location.reload();
};

export const logout = function () {
  window.sessionStorage.removeItem("jwtToken");
  toggleView(false);
};
