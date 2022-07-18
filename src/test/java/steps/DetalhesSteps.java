package steps;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;

import static actions.VeiculosActions.*;


public class DetalhesSteps {

    @Dado("clica em um veiculo {string}")
    public void clicaEmUmVeiculo(String modelo) throws Exception {
        veiculosActions().clicarEmUmVeiculo(modelo);
    }

    @Dado("clica para voltar para lista de veiculos")
    public void clicaParaVoltarParaListaDeVeiculos() throws InterruptedException {
        veiculosActions().clicarBtnVoltar();
    }

    @Entao("o aplicativo apresenta os detalhes do veiculo {string}, {string}, {string}, {string}, {string}, {string}")
    public void oAplicativoApresentaOsDetalhesDoVeiculo(String modeloDetalhes, String descricao, String valor, String ano, String km, String cor) throws InterruptedException {
        veiculosActions().validarDetalhesDoVeiculo(modeloDetalhes, descricao, valor, ano, km, cor);
    }
}
