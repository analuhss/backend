<!-- 📊 STATUS CODES(RESPOSTAS DO SERVIDOR) -->

2xx (Duzentos e alguma coisa) - SUCESSO (Tudo certo)
    200 - OK (Requisição falando que funcionou)
    201 - Criado (Post Funcionou)

3xx - REDIRECIONAMENTO (Mudou de lugar)
    301 - Mudou permanentemente 


4xx - ERRO DO CLIENTE (Você errou)
    400 - Requisição errada
    401 - Não autorizada (Sem login)
    403 - Proibido (Login sem permissão)
    404 - Não encontrado
    429 - Muitas requisições em pouco tempo

5xx - ERRO DO SERVIDOR (Eles erram)
    500 - Erro interno (Erro do servidor)
    503 - Serviço indisponível

CENÁRIO: Você pede uma pizza!
200 = "Aqui está a sua pizza"
404 = "Não tem essa pizza"
500 = "O forno queimou"
401 = "Só entregamos para clientes"
429 = "Muitos pedidos, aguarde"