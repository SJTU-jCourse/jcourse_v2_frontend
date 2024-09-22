import { request } from "./request";

const getFullEmail = (email: string) => {
  return `${email}@${import.meta.env.VITE_EMAIL_SUFFIX}`;
};

export const login = async (email: string, password: string) => {
  const resp = await request("/api/auth/login", {
    method: "post",
    data: { email: getFullEmail(email), password },
  });
  return resp.data;
};

export const register = async (
  email: string,
  password: string,
  code: string
) => {
  const resp = await request("/api/auth/register", {
    method: "post",
    data: { email: getFullEmail(email), password, code },
  });
  return resp.data;
};

export const logout = async () => {
  const resp = await request("/api/auth/logout", {
    method: "post",
  });
  return resp.data;
};

export const sendVerifyCode = async (email: string) => {
  const resp = await request("/api/auth/send-verify-code", {
    method: "post",
    data: { email: getFullEmail(email) },
  });
  return resp.data;
};
