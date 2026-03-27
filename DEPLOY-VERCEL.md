# Deploy na Vercel

## Opção 1: Pelo site da Vercel (recomendado)

### 1. Coloque o projeto no GitHub

- Crie um repositório no [GitHub](https://github.com/new).
- Na pasta do projeto (`project`), abra o terminal e rode:

```bash
cd "c:\Users\sulai\Downloads\Pagina de vendas\project"
git init
git add .
git commit -m "Primeiro commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

(Substitua `SEU-USUARIO` e `SEU-REPOSITORIO` pelo seu usuário e nome do repositório.)

### 2. Conecte à Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login (pode usar conta do GitHub).
2. Clique em **Add New** → **Project**.
3. **Import** o repositório do GitHub (se não aparecer, conecte o GitHub em Settings).
4. A Vercel deve detectar automaticamente:
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clique em **Deploy**.
6. Espere alguns minutos; no fim você recebe um link do tipo `https://seu-projeto.vercel.app`.

---

## Opção 2: Pelo terminal (Vercel CLI)

### 1. Instale a Vercel CLI

```bash
npm install -g vercel
```

### 2. Faça o deploy

```bash
cd "c:\Users\sulai\Downloads\Pagina de vendas\project"
vercel
```

- Na primeira vez ele pede login (abre o navegador).
- Pergunta se o projeto está vinculado a um repo; pode responder **N**.
- Confirme a pasta atual e o comando de build; pressione Enter.
- No fim aparece o link da sua página.

Para publicar em produção:

```bash
vercel --prod
```

---

## Depois do deploy

- Cada **push** no `main` (no GitHub) gera um novo deploy automático.
- O link de produção fica em **Dashboard** → seu projeto → **Domains**.
- Você pode adicionar um domínio próprio em **Settings** → **Domains**.
