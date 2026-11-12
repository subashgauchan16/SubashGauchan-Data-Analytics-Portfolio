/* rq-logo.js - the Resolute Quant logo's decoration: drifting gold dust, and a slight lean towards the pointer.
   Skipped entirely when the visitor asks for reduced motion. */
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var hero=document.getElementById('rqHero'),stage=document.getElementById('rqStage');
  if(!hero||!stage)return;
  for(var i=0;i<16;i++){
    var speck=document.createElement('i');
    speck.className='rq-dust';
    speck.setAttribute('aria-hidden','true');
    speck.style.left=(Math.random()*100)+'%';
    speck.style.animationDuration=(7+Math.random()*8)+'s';
    speck.style.animationDelay=(-Math.random()*12)+'s';
    hero.appendChild(speck);
  }
  hero.addEventListener('pointermove',function(e){
    stage.style.setProperty('--rq-tilt-y',((e.clientX/innerWidth-.5)*4)+'deg');
    stage.style.setProperty('--rq-tilt-x',((.5-e.clientY/innerHeight)*4)+'deg');
  });
})();
