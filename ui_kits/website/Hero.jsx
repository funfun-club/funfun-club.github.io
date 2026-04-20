function Hero({ variant = 'gradient' }) {
  const bgs = {
    gradient: { background: 'var(--grad-hero)' },
    vhs: { background: 'var(--grad-vhs)' },
    paper: { background: 'var(--paper)' }
  };
  const txtColor = variant === 'paper' ? 'var(--ink)' : '#fff';
  const subColor = variant === 'paper' ? 'var(--fg2)' : 'var(--cyan)';

  return (
    <section style={{...bgs[variant], borderBottom:'3px solid var(--ink)', position:'relative', overflow:'hidden'}}>
      {/* grain overlay */}
      <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',backgroundSize:'4px 4px',pointerEvents:'none'}}/>
      {/* burst decoration */}
      <img src="../../assets/marks/burst.svg" style={{position:'absolute',top:40,right:80,width:100,transform:'rotate(15deg)'}}/>
      <img src="../../assets/marks/burst.svg" style={{position:'absolute',bottom:50,left:60,width:60,transform:'rotate(-20deg)',opacity:0.8}}/>

      <div style={{maxWidth:1280,margin:'0 auto',padding:'100px 40px 120px',position:'relative'}}>
        <div style={{fontFamily:'var(--font-pixel)',fontSize:12,letterSpacing:'0.3em',color:subColor,marginBottom:20}}>
          〜 ADVENTURE VARIETY UNIT 〜
        </div>
        {variant === 'paper' ? (
          <h1 style={{fontFamily:'var(--font-brush)',fontSize:120,margin:0,color:'var(--ink)',lineHeight:0.95}}>面白い活動</h1>
        ) : (
          <h1 style={{fontFamily:'var(--font-display)',fontSize:132,margin:0,lineHeight:0.95,color:'#fff',textShadow:'var(--text-stroke-ink), 8px 8px 0 var(--ink)'}}>面白い活動</h1>
        )}
        <p style={{fontFamily:'var(--font-sans)',fontSize:22,color:txtColor,marginTop:28,maxWidth:640,lineHeight:1.6,fontWeight:500}}>
          二人で、適当に、でも全力で。<br/>
          日常と旅の途中をYouTubeに上げてます。
        </p>
        <div style={{display:'flex',gap:16,marginTop:44,alignItems:'center'}}>
          <a href="#videos" style={{fontFamily:'var(--font-display)',fontSize:18,background:'var(--yellow)',color:'var(--ink)',padding:'16px 28px',border:'3px solid var(--ink)',borderRadius:10,boxShadow:'6px 6px 0 var(--ink)',textDecoration:'none',transform:'skew(-6deg)',display:'inline-block'}}>
            <span style={{display:'inline-block',transform:'skew(6deg)'}}>WATCH NOW ▶</span>
          </a>
          <div style={{fontFamily:'var(--font-pixel)',fontSize:11,letterSpacing:'0.2em',color:subColor}}>
            ● LIVE · 毎週金曜更新
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
