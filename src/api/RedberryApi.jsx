import axios from "axios";

export const RedberryApi =  axios.create({
  baseURL: "https://pcfy.redberryinternship.ge/api",
});
