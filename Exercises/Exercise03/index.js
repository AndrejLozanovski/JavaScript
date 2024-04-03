class Email {
  constructor(_emailFrom, _emailTo, _emailSubject, _emailMessage) {
    this.emailFrom = _emailFrom;
    this.emailTo = _emailTo;
    this.emailSubject = _emailSubject;
    this.emailMessage = _emailMessage;
  }

  displayInformation() {
    document.getElementById("emailFrom").value = this.emailFrom;
    document.getElementById("emailTo").value = this.emailTo;
    document.getElementById("emailSubject").value = this.emailSubject;
    document.getElementById("emailMessage").value = this.emailMessage;
  }

  displayMessage() {
    alert(
      `From: ${this.emailFrom}\nTo: ${this.emailTo}\nSubject: ${this.emailSubject}\nMessage: ${this.emailMessage}`
    );
  }
}

const emailFrom = prompt("Email From:").trim();
const emailTo = prompt("Email To:").trim();
const emailSubject = prompt("Email Subject:").trim();
const emailMessage = prompt("Enter Email Message here:").trim();

const email1 = new Email(emailFrom, emailTo, emailSubject, emailMessage);
email1.displayInformation();
email1.displayMessage();
