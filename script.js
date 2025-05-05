

const f5 = document.querySelector('.f5');
const r5 = document.querySelector('.result5');

function ab() {

  fetch('http://truruki.ru/api')
    .then(response => response.json())
    .then(j => {
  
      const a1=j[0];
      const html = a1.map(item => `<tr><td>${item.name}</td><td>${item.age}</td><tr>`).join('');
      r5.innerHTML =`<table> ${html} </table>`;
      
})};

ab();




const form1 = document.getElementById('form1');
  form1.addEventListener('submit', function(event) {
    event.preventDefault();

  const formData = new FormData(form1); // Сбор данных формы
  const FormDataObject = Object.fromEntries(formData);

  fetch('http://truruki.ru/api/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      't':'b'
    },
    body: JSON.stringify({
      ...FormDataObject,
      views: 0,
    })
  })
    .then(response => response.json())
    .then(j => {
      console.log(j);
      ab();
      form1.reset(); // очищаем форму
    });
  });

    