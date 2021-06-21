// Conhecendo sobre o TypeScript

// Tarefa: Incluir na mensagem de boas-vindas, a cidade, e UF do usuário

type User = {
  name: string;
  addres: {
    city: string;
    uf: string;
  }
};

function showWelcomeMessage(user: User) {
    return `Welcome ${user.name} (${user.addres.city} - ${user.addres.uf})`;
}

showWelcomeMessage({
  name: 'Pedro',
  addres: {
    city: 'Brasilia',
    uf: 'DF'
  }
});