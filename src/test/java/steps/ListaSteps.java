package steps;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;

import java.net.MalformedURLException;

import static actions.VeiculosActions.veiculosActions;

public class ListaSteps {

    @Dado("que o usuario acesse o aplicativo webMotors")
    public void queOUsuarioAcesseOAplicativoWebMotors() throws MalformedURLException, Exception {
        /*
         *
         * como coloquei o metodo de acessar o aplicativo na hooks não
         * vi a necessidade de chamar aqui novamente
         *
         * */

    }


    @Entao("o aplicativo apresenta uma lista de veiculos e exibe na tela dois com {string}, {string}")
    public void oAplicativoApresentaUmaListaDeVeiculoseExibeNaTelaDoisComE(String modelo, String valor) throws Exception {
        veiculosActions().validarListaCarros(modelo, valor);
    }


}
