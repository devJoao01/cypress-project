<h1>Pré-requisitos</h1>
    <p>Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:</p>
    <ul>
        <li><a href="https://nodejs.org/" target="_blank">Node.js</a></li>
        <li><a href="https://git-scm.com/" target="_blank">Git</a></li>
    </ul>
  <h2>Instruções</h2>
    <p>Siga os passos abaixo para clonar o projeto e rodar os testes:</p>
    <ol>
        <li><strong>Clone o repositório:</strong>
            <pre><code>git clone &lt;URL-do-repositório&gt;</code></pre>
        </li>
        <li><strong>Navegue até o diretório clonado:</strong>
            <pre><code>cd nome-do-repositorio</code></pre>
        </li>
        <li><strong>Instale as dependências:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Execute os testes com o Cypress:</strong>
            <pre><code>npx cypress run</code></pre>
        </li>
        <li><strong>Ou, se preferir abrir o Cypress em modo interativo (com interface gráfica):</strong>
            <pre><code>npx cypress open</code></pre>
        </li>
    </ol>
        <h2>Observações</h2>
    <p>Os testes estão localizados na pasta <code>cypress/e2e</code>.</p>
