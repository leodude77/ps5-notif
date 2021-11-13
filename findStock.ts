import puppeteer from "puppeteer";
import { InspectionParams } from "./defaults";

export const findStock = async (retailerRecord: InspectionParams) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(retailerRecord.url);
    const element = await page.$(retailerRecord.selector);
    // console.log(element)
    var value, inStock;
    if(element){
        value = await page.evaluate((el) => el.textContent, element);
        // console.log(value)
        // inStock = value.trim() == retailerRecord.value ? true : false;
        inStock = true
    }
    console.log(retailerRecord.website + " : " + (inStock ? "In Stock" : "Out of stock"));
    await browser.close();
  };