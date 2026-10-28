# Prompts do desafio — FinanIA

> **Como usar:** Copie os prompts no Copilot Web, ChatGPT ou Lovable, colete respostas reais e salve capturas de tela em `assets/evidencias/`. Não apresente prompts preparados como se já tivessem sido executados em outra ferramenta.

## Prompt 1 — PRD final / briefing principal (entregável obrigatório)

```text
Você é um especialista em Product Management, UX, educação financeira e Vibe Coding.

CONTEXTO
Quero criar o FinanIA, um aplicativo de organização de finanças pessoais com interface em português do Brasil. O diferencial é registrar movimentações por conversa simples, de forma acessível e sem depender de planilhas complexas.

PROBLEMA
Pessoas iniciantes desistem de controlar o dinheiro porque os aplicativos exigem muitos campos e oferecem pouco feedback personalizado.

PÚBLICO-ALVO
Pessoas adultas iniciantes no controle financeiro, que desejam acompanhar gastos, compreender hábitos e criar metas realistas.

FUNCIONALIDADES PRINCIPAIS DO MVP
1. Registrar receitas e despesas digitando frases naturais, como “Gastei R$ 45,90 no mercado”.
2. Classificar automaticamente as movimentações e permitir revisão/correção antes de salvar.
3. Criar metas de economia e acompanhar o progresso.
4. Oferecer dicas financeiras educativas com base nas movimentações registradas.
5. Exibir dashboard com saldo, receitas, despesas e gráfico por categoria.

FLUXO ESPERADO
Ao abrir o app, o usuário vê um resumo. Pode conversar com o assistente, revisar um lançamento, confirmá-lo, acompanhar as mudanças no dashboard e criar uma meta.

REGRAS DE NEGÓCIO
Usar reais (BRL); saldo = receitas - despesas; não prometer ganhos; não realizar operações bancárias; explicar quando uma recomendação for apenas educativa; não inventar informações do usuário.

RESTRIÇÕES E PRIVACIDADE
Criar primeiro um MVP demonstrativo com dados fictícios, responsivo e acessível. Não pedir dados bancários reais, CPF, senha ou chave de API no frontend. Caso não exista backend de IA, identificar claramente o chatbot como simulação baseada em regras.

ENTREGÁVEL
Apresente: (a) resumo do produto, (b) personas e dores, (c) 5 funcionalidades prioritárias, (d) fluxo das telas, (e) comportamento do agente, (f) critérios de aceite, (g) plano inicial de validação e (h) limites do MVP. Seja objetivo e escreva em português brasileiro.
```

## Prompt 2 — Refinar o PRD no Copilot Web

```text
Atue como revisor de requisitos de produto. Analise o PRD do FinanIA abaixo e:
1. Identifique ambiguidades, riscos e funcionalidades fora do MVP;
2. Reescreva os requisitos para que cada funcionalidade tenha critério de aceite testável;
3. Priorize simplicidade, linguagem acessível, segurança e privacidade;
4. Separe as funcionalidades que precisam de uma IA real daquelas que podem ser simuladas;
5. Preserve o público-alvo e a proposta central.
Não gere código. Entregue o PRD revisado e explique, em até cinco pontos, as principais melhorias.

[COLE AQUI O PRD DO PROMPT 1]
```

## Prompt 3 — Lovable: interface e MVP funcional (extra opcional)

```text
Crie um protótipo web responsivo chamado FinanIA, em português brasileiro, com estética profissional, moderna, limpa e acolhedora. Paleta: azul-marinho #0A1D2A, verde-esmeralda #0CBB93, fundo cinza-claro e cartões brancos. Layout mobile-first com navegação simples.

TELAS: Visão geral, Conversar, Minhas metas, Lançamentos.

FUNCIONALIDADES:
- Dashboard com saldo, entradas, saídas, despesas por categoria e últimos lançamentos.
- Campo de conversa para frases como “Gastei R$ 45,90 no mercado” e “Recebi R$ 3500 de salário”.
- Interpretar tipo, valor e categoria, sempre mostrando confirmação editável antes de salvar. Se não houver IA conectada, usar interpretação heurística local e exibir claramente “Demonstração baseada em regras — sem IA generativa”.
- Criação de metas com valores alvo, progresso e inclusão de aportes.
- Sugestões educativas simples baseadas nos gastos. Não prometer ganhos e não recomendar produtos de investimento específicos.
- Dados fictícios opcionais para demonstrar a navegação.

REGRAS: valores em BRL; saldo = entradas - saídas; evitar dados financeiros reais; não conectar bancos; não inserir chaves secretas no frontend; persistir dados apenas localmente nesta demonstração.

PRIORIDADE: experiência completa de MVP e testes de fluxo. Não implemente login, cobrança, sincronização bancária ou recursos avançados nesta primeira versão.

ANTES DE GERAR: resuma o plano de telas e confirme que todos os recursos que dependem de IA externa estarão rotulados como protótipos quando não houver integração real.
```

## Prompt 4 — Comportamento do Agente Financeiro

```text
Descreva o comportamento de um “Agente Financeiro” para o FinanIA.
O agente deve usar português simples, ser respeitoso, não julgar hábitos, sempre conferir valores e categorias antes de registrar, pedir esclarecimento quando o valor for ambíguo e explicar que suas sugestões são educativas.

Exemplos de mensagens de usuário:
- “Gastei R$ 45,90 no mercado”.
- “Recebi R$ 3.500 de salário”.
- “Quero juntar R$ 2.000 para uma viagem”.
- “Onde posso tentar economizar?”.

Forneça exemplos de diálogo, mensagens de erro, critérios de segurança, limites da ferramenta e uma lista de intenções suportadas. Não afirme que o aplicativo possui acesso a bancos ou IA real sem integração comprovada.
```

## Prompt 5 — Fluxo de telas e validação

```text
Com base no PRD do FinanIA, gere:
1. Fluxo de navegação em Mermaid;
2. Wireframe textual das quatro telas;
3. Dez cenários de teste com entrada, resultado esperado e comportamento de erro;
4. Plano de validação com cinco usuários iniciantes;
5. Diferença clara entre funções simuladas e funções realmente operacionais.
Não gere funcionalidades fora do MVP.
```

## Como registrar a evolução do prompt
Preencha após as interações reais:

| Etapa | Ferramenta | O que foi pedido | O que mudou | Evidência |
|---|---|---|---|---|
| 1 | Copilot/ChatGPT | Revisão do PRD | [Descrever após executar] | `assets/evidencias/01-prd-ia.png` |
| 2 | Lovable/Copilot | Fluxo e telas | [Descrever após executar] | `assets/evidencias/02-fluxo-telas.png` |
| 3 | Lovable/Copilot | Agente e MVP | [Descrever após executar] | `assets/evidencias/03-agente-mvp.png` |

Os caminhos acima são nomes sugeridos para arquivos que **ainda precisam ser capturados pelo participante**.