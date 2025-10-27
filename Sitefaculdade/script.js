// Quiz funcional com animações
document.querySelectorAll('.question').forEach(question => {
  question.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const feedback = question.querySelector('.feedback');
      
      // Remove seleções anteriores
      question.querySelectorAll('button').forEach(btn => btn.classList.remove('selected','correct','incorrect'));
      
      // Marcar botão selecionado
      button.classList.add('selected');

      // Checar resposta
      if (button.textContent.startsWith(question.dataset.answer)) {
        button.classList.add('correct');
        feedback.textContent = "✅ Correto!";
        feedback.style.color = "green";
      } else {
        button.classList.add('incorrect');
        feedback.textContent = "❌ Incorreto!";
        feedback.style.color = "red";
      }

      // Mostrar feedback com animação
      feedback.classList.add('show');
    });
  });
});

// Modo claro/escuro
const toggleButton = document.getElementById('toggleTheme');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleButton.textContent = document.body.classList.contains('dark') ? '☀️ Modo Claro' : '🌙 Modo Escuro';
});
