import { saveReport } from "./firebase.js";

const reportNumberForm = document.getElementById("report-number-form");

reportNumberForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const phoneNumber = reportNumberForm["task-phone-number"];
  const audioFile = reportNumberForm["audio-file"].files[0];

  saveReport(phoneNumber, audioFile);
});