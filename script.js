const openTextBtn = document.body.querySelector('.bet-block__open-text-btn');

openTextBtn.addEventListener('click', () => {
  const textEl = document.body.querySelector('.text-content');

  if (textEl.classList.contains('text-content_closed')) {
    textEl.classList.remove('text-content_closed');
    openTextBtn.classList.add('bet-block__open-text-btn_opened');
  } else {
    textEl.classList.add('text-content_closed');
    openTextBtn.classList.remove('bet-block__open-text-btn_opened');
  }
})