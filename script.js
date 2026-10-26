/* Original tiny sprites; location illustrations are separate photo-guided assets. */
(() => {
 const context=id=>document.getElementById(id).getContext('2d');
 function portrait(mystery=false){
  const c=context('portraitCanvas'),r=(x,y,w,h,col)=>{c.fillStyle=col;c.fillRect(x,y,w,h)};c.clearRect(0,0,80,80);
  r(0,0,80,80,mystery?'#141b30':'#a5b8bd');for(let y=0;y<80;y+=4)r(0,y,80,1,mystery?'#1c233a':'#98adb5');
  if(mystery){r(29,10,23,7,'#090e1b');r(24,17,33,30,'#090e1b');r(28,44,27,10,'#090e1b');r(14,56,53,24,'#090e1b');r(20,50,41,12,'#090e1b');return}
  // A 40×40 hand-drawn portrait: softer silhouette, still a small game sprite.
  const rpx=(x,y,w,h,col)=>r(x*2,y*2,w*2,h*2,col),surprised=document.getElementById('gameScreen').classList.contains('scene-wake')||document.getElementById('gameScreen').classList.contains('scene-scream');
  const hair='#34333f',shine='#4c4553',skin='#e2bfa9',light='#eed0b7',skinShade='#c99e95',ink='#453949';
  rpx(0,0,40,40,'#a4b4ad');for(let y=0;y<40;y+=2)for(let x=(y%4?0:2);x<40;x+=4)rpx(x,y,1,1,'#b0beb5');
  [[5,17,7],[6,14,13],[7,12,17],[8,11,19],[9,10,21],[10,9,23],[11,9,23],[12,8,24]].forEach(([y,x,w])=>rpx(x,y,w,1,hair));rpx(8,13,24,16,hair);rpx(7,22,2,7,hair);rpx(31,21,2,9,hair);rpx(9,29,21,2,hair);
  // Face steps taper gently into the chin rather than a square block.
  [[13,15,11],[14,14,13],[15,13,15],[16,13,15],[17,13,15],[18,13,15],[19,13,15],[20,13,15],[21,14,13],[22,14,13],[23,15,11],[24,16,9],[25,17,7]].forEach(([y,x,w])=>rpx(x,y,w,1,skin));
  rpx(14,16,2,6,skinShade);rpx(16,16,10,6,light);rpx(17,22,8,2,skin);rpx(13,18,1,3,skin);rpx(28,18,1,3,skinShade);
  // Side part, a few strands, and one restrained highlight.
  rpx(12,11,15,3,hair);rpx(11,13,7,2,hair);rpx(12,15,3,4,hair);rpx(15,14,3,2,hair);rpx(18,13,3,2,hair);rpx(27,13,3,10,hair);rpx(28,22,3,7,hair);rpx(10,16,1,11,shine);rpx(12,10,5,1,shine);rpx(17,9,5,1,shine);rpx(29,15,1,12,shine);
  rpx(17,17,3,1,shine);rpx(23,17,3,1,shine);rpx(17,19,2,surprised?3:2,ink);rpx(23,19,2,surprised?3:2,ink);rpx(17,19,1,1,'#f4e1c8');rpx(23,19,1,1,'#f4e1c8');rpx(21,22,1,1,skinShade);rpx(15,22,2,1,'#d5a19c');rpx(25,22,2,1,'#d5a19c');
  if(surprised){rpx(20,23,3,2,'#9d727d');rpx(21,24,1,1,'#d9a3a0')}else{rpx(20,24,3,1,'#a77a80')}
  rpx(18,26,6,3,skinShade);rpx(19,26,4,2,skin);rpx(13,29,15,3,'#6c798b');rpx(10,31,21,3,'#6c798b');rpx(7,34,27,6,'#68768a');rpx(5,37,31,3,'#59687e');rpx(17,28,9,5,'#8a929e');rpx(19,29,5,7,'#d2a9ac');rpx(14,30,3,4,'#9ba4ac');rpx(25,30,3,4,'#9ba4ac');rpx(17,33,2,7,'#4e5c73');rpx(24,33,2,7,'#4e5c73');rpx(21,36,1,4,'#556478');rpx(10,35,1,5,'#8d98a3');rpx(30,35,1,5,'#4e5c73');

 }
 function door(){const c=context('doorCanvas'),r=(x,y,w,h,col)=>{c.fillStyle=col;c.fillRect(x,y,w,h)};c.clearRect(0,0,180,240);r(17,5,148,232,'#2a1935');r(23,10,136,223,'#baa0b5');r(29,15,124,214,'#7e627e');r(33,19,116,206,'#b194ac');r(36,22,110,202,'#c2a6bb');r(42,32,97,74,'#5a3f66');r(46,36,89,66,'#947695');for(let y=37;y<101;y+=4)r(47,y,86,1,'#bba3b8');r(89,35,2,68,'#725374');r(42,112,97,4,'#9c809b');r(43,123,94,67,'#b89fb1');r(44,191,93,3,'#997c95');r(129,130,5,24,'#674a70');r(119,134,18,4,'#d8b6ce');r(121,135,14,1,'#f0d3e5');r(30,220,123,4,'#6e5172');r(20,233,143,4,'#d2b4cb');c.font='8px Galmuri,monospace';c.fillStyle='#edcee3';c.textAlign='center';r(49,9,83,16,'#513258');c.fillText('강 의 실',90,20);}
 function shadow(){
 const c=context('shadowCanvas'),r=(x,y,w,h,col)=>{c.fillStyle=col;c.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h))};c.clearRect(0,0,160,200);
 const ellipse=(x,y,rx,ry,col)=>{for(let j=-ry;j<=ry;j++){const w=Math.floor(rx*Math.sqrt(1-j*j/(ry*ry)));r(x-w,y+j,w*2+1,1,col)}};
 const polygon=(pts,col)=>{for(let y=Math.min(...pts.map(p=>p[1]));y<=Math.max(...pts.map(p=>p[1]));y++){let hits=[];for(let i=0,j=pts.length-1;i<pts.length;j=i++){let a=pts[i],b=pts[j];if((a[1]<=y&&b[1]>y)||(b[1]<=y&&a[1]>y))hits.push(a[0]+(y-a[1])*(b[0]-a[0])/(b[1]-a[1]));}hits.sort((a,b)=>a-b);for(let i=0;i<hits.length;i+=2)r(Math.ceil(hits[i]),y,Math.floor(hits[i+1])-Math.ceil(hits[i])+1,1,col);}};
 const ink='#050912';ellipse(80,43,22,28,'#1c2439');ellipse(80,43,21,28,ink);ellipse(58,45,3,5,ink);ellipse(102,45,3,5,ink);r(70,65,20,16,ink);
 polygon([[51,81],[69,76],[91,76],[112,83],[126,100],[132,148],[127,166],[119,169],[116,199],[44,199],[41,170],[33,167],[27,149],[32,104]],'#1b2438');
 polygon([[52,82],[70,77],[91,77],[111,84],[124,101],[130,148],[125,165],[117,167],[114,199],[46,199],[43,169],[35,166],[29,149],[34,105]],ink);
 polygon([[70,78],[80,85],[90,78],[85,94],[75,94]],'#101727');r(45,113,1,65,'#101727');r(114,113,1,65,'#101727');
 }

 const positions={classroom:'center',map:'center',campus:'center',hellcafe:'center',hana:'center',numberone:'center',curry:'center',bedroom:'center'};
 const images={},rendered={};let latest='map';function preload(){for(const k of ['map','campus','hellcafe','hana','numberone','curry','classroom','bedroom','ruins']){if(!images[k]){const img=new Image();img.src=`./assets/journey/${k}.webp`;images[k]=img}}}
 function scene(key){latest=key;preload();const el=document.getElementById('backdrop');const apply=()=>{if(latest===key){if(!rendered[key]){const low=document.createElement('canvas');low.width=640;low.height=Math.round(images[key].naturalHeight/images[key].naturalWidth*640);const c=low.getContext('2d');c.imageSmoothingEnabled=false;c.drawImage(images[key],0,0,low.width,low.height);if(key!=='ruins'){c.fillStyle='rgba(151,118,143,.23)';c.fillRect(0,0,low.width,low.height)}rendered[key]=low.toDataURL('image/png')}el.style.backgroundImage=`url('${rendered[key]}')`}};if(images[key].complete&&images[key].naturalWidth)apply();else images[key].addEventListener('load',apply,{once:true});el.style.backgroundPosition=positions[key]||'center';el.setAttribute('aria-label',({ruins:'재개발로 철거된 가게들과 온전한 대학만 남은 회색 지도',bedroom:'악몽에서 깨어난 대학생의 방',classroom:'대학 디자인 실습실의 작업 테이블과 사무용 의자',map:'꿈속의 익숙한 길을 엮은 픽셀 지도',campus:'한국폴리텍대학 서울정수캠퍼스 입구',hellcafe:'흰 타일과 초록 벤치가 있는 헬카페',hana:'빨간 글씨의 간판과 화분이 있는 하나식당',numberone:'빨간 차양과 노란 글씨 간판이 있는 넘버원양꼬치',curry:'빨간 벽돌과 노란 입간판이 있는 어제의 카레'})[key]);}
 window.BogwangArt={scene,portrait,door,shadow,preload};portrait();door();shadow();document.fonts.ready.then(door);
})();

;
/* Deterministic, original college-dream maze. No browser dependency. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.DreamChaseCore=api})(typeof window!=='undefined'?window:globalThis,function(){
 'use strict';
 const W=29,H=19,DIRS={up:[0,-1],right:[1,0],down:[0,1],left:[-1,0]},ORDER=Object.keys(DIRS),PLAYER_MS=135;
 function createMaze(seed=1994){
  const grid=Array.from({length:H},()=>Array(W).fill(1));let n=seed>>>0;const random=()=>{n=(n*1664525+1013904223)>>>0;return n/4294967296};
  const stack=[[1,1]];grid[1][1]=0;
  while(stack.length){const [x,y]=stack.at(-1);const options=ORDER.map(k=>DIRS[k]).filter(([dx,dy])=>x+dx*2>0&&x+dx*2<W-1&&y+dy*2>0&&y+dy*2<H-1&&grid[y+dy*2][x+dx*2]===1);if(!options.length){stack.pop();continue}const [dx,dy]=options[Math.floor(random()*options.length)];grid[y+dy][x+dx]=0;grid[y+dy*2][x+dx*2]=0;stack.push([x+dx*2,y+dy*2])}
  const rooms=[{x:2,y:2,w:7,h:4,label:'디자인 스튜디오'},{x:15,y:2,w:10,h:4,label:'세미나실'},{x:3,y:12,w:8,h:5,label:'디지털 랩'},{x:17,y:12,w:9,h:5,label:'연구실'}];
  for(const r of rooms)for(let y=r.y;y<r.y+r.h;y++)for(let x=r.x;x<r.x+r.w;x++)grid[y][x]=0;
  return{grid,width:W,height:H,rooms};
 }
 const walkable=(maze,x,y)=>Number.isInteger(x)&&Number.isInteger(y)&&x>=0&&y>=0&&x<maze.width&&y<maze.height&&maze.grid[y][x]===0;
 function distances(maze,goal){const d=Array.from({length:maze.height},()=>Array(maze.width).fill(-1));if(!walkable(maze,goal.x,goal.y))return d;const q=[goal];d[goal.y][goal.x]=0;for(let i=0;i<q.length;i++){const p=q[i];for(const [dx,dy]of Object.values(DIRS)){const x=p.x+dx,y=p.y+dy;if(walkable(maze,x,y)&&d[y][x]===-1){d[y][x]=d[p.y][p.x]+1;q.push({x,y})}}}return d}
 function newRun(maze,snapshot){
  const player={x:5,y:15,dir:'down'};const d=distances(maze,player);let enemy={x:1,y:1};for(let y=1;y<maze.height-1;y++)for(let x=1;x<maze.width-1;x++)if(d[y][x]>d[enemy.y][enemy.x])enemy={x,y};
  const run={player,enemy,elapsed:0,playerClock:PLAYER_MS,enemyClock:0,caught:false,moves:0,attempts:0,item:null};
  if(snapshot&&walkable(maze,snapshot.player?.x,snapshot.player?.y)&&walkable(maze,snapshot.enemy?.x,snapshot.enemy?.y)&&Number.isFinite(snapshot.elapsed)&&snapshot.elapsed>=0&&snapshot.elapsed<3600000){run.player={x:snapshot.player.x,y:snapshot.player.y,dir:DIRS[snapshot.player.dir]?snapshot.player.dir:'down'};run.enemy={x:snapshot.enemy.x,y:snapshot.enemy.y};run.elapsed=snapshot.elapsed;run.moves=Number.isFinite(snapshot.moves)?snapshot.moves:0;run.caught=!!snapshot.caught;run.item=['coffee','powder'].includes(snapshot.item)?snapshot.item:null}
  return run;
 }
 const same=(a,b)=>a.x===b.x&&a.y===b.y;
 function enemyMove(maze,run){const d=distances(maze,run.player);let best=run.enemy,score=d[best.y][best.x];for(const [dx,dy]of Object.values(DIRS)){const x=run.enemy.x+dx,y=run.enemy.y+dy;if(walkable(maze,x,y)&&d[y][x]>=0&&d[y][x]<score){best={x,y};score=d[y][x]}}run.enemy=best;run.caught=same(run.player,run.enemy)}
 function step(maze,run,delta,direction){if(run.caught)return run;delta=Math.max(0,Math.min(1000,Number(delta)||0));run.elapsed+=delta;
  const playerMs=run.item==='coffee'?105:run.item==='powder'?80:PLAYER_MS;
  run.playerClock=Math.min(playerMs,run.playerClock+delta);
  if(DIRS[direction]&&run.playerClock>=playerMs){run.playerClock=0;run.attempts++;run.player.dir=direction;const [dx,dy]=DIRS[direction],x=run.player.x+dx,y=run.player.y+dy;if(walkable(maze,x,y)){run.player.x=x;run.player.y=y;run.moves++}run.caught=same(run.player,run.enemy)}
  const enemyMs=Math.max(45,270-run.elapsed/1000*9);run.enemyClock+=delta;while(run.enemyClock>=enemyMs&&!run.caught){run.enemyClock-=enemyMs;enemyMove(maze,run)}return run;
 }
 const snapshot=run=>({player:{...run.player},enemy:{...run.enemy},elapsed:Math.round(run.elapsed),moves:run.moves,caught:run.caught,item:run.item});
 return{createMaze,walkable,distances,newRun,step,snapshot,PLAYER_MS,DIRS};
});

;
(() => {
 'use strict';const C=window.DreamChaseCore,maze=C.createMaze(),canvas=document.getElementById('chaseCanvas'),ctx=canvas.getContext('2d');
 const T=32,OX=36,OY=40;let run=null,frame=0,last=0,running=false,paused=false,held=[],onCapture=()=>{},onTick=()=>{},lastSaved=0,pendingDirection=null,lastA11y='';
 const rect=(x,y,w,h,col)=>{ctx.fillStyle=col;ctx.fillRect(Math.round(x),Math.round(y),Math.round(w),Math.round(h))};
 function sprite(x,y,enemy){const px=OX+x*T+T/2,py=OY+y*T+T/2;const r=(a,b,w,h,col)=>rect(px+a*1.35,py+b*1.35,w*1.35,h*1.35,col);
  if(enemy){r(-7,-11,14,3,'#b37898');r(-8,-8,16,10,'#b37898');r(-6,-10,12,11,'#100c17');r(-8,1,16,14,'#140d1c');r(-10,4,3,10,'#9c6488');r(7,4,3,10,'#9c6488');r(-5,14,4,3,'#4f334f');r(2,14,4,3,'#4f334f');return}
  r(-6,-11,12,4,'#241b2c');r(-7,-7,14,9,'#241b2c');r(-4,-6,8,8,'#ddbac8');r(-6,-8,12,3,'#2b2035');r(-5,2,10,8,'#9e8b9f');r(-8,3,3,7,'#756778');r(5,3,3,7,'#756778');r(-5,10,4,7,'#392d43');r(1,10,4,7,'#392d43');r(-6,16,5,2,'#d1bdcd');r(1,16,5,2,'#d1bdcd');if(run.player.dir==='up'){r(-5,-7,10,8,'#2b2035');r(-4,3,8,4,'#b597ac')}
 }
 function draw(){if(!run)return;ctx.imageSmoothingEnabled=false;rect(0,0,1000,688,'#0a080e');
  for(let y=0;y<maze.height;y++)for(let x=0;x<maze.width;x++){const px=OX+x*T,py=OY+y*T;if(maze.grid[y][x]){rect(px,py,T,T,'#3a293e');rect(px,py,T,2,'#705471');rect(px,py,2,T,'#49324e');rect(px+3,py+4,T-5,T-7,'#2c2033')}else{rect(px,py,T,T,(x+y)%2?'#1c1522':'#211827');rect(px+3,py+18,2,1,'#38273d')}}
  ctx.font='9px Galmuri,monospace';ctx.textAlign='center';for(const r of maze.rooms){ctx.fillStyle='#715b76';ctx.fillText(r.label,OX+(r.x+r.w/2)*T,OY+(r.y+r.h/2)*T);rect(OX+r.x*T+8,OY+r.y*T+7,27,3,'#57435e')}
  sprite(run.enemy.x,run.enemy.y,true);sprite(run.player.x,run.player.y,false);
  const px=OX+run.player.x*T+16,py=OY+run.player.y*T+16,radius=run.item==='coffee'?310:run.item==='powder'?115:205,g=ctx.createRadialGradient(px,py,run.item==='coffee'?75:25,px,py,radius);g.addColorStop(0,'#03020700');g.addColorStop(.55,'#03020718');g.addColorStop(1,run.item==='powder'?'#030207da':run.item==='coffee'?'#03020735':'#03020790');ctx.fillStyle=g;ctx.fillRect(0,0,1000,688);
  const label=`대학 건물 미로. 내 위치 ${run.player.x}, ${run.player.y}. 방향키 또는 WASD로 이동.`;if(label!==lastA11y){canvas.setAttribute('aria-label',label);lastA11y=label}

  const distance=Math.abs(run.enemy.x-run.player.x)+Math.abs(run.enemy.y-run.player.y);if(distance<7){ctx.strokeStyle=`rgba(154,79,117,${.16+Math.sin(run.elapsed/400)*.06})`;ctx.lineWidth=12;ctx.strokeRect(6,6,988,676)}
 }
 function loop(now){frame=0;if(!running)return;const dt=Math.min(250,Math.max(0,now-last));last=now;if(!paused&&!document.hidden){const before=run.attempts;C.step(maze,run,dt,held.at(-1)||pendingDirection);if(run.attempts!==before)pendingDirection=null;draw();if(run.elapsed-lastSaved>500){lastSaved=run.elapsed;onTick(C.snapshot(run))}if(run.caught){running=false;held=[];onTick(C.snapshot(run));onCapture();return}}frame=requestAnimationFrame(loop)}
 function mount(options={}){stop();run=C.newRun(maze,options.snapshot);onCapture=options.onCapture||(()=>{});onTick=options.onTick||(()=>{});lastSaved=run.elapsed;draw();return C.snapshot(run)}
 function start(){if(!run||running)return;if(run.caught){onCapture();return}running=true;last=performance.now();frame=requestAnimationFrame(loop)}
 function stop(){running=false;cancelAnimationFrame(frame);frame=0;held=[];pendingDirection=null}
 function press(dir){if(C.DIRS[dir]){if(!held.includes(dir))pendingDirection=dir;held=held.filter(k=>k!==dir);held.push(dir)}}function release(dir){held=held.filter(k=>k!==dir)}
 window.DreamChase={mount,start,stop,press,release,useItem(item){if(run&&['coffee','powder'].includes(item)){run.item=item;draw();return C.snapshot(run)}},pause(value){paused=!!value;held=[];pendingDirection=null},snapshot(){return run?C.snapshot(run):null},redraw:draw};
})();

;
(() => {
 'use strict';
 const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],SAVE='first-bell-dream-save-v4',ALBUM='first-bell-bogwang-album-v2';
 const read=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},write=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));return true}catch{return false}};
 const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const places={
  hellcafe:{title:'헬카페',index:'01',detail:'흰 타일 · 남색 문 · 초록 벤치',lines:['흰 타일 사이로 짙은 남색 문이 보인다.\n헬카페. 익숙한 동네를 떠올리면 함께 떠오르는 이름.','낮은 나무 의자와 길쭉한 초록 벤치까지.\n작은 것들이 모여, 내가 알던 가게의 얼굴이 된다.','오늘은 커피 대신 이 풍경을 챙겨 가야겠다.\n학교 가던 길의 한 조각, 기억에 담아두기.']},
  curry:{title:'어제의 카레',index:'02',detail:'모퉁이 벽돌집 · 노란 입간판',lines:['빨간 벽돌 건물의 모퉁이.\n노란 입간판을 보면 이름보다 먼저 알아보게 된다.','어제의 카레.\n학교 가던 날들의 풍경 속에 이 이름도 남아 있다.','유리창과 노란 의자, 살짝 기울어진 길.\n이 모퉁이의 색을 오래 기억하고 싶다.']},
  hana:{title:'하나식당',index:'03',detail:'빨간 간판 글씨 · 창가 메뉴 · 줄지은 화분',lines:['하나식당. 커다란 빨간 글씨가 눈에 들어온다.\n길을 걷다 마주치던, 익숙한 간판이다.','유리창의 알록달록한 메뉴 글씨.\n가게 앞에는 크기도 모양도 다른 화분들이 줄지어 있다.','특별한 날의 사진만 추억이 되는 건 아니구나.\n이런 평범한 가게 앞도, 기억하고 싶은 장면이 된다.']},
  numberone:{title:'넘버원양꼬치',index:'04',detail:'빨간 차양 · 노란 간판 · 따뜻한 실내',lines:['빨간 바탕에 노란 글씨, 가운데 작은 양 얼굴.\n멀리서도 알아볼 수 있는 넘버원양꼬치 간판이다.','유리 너머로 따뜻한 색의 불빛이 보인다.\n밖에 놓인 파란 상자까지, 이 가게를 기억하는 단서.','같은 길을 걷던 시간들이 풍경에 붙어 있다.\n여기도 내 익숙한 동네 기억 속에 담아두자.']}
 };
 const intro=['오전 9시 25분.\n10시 수업까지, 등교에 걸리는 시간은 35분.','늘 지나던 길. 익숙한 간판들.\n오늘도 그 길을 따라 대학으로 간다.','이어폰을 꽂았다.\n오늘의 등굣길에는 무슨 노래를 들을까?'];
 const campus=['10시. 35분의 등굣길이 끝났다.\n한국폴리텍대학 서울정수캠퍼스에 도착했다.','익숙한 입구와 건물. 이제 강의실 문만 열면 된다.\n오늘도 평범한 하루일 거라고 생각했다.'];
 const tracks=[{artist:'티아라',title:'Bo Peep Bo Peep',mood:'통통 튀는 전자음',tempo:205,wave:'square',notes:[72,76,79,74,76,72,81,79,76,74,79,72,74,76,69,72]}, {artist:'소녀시대',title:'Chocolate Love',mood:'반짝이는 신스',tempo:180,wave:'triangle',notes:[69,76,72,79,76,81,74,79,67,74,71,78,74,79,72,76]}, {artist:'TUIDE',title:'SUN KISS',mood:'햇살처럼 가벼운 멜로디',tempo:290,wave:'triangle',notes:[67,72,76,79,76,74,72,69,65,69,72,76,74,72,69,67]}, {artist:'Supreme Team',title:'너 때문이야',feature:' (Feat. Soulman)',mood:'느긋한 아침의 비트',tempo:310,wave:'sine',notes:[64,67,71,74,71,67,64,62,60,64,67,71,67,64,62,59]}];
 let state=null,active=false,typing=null,fullText='',toastTimer,returnFocus=null,audio=null,musicTimer=null,tick=0;
 let collected=read(ALBUM,[]);if(!Array.isArray(collected))collected=[];collected=[...new Set(collected.filter(k=>places[k]))];
 let musicIndex=read('bogwang-music',0);if(!Number.isInteger(musicIndex)||!tracks[musicIndex])musicIndex=0;
 let muted=read('first-bell-sound-v1',true)!==false;const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const wake=['헉!!! 허억...','허... 꿈인가?','그래... 보광동은 재개발지역이 되었고,','나는 학교를 1년 더 다니고 있어.......'];
 let shadowTimer=null,caughtTimer=null,splashTimer=null,shadowReady=false;
 const phases=['intro','music','map','place','collect','campus','door','shadow','scream','chaseIntro','chase','caught','lastThought','wake','ruins','farewell','ending'];
 function valid(v){return v&&v.version===4&&phases.includes(v.phase)&&Number.isInteger(v.line)&&v.line>=0&&v.line<4&&Array.isArray(v.visited)&&v.visited.every(k=>places[k])&&Array.isArray(v.log)&&Number.isInteger(v.music)&&!!tracks[v.music]&&(!['place','collect'].includes(v.phase)||!!places[v.place])&&(v.phase!=='campus'||v.line<2)}
 function currentSave(){const s=read(SAVE,null);return valid(s)?s:null}
 function save(manual=false){if(!active||!state){if(manual)toast('등굣길을 시작하면 저장할 수 있어.');return}const ok=write(SAVE,state);if(manual)toast(ok?'지금의 등굣길을 저장했어.':'이 브라우저에서는 저장할 수 없어. 지금 플레이는 계속할 수 있어.')}
 function toast(s){clearTimeout(toastTimer);$('#toast').textContent=s;$('#toast').hidden=false;toastTimer=setTimeout(()=>$('#toast').hidden=true,2300)}
 function stopType(){clearInterval(typing);typing=null}
 function tone(note,duration=.15,type='triangle',vol=.04,delay=0){if(muted||!audio||audio.state!=='running')return;const o=audio.createOscillator(),g=audio.createGain(),t=audio.currentTime+delay;o.type=type;o.frequency.value=440*2**((note-69)/12);g.gain.setValueAtTime(.001,t);g.gain.linearRampToValueAtTime(vol,t+.008);g.gain.exponentialRampToValueAtTime(.001,t+duration);o.connect(g);g.connect(audio.destination);o.start(t);o.stop(t+duration+.01)}
 function chime(kind='click'){if(kind==='quest'){tone(67,.1,'triangle',.07);tone(79,.22,'sine',.06,.09)}else if(kind==='memory'){tone(72,.1);tone(76,.12,'triangle',.04,.1);tone(79,.24,'triangle',.05,.21)}else if(kind==='door'){tone(43,.25,'triangle',.04);tone(40,.2,'sine',.04,.15)}else tone(80,.04,'triangle',.025)}
 function soundUI(){$('#soundLabel').textContent=muted?'소리 끔':'소리 켬';$('#soundToggle').setAttribute('aria-pressed',String(!muted))}
 function startMusic(){
 clearInterval(musicTimer);musicTimer=null;if(muted||!audio)return;
 const phase=active?state?.phase:'title';
 if(phase==='caught'){tone(31,.65,'sine',.07);return}
 const threat=['chaseIntro','chase'].includes(phase),quiet=['wake','ruins','farewell','ending','title'].includes(phase),track=tracks[musicIndex];
 const tempo=threat?125:quiet?520:track.tempo;
 const pulse=()=>{if(document.hidden||!$('#modalBackdrop').hidden)return;
  if(threat){const notes=[45,52,46,57,45,51,46,58,43,50,44,55,43,49,44,56];tone(notes[tick%notes.length],.09,'triangle',.026);if(tick%4===0)tone(33,.3,'sine',.06);if(tick%8===0){tone(38,.06,'sine',.055);tone(38,.055,'sine',.04,.14)}if(tick%4===2)tone(96,.025,'triangle',.014)}
  else if(quiet){const notes=[57,64,60,67,55,62,59,64];tone(notes[tick%notes.length],.7,'sine',.018)}
  else{const damp=phase==='shadow'?.17:1,n=track.notes[tick%track.notes.length];tone(n,track.tempo/1000*.85,track.wave,.023*damp);if(tick%4===0)tone(n-24,.45,'sine',.045*damp);if(tick%4===2)tone(43,.045,'square',.012*damp)}tick++;
 };pulse();musicTimer=setInterval(pulse,tempo);
 }
 async function enableAudio(){try{const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;if(!audio)audio=new AC();await audio.resume();startMusic()}catch{toast('소리를 켤 수 없어. 화면으로는 계속 플레이할 수 있어.')}}
 function chooseTrack(i,fromQuest){musicIndex=i;write('bogwang-music',i);if(state)state.music=i;muted=false;write('first-bell-sound-v1',false);soundUI();tick=0;enableAudio();chime();if(fromQuest){state.phase='map';state.line=0;render()}else{save();closeModal();toast(`${tracks[i].title} · ${tracks[i].mood}`)}}
 $('#soundToggle').addEventListener('click',()=>{muted=!muted;write('first-bell-sound-v1',muted);soundUI();if(!muted)enableAudio();else{clearInterval(musicTimer);musicTimer=null}});
 function titleUI(){const v=currentSave(),resume=v&&v.phase!=='ending';$('#continueButton').disabled=!resume;$('#continueButton').textContent=resume?'이어서 꿈꾸기 · 저장된 장면으로':'이어서 꿈꾸기 · 아직 저장된 꿈이 없어요';$('#albumCount').textContent=`${collected.length}/4`}
 function updateHUD(){if(!state)return;const atCollege=['campus','door','shadow','scream','chaseIntro','chase','caught'].includes(state.phase),m=atCollege?600:565+Math.min(state.visited.length,4)*7;$('#time').textContent=['wake','ruins','farewell','ending'].includes(state.phase)?'--:--':`${String(Math.floor(m/60)).padStart(2,'0')}:${String(m%60).padStart(2,'0')}`;$('#location').textContent=['wake','ruins','farewell','ending'].includes(state.phase)?(state.phase==='wake'?'내 방':'다시 걷는 등굣길'):atCollege?(state.phase==='campus'?'서울정수캠퍼스':state.phase==='door'?'강의실 앞':'대학 건물 안'):state.place&&['place','collect'].includes(state.phase)?places[state.place].title:'익숙한 길 어딘가';$('#chapter').textContent=['wake','ruins','farewell','ending'].includes(state.phase)?'AFTER THE DREAM':atCollege?'한국폴리텍대학 / 서울정수캠퍼스':'SOMEWHERE / IN A DREAM';$('#mapCount').textContent=`${state.visited.length} / 4`;$('#toolbarStatus').textContent=['chaseIntro','chase','caught'].includes(state.phase)?'NIGHTMARE':state.phase==='ending'?'END / A DREAM':state.phase==='shadow'?'…':'A DREAM / WALKING';$('#albumCount').textContent=`${collected.length}/4`;$('#musicButton').disabled=['chaseIntro','chase','caught'].includes(state.phase);$$('[data-place]').forEach(b=>b.classList.toggle('visited',state.visited.includes(b.dataset.place)))}
 function clearLayers(){stopType();clearTimeout(shadowTimer);clearTimeout(caughtTimer);clearTimeout(splashTimer);$('#chaseSplash').hidden=true;shadowTimer=null;caughtTimer=null;DreamChase.stop();for(const id of ['titleScreen','mapScreen','scenePlaque','doorScene','shadowScene','dialogue','questLayer','endingScreen','chaseScene','caughtScreen'])$('#'+id).hidden=true;$('#gameScreen').classList.remove('scene-door','scene-shadow','scene-only','nightmare','scene-wake','scene-ended','scene-scream','scene-ruins','scene-last-thought');$('#viewSceneButton').textContent='풍경만 보기 ↗'}
 function textLines(){if(state.phase==='intro'||state.phase==='music')return intro;if(state.phase==='place'||state.phase==='collect')return places[state.place].lines;if(state.phase==='campus')return campus;if(state.phase==='door')return ['강의실 앞. 손잡이에 손을 올렸다.\n일단… 문부터 열어볼까?'];if(state.phase==='shadow')return ['응~ 예빈이 내년에도 보는거야'];if(state.phase==='scream')return ['꺄아아아아악!!!!'];if(state.phase==='lastThought')return ['아... 그래.... 이곳의 출구는 없는 거였어...'];if(state.phase==='ruins')return ['이제 볼 곳이 없네.\n어제의 카레도... 하나식당도... 헬카페도...'];if(state.phase==='farewell')return ['그래도 애정해 보광동...\n그리고 한국폴리텍1대학 서울정수캠퍼스'];if(state.phase==='wake')return wake;return []}
 function fullLine(){stopType();$('#dialogueText').textContent=fullText;$('#nextButton').innerHTML='다음 <b>▽</b>';
 if(state?.phase==='shadow'){shadowReady=false;$('#nextButton').disabled=true;$('#dialogueHint').textContent='';clearTimeout(shadowTimer);shadowTimer=setTimeout(()=>{if(state?.phase==='shadow'){shadowReady=true;$('#nextButton').disabled=false;$('#dialogueHint').textContent='Enter · 대답하기';$('#nextButton').focus({preventScroll:true})}},2200)}
 if(state?.phase==='scream'){$('#dialogueHint').textContent='Enter · 도망쳐!';$('#nextButton').textContent='도망쳐! ↵'}
 if(state?.phase==='ruins'){$('#nextButton').disabled=true;$('#dialogueHint').textContent='남아 있는 학교를 누른다.'}
 if(state?.phase==='lastThought'){clearTimeout(caughtTimer);caughtTimer=setTimeout(awaken,2800)}
 }
 function showLine(animated=true){stopType();const lines=textLines(),index=Math.min(state.line,lines.length-1);fullText=lines[index]||'';const mystery=state.phase==='shadow',name=mystery?'???':'예빈';$('#dialogue').hidden=false;$('#speaker').textContent=name;$('#portraitCaption').textContent=mystery?'UNKNOWN':'YEBIN';$('#portraitCanvas').setAttribute('aria-label',mystery?'정체를 알 수 없는 검은 형체':'사복 차림의 대학생 예빈');$('#portraitVisual').setAttribute('aria-label',['wake','ruins','farewell','ending'].includes(state.phase)?'악몽에서 깨어나 놀란 예빈':'사복 차림의 대학생 예빈');BogwangArt.portrait(mystery);$('#nextButton').disabled=['music','collect','door','shadow','ruins'].includes(state.phase);$('#dialogueHint').textContent=state.phase==='door'?'가운데 문을 눌러줘.':['music','collect'].includes(state.phase)?'가운데 창에서 선택해줘.':'클릭 / Enter · 계속';const logPhase=state.phase==='music'?'intro':state.phase==='collect'?'place':state.phase==='ending'?'wake':state.phase,key=`${logPhase}-${state.place||''}-${index}`;if(state.log.at(-1)?.key!==key&&fullText)state.log.push({key,speaker:name,text:fullText});$('#dialogueText').textContent='';if(reduced||!animated)fullLine();else{let n=0;$('#nextButton').innerHTML='읽기 <b>·</b>';typing=setInterval(()=>{n++;$('#dialogueText').textContent=fullText.slice(0,n);if(n>=fullText.length)fullLine()},state.phase==='shadow'?90:state.phase==='lastThought'?60:31)}}
 function shell(title,body){return `<section class="quest-card" role="dialog" aria-modal="true" aria-labelledby="questTitle"><div class="quest-bar"><span>✦ LITTLE QUEST</span><span>DREAM ARCHIVE</span></div><div class="quest-body"><h2 id="questTitle">${title}</h2>${body}</div></section>`}
 function trackHTML(){return `<div class="music-list">${[0,2,1,3].map((i,position)=>{const t=tracks[i];return `<button class="music-choice" data-track="${i}"><span>0${position+1}</span><span class="track-name"><b>${t.artist} - ${t.title}${t.feature?`<span class="track-feature">${t.feature}</span>`:''}</b></span><i>♪</i></button>`}).join('')}</div>`}
 function musicQuest(){$('#questLayer').hidden=false;$('#questLayer').innerHTML=shell('오늘의 등굣길에 재생할 곡은?',`<p>이어폰을 꽂고, 오늘의 아침을 골라보자.</p>${trackHTML()}`);$$('#questLayer [data-track]').forEach(b=>b.addEventListener('click',()=>chooseTrack(Number(b.dataset.track),true)));$('#questLayer button')?.focus({preventScroll:true});}
 function collectQuest(){const p=places[state.place];$('#questLayer').hidden=false;$('#questLayer').innerHTML=shell('이 풍경을 기억에 담을까?',`<div class="memory-tag">MEMORY ${p.index} · ${p.title}</div><img class="postcard" src="./assets/journey/${state.place}.webp" alt="${p.title}의 픽셀 기록"><p class="small-note">간판과 벽, 길가의 작은 물건들까지.<br>그때의 익숙한 동네를 한 장씩 담아둔다.</p><button class="quest-action" id="collectButton">${state.visited.includes(state.place)?'기억을 다시 보고, 길로 돌아가기':'기억에 붙이고, 길로 돌아가기'} →</button>`);$('#collectButton').addEventListener('click',()=>{const key=state.place;if(!state.visited.includes(key))state.visited.push(key);if(!collected.includes(key)){collected.push(key);write(ALBUM,collected)}state.phase='map';state.place=null;state.line=0;chime('memory');render();toast(`${p.title}의 풍경을 기억에 담았어.`)});$('#collectButton').focus({preventScroll:true})}
 function render(animated=true){
 clearLayers();$('#hud').hidden=false;const place=['place','collect'].includes(state.phase);BogwangArt.scene(place?state.place:state.phase==='wake'?'bedroom':['ruins','farewell','ending'].includes(state.phase)?'ruins':['shadow','scream'].includes(state.phase)?'classroom':['campus','door'].includes(state.phase)?'campus':'map');updateHUD();$$('[data-place]').forEach(b=>b.hidden=state.phase==='ruins');$('#campusPin b').textContent='서울정수캠퍼스';
 switch(state.phase){
 case'intro':showLine(animated);break;case'music':showLine(false);musicQuest();break;case'map':$('#mapScreen').hidden=false;break;
 case'place':case'collect':$('#scenePlaque').hidden=false;$('#placeIndex').textContent=`SCENE ${places[state.place].index}`;$('#placeTitle').textContent=places[state.place].title;$('#placeDetail').textContent=places[state.place].detail;showLine(state.phase==='place'&&animated);if(state.phase==='collect')collectQuest();break;
 case'campus':showLine(animated);break;case'door':$('#doorScene').hidden=false;$('#gameScreen').classList.add('scene-door');showLine(false);$('#doorButton').focus({preventScroll:true});break;
 case'shadow':case'scream':$('#shadowScene').hidden=false;$('#gameScreen').classList.add('scene-shadow');if(state.phase==='scream')$('#gameScreen').classList.add('scene-scream');showLine(state.phase==='shadow'&&animated);break;
 case'chaseIntro':case'chase':renderChase();break;case'caught':renderCaught();break;
 case'wake':$('#gameScreen').classList.add('scene-wake');showLine(animated);break;
 case'lastThought':$('#hud').hidden=true;$('#gameScreen').classList.add('scene-last-thought');showLine(animated);break;
 case'ruins':$('#mapScreen').hidden=false;$('#gameScreen').classList.add('scene-ruins');showLine(animated);break;
 case'farewell':$('#gameScreen').classList.add('scene-ruins');showLine(animated);break;
 case'ending':renderGraduation();break;
 }startMusic();save();
 }
 function start(){closeModal(true);clearLayers();active=true;state={version:4,phase:'intro',line:0,place:null,visited:[],music:musicIndex,log:[],chase:null,inventoryUsed:false,inventoryPending:false};if(!muted)enableAudio();render();$('#nextButton').focus({preventScroll:true})}
 function resume(){const v=currentSave();if(!v||v.phase==='ending')return;state=v;active=true;if(state.phase==='chase')state.phase='chaseIntro';musicIndex=v.music;if(!muted)enableAudio();render()}
 function home(){if(active){if(state?.phase==='chase')state.chase=DreamChase.snapshot();save()}active=false;clearLayers();$('#hud').hidden=true;$('#titleScreen').hidden=false;$('#musicButton').disabled=false;BogwangArt.scene('map');$('#toolbarStatus').textContent='DREAM ARCHIVE 04';titleUI();closeModal(true);$('#startButton').focus({preventScroll:true});startMusic()}
 function next(){if(!$('#modalBackdrop').hidden)return;if(!active){start();return}if(state.phase==='ending'){start();return}if(['music','collect','map','door','chaseIntro','chase','caught'].includes(state.phase))return;if(typing){if(state.phase!=='shadow')fullLine();return}if(state.phase==='ruins')return;
 if(state.phase==='shadow'){if(!shadowReady)return;state.phase='scream';state.line=0;render(false);return}
 if(state.phase==='scream'){state.phase='chase';state.line=0;state.chase=null;state.inventoryUsed=false;state.inventoryPending=false;tick=0;render();stinger();$('#chaseSplash').hidden=false;splashTimer=setTimeout(()=>$('#chaseSplash').hidden=true,1900);return}
 if(state.phase==='lastThought'){awaken();return}chime();if(state.line+1<textLines().length){state.line++;showLine();save();return}
 if(state.phase==='intro'){state.phase='music';chime('quest')}else if(state.phase==='place'){state.phase='collect';chime('quest')}else if(state.phase==='campus'){state.phase='door';state.line=0;chime('quest')}else if(state.phase==='wake'){state.phase='ruins';state.line=0}else if(state.phase==='farewell'){state.phase='ending';state.line=0}render()}

 function visit(key){if(!active||state.phase!=='map'||!places[key])return;state.place=key;state.line=0;state.phase='place';chime();render();$('#nextButton').focus({preventScroll:true})}
 function goCampus(){if(!active||!['map','ruins'].includes(state.phase))return;state.place=null;state.phase=state.phase==='ruins'?'farewell':'campus';state.line=0;chime();render();$('#nextButton').focus({preventScroll:true})}
 function openDoor(){if(state?.phase!=='door')return;state.phase='shadow';state.line=0;chime('door');render();$('#nextButton').focus({preventScroll:true})}
 function showEnding(){state.phase='ending';state.line=0;render(false)}
 function modal(title,body){if(!$('#modalBackdrop').hidden)closeModal();returnFocus=document.activeElement;$('#modalTitle').textContent=title;$('#modalBody').innerHTML=body;$('#modalBackdrop').hidden=false;DreamChase.pause(true);$('#modalClose').focus({preventScroll:true})}
 function closeModal(force=false){if(state?.inventoryPending&&force!==true){toast('지금은 소지품 하나를 골라야 해...!');return}if($('#modalBackdrop').hidden)return;hideLaptopWarning(false);$('#modalBackdrop').hidden=true;DreamChase.pause(document.hidden);returnFocus?.focus({preventScroll:true});returnFocus=null}
 function album(){modal('memory_album — 익숙한 동네 기억 보관함',`<h2>내가 기억하는 익숙한 동네.</h2><p>한 장씩 모아두는, 학교 가던 길의 풍경.</p><div class="album-grid">${Object.entries(places).map(([k,p])=>`<article class="album-item ${collected.includes(k)?'':'locked'}"><img src="./assets/journey/${k}.webp" alt="${p.title}의 픽셀 기록" loading="lazy"><div class="album-item-title"><span>${p.title}</span><small>${collected.includes(k)?'기억에 담음':'아직 만나기 전'}</small></div><button data-reference="${k}">원본 사진과 함께 보기 ↗</button></article>`).join('')}</div><p class="small" style="margin-top:16px">사진을 바탕으로 장면을 재구성한 픽셀 기록이에요.<br>지도 속 배치는 기억을 엮은 구성으로, 실제 길찾기 지도가 아니에요.</p>`);$$('[data-reference]').forEach(b=>b.addEventListener('click',()=>reference(b.dataset.reference)))}
 function reference(k){const p=places[k]||{title:'한국폴리텍대학 서울정수캠퍼스',detail:'예빈이 제공한 학교 입구 사진'};modal(`reference — ${p.title}`,`<h2>${p.title}</h2><img class="reference-photo" src="./assets/references/${k}.png" alt="예빈이 제공한 ${p.title} 참고 사진"><p>${p.detail}</p><button class="quest-action" id="backAlbum">기억 보관함으로 돌아가기</button>`);$('#backAlbum').addEventListener('click',album)}
 function musicMenu(){modal('playlist — 오늘의 등굣길',`<h2>오늘의 플레이리스트</h2>${trackHTML()}`);$$('#modal [data-track]').forEach(b=>b.addEventListener('click',()=>chooseTrack(Number(b.dataset.track),false)))}
 function guide(){modal('readme — 어느 날의 꿈',`<h2>분명 익숙한 등굣길이었다.</h2><p>오전 9시 25분 출발. 35분 뒤, 10시 대학 수업.<br>장소를 누르면 익숙한 가게들의 풍경을 둘러볼 수 있어.</p><p>대사: 클릭 / Enter / Space<br>추격전: 방향키 / WASD / 화면의 이동 버튼<br>ESC: 잠깐 멈추기</p><p>복도가 낯설어지면, 다가오는 검은 형체를 피해 달려.<br>미로에는 골인 지점이 없어. 붙잡히면 다음 장면으로 이어져.</p><p class="small">같은 브라우저에서 자동 저장 / 이어하기.<br>추격전에서 이어할 때는 준비 화면부터 다시 시작돼.<br>이 건물 구조는 꿈속의 가상 미로야.</p>`)}
 function log(){modal('history — 지나간 생각들',`<h2>익숙한 동네를 걸으며.</h2>${state?.log?.length?state.log.map(l=>`<div class="log-line"><b>${escape(l.speaker)}</b><p>${escape(l.text)}</p></div>`).join(''):'<div class="empty-note">아직 시작되지 않은 등굣길이야.</div>'}`);$('#modalBody').scrollTop=$('#modalBody').scrollHeight}
 function pause(){modal('pause — 잠깐 멈추기',`<h2>${['chase','chaseIntro'].includes(state?.phase)?'발소리가 잠시 멎었다.':'꿈은 아직 끝나지 않았다.'}</h2><p>천천히 숨을 고르고, 다시 이어가자.</p><div class="modal-buttons"><button class="quest-action" id="resumeModal">계속하기</button><button class="quest-action secondary-action" id="homeModal">타이틀로</button></div>`);$('#resumeModal').addEventListener('click',closeModal);$('#homeModal').addEventListener('click',home)}
 $('#viewSceneButton').addEventListener('click',()=>{const on=$('#gameScreen').classList.toggle('scene-only');$('#viewSceneButton').textContent=on?'대사로 돌아가기 ↙':'풍경만 보기 ↗'});$('#startButton').addEventListener('click',start);$('#continueButton').addEventListener('click',resume);$('#nextButton').addEventListener('click',next);$('#dialogue').addEventListener('click',e=>{if(!e.target.closest('button'))next()});$$('[data-place]').forEach(b=>b.addEventListener('click',()=>visit(b.dataset.place)));$('#campusPin').addEventListener('click',goCampus);$('#doorButton').addEventListener('click',openDoor);$('#helpButton').addEventListener('click',guide);$('#pauseButton').addEventListener('click',pause);$('#albumButton').addEventListener('click',album);$('#musicButton').addEventListener('click',musicMenu);$('#logButton').addEventListener('click',log);$('#saveButton').addEventListener('click',()=>save(true));$('#homeButton').addEventListener('click',()=>active?pause():home());$('#modalClose').addEventListener('click',closeModal);$('#modalBackdrop').addEventListener('click',e=>{if(e.target===$('#modalBackdrop'))closeModal()});$('#fullButton').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else if($('.game-window').requestFullscreen)await $('.game-window').requestFullscreen();else toast('이 브라우저에서는 전체 화면을 지원하지 않아.')}catch{toast('전체 화면으로 전환할 수 없어.')}});
 document.addEventListener('keydown',e=>{if(!$('#laptopWarning').hidden){if(!e.repeat&&['Enter','Escape',' '].includes(e.key)){e.preventDefault();hideLaptopWarning()}else if(e.key==='Tab')trap(e,'#laptopWarning');return}if(!$('#modalBackdrop').hidden){if(e.key==='Escape'){e.preventDefault();closeModal()}if(e.key==='Tab')trap(e,'#modal');return}const direction=keyDirection(e.key);if(active&&['chaseIntro','chase'].includes(state.phase)&&direction){e.preventDefault();if(state.phase==='chaseIntro')beginChase();DreamChase.press(direction);return}if(e.key==='Escape'){e.preventDefault();pause();return}if(e.key==='Tab'&&!$('#questLayer').hidden){trap(e,'#questLayer');return}if(!e.repeat&&(e.key==='Enter'||e.code==='Space')&&!e.target.closest('button,a,input,textarea,select')){e.preventDefault();next()}});
 function trap(e,root){const b=$$(root+' button:not(:disabled), '+root+' a[href]'),first=b[0],last=b.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus()}}
 document.addEventListener('visibilitychange',()=>{if(active){if(state?.phase==='chase')state.chase=DreamChase.snapshot();save()}DreamChase.pause(document.hidden||!$('#modalBackdrop').hidden);if(audio){if(document.hidden)audio.suspend().catch(()=>{});else if(!muted)audio.resume().catch(()=>{})}});window.addEventListener('beforeunload',()=>{if(active){if(state?.phase==='chase')state.chase=DreamChase.snapshot();save()}});
 BogwangArt.preload();BogwangArt.scene('map');soundUI();titleUI();

 function keyDirection(key){return ({ArrowUp:'up',ArrowDown:'down',ArrowLeft:'left',ArrowRight:'right',w:'up',s:'down',a:'left',d:'right',W:'up',S:'down',A:'left',D:'right'})[key]}
 function stinger(){if(muted)return;enableAudio();[43,46,49,52,55,58].forEach((n,i)=>{tone(n,.18,'sawtooth',.10,i*.075);tone(n-12,.22,'triangle',.13,i*.075)});tone(31,1.2,'sine',.18,.44);tone(66,.7,'sawtooth',.09,.5)}
 function showLaptopWarning(){const warning=$('#laptopWarning');$('#modal').inert=true;$('#modal').setAttribute('aria-hidden','true');warning.hidden=false;tone(79,.07,'square',.045);tone(55,.16,'triangle',.06,.08);tone(43,.22,'triangle',.05,.19);$('#dismissLaptopWarning').focus({preventScroll:true})}
 function hideLaptopWarning(refocus=true){$('#laptopWarning').hidden=true;$('#modal').inert=false;$('#modal').removeAttribute('aria-hidden');if(refocus&&!$('#modalBackdrop').hidden)$('#modal [data-item="coffee"]')?.focus({preventScroll:true})}
 $('#dismissLaptopWarning').addEventListener('click',()=>hideLaptopWarning());
 function inventory(){if(!active||state.phase!=='chase'||!state.inventoryPending)return;modal('inventory — 소지품',`<p class="inventory-thought">내가 이러다 잡히겠어...!<br>대체 출구는 어디야. 일단 뭐라도 써보자.</p><h2>뭐라도 써보자!</h2><div class="item-list"><button class="item-choice" data-item="coffee"><span class="item-pixel cup-icon" aria-hidden="true"></span><span><b>커피</b><small>시야 +5　속도 +5</small></span><i>사용 →</i></button><button class="item-choice" data-item="powder"><span class="item-pixel powder-icon" aria-hidden="true"></span><span><b>맥심가루</b><small>시야 −5　속도 +10</small></span><i>사용 →</i></button><button class="item-choice forbidden" data-item="laptop" aria-describedby="itemReply"><span class="item-pixel laptop-icon" aria-hidden="true"></span><span><b>노트북</b><small>속도 −10　충돌 +10</small></span><i>…</i></button></div><p id="itemReply" class="item-reply" role="status">가방 안에서 손에 잡히는 건...</p>`);$$('[data-item]').forEach(b=>b.addEventListener('click',()=>{const item=b.dataset.item;if(item==='laptop'){b.classList.add('rejected');b.disabled=true;showLaptopWarning();return}state.inventoryPending=false;state.inventoryUsed=true;state.chase=DreamChase.useItem(item);closeModal();$('#chaseWhisper').textContent=item==='coffee'?'커피 · 시야 +5 / 속도 +5':'맥심가루 · 시야 −5 / 속도 +10';save();$('#chaseCanvas').focus({preventScroll:true})}))}
 function awaken(){if(!active||state?.phase!=='lastThought')return;if(document.hidden||!$('#modalBackdrop').hidden){caughtTimer=setTimeout(awaken,200);return}state.phase='wake';state.line=0;tick=0;render();$('#nextButton').focus({preventScroll:true})}
 function renderGraduation(){$('#hud').hidden=true;$('#endingScreen').hidden=false;$('#endingScreen').innerHTML=`<section class="graduation-card"><div class="grad-sparkles" aria-hidden="true">✦　♡　✧　♡　✦</div><img src="./pixel-book.svg" class="graduation-book" alt="작은 픽셀 책"><p class="ending-kicker">HAPPY ENDING</p><h2>! Graduation !</h2><p class="graduation-message">정말로 애정했습니다 <span>♥</span></p><p class="graduation-sub">어느 날의 꿈, 그리고 나의 등굣길.</p><button class="quest-action" id="replayDream">다시, 등교하기 ↺</button></section>`;$('#replayDream').addEventListener('click',start);$('#replayDream').focus({preventScroll:true})}

 function renderChase(){
  $('#hud').hidden=true;$('#gameScreen').classList.add('nightmare');$('#chaseScene').hidden=false;
  state.chase=DreamChase.mount({snapshot:state.chase,onTick:snap=>{state.chase=snap;$('#survivalTime').textContent=(snap.elapsed/1000).toFixed(1)+'s';$('#chaseWhisper').textContent=snap.item==='coffee'?'커피 · 시야 +5 / 속도 +5':snap.item==='powder'?'맥심가루 · 시야 −5 / 속도 +10':snap.elapsed>12000?'발소리가 점점 빨라진다.':'뒤돌아보지 마.';if(snap.elapsed>=4500&&!state.inventoryUsed&&!state.inventoryPending&&!snap.caught){state.inventoryPending=true;inventory()}save()},onCapture:capture});
  $('#survivalTime').textContent=(state.chase.elapsed/1000).toFixed(1)+'s';$('#chaseWhisper').textContent=state.chase.item==='coffee'?'커피 · 시야 +5 / 속도 +5':state.chase.item==='powder'?'맥심가루 · 시야 −5 / 속도 +10':'뒤돌아보지 마.';
  if(state.phase==='chaseIntro'){$('#questLayer').hidden=false;$('#questLayer').innerHTML=shell('교수님을 피해라',`<p class="nightmare-quote">“응~ 예빈이 내년에도 보는거야”</p><p>익숙하던 복도가 이상하게 뒤틀린다.<br>방향키 / WASD로 이동해.<br>막다른 길과 가까워지는 발소리를 조심해.</p><button class="quest-action" id="beginChase">움직여!</button>`);$('#beginChase').addEventListener('click',beginChase);$('#beginChase').focus({preventScroll:true})}
  else{DreamChase.pause(document.hidden||!$('#modalBackdrop').hidden);DreamChase.start();$('#chaseCanvas').focus({preventScroll:true});if(state.inventoryPending)inventory()}
 }
 function beginChase(){if(!active||state?.phase!=='chaseIntro')return;state.phase='chase';render()}
 function capture(){if(!active||state?.phase!=='chase')return;state.chase=DreamChase.snapshot();state.phase='caught';state.line=0;render()}
 function renderCaught(){$('#hud').hidden=true;$('#gameScreen').classList.add('nightmare');$('#caughtScreen').hidden=false;const thought=()=>{if(!active||state?.phase!=='caught')return;if(document.hidden||!$('#modalBackdrop').hidden){caughtTimer=setTimeout(thought,150);return}state.phase='lastThought';state.line=0;render();$('#nextButton').focus({preventScroll:true})};caughtTimer=setTimeout(thought,2000)}

 document.addEventListener('keyup',e=>{const direction=keyDirection(e.key);if(direction)DreamChase.release(direction)});
 window.addEventListener('blur',()=>DreamChase.pause(true));window.addEventListener('focus',()=>DreamChase.pause(document.hidden||!$('#modalBackdrop').hidden));
 $$('.dpad button').forEach(button=>{const dir=button.dataset.direction;button.addEventListener('pointerdown',e=>{e.preventDefault();if(state?.phase==='chaseIntro')beginChase();if(state?.phase!=='chase')return;button.setPointerCapture(e.pointerId);DreamChase.press(dir)});for(const name of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(name,()=>DreamChase.release(dir));button.addEventListener('keydown',e=>{if(['Enter',' '].includes(e.key)){e.preventDefault();if(state?.phase==='chaseIntro')beginChase();DreamChase.press(dir)}});button.addEventListener('keyup',()=>DreamChase.release(dir))});

})();
