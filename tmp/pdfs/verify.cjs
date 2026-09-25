const { chromium } = require('C:/Users/zxcvb/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async () => {
 const browser = await chromium.launch({channel:'msedge',headless:true});
 const page = await browser.newPage({viewport:{width:1440,height:1000}});
 const errors=[];page.on('pageerror', e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5175/responsive_portfolio/');
 await page.locator('#work').scrollIntoViewIfNeeded();
 await page.locator('#work img').evaluateAll(imgs => Promise.all(imgs.map(img => { img.loading = 'eager'; return img.decode(); }))); await page.screenshot({path:'tmp/pdfs/projects-desktop.png'});
 await page.getByRole('button',{name:'앵커라이브 2.0 프로젝트 상세 보기'}).click();
 await page.locator('dialog[open]').waitFor();
 await page.locator('dialog img').evaluateAll(imgs => Promise.all(imgs.map(img => { img.loading = 'eager'; return img.decode(); }))); await page.screenshot({path:'tmp/pdfs/detail-desktop.png'});
 if(await page.locator('dialog img').count() !== 4) throw Error('Missing images');
 const pdf = await page.request.get('http://127.0.0.1:5175/responsive_portfolio/documents/anchorlive-2-guide.pdf');
 if(!pdf.ok()) throw Error('PDF unavailable');
 await page.keyboard.press('Escape');
 if(await page.locator('dialog[open]').count()) throw Error('Escape failed');
 await page.setViewportSize({width:390,height:844});
 await page.getByRole('button',{name:'앵커라이브 2.0 프로젝트 상세 보기'}).click();
 await page.screenshot({path:'tmp/pdfs/detail-mobile.png'});
 const overflow=await page.evaluate(()=>document.documentElement.scrollWidth > innerWidth);
 if(overflow) throw Error('Horizontal overflow');
 await page.getByRole('button',{name:'프로젝트 상세 닫기'}).click();
 if(await page.evaluate(()=>document.body.style.overflow) === 'hidden') throw Error('Scroll remains locked');
 console.log(JSON.stringify({errors,pdf:pdf.status(),mobileOverflow:overflow}));
 await browser.close();
})();


