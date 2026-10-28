# Histórico real de Vibe Coding — FinanIA

**Ferramenta principal:** ChatGPT.  
**Data das interações e testes documentados:** 28/10/2026.  
**Limites:** este registro reúne mensagens reais disponíveis na conversa e resultados conferidos em capturas fornecidas pelo participante. Não afirma que Copilot ou Lovable foram usados, nem cria prints artificiais de conversa.

## 1. Da necessidade ao projeto
**Mensagem do participante (trecho literal):**
> “Entenda o material anexado para me ajudar a fazer o desafio e sua entrega com todos os passo a passos detalhados com base nesses matérias em anexo vamos construir um app de financias pessoas para o desafio de projetos da DIO.”

**Contexto:** o participante forneceu o repositório oficial da DIO e um vídeo do YouTube para orientar o trabalho.  
**Contribuição do ChatGPT:** análise do enunciado, distinção entre o **conceito obrigatório** e o **protótipo de código opcional**, estruturação de funcionalidades, PRD, fluxo, guia de entrega e base demonstrativa em HTML, CSS e JavaScript.

## 2. Desenvolvimento iterativo e validação guiada
**Mensagem do participante (literal):**
> “Ok vamos fazer juntos toda a revisão antes da entrega”

**Mudança de estratégia:** foi iniciada uma revisão guiada com capturas reais do aplicativo em execução e comparação entre valores esperados e observados.

**Evidências enviadas na conversa:**
- Dashboard inicial: R$ 3.500,00 de receitas, R$ 682,10 de despesas, saldo de R$ 2.817,90.
- Chat: “Gastei R$ 45,90 no supermercado”; interpretação como despesa Alimentação e mensagem de lançamento salvo.
- Dashboard atualizado: despesas de R$ 728,00 e saldo de R$ 2.772,00.
- Histórico: sete movimentações, incluindo a despesa recém-registrada.
- Meta: “Reserva de emergência”, R$ 300,00 de R$ 3.000,00 (10%).
- Aporte: total de R$ 450,00 de R$ 3.000,00 (15%).

Os arquivos de imagem correspondentes estão em [`../assets/evidencias/`](../assets/evidencias/). Esses prints são do **protótipo**, não são prints da interação com ChatGPT.

## 3. Decisão consciente de ferramenta
**Mensagem do participante (literal):**
> “Podemos seguir tudo por aqui mesmo sem usar o copilot?”

**Decisão documentada:** continuar com ChatGPT, sem exigir Copilot ou Lovable. A IA é a parceira para especificação, criação, crítica, testes e documentação. O chat do protótipo, por sua vez, continua baseado em regras locais.

**Mensagem de continuidade (literal):**
> “Ok podemos seguir então”

**Refinamento realizado nesta etapa:** PRD revisado com critérios verificáveis, separação explícita entre recursos propostos e observados, vinculação dos seis prints reais ao repositório e atualização do roteiro de entrega para ChatGPT.

## 4. Evolução dos prompts (transparência)
| Etapa | Origem | Evidência de execução | Produto resultante |
|---|---|---|---|
| Definição do desafio | Pedido do participante nesta conversa | Mensagem existente no histórico de chat | Conceito e primeiro PRD |
| Revisão técnica guiada | Pedido do participante nesta conversa | Mensagem e prints do aplicativo | Correções, testes e documentação |
| Escolha de ferramenta | Pedido do participante nesta conversa | Mensagem do chat | Fluxo ChatGPT, sem Copilot |
| Prompt principal estruturado | Síntese produzida para documentação | **Modelo preparado; não se afirma envio literal anterior** | [`PROMPTS.md`](PROMPTS.md), Prompt 1 |
| Prompt de revisão de requisitos | Modelo de iteração futura | **Não executado literalmente nesta etapa** | [`PROMPTS.md`](PROMPTS.md), Prompt 2 |

## 5. Como documentar a interação com IA para a DIO
Os prints do aplicativo já estão no repositório. Para comprovar a **conversa com IA** solicitada no desafio, o participante ainda deve capturar pelo menos uma tela legível **desta conversa real** mostrando pedido e resposta de planejamento/revisão, sem dados pessoais, e salvar em `assets/evidencias/07-chatgpt-planejamento.png` (nome sugerido). Um segundo print de revisão do PRD pode ser salvo como `08-chatgpt-revisao-prd.png`.

**Não é necessário simular conversa com Copilot, Lovable ou criar transcrições que não aconteceram.**

## 6. Pendências reais
- Confirmar persistência após F5 (não demonstrada inequivocamente apenas pelos screenshots).
- Testar revisão de categoria, cancelamento, entrada inválida e layout mobile.
- Inserir prints autênticos desta conversa com IA.
- Aprovar reflexão pessoal em [`RELATO_APRENDIZADOS.md`](RELATO_APRENDIZADOS.md).
- Publicar no GitHub e enviar URL na DIO.