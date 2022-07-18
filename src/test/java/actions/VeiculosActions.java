package actions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import pages.VeiculosPage;

import static utils.AppiumConnection.driver;
import static utils.DeviceUtils.*;

public class VeiculosActions extends VeiculosPage {

    public static VeiculosActions veiculosActions() {
        return new VeiculosActions();
    }

    public void clicarEmUmVeiculo(String modelo) throws InterruptedException {
        Thread.sleep(2000);
        aguardarLoading(inTextView(modelo));
        inTextView(modelo).click();
    }

    public void clicarBtnVoltar() throws InterruptedException {
        WebElement btnVoltar = driver.findElementByXPath("//android.widget.ImageButton[@content-desc='Navigate up']");
        Thread.sleep(2000);
        aguardarLoading(btnVoltar);
        btnVoltar.click();
    }


    public void validarListaCarros(String modelo, String valor) throws Exception {
        Thread.sleep(2000);

        aguardarLoading(inTextView(modelo));
        aguardarLoading(valorVeiculo);

        scrollDown();
        scrollUp();
        scrollUp();

        Assert.assertEquals(modelo, inTextView(modelo).getText());
        Assert.assertTrue(valorVeiculo.isDisplayed());
        Assert.assertEquals(2, listaCarros.size());

    }

    public void validarDetalhesDoVeiculo(String modeloDetalhes, String descricao, String valor, String ano, String km, String cor) throws InterruptedException {

        Thread.sleep(2000);
        Assert.assertEquals(modeloDetalhes, inTextView(modeloDetalhes).getText());
        Assert.assertEquals(descricao, inTextView(descricao).getText());
        Assert.assertTrue(valor, valorVeiculo.isDisplayed());
        Assert.assertEquals(ano, inTextView(ano).getText());
        Assert.assertEquals(km, inTextView(km).getText());
        Assert.assertEquals(cor, inTextView(cor).getText());
    }


}
