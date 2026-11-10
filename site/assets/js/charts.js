/* charts.js - small dependency-free SVG/HTML chart helpers in the cover palette.
   Every chart is data-driven, labelled, keyboard/hover readable and has a text alternative. */
(function(){
  var NS='http://www.w3.org/2000/svg';
  var C={gold:'#ffe4a0',yellow:'#e9bd59',brass:'#b07d26',ivory:'#f1f1e9',good:'#9ee4c5',bad:'#e58f7e',mute:'#a4b2b1',line:'rgba(178,211,202,.18)',violet:'#7fb4d9'};
  function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
  function sv(t,a,p){var e=document.createElementNS(NS,t);for(var k in a)e.setAttribute(k,a[k]);if(p)p.appendChild(e);return e}
  function fmt(n,d){return Number(n).toLocaleString('en-GB',{minimumFractionDigits:d||0,maximumFractionDigits:d||0})}
  function compact(n){var a=Math.abs(n);return a>=1e6?(n/1e6).toFixed(2)+'M':a>=1e3?(n/1e3).toFixed(a>=1e5?0:1)+'k':String(Math.round(n))}
  var tipEl=null;
  function tip(){return tipEl||(tipEl=document.getElementById('tip'))}
  function showTip(e,html){var t=tip();if(!t)return;t.innerHTML=html;t.style.opacity=1;moveTip(e)}
  function moveTip(e){var t=tip();if(!t)return;t.style.left=Math.min(e.clientX+14,innerWidth-236)+'px';t.style.top=(e.clientY+14)+'px'}
  function hideTip(){var t=tip();if(t)t.style.opacity=0}
  function hover(node,html){
    node.addEventListener('pointerenter',function(e){showTip(e,html)});
    node.addEventListener('pointermove',moveTip);
    node.addEventListener('pointerleave',hideTip);
    node.addEventListener('focus',function(){var r=node.getBoundingClientRect();showTip({clientX:r.left+r.width/2,clientY:r.top},html)});
    node.addEventListener('blur',hideTip);
  }
  /* axes helper */
  function frame(svg,o){
    var W=o.w||640,H=o.h||280,L=o.l||48,R=o.r||14,T=o.t||14,B=o.b||34;
    svg.setAttribute('viewBox','0 0 '+W+' '+H);
    svg.innerHTML='';
    var iw=W-L-R,ih=H-T-B,min=o.min,max=o.max;
    var y=function(v){return T+ih-(v-min)/(max-min)*ih};
    (o.ticks||[]).forEach(function(t){
      sv('line',{x1:L,x2:W-R,y1:y(t),y2:y(t),stroke:C.line,'stroke-width':1},svg);
      var tx=sv('text',{x:L-8,y:y(t)+4,'text-anchor':'end',fill:C.mute,'font-size':(o.fs||11),'font-family':'Roboto Mono, monospace'},svg);tx.textContent=o.yfmt?o.yfmt(t):t;
    });
    return {W:W,H:H,L:L,R:R,T:T,B:B,iw:iw,ih:ih,y:y};
  }
  /* line chart: cfg {labels, series:[{name,color,vals,dash}], min,max,ticks,yfmt,xEvery,ref:{v,label}} */
  function line(svg,cfg){
    var f=frame(svg,cfg),n=cfg.labels.length;
    var x=function(i){return f.L+(n===1?f.iw/2:i*f.iw/(n-1))};
    cfg.labels.forEach(function(l,i){if(i%(cfg.xEvery||1)===0){var t=sv('text',{x:x(i),y:f.H-f.B+20,'text-anchor':i===0?'start':i===n-1?'end':'middle',fill:C.mute,'font-size':(cfg.fs||11),'font-family':'Roboto Mono, monospace'},svg);t.textContent=l}});
    if(cfg.ref){sv('line',{x1:f.L,x2:f.W-f.R,y1:f.y(cfg.ref.v),y2:f.y(cfg.ref.v),stroke:C.bad,'stroke-dasharray':'5 4','stroke-width':1.3},svg);
      var rt=sv('text',{x:f.W-f.R,y:f.y(cfg.ref.v)-5,'text-anchor':'end',fill:C.bad,'font-size':(cfg.fs||11),'font-family':'Roboto Mono, monospace'},svg);rt.textContent=cfg.ref.label}
    cfg.series.forEach(function(s){
      if(cfg.area&&s.area){var d='M'+x(0)+','+f.y(cfg.min)+' '+s.vals.map(function(v,i){return 'L'+x(i)+','+f.y(v)}).join(' ')+' L'+x(n-1)+','+f.y(cfg.min)+'Z';sv('path',{d:d,fill:s.color,opacity:.12},svg)}
      sv('polyline',{points:s.vals.map(function(v,i){return x(i)+','+f.y(v)}).join(' '),fill:'none',stroke:s.color,'stroke-width':s.w||2.2,'stroke-linejoin':'round','stroke-linecap':'round','stroke-dasharray':s.dash||''},svg);
      if(!cfg.noDots)s.vals.forEach(function(v,i){sv('circle',{cx:x(i),cy:f.y(v),r:cfg.r||3,fill:s.color},svg)});
    });
    /* hover columns */
    var cur=sv('line',{x1:0,x2:0,y1:f.T,y2:f.H-f.B,stroke:C.ivory,'stroke-width':1,'stroke-dasharray':'3 3',opacity:0},svg);
    cfg.labels.forEach(function(l,i){
      var w=f.iw/Math.max(1,n-1),r=sv('rect',{x:x(i)-w/2,y:f.T,width:w,height:f.ih,fill:'transparent',tabindex:0,'aria-label':l+': '+cfg.series.map(function(s){return s.name+' '+(cfg.tfmt?cfg.tfmt(s.vals[i]):s.vals[i])}).join(', ')},svg);
      var html='<b>'+l+'</b><br>'+cfg.series.map(function(s){return '<span style="color:'+(s.tc||s.color)+'">●</span> '+s.name+': '+(cfg.tfmt?cfg.tfmt(s.vals[i]):s.vals[i])}).join('<br>');
      hover(r,html);
      r.addEventListener('pointerenter',function(){cur.setAttribute('x1',x(i));cur.setAttribute('x2',x(i));cur.setAttribute('opacity',.6)});
      r.addEventListener('pointerleave',function(){cur.setAttribute('opacity',0)});
      r.addEventListener('focus',function(){cur.setAttribute('x1',x(i));cur.setAttribute('x2',x(i));cur.setAttribute('opacity',.6)});
      r.addEventListener('blur',function(){cur.setAttribute('opacity',0)});
    });
    return {x:x,y:f.y,frame:f,cursor:function(i){cur.setAttribute('x1',x(i));cur.setAttribute('x2',x(i));cur.setAttribute('opacity',.7)}};
  }
  /* grouped / single vertical bars: cfg {labels, series:[{name,color,vals}], min,max,ticks,yfmt,tfmt,highlight:index} */
  function bars(svg,cfg){
    var f=frame(svg,cfg),n=cfg.labels.length,k=cfg.series.length,gw=f.iw/n,bw=Math.min(34,gw*.74/k);
    cfg.labels.forEach(function(l,i){
      var cx=f.L+gw*i+gw/2;
      var t=sv('text',{x:cx,y:f.H-f.B+20,'text-anchor':'middle',fill:cfg.hl===i?C.yellow:C.mute,'font-size':cfg.lfs||11,'font-family':'Roboto Mono, monospace'},svg);t.textContent=l;
      cfg.series.forEach(function(s,j){
        var v=s.vals[i],bx=cx-bw*k/2+j*bw,top=f.y(Math.max(v,cfg.min)),hh=Math.max(1,f.y(cfg.min)-top);
        var fill=(cfg.hl!=null&&cfg.hl!==i&&cfg.dimOthers)?'rgba(233,189,89,.35)':s.color;
        var r=sv('rect',{x:bx+1,y:top,width:bw-2,height:hh,rx:3,fill:fill,tabindex:0,'aria-label':l+', '+s.name+': '+(cfg.tfmt?cfg.tfmt(v):v)},svg);
        hover(r,'<b>'+l+'</b><br><span style="color:'+s.color+'">●</span> '+s.name+': '+(cfg.tfmt?cfg.tfmt(v):v));
        if(cfg.labelsOn){var vt=sv('text',{x:bx+bw/2,y:top-6,'text-anchor':'middle',fill:C.ivory,'font-size':(cfg.fs||11),'font-family':'Roboto Mono, monospace'},svg);vt.textContent=cfg.tfmt?cfg.tfmt(v):v}
      });
    });
    if(cfg.ref){sv('line',{x1:f.L,x2:f.W-f.R,y1:f.y(cfg.ref.v),y2:f.y(cfg.ref.v),stroke:C.bad,'stroke-dasharray':'5 4','stroke-width':1.3},svg);
      var rt=sv('text',{x:f.W-f.R,y:f.y(cfg.ref.v)-5,'text-anchor':'end',fill:C.bad,'font-size':(cfg.fs||11),'font-family':'Roboto Mono, monospace'},svg);rt.textContent=cfg.ref.label}
    return f;
  }
  /* horizontal bar list (HTML): rows [{label,value,sub,color}] */
  function hbars(host,rows,o){
    o=o||{};host.innerHTML='';var max=o.max||Math.max.apply(null,rows.map(function(r){return r.value}));
    var ul=el('div','hb');host.appendChild(ul);
    rows.forEach(function(r){
      var row=el('div','hbrow');row.tabIndex=0;
      row.appendChild(el('span','hbl',r.label));
      var tr=el('span','hbt'),b=el('i');b.style.width='0%';b.style.background=r.color||'var(--yellow)';tr.appendChild(b);row.appendChild(tr);
      row.appendChild(el('span','hbv',(o.fmt||fmt)(r.value)));
      if(r.sub)row.setAttribute('aria-label',r.label+': '+(o.fmt||fmt)(r.value)+'. '+r.sub);
      hover(row,'<b>'+r.label+'</b><br>'+(o.fmt||fmt)(r.value)+(r.sub?'<br>'+r.sub:''));
      ul.appendChild(row);
      requestAnimationFrame(function(){requestAnimationFrame(function(){b.style.width=(r.value/max*100)+'%'})});
    });
    return ul;
  }
  /* stacked single-row bar: parts [{label,value,color}] */
  function stack(host,parts,o){
    o=o||{};host.innerHTML='';var tot=parts.reduce(function(a,p){return a+p.value},0);
    var bar=el('div','stk');bar.setAttribute('role','img');bar.setAttribute('aria-label',parts.map(function(p){return p.label+' '+(o.fmt||fmt)(p.value)}).join(', '));
    parts.forEach(function(p){var s=el('span');s.style.flexBasis=(p.value/tot*100)+'%';s.style.background=p.color;s.textContent=(p.value/tot*100>=9?Math.round(p.value/tot*100)+'%':'');hover(s,'<b>'+p.label+'</b><br>'+(o.fmt||fmt)(p.value)+' ('+(p.value/tot*100).toFixed(1)+'%)');bar.appendChild(s)});
    host.appendChild(bar);
    var lg=el('div','legend2');parts.forEach(function(p){var s=el('span');var i=el('i');i.style.background=p.color;s.appendChild(i);s.appendChild(document.createTextNode(p.label+' · '+(o.fmt||fmt)(p.value)));lg.appendChild(s)});host.appendChild(lg);
  }
  /* donut: parts [{label,value,color}] */
  function donut(svg,parts,o){
    o=o||{};svg.innerHTML='';svg.setAttribute('viewBox','0 0 220 220');var tot=parts.reduce(function(a,p){return a+p.value},0),R=84,r=54,a0=-Math.PI/2;
    parts.forEach(function(p){
      var a1=a0+p.value/tot*Math.PI*2,lg=a1-a0>Math.PI?1:0;
      var d='M'+(110+R*Math.cos(a0))+','+(110+R*Math.sin(a0))+' A'+R+','+R+' 0 '+lg+' 1 '+(110+R*Math.cos(a1-.005))+','+(110+R*Math.sin(a1-.005))+' L'+(110+r*Math.cos(a1-.005))+','+(110+r*Math.sin(a1-.005))+' A'+r+','+r+' 0 '+lg+' 0 '+(110+r*Math.cos(a0))+','+(110+r*Math.sin(a0))+'Z';
      var path=sv('path',{d:d,fill:p.color,stroke:'#060b0e','stroke-width':2,tabindex:0,'aria-label':p.label+' '+(o.fmt||fmt)(p.value)+' ('+(p.value/tot*100).toFixed(1)+'%)'},svg);
      hover(path,'<b>'+p.label+'</b><br>'+(o.fmt||fmt)(p.value)+' ('+(p.value/tot*100).toFixed(1)+'%)');a0=a1;
    });
    var t=sv('text',{x:110,y:106,'text-anchor':'middle',fill:C.ivory,'font-size':22,'font-weight':700,'font-family':'Inter, sans-serif'},svg);t.textContent=o.center||'';
    var t2=sv('text',{x:110,y:126,'text-anchor':'middle',fill:C.mute,'font-size':10,'font-family':'Roboto Mono, monospace'},svg);t2.textContent=o.sub||'';
  }
  window.SGC={C:C,el:el,sv:sv,fmt:fmt,compact:compact,line:line,bars:bars,hbars:hbars,stack:stack,donut:donut,hover:hover,showTip:showTip,hideTip:hideTip};
})();
