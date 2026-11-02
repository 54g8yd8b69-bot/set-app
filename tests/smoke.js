// Dental Set-App smoke tests. Serve the site root with this repo at /set-app/.
const {page,expect,test,noErrors,run}=require('./harness');
run({name:'Dental Set-App',fn:async()=>{
  await test('every procedure builds a set-up list',async()=>{const pg=await page('/set-app/');
    const procs=await pg.$$eval('#proc option',o=>o.map(x=>x.value).filter(Boolean));expect(procs.length>=20,'expected 20+ procedures, got '+procs.length);
    for(const p of procs){await pg.selectOption('#proc',p);await pg.waitForTimeout(80);const n=await pg.evaluate(()=>secs().reduce((a,s)=>a+s[1].length,0));expect(n>3,`empty list for ${p}`)}
    await noErrors(pg)});
  await test('implant surgery uses the surgical kit',async()=>{const pg=await page('/set-app/#implant-placement');await pg.selectOption('#sys','Straumann');await pg.waitForTimeout(200);
    const all=JSON.stringify(await pg.evaluate(()=>secs()));expect(all.includes('Straumann surgical kit'),'surgical kit missing');await noErrors(pg)});
  await test('QR library is bundled and works',async()=>{const pg=await page('/set-app/');expect(await pg.evaluate(()=>{const q=qrcode(0,'M');q.addData('test');q.make();return q.getModuleCount()>0}),'QR failed');await noErrors(pg)});
  await test('nurse list page opens',async()=>{const pg=await page('/set-app/list.html');await noErrors(pg)});
}});
