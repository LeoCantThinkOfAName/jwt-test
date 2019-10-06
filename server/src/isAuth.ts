import { MiddlewareFn } from "type-graphql";
import { MyContext } from "./MyContext";
import { verify } from "jsonwebtoken";

// bearer 123123sadoasoi

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  const authorization = context.req.headers["authorization"];

  if (!authorization) {
    throw new Error("Not authenticated");
  }

  try {
    const token = authorization.split(" ")[1];
    const payload = verify(token, process.env.ACCESS_TOKEN!);
    context.payload = payload as any;
  } catch (err) {
    throw new Error("Not Authnticated!");
  }

  return next();
};
