package utils;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static java.lang.System.out;
import static utils.AppiumConnection.driver;

public class DeviceUtils {

    public static DeviceUtils deviceUtils() {
        return new DeviceUtils();
    }

    public static AppiumDriver<WebElement> recoveringAndroidDriver() {
        AppiumDriver<WebElement> androidDriverCurrent = null;
        androidDriverCurrent = AppiumConnection.driver;
        return androidDriverCurrent;
    }

    public static void scrollDown() {
        new TouchAction<>(recoveringAndroidDriver())
                .press(PointOption.point(550, 640))
                .waitAction()
                .moveTo(PointOption.point(550, 60))
                .release()
                .perform();
    }

    public static void scrollUp() {
        new TouchAction<>(recoveringAndroidDriver())
                .press(PointOption.point(550, 640))
                .waitAction()
                .moveTo(PointOption.point(100, 1180))
                .release()
                .perform();
    }

    public static void aguardarLoading(WebElement elemento) {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOf(elemento));
    }



    public static boolean isActive(WebElement element) {
        return element.isDisplayed();
    }

    public static WebElement inTextView(String elementoTexto) {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement el = driver.findElement(By.xpath("//android.widget.TextView[@text='" + elementoTexto + "']"));
        wait.until(ExpectedConditions.visibilityOf(el));
        return el;
    }

    public static WebElement inTextViews(String elementoTexto) {
        return (WebElement) driver.findElements(By.xpath("//android.widget.TextView[@text='" + elementoTexto + "']"));
    }


}
