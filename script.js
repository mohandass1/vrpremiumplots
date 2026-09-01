const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menu.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('enquiryForm').addEventListener('submit', function(e){
  e.preventDefault();
  const data = new FormData(this);
  const name = data.get('name');
  const project = data.get('project');
  alert(`Thank you, ${name}! Your enquiry for ${project} has been received. Connect this form to WhatsApp/backend before publishing.`);
});
