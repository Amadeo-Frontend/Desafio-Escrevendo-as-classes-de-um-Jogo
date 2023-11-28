class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'atacou';
    }

    const saida = document.getElementById('saida');
    saida.innerHTML = `<p>${this.nome}, ${this.idade} anos</p><p>${this.tipo} atacou usando ${ataque}</p>`;
    saida.className = `saida ${this.tipo}`;

    // Armazenar herói criado no localStorage
    localStorage.setItem('heroi', JSON.stringify(this));
  }
}

function criarEAtacarHeroi() {
  const nomeInput = document.getElementById('nomeInput').value;
  const idadeInput = document.getElementById('idadeInput').value;
  const tipoInput = document.getElementById('tipo').value;

  document.getElementById('nome').textContent = `Nome: ${nomeInput}`;
  document.getElementById('idade').textContent = `Idade: ${idadeInput}`;

  const heroiCriado = new Heroi(nomeInput, idadeInput, tipoInput);
  heroiCriado.atacar();

  document.getElementById('saida').style.display = 'block';
}

function limparLocalStorage() {
  localStorage.clear();
  location.reload();
}
