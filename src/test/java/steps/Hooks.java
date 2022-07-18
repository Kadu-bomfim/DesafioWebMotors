package steps;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

import java.io.IOException;
import java.net.MalformedURLException;

import static java.lang.System.out;
import static utils.AppiumConnection.acessarAndroid;
import static utils.AppiumConnection.driver;
import static utils.ScenarioUtils.capturarScreenshot;

public class Hooks {

    @Before
    public void acessarAplicativo(Scenario scenario) throws MalformedURLException {
        acessarAndroid();
        out.println("Conectando App");
        out.println("cenario: ########## " + scenario.getName() + " ##########");
    }


    @After
    public void fecharApplicativo(Scenario scenario) throws IOException {
        out.println("*************** [" + scenario.getStatus() + "] ***************");
        capturarScreenshot(scenario);
        driver.quit();
        out.println("*************** [ Driver.Quit! ] ***************");
        out.println(" ");

    }
}
