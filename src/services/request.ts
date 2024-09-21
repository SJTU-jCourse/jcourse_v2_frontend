import axios from "axios";

export const request = axios.create({
  xsrfCookieName: "csrf_token",
  xsrfHeaderName: "X-CSRF-TOKEN",
  withCredentials: true,
});

export const fetcher = (url: string) =>
  request.get(url).then((res) => res.data);
