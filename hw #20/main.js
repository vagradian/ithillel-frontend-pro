// На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням).
// Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо
function redirect(url) {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'http://' + url;
  }
  window.location.href = url;
}

document.querySelector('.action1').addEventListener('click', function(event) {
  event.preventDefault();
  redirect(this.href);
});

document.querySelector('.action2').addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Link 2 clicked');
  redirect(this.href);
});
