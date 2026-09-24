const routes=[
{name:"Beşirli Tıp",id:"7",a:"BEŞİRLİ",b:"TIP FAKÜLTESİ",weekdayA:["06:50","07:20","08:10","08:50","09:10","10:00","11:00","11:20","12:20","13:20","15:05","15:35","16:10","17:45"],weekdayB:["07:40","08:10","09:00","10:00","10:30","11:30","12:10","12:30","13:20","14:20","16:00","16:30","17:10","18:45"]},
{name:"Beşirli Tanjant Kaşüstü",id:"13",a:"BEŞİRLİ",b:"KAŞÜSTÜ",weekdayA:["06:00","06:30","07:00","07:10","07:20","07:30","07:45","08:00","08:30","08:45","09:00","09:30","09:45","10:00","10:15","10:45","11:00","11:15","11:30","11:45","12:15","12:30","12:45","13:00","13:30","13:45","14:00","14:15","14:45","15:00","15:15","15:30","16:00","16:15","16:30","16:45","17:15","17:30","17:45","18:00","18:15","18:30","18:45","20:00","22:00"],weekdayB:["06:40","06:55","07:10","07:40","08:20","08:30","08:40","08:50","09:05","09:20","09:50","10:05","10:20","10:50","11:05","11:20","11:35","12:05","12:20","12:35","12:50","13:05","13:35","13:50","14:05","14:20","14:50","15:05","15:20","15:35","16:05","16:20","16:35","16:50","17:20","17:35","17:50","18:05","18:35","18:50","19:05","19:20","19:35","19:50","20:05","21:00","23:45"]},
{name:"Karşıyaka-Uğurlu-Sahil Peron",id:"1",a:"SAHİL PERON",b:"KARŞIYAKA",weekdayA:["06:40","08:40","10:15","13:20","16:00","17:30","19:40"],weekdayB:["06:20","07:10","09:10","11:00","14:00","16:50","18:15","20:10"]},
{name:"Of Trabzon-Sahil Peron",id:"86",a:"SAHİL PERON",b:"OF MERKEZ",weekdayA:["06:10","07:00","08:30","09:40","10:50","12:10","13:20","14:20","15:30","16:40","17:45","18:10","18:50","19:30","21:00","22:00"],weekdayB:["06:00","06:30","07:00","08:20","09:30","10:40","11:50","13:00","14:15","15:30","16:30","17:40","18:50","20:15","21:00","23:40"]},
{name:"Sürmene Meydan-Sahil Peron",id:"89",a:"SAHİL PERON",b:"SÜRMENE",weekdayA:["06:30","07:05","08:10","09:10","10:20","11:15","12:05","13:10","14:00","15:20","16:20","17:10","19:20","20:00"],weekdayB:["05:35","07:00","07:55","09:00","10:00","11:00","12:10","13:00","14:00","15:00","15:55","17:10","18:10","19:00"]},
{name:"Konaklar-Meydan-Sahil Peron",id:"34",a:"SAHİL PERON",b:"KONAKLAR",weekdayA:["06:50","08:00","11:00","15:00","18:15"],weekdayB:["07:20","08:40","11:45","15:40","19:00"]}
];
const pharmacies=[
["SAĞLIK ECZANESİ","AKÇAABAT","Dürbinar Mah. Çınarlı Sok. Akkaya Kurbet Apt. No:3/B","04622284601"],
["TUĞBA ECZANESİ","AKÇAABAT","Yıldızlı Mah. Eski Samsun Yolu Cad. Arif Şen Apt. No:8/B","04622482025"],
["DOĞA ECZANESİ","ARAKLI","Merkez Mah. Yılmaz Çebi Cad. No:72","04627214442"],
["MERVE ECZANESİ","ARSİN","Yeşilyalı Mah. Vatan Cad. No:4A","04625023416"],
["HAYIRLIOĞLU ECZANESİ","ORTAHİSAR","Sanayi Mah. Niyazi Sürmen Bulvarı Bükrüoğlu İşhanı No:40/B","04623251091"],
["FATİH ECZANESİ","ORTAHİSAR","İnönü Mah. İnönü Cad. No:104A","04622231657"],
["SİTELER ECZANESİ","ORTAHİSAR","Çukurçayır Mah. İpekyolu Cad. Paşapark Sitesi No:14/7","04623514634"],
["VANDAN ECZANESİ","ORTAHİSAR","Maraş Cad. Ortahisar Mah. No:145","04623266668"],
["ÖZYİĞİT ECZANESİ","SÜRMENE","Çarşı Mh. Vural Cad. No:50A","04627462261"],
["GÜNAYDIN ECZANESİ","OF","Sulaklı Mah. Yalı Cad. Mehmet Emin İş Hanı No:30/A","04627714281"],
["BAYRAK ECZANESİ","YOMRA","Kaşüstü Mah. Okullar Cad. No:64/G Blok D:2","04623415341"],
["LOKMAN ECZANESİ","YOMRA","Sancak Mah. Trabzon Cad. No:176/A","04623413855"]
];
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const tick=()=>$('#clock').textContent=new Date().toLocaleTimeString('tr-TR',{hour:'2-digit',minute:'2-digit'});tick();setInterval(tick,30000);
function showPage(id){$$('.page').forEach(x=>x.classList.remove('active'));$('#'+id).classList.add('active');$$('nav [data-page]').forEach(x=>x.classList.toggle('active',x.dataset.page===id));scrollTo(0,0)}
$$('[data-page]').forEach(x=>x.onclick=()=>showPage(x.dataset.page));$$('[data-open]').forEach(x=>x.onclick=()=>location.href=x.dataset.open);
function renderRoutes(q=""){const list=routes.filter(r=>r.name.toLocaleLowerCase('tr').includes(q.toLocaleLowerCase('tr')));$('#routes').innerHTML=list.map((r,i)=>`<button class="route" data-route="${routes.indexOf(r)}"><span>🚌</span><div><b>${r.name}</b><small>${r.a} ⇄ ${r.b}</small></div><strong>›</strong></button>`).join('');$$('[data-route]').forEach(x=>x.onclick=()=>schedule(+x.dataset.route))}
function schedule(i){const r=routes[i];$('#routes').classList.add('hidden');$('#routeSearch').classList.add('hidden');$('#schedule').classList.remove('hidden');$('#schedule').innerHTML=`<button class="mini" id="allRoutes">‹ Tüm hatlar</button><h2>${r.name}</h2><div class="stamp">Hafta içi seferleri • Resmî AKUS kaynağı</div><div class="times"><div><b>${r.a} kalkış</b>${r.weekdayA.map(t=>`<span>${t}</span>`).join('')}</div><div><b>${r.b} kalkış</b>${r.weekdayB.map(t=>`<span>${t}</span>`).join('')}</div></div><a class="official" href="https://ulasim.trabzon.bel.tr/Web/HatSaat?hatIdler=${r.id}&yon=1">Resmî kaynağı aç ↗</a>`;$('#allRoutes').onclick=()=>{$('#schedule').classList.add('hidden');$('#routes').classList.remove('hidden');$('#routeSearch').classList.remove('hidden')}}
$('#routeSearch').oninput=e=>renderRoutes(e.target.value);renderRoutes();
function renderPharm(q=""){q=q.toLocaleLowerCase('tr');$('#pharmacies').innerHTML=pharmacies.filter(p=>(p[0]+" "+p[1]).toLocaleLowerCase('tr').includes(q)).map(p=>`<div class="pharm"><span>💊</span><div><b>${p[0]}</b><em>${p[1]}</em><small>${p[2]}</small><a href="tel:${p[3]}">☎ ${p[3]}</a></div></div>`).join('')}
$('#pharmacySearch').oninput=e=>renderPharm(e.target.value);renderPharm();
if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js');