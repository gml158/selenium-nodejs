const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');

let driver = new Builder()
    .forBrowser('chrome')
    // .setChromeOptions(new chrome.Options()
    //     .addArguments('user-data-dir=C:/Users/root/AppData/Local/Google/Chrome/User Data'))
    .build();
try {
    driver.get('https://www.baidu.com');
    setTimeout(function(){
        driver.findElement({name:'wd'}).then(found => found.sendKeys('webdriver'));
        driver.findElement({name:'wd'}).submit();
        setTimeout(function(){
            driver.takeScreenshot().then(pic => {
                var dataBuffer = new Buffer(pic, 'base64');
                fs.writeFile('out2.png', dataBuffer, err => {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log('保存成功');
                    }
                });
            });
        }, 2000)
    }, 4000);
    
} finally {
    console.log('end');
}

// console.log('example/builder');