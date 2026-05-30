# Loja Veloz - Plataforma de Pedidos em Microsserviços

## Descrição

Projeto desenvolvido para demonstrar uma arquitetura cloud-native baseada em microsserviços utilizando Docker, Kubernetes, CI/CD e observabilidade.

## Arquitetura

A aplicação é composta por:

- API Gateway
- Serviço de Pedidos
- Serviço de Estoque
- Serviço de Pagamentos
- PostgreSQL

Fluxo:

Cliente → Gateway → Microsserviços → Banco de Dados

## Estrutura do Projeto

```text
loja-veloz/
│
├── gateway/
├── pedidos/
├── estoque/
├── pagamentos/
├── kubernetes/
├── terraform/
├── observabilidade/
├── .github/workflows/
└── docker-compose.yml
```

## Executando Localmente

### Subir os serviços

```bash
docker compose up --build
```

### Serviços disponíveis

- Gateway: http://localhost:8080
- Pedidos: http://localhost:8081
- Estoque: http://localhost:8082
- Pagamentos: http://localhost:8083

## Docker

Cada microsserviço possui:

- Dockerfile próprio
- Imagem versionada
- Container isolado

## Kubernetes

Recursos implementados:

- Deployments
- Services
- ConfigMap
- Secret
- HPA
- Readiness Probe
- Liveness Probe

## CI/CD

Pipeline implementada com GitHub Actions.

Fluxo:

1. Checkout do código
2. Build das imagens Docker
3. Validação automática
4. Preparação para deploy

## Escalabilidade

Utilização de HPA (Horizontal Pod Autoscaler):

- Mínimo: 3 Pods
- Máximo: 10 Pods
- Escala baseada em CPU

## Infraestrutura como Código

Terraform utilizado para provisionamento de infraestrutura Kubernetes.

## Video pitch

https://youtu.be/CDGcrSBz7dA

