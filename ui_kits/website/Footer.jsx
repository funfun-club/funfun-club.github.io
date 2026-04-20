function Footer() {
  return (
    <footer style={{background:'var(--paper)',padding:'48px 0',position:'relative'}}>
      <div style={{maxWidth:1280,margin:'0 auto',padding:'0 40px',display:'flex',alignItems:'center',gap:32,flexWrap:'wrap'}}>
        <img src="../../assets/marks/stamp.svg" style={{width:80,height:80}}/>
        <div style={{flex:1,minWidth:200}}>
          <div style={{fontFamily:'var(--font-display)',fontSize:24}}>面白い活動</div>
          <div style={{fontFamily:'var(--font-pixel)',fontSize:10,letterSpacing:'0.25em',color:'var(--fg3)',marginTop:4}}>OMOSHIROI KATSUDOU · SINCE 2026</div>
        </div>
        <div style={{fontFamily:'var(--font-pixel)',fontSize:11,letterSpacing:'0.15em',color:'var(--fg2)'}}>
          © 2026 面白い活動. ALL RIGHTS... 適当.
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
