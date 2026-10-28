# Passo a passo de entrega do desafio na DIO

## Etapa 1 — Entenda a proposta oficial
1. Abra https://github.com/digitalinnovationone/dio-lab-vibe-coding-app-financas
2. Leia o README e confirme que o exercício pede conceito do aplicativo, PRD, agentes/fluxos/MVP, evidências e reflexão.
3. Abra `docs/PRD.md` desta entrega e confira se sua ideia está representada.
4. Ajuste nome, público e necessidades conforme sua autoria, sem alterar os requisitos centrais.

## Etapa 2 — Experimente Vibe Coding de verdade
1. Abra https://copilot.microsoft.com/ ou use o ChatGPT.
2. Cole o **Prompt 1** de `docs/PROMPTS.md`.
3. Leia a resposta e compare-a com o PRD.
4. Cole o **Prompt 2** para solicitar melhorias.
5. Registre as alterações efetivamente aceitas, com um print legível da interação.
6. Salve a captura em `assets/evidencias/01-prd-ia.png`.

## Etapa 3 — Teste o Lovable
1. Acesse https://lovable.dev/ e entre na sua conta.
2. Crie um novo projeto.
3. Cole o **Prompt 3** de `docs/PROMPTS.md` e solicite a proposta do MVP.
4. Revise as telas, campos e comportamentos produzidos.
5. Se precisar, utilize os **Prompts 4 e 5** para ajustar agente, telas e validação, respeitando os limites de créditos do seu plano.
6. Não afirme que há IA real se a interface demonstrar apenas respostas simuladas.
7. Capture a experiência real e salve `assets/evidencias/02-fluxo-telas.png` e `03-agente-mvp.png`.
8. Se houver opção de compartilhar ou publicar, guarde o URL público para incluir no README. Caso a conta não tenha essa opção, o link não é requisito da DIO.

## Etapa 4 — Experimente o protótipo opcional fornecido
1. Baixe e descompacte os arquivos do projeto.
2. Abra `index.html` em um navegador moderno.
3. Vá em **Lançamentos** e clique em **Carregar exemplo fictício** para visualizar o painel.
4. Em **Conversar**, digite “Gastei R$ 45,90 no mercado”, confira os campos e confirme.
5. Em **Minhas metas**, crie uma meta e teste o progresso.
6. Use `docs/VALIDACAO.md` como roteiro.
7. Tire um print da tela real do protótipo, se quiser, com nome como `assets/evidencias/04-prototipo.png`.

## Etapa 5 — Prepare a documentação
1. Mantenha `README.md`, `docs/PRD.md`, `docs/PROMPTS.md`, `docs/FLUXO_TELAS.md` e `docs/VALIDACAO.md`.
2. Adicione as imagens de evidência **reais** e confira seus caminhos no README.
3. Leia `docs/RELATO_APRENDIZADOS.md` e substitua todas as indicações `[preencher]` por observações verdadeiras sobre o processo.
4. Se não tiver utilizado Lovable, diga expressamente qual ferramenta utilizou: o desafio permite alternativa com Copilot.
5. Se publicar versão online, inclua o link no README somente depois de verificar que abre sem autenticação.

## Etapa 6 — Publique no seu GitHub
**Opção recomendada: criar repositório próprio.**
1. Entre em https://github.com e clique em **+** → **New repository**.
2. Nome sugerido: `finania-dio-vibe-coding`.
3. Marque **Public**. Pode marcar README desativado, pois este pacote já contém um README.
4. Clique em **Create repository**.
5. Na página do repositório, clique em **uploading an existing file** ou **Add file → Upload files**.
6. Descompacte o ZIP no computador e selecione **o conteúdo de `finania-dio/`**, preservando pastas e nomes. Em sistemas que não permitem enviar pastas vazias, o arquivo README dentro de `assets/evidencias/` manterá a pasta.
7. Confirme que `index.html` e `README.md` estão na **raiz** (não dentro de uma segunda pasta `finania-dio`).
8. Escreva a mensagem de commit `docs: publica projeto FinanIA para desafio DIO` e conclua em **Commit changes**.
9. Reabra o projeto e confira os links da documentação e as imagens anexadas.

**Alternativa:** faça um **Fork** do repositório oficial e adicione seu projeto ao fork. O repositório inicial da DIO tem apenas o README, então evite misturar o texto de orientação original com seu README final sem adaptar.

## Etapa 7 — Publicar demonstração opcional via GitHub Pages
1. No seu repositório, clique em **Settings** → **Pages**.
2. Em **Build and deployment**, selecione **Deploy from a branch**.
3. Escolha branch **main** e pasta **/(root)** → **Save**.
4. Após a publicação ser concluída, abra o URL apresentado pelo GitHub Pages e teste as quatro telas.
5. Coloque o URL no README; esta etapa é extra, não requisito obrigatório da DIO.

## Etapa 8 — Enviar à DIO
1. Na plataforma DIO, abra o desafio **Criando um APP de Organização de Finanças Pessoais com Vibe Coding**.
2. Localize a área de entrega do projeto.
3. Cole a URL **pública e verificável** do seu repositório no GitHub.
4. Confira se o link abre em uma janela anônima.
5. Siga a confirmação de envio indicada pela plataforma.
6. Guarde um print da confirmação, caso queira registrar o encerramento.

## Checklist final
- [ ] PRD final e prompt reproduzíveis
- [ ] Capturas **reais** das interações com IA
- [ ] Descrição clara das funcionalidades
- [ ] Fluxo de telas e plano de MVP
- [ ] Reflexão pessoal com funcionamento, limitações e aprendizado
- [ ] Repositório público e organizado
- [ ] README sem links quebrados
- [ ] Link enviado na DIO

**Nota:** menus, limites gratuitos e opções de publicação de plataformas externas podem mudar; confira os nomes exibidos no momento da execução.