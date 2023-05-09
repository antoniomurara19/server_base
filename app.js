const a = document.getElementById('a')

a.addEventListener('click',(e)=>{
    e.preventDefault()

    var select_produto = document.getElementById("produto");
    var produto_texto = select_produto.options[select_produto.selectedIndex].text;
    var produto_valor = select_produto.options[select_produto.selectedIndex].value;

    console.log(produto_texto);
    console.log(produto_valor) 


    var select_cliente = document.getElementById("cliente");
    var cliente_texto = select_cliente.options[select_cliente.selectedIndex].text;
    var cliente_valor = select_cliente.options[select_cliente.selectedIndex].value;

    console.log(cliente_texto);
    console.log(cliente_valor) 


    var select_modulo = document.getElementById("modulo");
    var modulo_texto = select_modulo.options[select_modulo.selectedIndex].text;
    var modulo_valor = select_modulo.options[select_modulo.selectedIndex].value;

    console.log(produto_texto);
    console.log(produto_valor)


    var select_natureza = document.getElementById("natureza");
    var natureza_texto = select_natureza.options[select_natureza.selectedIndex].text;
    var natureza_valor = select_natureza.options[select_natureza.selectedIndex].value;

    console.log(produto_texto);
    console.log(produto_valor)


    let caminho = document.getElementById('caminho').value
    console.log(caminho)

    function hora_random(max) {
        return Math.floor(Math.random() * max);
      }
      
      console.log(hora_random(90));

      if(cliente_texto === 'ATENDIMENTO'){
        cliente_texto = ''
      }
      if(produto_texto === 'MANUTENÇÃO DE UNIDADES'){
        produto_texto = ''
      }
      if(modulo_texto === 'SERVIÇOS'){
        modulo_texto = ''
      }
      if(natureza_texto === 'Natureza da Manutenção'){
        natureza_texto = ''
      }

    const ti = document.getElementById('ti')
    const cc = document.getElementById('cc')
    const ss = document.getElementById('ss')
    const mm = document.getElementById('mm')
    const tempo = document.getElementById('tempo')
    const tipo = document.getElementById('tipo')

      ti.innerHTML = caminho
      cc.innerHTML = cliente_texto
      ss.innerHTML = produto_texto
      mm.innerHTML = modulo_texto
      tempo.innerHTML = hora_random(90) + ' horas'
      tipo.innerHTML = natureza_texto

      
    // // let i = 1
    // let cod = document.getElementById('cod')
    // cod.innerHTML = i
    // i++

    

    hora_random();
})

