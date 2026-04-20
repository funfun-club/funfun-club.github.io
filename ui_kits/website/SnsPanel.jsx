const SOCIALS = [
  { name: 'YouTube', handle: '@面白い活動', color: '#FF2D2D', url: 'https://youtube.com/@omoshiroi', icon:'youtube' },
  { name: 'X', handle: '@placeholder', color: '#0E0B1F', url: '#', icon:'x' },
  { name: 'Instagram', handle: '@placeholder', color: '#FF2E88', url: '#', icon:'instagram' },
  { name: 'TikTok', handle: '@placeholder', color: '#22E8FF', url: '#', icon:'tiktok' }
];

function SnsPanel() {
  return (
    <section id="sns" style={{background:'var(--ink)',color:'var(--paper)',padding:'100px 0',position:'relative',overflow:'hidden',borderBottom:'3px solid var(--ink)'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(circle at 1px 1px, rgba(155,76,255,0.15) 1px, transparent 0)',backgroundSize:'6px 6px'}}/>
      <div style={{maxWidth:1280,margin:'0 auto',padding:'0 40px',position:'relative'}}>
        <div style={{fontFamily:'var(--font-pixel)',fontSize:12,letterSpacing:'0.3em',color:'var(--cyan)',marginBottom:16}}>〜 FOLLOW US 〜</div>
        <h2 style={{fontFamily:'var(--font-display)',fontSize:72,margin:'0 0 48px',color:'#fff',textShadow:'4px 4px 0 var(--magenta)',lineHeight:1}}>
          追っかけて<br/>
          <span style={{color:'var(--yellow)',textShadow:'4px 4px 0 var(--violet)'}}>ください！！</span>
        </h2>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))',gap:20}}>
          {SOCIALS.map(s => (
            <a key={s.name} href={s.url} target="_blank" style={{textDecoration:'none',color:'inherit'}}>
              <div style={{background:'var(--ink-soft)',border:'2px solid var(--violet)',borderRadius:14,padding:'28px 24px',boxShadow:'6px 6px 0 var(--magenta)',display:'flex',alignItems:'center',gap:16,transition:'all 160ms cubic-bezier(.2,.9,.3,1.2)'}}
                onMouseEnter={e=>{e.currentTarget.style.transform='translate(-3px,-3px)';e.currentTarget.style.boxShadow='9px 9px 0 var(--magenta)'}}
                onMouseLeave={e=>{e.currentTarget.style.transform='translate(0,0)';e.currentTarget.style.boxShadow='6px 6px 0 var(--magenta)'}}>
                <div style={{width:56,height:56,borderRadius:12,background:s.color,border:'2px solid var(--paper)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                  <img src={`../../assets/icons/social/${s.icon}.svg`} style={{width:32,height:32,filter:s.color==='#0E0B1F'?'invert(1)':'brightness(0) invert(1)'}}/>
                </div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontFamily:'var(--font-display)',fontSize:22,lineHeight:1}}>{s.name}</div>
                  <div style={{fontFamily:'var(--font-pixel)',fontSize:11,letterSpacing:'0.12em',color:'var(--fg2-dark)',marginTop:4,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{s.handle}</div>
                </div>
                <div style={{fontFamily:'var(--font-display)',fontSize:20,color:'var(--cyan)'}}>→</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.SnsPanel = SnsPanel;
