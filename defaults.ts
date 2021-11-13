export enum Retailers {
    Amazon = 'amazon',
    Flipkart = 'flipkart',
    // Tata = 'tatacliq'
}

export interface InspectionParams {
    url: string;
    selector: string;
    website : string;
    value?: string;
    fn?: Function;
    headless?: boolean,
}

export const retailerParams: Record<Retailers, InspectionParams> = {
    [Retailers.Amazon] : {
        url : 'https://www.amazon.in/Sony-Playstation-Standard-Console-Ultra/dp/B08FC5L3RG',
        selector : "#buy-now-button",
        website : "Amazon",
        value : "In stock."
    },
    [Retailers.Flipkart] : {
        url : 'https://www.flipkart.com/sony-playstation-5-cfi-1008a01r-825-gb-astro-s-playroom/p/itma0201bdea62fa',
        selector : '[class="_2KpZ6l _2U9uOA ihZ75k _3AWRsL"]',
        website : "Flipkart",
        value : ''
    },
    // [Retailers.Tata] : {
    //     url : 'https://www.tatacliq.com/sony-playstation-5-cfi-1008a01r-825gb-ssd-console-white/p-mp000000008551936',
    //     selector : "#root",
    //     website : "Tatacliq",
    //     value : ''
    // }
}

  