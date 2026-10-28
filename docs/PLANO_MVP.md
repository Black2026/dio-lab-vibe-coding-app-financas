# Plano de MVP e recursos — FinanIA

## Problema a resolver
Reduzir o atrito de anotar gastos e facilitar o acompanhamento de hábitos por pessoas iniciantes em finanças pessoais.

## Hipótese central
Uma interface conversacional com confirmação de lançamentos e um painel acessível permitirá que iniciantes registrem mais facilmente informações e compreendam categorias de despesas.

## Prioridades (MoSCoW simplificado)

**Essenciais no conceito e na demonstração**
1. Chat para informar receita e despesa.
2. Sugestão de categoria com revisão antes de salvar.
3. Metas com indicador de progresso.
4. Dicas educativas baseadas nas movimentações.
5. Painel com saldo, receitas, despesas e categorização.

**Posteriores ao MVP:** login, sincronização entre dispositivos, importação de extratos, alertas, integração bancária, análise estatística avançada e agente com LLM real.

## Recursos para demonstração
- Navegador atualizado.
- HTML/CSS/JavaScript sem dependências.
- Armazenamento local do navegador.
- Testes de lógica com Node.js (opcional).
- ChatGPT para revisar PRD, orientar implementação e testes, e documentar a evolução dos prompts.
- Lovable e Copilot são alternativas não utilizadas nesta entrega (opcionais).
- GitHub para documentação e entrega.

## Recursos para produto futuro com IA
- API de modelo generativo acessada por serviço backend seguro.
- Banco de dados com criptografia e autenticação/autorização.
- Monitoramento de erros e métricas, consentimento e documentação de privacidade.

## Sequência de validação
1. **Compreensão do problema:** revisar o PRD e identificar os 5 fluxos prioritários.
2. **Protótipo:** desenvolver e navegar nas telas.
3. **Testes de fluxo:** executar os cenários de `VALIDACAO.md`.
4. **Testes com pessoas:** observar cinco iniciantes sem conduzir respostas.
5. **Avaliação:** registrar falhas, calcular taxa de sucesso e priorizar ajustes.

## Critérios de pronto para entregar à DIO
- PRD final reproduzível e coerente.
- Diagrama de fluxo e comportamento do agente descritos.
- Plano de MVP e validação demonstrados.
- Capturas autênticas das interações com IA.
- Reflexão verdadeira sobre facilidades e limitações.
- README completo e URL pública do GitHub.

**Observação:** construir código é opcional no enunciado; não é necessário integrar uma API paga para concluir o desafio.
