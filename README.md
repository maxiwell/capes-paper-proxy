Capes Paper Proxy
===============

Plugin para o Google-Chrome e Firefox que recarrega paginas da ACM ou IEEE Xplorer com 
o proxy da CAPES, podendo, assim, baixar os artigos de dentro de 
universidades conveniadas.

Instalando no Google-Chrome
-----------

1. Clone o repo: ``git clone https://github.com/maxiwell/capes-paper-proxy``
2. Abra o Chrome e acesse ``chrome://extensions``
3. Marque a opção "developer mode"
4. Clique no botao "Load unpacked extension" 
5. Selecione o diretório clonado

Instalando no Firefox
-----------

1. Clone o repo: ``git clone https://github.com/maxiwell/capes-paper-proxy``
2. Abra o Firefox e acesse ``about:config``
3. Procure pela chave ``xpinstall.signatures.required`` e modifique para ``false``
4. Acesse ``about:addons``
5. Clique em "Install Add-on From File" ao lado da caixa de busca
6. Selecione o arquivo "capes-paper-proxy.xpi" dentro do diretório "firefox" clonado

O arquivo "capes-paper-proxy.xpi" é gerado via ``make`` a partir do diretório ``firefox``

Testando
----------

1. Visite a página de um artigo no portal da ACM ou IEEE Xplorer a partir de um lugar conveniado
1. Com a mudança da CAPES, o botão 'salvar' fica inacessível quando se acessa diretamente
1. Clique no botão desta extensão para recarregar a página usando o proxy da CAPES
1. Agora o artigo poderá ser baixado como antes

Disclaimer
----------

Este plugin está em conformidade com as leis de direito autoral,
pois apenas recarrega a página usando um proxy legal. 


