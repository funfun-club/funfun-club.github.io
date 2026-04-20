const EPISODES = [
  { ep: '004', title: '沖縄・那覇の裏通り', dur: '18:22', date: '2026.04.12', grad: 'linear-gradient(135deg,#FF6A1F,#FF2E88)' },
  { ep: '003', title: '深夜のドンキ、何でもある説', dur: '09:45', date: '2026.04.05', grad: 'linear-gradient(135deg,#9B4CFF,#22E8FF)' },
  { ep: '002', title: '東北ローカル線で北上', dur: '24:08', date: '2026.03.29', grad: 'linear-gradient(135deg,#22E8FF,#B6FF3C)' },
  { ep: '001', title: 'とりあえず、北海道', dur: '12:34', date: '2026.03.22', grad: 'linear-gradient(135deg,#FFD63A,#FF2E88)' }
];

function VideoCard({ ep, title, dur, date, grad, feature }) {
  return (
    <a href="#" style={{textDecoration:'none',color:'inherit',display:'block'}}>
      <article style={{background:'var(--paper)',border:'2px solid var(--ink)',borderRadius:14,boxShadow:feature?'8px 8px 0 var(--magenta)':'6px 6px 0 var(--ink)',overflow:'hidden',transition:'transform 160ms cubic-bezier(.2,.9,.3,1.2)'}}
        onMouseEnter={e=>e.currentTarget.style.transform='translate(-3px,-3px)'}
        onMouseLeave={e=>e.currentTarget.style.transform='translate(0,0)'}>
        <div style={{aspectRatio:'16/9',background:grad,position:'relative',borderBottom:'2px solid var(--ink)'}}>
          <div style={{position:'absolute',top:10,left:10,fontFamily:'var(--font-pixel)',fontSize:10,letterSpacing:'0.2em',background:'var(--ink)',color:'#fff',padding:'3px 8px',borderRadius:2}}>EP.{ep}</div>
          <div style={{position:'absolute',top:10,right:10,fontFamily:'var(--font-pixel)',fontSize:11,background:'var(--ink)',color:'#fff',padding:'3px 8px',borderRadius:2}}>{dur}</div>
          <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div style={{width:72,height:72,borderRadius:'50%',background:'var(--ink)',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:30,border:'3px solid #fff',boxShadow:'4px 4px 0 rgba(0,0,0,0.3)'}}>▶</div>
          </div>
        </div>
        <div style={{padding:'14px 16px'}}>
          <div style={{fontFamily:'var(--font-pixel)',fontSize:10,letterSpacing:'0.2em',color:'var(--fg3)',marginBottom:6}}>{date}</div>
          <h3 style={{fontFamily:'var(--font-display)',fontSize:22,margin:0,lineHeight:1.15}}>{title}</h3>
        </div>
      </article>
    </a>
  );
}

function VideoGrid() {
  return (
    <section id="videos" style={{background:'var(--paper)',padding:'80px 0',borderBottom:'3px solid var(--ink)'}}>
      <div style={{maxWidth:1280,margin:'0 auto',padding:'0 40px'}}>
        <div style={{display:'flex',alignItems:'end',gap:20,marginBottom:40}}>
          <img src="../../assets/marks/telop-ribbon.svg" style={{height:64,transform:'rotate(-3deg)'}}/>
          <div style={{flex:1}}/>
          <a href="https://youtube.com" style={{fontFamily:'var(--font-display)',fontSize:14,color:'var(--ink)',textDecoration:'none',borderBottom:'2px solid var(--ink)'}}>ALL VIDEOS →</a>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',gap:24}}>
          {EPISODES.map((e, i) => <VideoCard key={e.ep} {...e} feature={i===0}/>)}
        </div>
      </div>
    </section>
  );
}

window.VideoGrid = VideoGrid;
