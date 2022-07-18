package pages;

import io.appium.java_client.MobileElement;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

import static utils.AppiumConnection.driver;

public class VeiculosPage {


    protected List<WebElement> listaCarros = driver.findElements(By.id("br.com.siatiquosque.webmotorstest:id/root"));
    protected WebElement valorVeiculo = driver.findElement(By.id("br.com.siatiquosque.webmotorstest:id/tvValue"));


}
