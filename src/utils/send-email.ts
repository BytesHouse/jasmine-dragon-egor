import { FormDataEmail } from "@/types/formDataEmail.type";
import { getHistory } from "./getHistory";

export function sendEmail(data: FormDataEmail) {
  const apiEndpoint = "/api/email";
  // console.log(data);
  // data.city = "Kishinev";
  // data.country = "Moldova";
  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
  const history = getHistory();
  history.push(data);
  localStorage.setItem("history", JSON.stringify(history));
}
