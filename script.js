
const f5 = document.querySelector('.f5')
const r5 = document.querySelector('.result5')

  fetch('http://truruki.ru/api')
    .then(response => response.json())
    .then(j => {
  
      const a1=j[0];
      const html = a1.map(item => `<tr><td>${item.name}</td><td>${item.age}</td><tr>`).join('');
      r5.innerHTML =`<table> ${html} </table>`;
      
})


/*
const form = document.getElementById('form1');
  form.addEventListener('submit', function(event) {
    // event.preventDefault();
    form.reset(); // очищаем форму
  });

  */