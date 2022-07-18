#language: pt
#encondig: utf-8

@consultarVeiculos
Funcionalidade: Consultar Veiculos
  Eu enquanto usuario
  Apos abrir a plataforma da webMotors desejo consultar um veiculo por marca, modelo e versao


  Esquema do Cenario: consultar veiculos por <marca>
    Dado que o usuario acesse o aplicativo webMotors
    Quando clicar no item de filtrar busca
    E o usuario informar a <marca2>
    E clicar em buscar
    Entao a plataforma apresentar a lisca de veiculos da <marca2>

    Exemplos:
      |marca   | marca2|
      |Honda    |"Honda"|

  Esquema do Cenario: consultar veiculos por <modelo>
    Dado que o usuario acesse o aplicativo webMotors
    Quando clicar no item de filtrar busca
    E o usuario informar a <modelo2>
    E clicar em buscar
    Entao a plataforma apresentar a lisca de veiculos da <modelo2>

    Exemplos:
      | modelo| modelo2|
      | Fit   | "Fit"  |

  Esquema do Cenario: consultar veiculos por <versao>
    Dado que o usuario acesse o aplicativo webMotors
    Quando clicar no item de filtrar busca
    E o usuario informar a <versao2>
    E clicar em buscar
    Entao a plataforma apresentar a lisca de veiculos da <versao2>

    Exemplos:
      | versao| versao2|
      | 4x4   | "4x4"  |

  Esquema do Cenario: consultar veiculos por <marca> e <modelo>
    Dado que o usuario acesse o aplicativo webMotors
    Quando clicar no item de filtrar busca
    E o usuario informar a <marca2> e <modelo2>
    E clicar em buscar
    Entao a plataforma apresentar a lisca de veiculos da <marca2> e <modelo2>

    Exemplos:
      | marca | marca2   |modelo|modelo2
      | Homda | "Honda"  |Fit   |"Fit"

  Esquema do Cenario: consultar veiculos por <marca> e <versao>
    Dado que o usuario acesse o aplicativo webMotors
    Quando clicar no item de filtrar busca
    E o usuario informar a <marca2> e <versao2>
    E clicar em buscar
    Entao a plataforma apresentar a lisca de veiculos da <marca2> e <versao2>

    Exemplos:
      | marca | marca2   |versao       |versao2
      | Honda | "Honda"  |automatico   |"Automatico"

  Esquema do Cenario: consultar veiculos por <modelo> e <versao>
    Dado que o usuario acesse o aplicativo webMotors
    Quando clicar no item de filtrar busca
    E o usuario informar a <modelo2> e <versao2>
    E clicar em buscar
    Entao a plataforma apresentar a lisca de veiculos da <marca2> e <versao2>

    Exemplos:
      | modelo | modelo2   |versao       |versao2
      | Honda  | "Honda"    |automatico   |"Automatico"

  Esquema do Cenario: consultar veiculos por <marca> , <modelo> e <versao>
    Dado que o usuario acesse o aplicativo webMotors
    Quando clicar no item de filtrar busca
    E o usuario informar a <marca2>, <modelo2> e <versao2>
    E clicar em buscar
    Entao a plataforma apresentar a lisca de veiculos da <marca2>, <modelos2> e <versao2>

    Exemplos:
      | marca | marca2   |modelo|modelo2|versao       |versao2
      | Honda | "Honda"  |Fit   |"Fit"  |automatico   |"Automatico"

  Esquema do Cenario: consultar veiculos por <marca> , <modelo> e <versao>
    Dado que o usuario acesse o aplicativo webMotors
    Quando clicar no item de filtrar busca
    E o usuario informar a <marca2>, <modelo2> e <versao2>
    E clicar em buscar
    Entao a plataforma apresentar a lisca de veiculos da <marca2>, <modelos2> e <versao2>

    Exemplos:
      | marca | marca2   |modelo|modelo2|versao       |versao2
      | Honda | "Honda"  |Fit   |"Fit"  |automatico   |"Automatico"