# Reader Space 📚

Uma plataforma moderna e minimalista de leitura. O Reader Space foi projetado para amantes de livros descobrirem, compartilharem e discutirem literatura através de uma aplicação web bonita e responsiva.

## ✨ Funcionalidades

- **📖 Gerenciamento de Artigos**: Navegue e leia artigos
- **🏷️ Navegação por Tags**: Explore conteúdo por categorias
- **📱 Design Responsivo**: Otimizado para todos os dispositivos com abordagem mobile-first
- **⚡ Performance Otimizada**: Construído com Next.js 15 App Router para performance ideal
- **🎨 UI Moderna**: Design limpo e minimalista com Tailwind CSS

## 🛠️ Stack Tecnológica

### Frontend

- **Next.js 15**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **React Icons**
- **React Markdown**

### Ferramentas de Desenvolvimento

- **ESLint**
- **Prettier**
- **Jest**
- **React Testing Library**
- **Turbopack**

## 🚀 Como Começar

### Pré-requisitos

- Node.js 18+
- Gerenciador de pacotes npm

### Instalação

1. **Clone o repositório**

   ```bash
   git clone git@github.com:MatheusVieira97/reader-space.git
   cd reader-space
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   Crie um arquivo `.env` no diretório raiz:

   ```env
   API_URL=http://localhost:3000
   ```

4. **Configure e execute a API backend**
   O frontend requer que a API backend esteja rodando. Encontrada em [https://github.com/MatheusVieira97/reader-space-api](https://github.com/MatheusVieira97/reader-space-api)
   **Nota**: Certifique-se de que o backend esteja rodando na porta especificada na sua variável de ambiente `API_URL`.

5. **Execute o servidor de desenvolvimento**

   ```bash
   npm run dev
   ```

6. **Abra seu navegador**
   Navegue para [http://localhost:3001](http://localhost:3001)

### Scripts Disponíveis

| Script                  | Descrição                                          |
| ----------------------- | -------------------------------------------------- |
| `npm run dev`           | Inicia o servidor de desenvolvimento com Turbopack |
| `npm run build`         | Constrói a aplicação para produção                 |
| `npm run start`         | Inicia o servidor de produção                      |
| `npm run lint`          | Executa ESLint para verificação de código          |
| `npm run format`        | Formata o código com Prettier                      |
| `npm run format:check`  | Verifica a formatação do código                    |
| `npm run test`          | Executa a suíte de testes                          |
| `npm run test:watch`    | Executa testes em modo watch                       |
| `npm run test:coverage` | Executa testes com relatório de cobertura          |

### Estrutura de Testes

- **Testes de Componentes**: Testa componentes individuais da UI
- **Testes de Hooks**: Testa hooks customizados do React
- **Testes de API**: Testa endpoints da API e busca de dados

## 🔧 Configuração

### Variáveis de Ambiente

| Variável  | Descrição          | Obrigatória |
| --------- | ------------------ | ----------- |
| `API_URL` | URL da API backend | Sim         |

### Diretrizes de Desenvolvimento

- Siga as melhores práticas do TypeScript
- Escreva testes para novas funcionalidades
- Use mensagens de commit convencionais
- Certifique-se de que o código passe nas verificações de linting e formatação
- Atualize a documentação para novas funcionalidades
