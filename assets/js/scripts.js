const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formulario.addEventListener('submit', function(event) {
  
    event.preventDefault();
  
    const campoNome = document.querySelector('#name');
    const textNome = document.querySelector('#textNome');
  
    if (campoNome.value.length < 3) {
      textNome.innerHTML = 'O campo nome deve ter no minimo 3 caracteres.';
      campoNome.focus();
      return;
    }else{
      textNome.innerHTML = '';
    }
  
    const campoEmail = document.querySelector('#email');
    const textEmail = document.querySelector('#textEmail');
  
    if (!campoEmail.value.match(emailRegex)) {
      textEmail.innerHTML = 'Digite um E-mail válido.';
      campoEmail.focus();
      return;
    }else{
      textEmail.innerHTML = '';
    }
  
    const campoSubject = document.querySelector('#subject');
    const textSubject = document.querySelector('#textSubject');
  
    if (campoSubject.value.length < 5) {
      textSubject.innerHTML = 'O Assunto deve ter no minimo 5 caracteres.';
      campoSubject.focus();
      return;
    }else{
      textSubject.innerHTML = '';
    }

    const campoMessage = document.querySelector('#message');

    window.alert("Formulário Enviado com Sucesso!");
  
    campoNome.value = ''
    campoEmail.value = ''
    campoSubject.value = ''
    campoMessage.value = ''

  });