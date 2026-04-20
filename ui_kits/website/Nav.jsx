function Nav() {
  return (
    <nav style={{position:'sticky',top:0,zIndex:50,background:'var(--paper)',borderBottom:'2px solid var(--ink)',boxShadow:'0 3px 0 var(--magenta)'}}>
      <div style={{maxWidth:1280,margin:'0 auto',padding:'14px 32px',display:'flex',alignItems:'center',gap:24}}>
        <a href="#" style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none',color:'var(--ink)'}}>
          <img src="../../assets/logo-mark.svg" style={{height:38}}/>
          <div>
            <div style={{fontFamily:'var(--font-display)',fontSize:22,lineHeight:1}}>面白い活動</div>
            <div style={{fontFamily:'var(--font-pixel)',fontSize:9,letterSpacing:'0.2em',color:'var(--fg3)'}}>OMOSHIROI KATSUDOU</div>
          </div>
        </a>
        <div style={{flex:1}}/>
        <a href="#videos" style={linkStyle}>動画 / VIDEOS</a>
        <a href="#sns" style={linkStyle}>SNS</a>
        <a href="#about" style={linkStyle}>ABOUT</a>
        <a href="https://youtube.com/@omoshiroi" target="_blank" style={{...ctaStyle}}>
          <span style={{display:'inline-block',transform:'skew(6deg)'}}>SUBSCRIBE ▶</span>
        </a>
      </div>
    </nav>
  );
}

const linkStyle = {
  fontFamily:'var(--font-pixel)',fontSize:11,letterSpacing:'0.15em',
  color:'var(--ink)',textDecoration:'none',padding:'6px 4px'
};
const ctaStyle = {
  fontFamily:'var(--font-display)',fontSize:14,
  background:'var(--magenta)',color:'#fff',textShadow:'var(--text-stroke-ink)',
  padding:'10px 18px',border:'2px solid var(--ink)',borderRadius:8,
  boxShadow:'3px 3px 0 var(--ink)',textDecoration:'none',transform:'skew(-6deg)',
  display:'inline-block'
};

window.Nav = Nav;
