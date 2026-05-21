document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let name = document.getElementById('user-name').value.trim();
  let email = document.getElementById('user-email').value.trim();
  let message = document.getElementById('user-message').value.trim();

  if (name === "") {
    alert("Потрібно вказати ім'я!");
    return;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Введіть правильну адресу пошти!");
    return;
  }

  if (message === "") {
    alert("Повідомлення не може бути порожнім!");
    return;
  }

  alert(`Дякую за повідомлення, ${name}!`);

  console.log("--- ОТРИМАНО НОВЕ ПОВІДОМЛЕННЯ ---");
  console.log("Відправник:", name);
  console.log("Email:", email);
  console.log("Зміст:", message);

  document.getElementById('contactForm').reset();
});