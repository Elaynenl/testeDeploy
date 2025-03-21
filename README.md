# 📋 Sistema de Cadastro e Gestão de Usuários

Este é um projeto desenvolvido como Atividade Final da disciplina de Desenvolvimento para Plataformas Web, do curso de Análise e Desenvolvimento de Sistemas da Universidade de Fortaleza (UNIFOR).
O sistema permite o cadastro de usuários, autenticação e gestão administrativa, sendo projetado com uma interface simples e funcional.

---

## 🛠️ Funcionalidades

- **Cadastro de Usuários**:
  - Permite que novos usuários se cadastrem com dados como:
    - Nome
    - CPF
    - Data de nascimento
    - E-mail
    - Senha
- **Autenticação Segura**:
  - Login com validação de credenciais.
  - Utilização de **tokens JWT** para autenticação e segurança.
- **Gestão Administrativa**:
  - Administradores podem:
    - Visualizar uma lista de todos os usuários cadastrados.
    - Editar informações de usuários.
    - Excluir usuários, se necessário.
- **Restrições de Acesso**:
  - Ações administrativas são restritas a usuários com perfil de administrador.

---

## 🖥️ Tecnologias Utilizadas

### **Frontend**
- HTML5, CSS3, JavaScript
- [Bootstrap](https://getbootstrap.com/) para estilização
- [Font Awesome](https://fontawesome.com/) para ícones

### **Backend**
- [Node.js](https://nodejs.org/) com [Express.js](https://expressjs.com/)
- Banco de dados [MongoDB](https://www.mongodb.com/)
- JWT (JSON Web Token) para autenticação

### **Bibliotecas**
- [Axios](https://axios-http.com/) para requisições HTTP

---
