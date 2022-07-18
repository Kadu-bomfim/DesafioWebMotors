package utils;

import io.cucumber.core.api.*;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;

import static utils.AppiumConnection.driver;

public class ScenarioUtils {

    public static ScenarioUtils scenarioUtils() {
        return new ScenarioUtils();
    }

    public static File capturarScreenshot(Scenario scenario) throws IOException {
        final byte[] screenShot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
        scenario.embed(screenShot, "image/png");
        File imagem = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        try {

            FileUtils.copyFile(imagem, (new File("./target/screenshots", scenario.getName() + "-" + scenario.getStatus()+ ".png")));

        }catch (Exception e){
            e.printStackTrace();
        }

        return imagem;
    }
}
