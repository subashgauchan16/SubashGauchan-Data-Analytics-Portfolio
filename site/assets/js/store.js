/* store.js - Online Store Dashboard. All charts compute from window.STORE_DATA (1,200 orders from the workbook). */
(function(){
document.documentElement.classList.add('js');
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
var G=window.SGC,el=G.el,fmt=G.fmt,compact=G.compact,D=window.STORE_DATA;
var ST={Delivered:'#9ee4c5',Shipped:'#ffe4a0',Pending:'#7fb4d9',Returned:'#e58f7e',Cancelled:'#6c8281'};
var PAL=['#e9bd59','#ffe4a0','#b07d26','#9ee4c5','#7fb4d9','#e58f7e','#9ec5e8'];
var MN=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var NARROW=function(){return innerWidth<640};
var R=D.rows.map(function(r){var ym=D.months[r[0]];return {mi:r[0],yr:+ym.slice(0,4),q:+ym.slice(0,4)+' Q'+Math.ceil(+ym.slice(5)/3),p:r[1],s:r[2],r:r[3],pm:r[4],c:r[5],u:r[6],t:r[7]}});
var state={year:'all',status:'all',pm:'val',cm:'val'};
function inYear(x){return state.year==='all'||x.yr===+state.year}
function inStatus(x){return state.status==='all'||D.status[x.s]===state.status}
function sum(a,f){return a.reduce(function(t,x){return t+f(x)},0)}
function money(v){return compact(v)}

function render(){
  var Y=R.filter(inYear),S=Y.filter(inStatus);
  $('#fNote').textContent=S.length+' of '+R.length+' orders selected';
  /* KPIs */
  var del=Y.filter(function(x){return x.s===0}),k=$('#kpis');k.innerHTML='';
  [[fmt(S.length),'Orders selected',''],[money(sum(S,function(x){return x.t})),'Order value','all statuses unless filtered'],[S.length?fmt(sum(S,function(x){return x.t})/S.length):'0','Average order','value per order'],
   [Y.length?(del.length/Y.length*100).toFixed(1)+'%':'0%','Delivered share','of orders in the period'],[money(sum(del,function(x){return x.t})),'Delivered value','money that landed']].forEach(function(a){
    var d=el('div','kpi');d.appendChild(el('b',null,a[0]));d.appendChild(el('span',null,a[1]));if(a[2])d.appendChild(el('small',null,a[2]));k.appendChild(d)});

  /* status stack (period only) */
  var cnt=D.status.map(function(_,i){return Y.filter(function(x){return x.s===i}).length});
  var host=$('#statusStack');
  G.stack(host,D.status.map(function(n,i){return {label:n,value:cnt[i],color:ST[n]}}));
  $$('.stk span',host).forEach(function(sp,i){
    sp.tabIndex=0;sp.setAttribute('role','button');sp.style.cursor='pointer';
    var on=state.status===D.status[i];sp.setAttribute('aria-pressed',String(on));sp.setAttribute('aria-label',D.status[i]+', '+cnt[i]+' orders. Filter by this status.');
    if(state.status!=='all'&&!on)sp.style.opacity=.35;
    var go=function(){state.status=on?'all':D.status[i];$('#fStatus').value=state.status;render()};
    sp.addEventListener('click',go);sp.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}});
  });
  $('#statusCap').textContent='Click a segment to filter the whole dashboard. Showing '+Y.length+' orders in the selected period.';
  G.hbars($('#statusVal'),D.status.map(function(n,i){return {label:n,value:sum(Y.filter(function(x){return x.s===i}),function(x){return x.t}),color:ST[n]}}),{fmt:money});

  /* heat matrix */
  var h=$('#heat');h.innerHTML='';h.style.gridTemplateColumns='96px repeat(5,minmax(0,1fr))';
  h.appendChild(el('div','hc hh',''));D.status.forEach(function(n){h.appendChild(el('div','hc hh',n))});
  var mx=0,mn=1e9,M=D.products.map(function(_,pi){return D.status.map(function(_,si){var c=Y.filter(function(x){return x.p===pi&&x.s===si}).length;if(c>mx)mx=c;if(c<mn)mn=c;return c})});
  D.products.forEach(function(n,pi){h.appendChild(el('div','hc hr',n));M[pi].forEach(function(c,si){var d=el('div','hc',String(c));var a=mx>mn?(c-mn)/(mx-mn):0;d.style.background='rgba(233,189,89,'+(.08+.82*a).toFixed(2)+')';d.style.color=a>.5?'#060b0e':'#f1f1e9';d.setAttribute('title',n+' · '+D.status[si]+': '+c+' orders');h.appendChild(d)})});

  /* monthly line */
  var mis=[];D.months.forEach(function(m,i){if(state.year==='all'||m.slice(0,4)===String(state.year))mis.push(i)});
  var lab=mis.map(function(i){var m=D.months[i];return MN[+m.slice(5)-1]+" '"+m.slice(2,4)});
  var sel=mis.map(function(i){return sum(S.filter(function(x){return x.mi===i}),function(x){return x.t})});
  var dl=mis.map(function(i){return sum(del.filter(function(x){return x.mi===i}),function(x){return x.t})});
  var ser=[{name:'Selected',color:'#e9bd59',vals:sel,area:true}];
  if(state.status==='all')ser.push({name:'Delivered only',color:'#f1f1e9',tc:'#f1f1e9',vals:dl,dash:'5 4',w:1.6});
  var top=Math.max.apply(null,sel.concat(state.status==='all'?dl:[0]).concat([1])),mxy=Math.ceil(top/20000)*20000;
  var ticks=[];for(var t=0;t<=mxy;t+=mxy/4)ticks.push(t);
  var nw=NARROW();G.line($('#monthChart'),{w:nw?440:900,h:nw?270:300,fs:nw?13:11,labels:lab,series:ser,min:0,max:mxy,ticks:ticks,yfmt:money,xEvery:mis.length>12?(nw?6:3):(nw?2:1),area:true,r:nw?2.2:3,tfmt:money});
  $('#monthChart').setAttribute('aria-label','Monthly order value, '+lab[0]+' to '+lab[lab.length-1]);

  /* quarters */
  var qs=[];S.forEach(function(x){if(qs.indexOf(x.q)<0)qs.push(x.q)});qs.sort();
  var qAll=[];Y.forEach(function(x){if(qAll.indexOf(x.q)<0)qAll.push(x.q)});qAll.sort();
  var qv=qAll.map(function(q){return sum(S.filter(function(x){return x.q===q}),function(x){return x.t})});
  var bi=qv.indexOf(Math.max.apply(null,qv)),qm=Math.ceil(Math.max.apply(null,qv.concat([1]))/40000)*40000,qt=[];for(var u=0;u<=qm;u+=qm/4)qt.push(u);
  G.bars($('#qChart'),{w:nw?440:560,h:nw?290:300,l:nw?56:52,fs:nw?13:11,labels:nw?qAll.map(function(q){return q.slice(5)+' '+q.slice(2,4)}):qAll,series:[{name:'Order value',color:'#e9bd59',vals:qv}],min:0,max:qm,ticks:qt,yfmt:money,tfmt:function(v){return fmt(v)},hl:bi,dimOthers:true,labelsOn:qAll.length<=6,lfs:nw?11:(qAll.length>6?9:11)});
  $('#qCap').textContent=qv.length?'Highest quarter in this selection: '+qAll[bi]+' at '+fmt(qv[bi])+'.':'No orders in this selection.';

  /* year pillars (status filter only) */
  var yrs=[2023,2024,2025],yv=yrs.map(function(y){return sum(R.filter(function(x){return x.yr===y&&inStatus(x)}),function(x){return x.t})});
  pillarSet($('#yearPillars'),yrs.map(function(y,i){return {label:y===2025?'2025 H1':String(y),value:yv[i],cls:y===2025?'c-ivory':'c-gold'}}),Math.max.apply(null,yv.concat([1])),money);

  /* products */
  var met=state.pm,pf={val:function(x){return x.t},units:function(x){return x.u},n:function(){return 1}}[met];
  var prows=D.products.map(function(n,i){return {label:n,value:sum(S.filter(function(x){return x.p===i}),pf)}}).sort(function(a,b){return b.value-a.value});
  prows.forEach(function(r,i){r.color=i===0?'#e9bd59':'#b07d26'});
  G.hbars($('#prodBars'),prows,{fmt:met==='val'?money:fmt});
  var pt=sum(prows,function(r){return r.value});
  $('#pCap').textContent=prows.length&&pt?prows[0].label+' leads with '+(prows[0].value/pt*100).toFixed(1)+'% of the selection; '+prows[prows.length-1].label+' is last with '+(prows[prows.length-1].value/pt*100).toFixed(1)+'%.':'No orders in this selection.';
  var parts=prows.map(function(r,i){return {label:r.label,value:r.value,color:PAL[D.products.indexOf(r.label)]}});
  if(pt)G.donut($('#prodDonut'),parts,{center:money(sum(S,function(x){return x.t})),sub:'ORDER VALUE',fmt:met==='val'?money:fmt});else $('#prodDonut').innerHTML='';
  var pl=$('#prodLeg');pl.innerHTML='';parts.forEach(function(p){var s=el('span');var i=el('i');i.style.background=p.color;s.appendChild(i);s.appendChild(document.createTextNode(p.label));pl.appendChild(s)});

  /* channels */
  var cm=state.cm,crows=D.refs.map(function(n,i){
    var yi=Y.filter(function(x){return x.r===i}),dd=yi.filter(function(x){return x.s===0});
    var v=cm==='val'?sum(S.filter(function(x){return x.r===i}),function(x){return x.t}):cm==='del'?sum(dd,function(x){return x.t}):(yi.length?dd.length/yi.length*100:0);
    return {label:n,value:v}}).sort(function(a,b){return b.value-a.value});
  crows.forEach(function(r,i){r.color=i===0?'#e9bd59':'#b07d26'});
  G.hbars($('#refBars'),crows,{fmt:cm==='rate'?function(v){return v.toFixed(1)+'%'}:money});
  $('#cCap').textContent=({val:'Order value in the current selection. ',del:'Value of delivered orders in the selected period. ',rate:'Delivered orders as a share of each channel’s orders in the selected period. '})[cm]+(crows.length?crows[0].label+' is first.':'');
  var cp=D.coupons.map(function(n,i){return {label:n==='None'?'No coupon':n,value:S.filter(function(x){return x.c===i}).length,color:['#6c8281','#e9bd59','#ffe4a0','#9ee4c5'][i]}});
  if(S.length)G.donut($('#coupDonut'),cp,{center:fmt(S.length),sub:'ORDERS'});else $('#coupDonut').innerHTML='';
  var cl=$('#coupLeg');cl.innerHTML='';cp.forEach(function(p){var s=el('span');var i=el('i');i.style.background=p.color;s.appendChild(i);s.appendChild(document.createTextNode(p.label+' · '+p.value));cl.appendChild(s)});
  var pr=D.pay.map(function(n,i){return {label:n,value:S.filter(function(x){return x.pm===i}).length,color:'#b07d26'}}).sort(function(a,b){return b.value-a.value});if(pr[0])pr[0].color='#e9bd59';
  G.hbars($('#payBars'),pr,{fmt:fmt});
}

/* 3D pillars (CSS) */
function pillarSet(host,items,max,f){
  host.innerHTML='';var sm=host.clientWidth<420,wrap=el('div','pilwrap');wrap.style.gap=sm?'8px':'26px';host.appendChild(wrap);var H=sm?140:190;
  items.forEach(function(it){
    var c=el('div','pcol'),sc=el('div','pscene');sc.style.height=(H+50)+'px';sc.style.width=sm?'96px':'110px';
    var p=el('div','pil '+it.cls);p.style.width='60px';p.innerHTML='<i class="f" style="width:60px;transform:translateZ(30px)"></i><i class="r" style="width:60px;transform:rotateY(90deg) translateZ(30px)"></i><i class="t" style="width:60px;height:60px;top:-30px"></i>';sc.appendChild(p);
    var l=el('div','plab'),b=el('b',null,f(it.value));l.appendChild(b);l.appendChild(document.createTextNode(it.label));c.appendChild(sc);c.appendChild(l);wrap.appendChild(c);
    p.style.height='0px';requestAnimationFrame(function(){requestAnimationFrame(function(){p.style.height=Math.max(4,it.value/max*H)+'px'})});
  });
  host.setAttribute('role','img');host.setAttribute('aria-label','Order value by year: '+items.map(function(i){return i.label+' '+f(i.value)}).join(', '));
}

/* controls */
$('#fYear').addEventListener('change',function(e){state.year=e.target.value;render()});
$('#fStatus').addEventListener('change',function(e){state.status=e.target.value;render()});
$('#fReset').addEventListener('click',function(){state.year='all';state.status='all';$('#fYear').value='all';$('#fStatus').value='all';render()});
function seg(id,key){$$('button',$(id)).forEach(function(b){b.addEventListener('click',function(){$$('button',$(id)).forEach(function(x){x.setAttribute('aria-pressed','false')});b.setAttribute('aria-pressed','true');state[key]=b.dataset.m;render()})})}
seg('#pMetric','pm');seg('#cMetric','cm');
var rt;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(render,200)});

/* limits */
[['Practice data','Statuses, products, channels and payment methods are spread almost evenly. That is typical of generated practice data, so patterns here teach technique and do not describe a real shop.'],
 ['Currency is formatting only','The workbook formats every amount as £, but it has no currency field and is a practice dataset, so values are shown as plain numbers here.'],
 ['Gross is not revenue','Order value includes cancelled, returned and pending orders. Delivered value is the safer proxy for money received.'],
 ['No costs or margin','There is no cost, discount value or margin data, so nothing here says whether the store was profitable.'],
 ['2025 is half a year','Data ends 30 June 2025. Year comparisons need like-for-like periods.'],
 ['Coupon blanks','309 orders have no coupon code. They are treated as "no coupon", which is an assumption.'],
 ['Small differences','Product and channel totals differ by small margins. Only the channel-by-status pattern stood out in a simple test, and it needs a second dataset to confirm.'],
 ['Static source','The Excel pivots are snapshots. This page recomputes from the same rows, but a real dashboard would refresh from a live source.']].forEach(function(r){
  var b=el('button','flip');b.type='button';b.setAttribute('aria-pressed','false');b.setAttribute('aria-label',r[0]+'. Show detail.');
  var f=el('div','face'),k=el('div','face back');f.appendChild(el('h3',null,r[0]));f.appendChild(el('span','hint','Tap to read'));
  k.appendChild(el('span','hint','Why it matters'));k.appendChild(el('h3',null,r[0]));k.appendChild(el('p',null,r[1]));
  b.appendChild(f);b.appendChild(k);b.addEventListener('click',function(){b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')==='true'?'false':'true')});$('#lim').appendChild(b);
});

render();

/* reveal, rail */
var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.remove('pre');io.unobserve(e.target)}})},{threshold:.1}):null;
$$('.reveal').forEach(function(n){if(io&&!reduce){var r=n.getBoundingClientRect();if(r.top>innerHeight){n.classList.add('pre');io.observe(n)}}});
var links=$$('.rail a'),secs=['top','status','time','products','channels','method','limits'].map(function(id){return document.getElementById(id)});
function onScroll(){var y=scrollY+innerHeight*.35,on=0;secs.forEach(function(s,i){if(s&&s.getBoundingClientRect().top+scrollY<=y)on=i});links.forEach(function(a,i){a.classList.toggle('on',i===on)})}
addEventListener('scroll',onScroll,{passive:true});onScroll();
var stage=$('.stage');
if(!reduce&&stage)addEventListener('pointermove',function(e){var x=(e.clientX/innerWidth-.5)*16,y=(e.clientY/innerHeight-.5)*16;stage.style.transform='rotateX('+(-y)+'deg) rotateY('+x+'deg)'},{passive:true});
})();
