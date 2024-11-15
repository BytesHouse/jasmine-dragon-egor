import { FormDataEmail } from "@/types/formDataEmail.type";
import { getHistory } from "./getHistory";

export function sendEmail(data: FormDataEmail) {
  const apiEndpoint = "/api/email";
  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
      localStorage.setItem("jd-cart", JSON.stringify([]));
    })
    .catch((err) => {
      alert(err);
    });
  const history = getHistory();
  history.push(data);
  localStorage.setItem("history", JSON.stringify(history));
}
