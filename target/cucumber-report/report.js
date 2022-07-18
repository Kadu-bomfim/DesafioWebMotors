$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/detalhesVeiculos.feature");
formatter.feature({
  "name": "Detalhes do veiculo",
  "description": "  Eu enquanto usuario\n  Apos abrir o aplicativo da webMotors e selecionar um veiculo\n  Espero que seja apresentado uma tela contedos todos os dados daquele veiculo (modelo, descrição, valor, ano, km, cor)",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "name": "Validar Detalhes do Veiculo \u003cmodel\u003e",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "que o usuario acesse o aplicativo webMotors",
  "keyword": "Dado "
});
formatter.step({
  "name": "clica em um veiculo \u003cmodelo\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "o aplicativo apresenta os detalhes do veiculo \u003cmodeloDetalhes\u003e, \u003cdescricao\u003e, \u003cvalor\u003e, \u003cano\u003e, \u003ckm\u003e, \u003ccor\u003e",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "model",
        "modelo",
        "modeloDetalhes",
        "descricao",
        "valor",
        "ano",
        "km",
        "cor"
      ]
    },
    {
      "cells": [
        "City",
        "\"City\"",
        "\"Honda City\"",
        "\"2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO\"",
        "\"R$ 59.000,00\"",
        "\"2017/2018\"",
        "\"0KM\"",
        "\"Azul\""
      ]
    },
    {
      "cells": [
        "Lancer",
        "\"Lancer\"",
        "\"Mitsubishi Lancer\"",
        "\"2.0 EVO 4P AUTOMÁTICO\"",
        "\"R$ 49.000,00\"",
        "\"2012/2012\"",
        "\"47500KM\"",
        "\"Branco\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validar Detalhes do Veiculo City",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario acesse o aplicativo webMotors",
  "keyword": "Dado "
});
formatter.match({
  "location": "ListaSteps.queOUsuarioAcesseOAplicativoWebMotors()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clica em um veiculo \"City\"",
  "keyword": "E "
});
formatter.match({
  "location": "DetalhesSteps.clicaEmUmVeiculo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o aplicativo apresenta os detalhes do veiculo \"Honda City\", \"2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO\", \"R$ 59.000,00\", \"2017/2018\", \"0KM\", \"Azul\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "DetalhesSteps.oAplicativoApresentaOsDetalhesDoVeiculo(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar Detalhes do Veiculo Lancer",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario acesse o aplicativo webMotors",
  "keyword": "Dado "
});
formatter.match({
  "location": "ListaSteps.queOUsuarioAcesseOAplicativoWebMotors()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clica em um veiculo \"Lancer\"",
  "keyword": "E "
});
formatter.match({
  "location": "DetalhesSteps.clicaEmUmVeiculo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o aplicativo apresenta os detalhes do veiculo \"Mitsubishi Lancer\", \"2.0 EVO 4P AUTOMÁTICO\", \"R$ 49.000,00\", \"2012/2012\", \"47500KM\", \"Branco\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "DetalhesSteps.oAplicativoApresentaOsDetalhesDoVeiculo(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validar Detalhes do Veiculo \u003cmodel\u003e e voltar para lista de veiculos",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "que o usuario acesse o aplicativo webMotors",
  "keyword": "Dado "
});
formatter.step({
  "name": "clica em um veiculo \u003cmodelo\u003e",
  "keyword": "E "
});
formatter.step({
  "name": "clica para voltar para lista de veiculos",
  "keyword": "E "
});
formatter.step({
  "name": "o aplicativo apresenta uma lista de veiculos e exibe na tela dois com \u003cmodelo\u003e, \u003cvalor\u003e",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "model",
        "modelo",
        "modeloDetalhes",
        "descricao",
        "valor",
        "ano",
        "km",
        "cor"
      ]
    },
    {
      "cells": [
        "City",
        "\"City\"",
        "\"Honda City\"",
        "\"2.0 EXL 4X4 16V GASOLINA 4P AUTOMÁTICO\"",
        "\"R$ 59.000,00\"",
        "\"2017/2018\"",
        "\"0KM\"",
        "\"Azul\""
      ]
    },
    {
      "cells": [
        "Lancer",
        "\"Lancer\"",
        "\"Mitsubishi Lancer\"",
        "\"2.0 EVO 4P AUTOMÁTICO\"",
        "\"R$ 49.000,00\"",
        "\"2012/2012\"",
        "\"47500KM\"",
        "\"Branco\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validar Detalhes do Veiculo City e voltar para lista de veiculos",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario acesse o aplicativo webMotors",
  "keyword": "Dado "
});
formatter.match({
  "location": "ListaSteps.queOUsuarioAcesseOAplicativoWebMotors()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clica em um veiculo \"City\"",
  "keyword": "E "
});
formatter.match({
  "location": "DetalhesSteps.clicaEmUmVeiculo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clica para voltar para lista de veiculos",
  "keyword": "E "
});
formatter.match({
  "location": "DetalhesSteps.clicaParaVoltarParaListaDeVeiculos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o aplicativo apresenta uma lista de veiculos e exibe na tela dois com \"City\", \"R$ 59.000,00\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaSteps.oAplicativoApresentaUmaListaDeVeiculoseExibeNaTelaDoisComE(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar Detalhes do Veiculo Lancer e voltar para lista de veiculos",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario acesse o aplicativo webMotors",
  "keyword": "Dado "
});
formatter.match({
  "location": "ListaSteps.queOUsuarioAcesseOAplicativoWebMotors()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clica em um veiculo \"Lancer\"",
  "keyword": "E "
});
formatter.match({
  "location": "DetalhesSteps.clicaEmUmVeiculo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clica para voltar para lista de veiculos",
  "keyword": "E "
});
formatter.match({
  "location": "DetalhesSteps.clicaParaVoltarParaListaDeVeiculos()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o aplicativo apresenta uma lista de veiculos e exibe na tela dois com \"Lancer\", \"R$ 49.000,00\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaSteps.oAplicativoApresentaUmaListaDeVeiculoseExibeNaTelaDoisComE(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/listaVeiculos.feature");
formatter.feature({
  "name": "Lista de veiculos",
  "description": "  Eu enquanto usuario\n  Apos abrir o aplicativo da webMotors\n  Espero que seja apresentado uma lista de veiculos",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "name": "Validar Lista Veiculos \u003cmodel\u003e",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "name": "que o usuario acesse o aplicativo webMotors",
  "keyword": "Dado "
});
formatter.step({
  "name": "o aplicativo apresenta uma lista de veiculos e exibe na tela dois com \u003cmodelo\u003e, \u003cvalor\u003e",
  "keyword": "Entao "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "model",
        "modelo",
        "valor"
      ]
    },
    {
      "cells": [
        "City",
        "\"City\"",
        "\"R$ 59.000,00\""
      ]
    },
    {
      "cells": [
        "Lancer",
        "\"Lancer\"",
        "\"R$ 49.000,00\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validar Lista Veiculos City",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario acesse o aplicativo webMotors",
  "keyword": "Dado "
});
formatter.match({
  "location": "ListaSteps.queOUsuarioAcesseOAplicativoWebMotors()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o aplicativo apresenta uma lista de veiculos e exibe na tela dois com \"City\", \"R$ 59.000,00\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaSteps.oAplicativoApresentaUmaListaDeVeiculoseExibeNaTelaDoisComE(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validar Lista Veiculos Lancer",
  "description": "",
  "keyword": "Esquema do Cenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que o usuario acesse o aplicativo webMotors",
  "keyword": "Dado "
});
formatter.match({
  "location": "ListaSteps.queOUsuarioAcesseOAplicativoWebMotors()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o aplicativo apresenta uma lista de veiculos e exibe na tela dois com \"Lancer\", \"R$ 49.000,00\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "ListaSteps.oAplicativoApresentaUmaListaDeVeiculoseExibeNaTelaDoisComE(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
});