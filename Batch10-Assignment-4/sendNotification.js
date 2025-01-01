function sendNotification(email) {
  const splitText = email.split("@");
  const name = splitText[0];
  const domain = splitText[1];
  if (!email.includes("@")) {
    return "Invalid Email";
  }

  if (!name || !domain) {
    return "Invalid Email";
  }
  const message = `${name} sent you an email from ${domain}`;
  return message;
}

const result = sendNotification("zihad@gmail.com");
console.log(result);
