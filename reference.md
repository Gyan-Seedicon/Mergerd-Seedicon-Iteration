<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Seedicon — Hero</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700;9..40,900&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root{
    --paper:#F7F6F1;
    --paper-2:#FFFFFF;
    --ink:#14201A;
    --ink-soft:#586055;
    --ink-faint:#8A9086;
    --forest:#1F4A34;
    --forest-deep:#14311F;
    --gold:#B8862F;
    --gold-soft:#F1E4C6;
    --sage:#E4E9DD;
    --line:#E1DECF;
    --radius:14px;
  }

  *{box-sizing:border-box;}
  html,body{margin:0;padding:0;}
  body{
    background:var(--paper);
    color:var(--ink);
    font-family:'DM Sans', sans-serif;
    -webkit-font-smoothing:antialiased;
  }
  .mono{font-family:'DM Mono', monospace;}

  a{color:inherit;text-decoration:none;}
  button{font-family:inherit;}

  :focus-visible{
    outline:2px solid var(--gold);
    outline-offset:3px;
  }

  /* ---------- NAV ---------- */
  .nav{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:22px 56px;
    border-bottom:1px solid var(--line);
    background:var(--paper);
  }
  .nav-logo{
    font-weight:900;
    font-size:20px;
    letter-spacing:0.02em;
    display:flex;
    align-items:center;
    gap:8px;
  }
  .nav-logo .dot{
    width:9px;height:9px;border-radius:50%;
    background:var(--gold);
    display:inline-block;
  }
  .nav-links{
    display:flex;
    gap:36px;
    font-size:14.5px;
    color:var(--ink-soft);
    font-weight:500;
  }
  .nav-links a:hover{color:var(--forest);}
  .nav-right{
    display:flex;
    align-items:center;
    gap:22px;
    font-size:14.5px;
    font-weight:500;
  }
  .nav-cta{
    background:var(--forest);
    color:var(--paper);
    padding:10px 20px;
    border-radius:8px;
    font-weight:700;
    transition:background .15s ease;
  }
  .nav-cta:hover{background:var(--forest-deep);}

  @media (max-width: 900px){
    .nav-links{display:none;}
    .nav{padding:18px 20px;}
  }

  /* ---------- HERO LAYOUT ---------- */
  .hero{
    display:grid;
    grid-template-columns:1.15fr 0.85fr;
    gap:40px;
    padding:64px 56px 80px;
    max-width:1400px;
    margin:0 auto;
    align-items:start;
  }
  @media (max-width: 1000px){
    .hero{grid-template-columns:1fr; padding:40px 20px 60px;}
  }

  .eyebrow{
    display:inline-flex;
    align-items:center;
    gap:8px;
    font-size:13px;
    font-weight:700;
    color:var(--forest);
    letter-spacing:0.02em;
    margin-bottom:22px;
  }
  .eyebrow::before{
    content:'';
    width:16px;height:1px;
    background:var(--gold);
  }

  /* Toggle */
  .toggle{
    display:inline-flex;
    background:var(--sage);
    border-radius:999px;
    padding:4px;
    margin-bottom:28px;
    gap:2px;
  }
  .toggle button{
    border:none;
    background:transparent;
    padding:9px 20px;
    border-radius:999px;
    font-size:14px;
    font-weight:700;
    color:var(--ink-soft);
    cursor:pointer;
    transition:all .18s ease;
  }
  .toggle button.active{
    background:var(--forest);
    color:var(--paper);
  }

  h1{
    font-size:56px;
    line-height:1.05;
    font-weight:900;
    letter-spacing:-0.015em;
    margin:0 0 22px;
    max-width:640px;
    transition:opacity .2s ease;
  }
  h1 .accent{color:var(--forest); position:relative;}
  h1 .accent::after{
    content:'';
    position:absolute;
    left:0; right:0; bottom:6px;
    height:12px;
    background:var(--gold-soft);
    z-index:-1;
  }

  .sub{
    font-size:17.5px;
    line-height:1.6;
    color:var(--ink-soft);
    max-width:520px;
    margin:0 0 34px;
    font-weight:400;
  }

  /* Search (investor mode) */
  .search{
    display:flex;
    align-items:center;
    gap:10px;
    background:var(--paper-2);
    border:1px solid var(--line);
    border-radius:12px;
    padding:6px 8px 6px 18px;
    max-width:520px;
    margin-bottom:26px;
    box-shadow:0 1px 2px rgba(20,32,26,0.03);
    display:none;
  }
  .search.show{display:flex;}
  .search input{
    border:none;
    outline:none;
    flex:1;
    font-family:inherit;
    font-size:14.5px;
    padding:10px 0;
    background:transparent;
    color:var(--ink);
  }
  .search input::placeholder{color:var(--ink-faint);}
  .search button{
    background:var(--forest);
    color:var(--paper);
    border:none;
    border-radius:8px;
    padding:11px 16px;
    font-weight:700;
    font-size:13.5px;
    cursor:pointer;
    transition:background .15s ease;
  }
  .search button:hover{background:var(--forest-deep);}

  /* CTAs */
  .cta-row{
    display:flex;
    align-items:center;
    gap:14px;
    flex-wrap:wrap;
    margin-bottom:22px;
  }
  .btn-primary, .btn-secondary{
    padding:14px 26px;
    border-radius:10px;
    font-size:15px;
    font-weight:700;
    cursor:pointer;
    border:none;
    transition:all .15s ease;
    display:inline-block;
  }
  .btn-primary{
    background:var(--forest);
    color:var(--paper);
  }
  .btn-primary:hover{background:var(--forest-deep); transform:translateY(-1px);}
  .btn-secondary{
    background:transparent;
    color:var(--ink);
    border:1px solid var(--line);
  }
  .btn-secondary:hover{border-color:var(--forest); color:var(--forest);}

  .grant-chip{
    display:inline-flex;
    align-items:center;
    gap:6px;
    background:var(--gold-soft);
    color:#7A5A1C;
    font-size:12.5px;
    font-weight:700;
    padding:8px 14px;
    border-radius:999px;
  }
  .grant-chip svg{width:12px;height:12px;flex-shrink:0;}

  /* Stats */
  .stats{
    display:flex;
    gap:36px;
    padding-top:24px;
    border-top:1px solid var(--line);
    max-width:560px;
    margin-bottom:22px;
  }
  .stat-num{
    font-size:22px;
    font-weight:500;
    color:var(--forest);
    display:block;
  }
  .stat-label{
    font-size:12.5px;
    color:var(--ink-faint);
    font-weight:500;
    margin-top:2px;
  }

  /* Ecosystem strip */
  .ecosystem{
    display:flex;
    align-items:center;
    gap:10px;
    flex-wrap:wrap;
    font-size:12.5px;
    color:var(--ink-faint);
    font-weight:500;
    letter-spacing:0.01em;
  }
  .ecosystem span.sep{color:var(--line);}
  .ecosystem span.label{
    color:var(--ink-soft);
    font-weight:700;
    margin-right:4px;
  }

  /* ---------- LEDGER / TICKER ---------- */
  .ledger{
    background:var(--paper-2);
    border:1px solid var(--line);
    border-radius:var(--radius);
    overflow:hidden;
    box-shadow:0 6px 24px rgba(20,32,26,0.05);
    position:sticky;
    top:24px;
  }
  .ledger-head{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:16px 20px;
    border-bottom:1px solid var(--line);
    background:var(--sage);
  }
  .ledger-head .title{
    font-size:12.5px;
    font-weight:700;
    color:var(--forest-deep);
    display:flex;
    align-items:center;
    gap:8px;
  }
  .live-dot{
    width:7px;height:7px;border-radius:50%;
    background:#3C8A5B;
    box-shadow:0 0 0 3px rgba(60,138,91,0.18);
    animation:pulse 1.8s infinite ease-in-out;
  }
  @keyframes pulse{
    0%,100%{opacity:1;}
    50%{opacity:.4;}
  }
  .ledger-head .count{
    font-size:11px;
    color:var(--ink-faint);
    font-family:'DM Mono', monospace;
  }

  .ledger-viewport{
    height:396px;
    overflow:hidden;
    position:relative;
    mask-image:linear-gradient(to bottom, transparent 0, black 24px, black calc(100% - 24px), transparent 100%);
    -webkit-mask-image:linear-gradient(to bottom, transparent 0, black 24px, black calc(100% - 24px), transparent 100%);
  }
  .ledger-track{
    display:flex;
    flex-direction:column;
    animation:scrollUp 22s linear infinite;
  }
  .ledger-viewport:hover .ledger-track{
    animation-play-state:paused;
  }
  @keyframes scrollUp{
    from{transform:translateY(0);}
    to{transform:translateY(-50%);}
  }
  .deal-row{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:16px 20px;
    border-bottom:1px solid var(--line);
    gap:12px;
  }
  .deal-left{display:flex; align-items:center; gap:12px;}
  .deal-mark{
    width:36px;height:36px;
    border-radius:9px;
    background:var(--sage);
    color:var(--forest-deep);
    display:flex;align-items:center;justify-content:center;
    font-weight:900;
    font-size:14px;
    flex-shrink:0;
  }
  .deal-name{font-size:14px; font-weight:700; color:var(--ink);}
  .deal-meta{font-size:12px; color:var(--ink-faint); margin-top:2px;}
  .deal-right{text-align:right; flex-shrink:0;}
  .deal-ask{font-size:13px; font-weight:500; color:var(--forest);}
  .deal-tag{
    font-size:10.5px;
    font-weight:700;
    padding:3px 8px;
    border-radius:999px;
    margin-top:4px;
    display:inline-block;
  }
  .tag-shortlist{background:var(--gold-soft); color:#7A5A1C;}
  .tag-dd{background:#DCEBE1; color:#1F4A34;}
  .tag-term{background:#E5E1F5; color:#4B3E8C;}

  .ledger-foot{
    padding:14px 20px;
    font-size:12px;
    color:var(--ink-faint);
    text-align:center;
    border-top:1px solid var(--line);
  }

  @media (prefers-reduced-motion: reduce){
    .ledger-track{animation:none;}
    .live-dot{animation:none;}
  }

  @media (max-width: 1000px){
    .ledger{position:static; margin-top:8px;}
    h1{font-size:38px;}
    .stats{gap:24px;}
  }
</style>
</head>
<body>

<nav class="nav">
  <div class="nav-logo"><span class="dot"></span>SEEDICON</div>
  <div class="nav-links">
    <a href="#">Capital</a>
    <a href="#">Trade</a>
    <a href="#">Products</a>
    <a href="#">Partner with us</a>
    <a href="#">Resources</a>
  </div>
  <div class="nav-right">
    <a href="#">Login</a>
    <a href="#" class="nav-cta">Sign Up</a>
  </div>
</nav>

<section class="hero">
  <div class="hero-left">
    <div class="eyebrow">We invest first in the Founder, later in the Startup.</div>

    <div class="toggle" role="tablist" aria-label="Choose your path">
      <button id="btn-founder" class="active" onclick="setMode('founder')" role="tab" aria-selected="true">For Founders</button>
      <button id="btn-investor" onclick="setMode('investor')" role="tab" aria-selected="false">For Investors</button>
    </div>

    <h1 id="headline">Raise capital, the <span class="accent">founder-first</span> way.</h1>
    <p class="sub" id="subtext">List your startup, build investor-ready pitch decks, and get shortlisted by the right investors — all from one place.</p>

    <div class="search" id="search-box">
      <input type="text" placeholder="Search companies, founders, or sectors…" aria-label="Search companies, founders, or sectors">
      <button>Search</button>
    </div>

    <div class="cta-row">
      <button class="btn-primary" id="cta-primary">List Your Startup</button>
      <button class="btn-secondary" id="cta-secondary">See how it works</button>
      <span class="grant-chip">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
        Govt. grants &amp; schemes included
      </span>
    </div>

    <div class="stats">
      <div>
        <span class="stat-num mono">2,000+</span>
        <span class="stat-label">Startups listed</span>
      </div>
      <div>
        <span class="stat-num mono">50+</span>
        <span class="stat-label">DD conducted via VDR</span>
      </div>
      <div>
        <span class="stat-num mono">1,000+</span>
        <span class="stat-label">Pitch &amp; business decks built</span>
      </div>
    </div>

    <div class="ecosystem">
      <span class="label">One ecosystem</span>
      <span>Capital</span><span class="sep">·</span>
      <span>Deckwale</span><span class="sep">·</span>
      <span>Watch</span><span class="sep">·</span>
      <span>Events</span><span class="sep">·</span>
      <span>Trade</span>
    </div>
  </div>

  <div class="hero-right">
    <div class="ledger">
      <div class="ledger-head">
        <span class="title"><span class="live-dot"></span>Live on Seedicon</span>
        <span class="count mono">996 raising now</span>
      </div>
      <div class="ledger-viewport">
        <div class="ledger-track" id="ledger-track">
          <!-- rows injected by JS, duplicated for seamless loop -->
        </div>
      </div>
      <div class="ledger-foot">Real founders. Real rounds. Updated as deals move.</div>
    </div>
  </div>
</section>

<script>
  const modes = {
    founder: {
      headline: 'Raise capital, the <span class="accent">founder-first</span> way.',
      sub: 'List your startup, build investor-ready pitch decks, and get shortlisted by the right investors — all from one place.',
      primary: 'List Your Startup',
      secondary: 'See how it works',
      search: false
    },
    investor: {
      headline: 'Discover <span class="accent">startups</span> worth watching.',
      sub: 'Explore vetted startups, review data rooms, and evaluate deals securely — before anyone else does.',
      primary: 'Join to Invest',
      secondary: 'Browse startups',
      search: true
    }
  };

  function setMode(mode){
    const m = modes[mode];
    document.getElementById('headline').innerHTML = m.headline;
    document.getElementById('subtext').textContent = m.sub;
    document.getElementById('cta-primary').textContent = m.primary;
    document.getElementById('cta-secondary').textContent = m.secondary;
    document.getElementById('search-box').classList.toggle('show', m.search);

    document.getElementById('btn-founder').classList.toggle('active', mode === 'founder');
    document.getElementById('btn-investor').classList.toggle('active', mode === 'investor');
    document.getElementById('btn-founder').setAttribute('aria-selected', mode === 'founder');
    document.getElementById('btn-investor').setAttribute('aria-selected', mode === 'investor');
  }

  const deals = [
    { mark:'NL', name:'Nimbus Labs', meta:'SaaS · Seed · Bengaluru', ask:'₹1.2Cr ask', tag:'Shortlisting', tagClass:'tag-shortlist' },
    { mark:'GC', name:'GreenCart', meta:'D2C · Series A · Mumbai', ask:'₹6.5Cr ask', tag:'DD Live', tagClass:'tag-dd' },
    { mark:'VW', name:'Voltway', meta:'EV Tech · Pre-seed · Pune', ask:'₹80L ask', tag:'Shortlisting', tagClass:'tag-shortlist' },
    { mark:'FS', name:'Farmstack', meta:'AgriTech · Seed · Hyderabad', ask:'₹2.1Cr ask', tag:'Term Sheet', tagClass:'tag-term' },
    { mark:'PL', name:'PayLoop', meta:'Fintech · Series A · Delhi', ask:'₹9Cr ask', tag:'DD Live', tagClass:'tag-dd' },
    { mark:'RK', name:'Rootkit', meta:'DevTools · Seed · Chennai', ask:'₹1.5Cr ask', tag:'Shortlisting', tagClass:'tag-shortlist' }
  ];

  function renderDeals(){
    const track = document.getElementById('ledger-track');
    const rowsHtml = deals.map(d => `
      <div class="deal-row">
        <div class="deal-left">
          <div class="deal-mark">${d.mark}</div>
          <div>
            <div class="deal-name">${d.name}</div>
            <div class="deal-meta">${d.meta}</div>
          </div>
        </div>
        <div class="deal-right">
          <div class="deal-ask mono">${d.ask}</div>
          <span class="deal-tag ${d.tagClass}">${d.tag}</span>
        </div>
      </div>
    `).join('');
    // duplicate list once for seamless infinite scroll
    track.innerHTML = rowsHtml + rowsHtml;
  }

  renderDeals();
</script>

</body>
</html>