#language: pt
#encondig: utf-8

Funcionalidade: Lista de veiculos
  Eu enquanto usuario
  Apos abrir o aplicativo da webMotors
  Espero que seja apresentado uma lista de veiculos


  Esquema do Cenario: Validar Lista Veiculos <model>
    Dado que o usuario acesse o aplicativo webMotors
    Entao o aplicativo apresenta uma lista de veiculos e exibe na tela dois com <modelo>, <valor>

    Exemplos:
      |model     | modelo   | valor          |
      | City     | "City"   | "R$ 59.000,00" |
      | Lancer   | "Lancer" | "R$ 49.000,00" |







