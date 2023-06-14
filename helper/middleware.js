import Jwt from "jsonwebtoken";

export const context = ({ req }) => {
  const { authorization } = req.headers;
  console.log(authorization);
  if (authorization) {
    const { userId, email } = Jwt.verify(authorization, "Test@123");
    return { userId, email };
  }
};
