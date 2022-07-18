#language: pt
#encondig: utf-8

Funcionalidade: Detalhes do veiculo
  Eu enquanto usuario
  Apos abrir o aplicativo da webMotors e selecionar um veiculo
  Espero que seja apresentado uma tela contedos todos os dados daquele veiculo (modelo, descrição, valor, ano, km, cor)


  Esquema do Cenario: Validar Detalhes do Veiculo <model>
    Dado que o usuario acesse o aplicativo webMotors
    E clica em um veiculo <modelo>
    Entao o aplicativo apresenta os detalhes do veiculo <modeloDetalhes>, <descricao>, <valor>, <ano>, <km>, <cor>


    Exemplos:
     |model   | modelo       |modeloDetalhes        | descricao                              |valor          |ano           |km          |cor       |
     |City    | "City"       |"Honda City"          |"2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO"|"R$ 59.000,00" |"2017/2018"   | "0KM"      |"Azul"    |
     |Lancer  | "Lancer"     |"Mitsubishi Lancer"   |"2.0 EVO 4P AUTOMÁTICO"                 |"R$ 49.000,00" |"2012/2012"   | "47500KM"  |"Branco"  |

  Esquema do Cenario: Validar Detalhes do Veiculo <model> e voltar para lista de veiculos
    Dado que o usuario acesse o aplicativo webMotors
    E clica em um veiculo <modelo>
    E clica para voltar para lista de veiculos
    Entao o aplicativo apresenta uma lista de veiculos e exibe na tela dois com <modelo>, <valor>


    Exemplos:
      |model   | modelo       |modeloDetalhes        | descricao                              |valor          |ano           |km          |cor       |
      |City    | "City"       |"Honda City"          |"2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO"|"R$ 59.000,00" |"2017/2018"   | "0KM"      |"Azul"    |
      |Lancer  | "Lancer"     |"Mitsubishi Lancer"   |"2.0 EVO 4P AUTOMÁTICO"                 |"R$ 49.000,00" |"2012/2012"   | "47500KM"  |"Branco"  |





