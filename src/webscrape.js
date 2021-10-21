const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({
        "headless": false
    });

    const page = await browser.newPage();
    await page.goto("http://www.postalpincode.in/Search-By-Location?StateId=10");
   
    const result = await page.evaluate(() => {
        let raw = document.querySelectorAll(".td > td");
        const arr = [...raw];
        let brr = [];
        for(let i=2;i<100;i=i+5){
            brr.push(arr[i].innerText)
        }
        return brr;
    });

    console.log(result);
})();