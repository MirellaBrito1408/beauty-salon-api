# Beauty Salon API

API do Salão de Beleza Vienna Store, desenvolvida com **Node.js, Express, TypeScript, Prisma, PostgreSQL, Zod e Swagger**.  
Essa API gerencia **clientes, serviços e agendamentos**, permitindo criar, listar, atualizar e excluir registros, além de mostrar relações entre tabelas.

---

## Tecnologias

- Node.js + Express.js  
- TypeScript  
- Prisma + PostgreSQL  
- Zod (validação de dados)  
- Swagger (documentação interativa)  

---

## Estrutura do projeto

beauty-salon-api/
├─ prisma/
│ └─ schema.prisma
├─ src/
│ ├─ controllers/
│ │ ├─ clientsController.ts
│ │ ├─ servicesController.ts
│ │ └─ appointmentsController.ts
│ ├─ routes/
│ │ ├─ clientsRoutes.ts
│ │ ├─ servicesRoutes.ts
│ │ └─ appointmentsRoutes.ts
│ ├─ schemas/
│ │ ├─ clientSchema.ts
│ │ ├─ serviceSchema.ts
│ │ └─ appointmentSchema.ts
│ └─ index.ts
├─ swagger.json
├─ package.json
├─ tsconfig.json
├─ .env
└─ README.md

---

## Endpoints

### Clientes
- `GET /api/clients` → Listar todos os clientes  
- `GET /api/clients/{id}` → Buscar cliente por ID  
- `POST /api/clients` → Criar cliente  
- `PUT /api/clients/{id}` → Atualizar cliente  
- `DELETE /api/clients/{id}` → Deletar cliente  

### Serviços
- `GET /api/services` → Listar todos os serviços  
- `GET /api/services/{id}` → Buscar serviço por ID  
- `POST /api/services` → Criar serviço  
- `PUT /api/services/{id}` → Atualizar serviço  
- `DELETE /api/services/{id}` → Deletar serviço  

### Agendamentos
- `GET /api/appointments` → Listar todos os agendamentos (inclui cliente e serviço)  
- `GET /api/appointments/{id}` → Buscar agendamento por ID  
- `POST /api/appointments` → Criar agendamento  
- `PUT /api/appointments/{id}` → Atualizar agendamento  
- `DELETE /api/appointments/{id}` → Deletar agendamento  

---

## Rodar o projeto localmente

1. Clonar o repositório:
```bash
git clone https://github.com/MirellaBrito1408/beauty-salon-api.git
cd beauty-salon-api

---

## Instalar dependências (terminal):
npm install

## Configurar arquivo .env com as variáveis de conexão do PostgreSQL:
DATABASE_URL="postgresql://usuario:senha@localhost:5432/beautysalon?schema=public"
PORT=3000

## Rodar migrações do Prisma:
npx prisma migrate dev

## Iniciar o servidor:
npm run dev

## Iniciar o Swagger no navegador:
http://localhost:3000/api-docs

---

Todos os dados criados, atualizados ou deletados no Swagger são refletidos no PostgreSQL, mostrando a integração completa da API.

O recurso de agendamentos (appointments) tem relações com clientes e serviços usando @relation no Prisma, e o GET retorna os dados relacionados (include: { client: true
service: true }).

---

## Autoras
Sophia Costa    RGM: 44024711
Mirella Brito   RGM: 42878063
Ana Clara       RGM: 42905338
Beatriz Dantas  RGM: 42183308
