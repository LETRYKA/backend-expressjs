import jwt from "jsonwebtoken";

export const authorizationMW = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    let decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;

    next();
  } catch {
    res.status(401).json({ message: "Unauthorized" });
  }
};
