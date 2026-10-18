const icons = {
  arrow: '<path d="M4 12h15m-5-5 5 5-5 5"/>',
  body: '<circle cx="12" cy="5" r="2.5"/><path d="M5 10c4 2 10 2 14 0M12 9v7m0 0-5 5m5-5 5 5"/>',
  play: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="m10 8 6 4-6 4Z"/>',
  layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 8h18M9 8v13m4-9h4m-4 4h4"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/><path d="M5 12h4l2-4 2 8 2-4h4"/>',
  bulb: '<path d="M9 18h6m-5 3h4M8 14a6 6 0 1 1 8 0c-1 1-1 2-1 2H9s0-1-1-2ZM12 1V0M3 5 1 4m20 1 2-1"/>',
  people: '<circle cx="12" cy="7" r="3"/><circle cx="4" cy="9" r="2"/><circle cx="20" cy="9" r="2"/><path d="M6 21v-3a6 6 0 0 1 12 0v3M1 20v-3a4 4 0 0 1 3-4m19 7v-3a4 4 0 0 0-3-4"/>',
  shield: '<path d="M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6Z"/><path d="m8 12 3 3 5-6"/>',
  leaf: '<path d="M20 3S3 1 3 13a7 7 0 0 0 7 7C22 20 20 3 20 3ZM3 22 15 9"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="3"/><path d="m3 6 9 7 9-7"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
};

function icon(name, className = '') {
  return `<svg class="icon ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.leaf}</svg>`;
}

const services = [
  {
    id: 'seitai', number: '01', label: 'BODY CARE', title: '整体',
    subtitle: 'からだが整うと、毎日が変わる。',
    description: '一人ひとりのからだに向き合い、健やかで心地よい毎日をサポートします。',
    icon: 'body', href: 'seitai.html', color: 'mint',
    intro: '忙しい日々のなかで、つい後回しにしてしまう自分のからだ。整体を通じて、からだをいたわる時間をもっと身近に。こあらは、一人ひとりに寄り添うことを大切にしています。',
    features: [
      ['からだに向き合う', '日々の生活で気になるからだのことを見つめ直すきっかけに。'],
      ['一人ひとりに寄り添う', '大切にしているのは、目の前の人に丁寧に向き合うこと。'],
      ['健やかな毎日へ', 'からだをケアする時間を、毎日の心地よさにつなげていきます。'],
    ],
    note: '店舗情報・施術内容・料金・ご予約方法は、公開準備中です。',
  },
  {
    id: 'rebody', number: '02', label: 'HEALTH SUBSCRIPTION', title: 'ReBody',
    subtitle: '健康を、もっと自分らしい習慣に。',
    description: '健康をテーマにした動画配信サブスク。自分のペースで、健康習慣を日常に。',
    icon: 'play', href: 'rebody.html', color: 'sage',
    intro: 'ReBody（リボディ）は、健康をテーマにした動画配信サブスクリプションサービスです。健康について学びたいときも、日々の習慣を見直したいときも。動画を通じて、自分の健康と向き合うきっかけを届けます。',
    features: [
      ['動画で、わかりやすく', '健康に関する情報に、動画という親しみやすいかたちで触れられます。'],
      ['自分のペースで', '暮らしに合わせて、健康に向き合う時間をつくれます。'],
      ['習慣づくりのきっかけに', '健康を特別なことではなく、日常の一部として考えるために。'],
    ],
    note: '配信コンテンツ・対応端末・利用料金・お申し込み方法は、公開準備中です。健康情報は医師による診断や治療に代わるものではありません。',
  },
  {
    id: 'lp-tool', number: '03', label: 'NO-CODE SOLUTION', title: 'LP開発ツール',
    subtitle: '伝えたい想いを、あなたの手で。',
    description: 'パワーポイントのような感覚で、コードを書かずにLPを作れるツールを販売。',
    icon: 'layout', href: 'lp-tool.html', color: 'lime',
    intro: '専門的なコードを書かなくても、伝えたいことを自分でかたちに。パワーポイントのような感覚でランディングページを作成できる、ノーコードのLP開発ツールを販売しています。',
    features: [
      ['ノーコードで作成', 'プログラミングの知識がなくても、LPづくりに取り組めます。'],
      ['スライドづくりのように', 'パワーポイントのような感覚で、アイデアをページにしていきます。'],
      ['ビジネスの発信を支える', 'サービスや商品の魅力を、自分の言葉とデザインで届けるために。'],
    ],
    note: '製品名・詳しい機能・動作環境・販売価格・ご購入方法は、公開準備中です。',
  },
];

const strengths = [
  { icon: 'heart', title: '人に寄り添う', lines: ['一人ひとりの想いを、', '大切に受け止めます。'], detail: 'からだのことも、ビジネスのことも、出発点は一人ひとりの想い。暮らしや挑戦のなかにある「こうなりたい」に目を向け、その人にとっての価値を考えます。' },
  { icon: 'bulb', title: '可能性をひらく', lines: ['健康とテクノロジーで、', '新しい選択肢を。'], detail: '健康に向き合う時間と、アイデアをかたちにする手段をもっと身近に。整体・ReBody・LP開発ツールを通じて、自分らしい一歩を踏み出すための選択肢を届けます。' },
  { icon: 'shield', title: '誠実に向き合う', lines: ['わかりやすく、丁寧に。', '信頼を積み重ねます。'], detail: '親しみやすさとともに大切にしたいのは、誠実であること。伝えるべきことをわかりやすく、丁寧に伝え、一つひとつの関わりから信頼を育てていきます。' },
  { icon: 'leaf', title: '未来を育む', lines: ['今だけではなく、', 'その先につながる価値を。'], detail: 'その場だけの便利さではなく、これからの毎日にどうつながるか。健やかな習慣づくりやビジネスの発信を支え、人と企業が自分らしく成長できる未来を目指します。' },
];
const information = [
  { category: '整体', title: 'からだに寄り添う、整体事業のご紹介', href: 'seitai.html' },
  { category: 'ReBody', title: '健康を日常に。動画配信サービス ReBody', href: 'rebody.html' },
  { category: 'LP開発ツール', title: '想いをかたちにする、ノーコードのLPづくり', href: 'lp-tool.html' },
];
const navigationItems = [
  { title: 'ホーム', href: 'index.html' },
  { title: '会社概要', href: 'company.html', id: 'company', children: [
    { title: '会社概要', href: 'company.html' },
    { title: '社長あいさつ', href: 'message.html' },
  ] },
  { title: '事業内容', href: 'services.html', id: 'services', children: [
    { title: '事業一覧', href: 'services.html' },
    ...services.map(service => ({ title: service.title, href: service.href })),
  ] },
  { title: 'こあらの強み', href: 'strength.html' },
  { title: 'お知らせ', href: 'news.html' },
  { title: 'お問い合わせ', href: 'contact.html' },
];

const pageName = location.pathname.split('/').pop() || 'index.html';
const currentService = services.find(service => service.href === pageName);
const arrow = icon('arrow');
const button = (href, text, outline = false) => `<a class="button${outline ? ' button-outline' : ''}" href="${href}">${text}${arrow}</a>`;
const heading = (en, ja, text = '') => `<div class="section-heading"><span class="eyebrow">${en}</span><h2>${ja}</h2>${text ? `<p>${text}</p>` : ''}</div>`;

function header() {
  const active = name => pageName === name ? ' aria-current="page"' : '';
  const items = navigationItems.map(item => {
    const inSection = item.children?.some(child => child.href === pageName);
    const link = `<a href="${item.href}"${active(item.href)}>${item.title}</a>`;
    if (item.children) {
      return `<li class="nav-group${inSection ? ' is-current-section' : ''}"><div class="nav-group-heading">${link}<button class="submenu-toggle" type="button" aria-label="${item.title}の下位ページ" aria-expanded="false" aria-controls="submenu-${item.id}"><span></span></button></div><ul id="submenu-${item.id}" class="nav-submenu" hidden>${item.children.map(child => `<li><a href="${child.href}"${active(child.href)}>${child.title}${arrow}</a></li>`).join('')}</ul></li>`;
    }
    return `<li>${item.href === 'contact.html' ? `<a class="nav-contact" href="${item.href}"${active(item.href)}>${item.title}${arrow}</a>` : link}</li>`;
  }).join('');
  return `<a class="skip-link" href="#main">本文へスキップ</a>
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="index.html" aria-label="株式会社こあら ホーム"><img src="images/logo.png" alt="株式会社こあら" width="542" height="246"></a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="メニューを開く"><span></span><span></span><span></span></button>
        <nav id="main-nav" class="main-nav" aria-label="メインナビゲーション">
          <ul class="nav-list">${items}</ul>
        </nav>
      </div>
    </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="container footer-top">
      <a class="footer-brand" href="index.html"><img src="images/logo.png" alt="株式会社こあら" width="542" height="246"></a>
      <div class="footer-message">人と企業の、健やかな未来へ。</div>
      <a class="back-top" href="#top" aria-label="ページ上部へ">↑</a>
    </div>
    <div class="container footer-bottom"><nav aria-label="フッターナビゲーション">
      ${navigationItems.map(item => `<a href="${item.href}">${item.title}</a>${item.children ? item.children.filter(child => child.href !== item.href).map(child => `<a href="${child.href}">${child.title}</a>`).join('') : ''}`).join('')}<a href="privacy.html">個人情報の取り扱い</a>
    </nav><small>© ${new Date().getFullYear()} 株式会社こあら</small></div>
  </footer>`;
}

function contactBanner() {
  return `<section class="contact-banner"><div class="container contact-banner-inner">
    <div class="contact-banner-icon">${icon('leaf')}</div>
    <div><span class="eyebrow">Let's grow together</span><h2>あなたの「これから」を、<br class="mobile-only">こあらと一緒に。</h2><p>事業やサービスについて、お気軽にご相談ください。</p></div>
    ${button('contact.html', 'お問い合わせ')}
  </div></section>`;
}

function serviceCard(service) {
  return `<a class="service-card ${service.color}" href="${service.href}">
    <div class="service-card-top"><span class="service-number">${service.number}</span><span class="icon-circle">${icon(service.icon)}</span><span class="card-corner">${arrow}</span></div>
    <span class="service-label">${service.label}</span><h3>${service.title}</h3>
    <p>${service.description}</p><span class="text-link">詳しく見る${arrow}</span>
  </a>`;
}

function newsList() {
  return `<div class="news-list">${information.map(item => `<a href="${item.href}"><span class="news-tag">${item.category}</span><span>${item.title}</span>${arrow}</a>`).join('')}</div>`;
}

function home() {
  return `<main id="main">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-photo"></div><div class="hero-shade"></div>
      <span class="leaf-decoration leaf-one"></span><span class="leaf-decoration leaf-two"></span>
      <div class="container hero-inner">
        <div class="hero-copy"><span class="hero-kicker"><span></span> WELLNESS & INNOVATION</span>
          <h1 id="hero-title">人と企業の成長を支え、<br>よりよい<span class="highlight">未来</span>をつくる。</h1>
          <p>からだの健康も、ビジネスの可能性も。<br>こあらは、人に寄り添うサービスで<br>一人ひとりの「これから」を支えます。</p>
          ${button('#services', '私たちの事業を見る')}
        </div>
        <div class="hero-symbol"><div class="symbol-orbit"></div><img src="images/icon.png" alt="緑の葉に包まれたこあらのシンボル" width="401" height="401"><span class="symbol-caption">ともに育む、健やかな未来。</span></div>
      </div>
      <div class="hero-bottom"><span>HEALTHY PEOPLE. THRIVING BUSINESS.</span><a href="#services">SCROLL DOWN <span>↓</span></a></div>
      <svg class="hero-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true"><path d="M0 30Q360 95 740 43T1440 30V80H0Z" fill="#f7faf5"/></svg>
    </section>
    <section id="services" class="services-section section-space">
      <div class="container">
        <div class="section-top">${heading('Our Services', 'ひとにも、ビジネスにも。', '健康とテクノロジー。3つの事業で、可能性をひろげます。')}<span class="section-side-note">こあらの事業内容</span></div>
        <div class="service-grid">${services.map(serviceCard).join('')}</div>
        <div class="section-page-link">${button('services.html', '事業内容を詳しく見る', true)}</div>
      </div>
    </section>
    <section class="about-section section-space">
      <div class="container about-inner"><div class="about-visual"><div class="about-ring"></div><img src="images/icon.png" width="401" height="401" alt="" loading="lazy"><span class="about-label">そばにいる。ともに育つ。</span><span class="little-leaf">${icon('leaf')}</span></div>
      <div class="about-copy">${heading('About Koala', 'あなたのそばで、<br>未来を育むパートナー。')}<p>からだが健やかであること。<br>想いを、自由にかたちにできること。</p><p>私たちは、日々の暮らしとビジネスのどちらにも<br class="desktop-only">小さな「よかった」を増やしていきたいと考えています。<br>こあらのような親しみやすさと、誠実な姿勢で。<br>人と企業の未来に、そっと寄り添い続けます。</p>${button('company.html', 'こあらについて', true)}</div></div>
    </section>
    <section id="strength" class="strength-section">
      <div class="strength-photo" role="img" aria-label="木につかまるこあら"></div>
      <div class="container strength-inner">
        ${heading('Our Strengths', 'こあらが大切にしていること', 'ただ届けるだけではなく、その先の毎日を一緒に考える。')}
        <div class="strength-grid">
          ${strengths.map(item => `<div class="strength-item"><span class="icon-circle">${icon(item.icon)}</span><h3>${item.title}</h3><p>${item.lines.join('<br>')}</p></div>`).join('')}
        </div>
        <a class="inline-link strength-page-link" href="strength.html">こあらの強みを詳しく見る${arrow}</a>
      </div>
    </section>
    <section id="news" class="news-section section-space"><div class="container news-inner">
      <div>${heading('Information', 'こあらからのお知らせ')}<a class="inline-link news-page-link" href="news.html">お知らせ一覧へ${arrow}</a></div>
      ${newsList()}
    </div></section>
    ${contactBanner()}
  </main>`;
}

function pageHero(en, title, description) {
  return `<section class="page-hero"><div class="container"><div class="breadcrumb"><a href="index.html">ホーム</a><span>／</span><span>${title}</span></div><span class="eyebrow">${en}</span><h1>${title}</h1><p>${description}</p><span class="page-hero-leaf">${icon('leaf')}</span></div></section>`;
}

function servicesPage() {
  return `<main id="main">${pageHero('Our Services', '事業内容', '健康とテクノロジー。3つの事業で、可能性をひろげます。')}
    <section class="section-space services-overview"><div class="container">${heading('Wellness & Innovation', 'ひとにも、ビジネスにも。', 'からだをいたわること。健康を学ぶこと。想いをかたちにすること。あなたの一歩を、こあらが支えます。')}<div class="service-grid">${services.map(serviceCard).join('')}</div></div></section>
    <section class="section-space services-connection"><div class="container narrow">${heading('Our Approach', '暮らしと挑戦を、つなぐ。')}<p>整体とReBodyで、日々の健康に向き合うきっかけを。LP開発ツールで、ビジネスの想いを発信する手段を。分野が違っても、大切にしているのは一人ひとりの「これから」です。</p>${button('strength.html', 'こあらが大切にしていること', true)}</div></section>${contactBanner()}</main>`;
}

function strengthPage() {
  return `<main id="main">${pageHero('Our Strengths', 'こあらの強み', 'ただ届けるだけではなく、その先の毎日を一緒に考える。')}
    <section class="section-space"><div class="container strength-page-intro"><div>${heading('Growing Together', 'そばにいる。<br>ともに育つ。')}<p>健康とテクノロジーを通じて、人と企業の可能性をひろげたい。<br>こあらは、4つの姿勢を大切にしています。</p></div><img src="images/koala.jpg" alt="緑の木々のなかで休むこあら" width="1100" height="734"></div></section>
    <section class="section-space strength-values"><div class="container values-grid">${strengths.map((item, index) => `<article class="value-card"><div class="value-card-top"><span class="value-number">0${index + 1}</span><span class="icon-circle">${icon(item.icon)}</span></div><h2>${item.title}</h2><p>${item.detail}</p></article>`).join('')}</div></section>
    <section class="section-space"><div class="container narrow">${heading('Our Services', '大切にしていることを、事業に。', '整体・ReBody・LP開発ツール。それぞれのサービスで、暮らしと挑戦に寄り添います。')}<div class="section-page-link">${button('services.html', '3つの事業を見る')}</div></div></section>${contactBanner()}</main>`;
}

function newsPage() {
  return `<main id="main">${pageHero('Information', 'お知らせ', 'こあらの事業やサービスに関するご案内をお届けします。')}
    <section class="section-space"><div class="container narrow">${heading('Service Information', 'サービスのご案内', '各事業の概要は、以下のリンクからご覧いただけます。')}<div class="news-page-list">${newsList()}</div><p class="news-page-note">サービスの料金・お申し込み方法などは、各事業ページで準備状況をご案内しています。</p></div></section>${contactBanner()}</main>`;
}

function company() {
  return `<main id="main">${pageHero('About Us', '会社概要', '人と企業の、健やかな未来へ。')}
    <section class="section-space"><div class="container company-intro"><div>${heading('Our Philosophy', '人に寄り添い、<br>可能性を育てる。')}<p>健康で、自分らしく過ごせる毎日。<br>アイデアをかたちにして、挑戦できる環境。</p><p>株式会社こあらは、整体・ReBody・LP開発ツールという<br>3つの事業を通じて、人と企業の成長を支えます。</p></div><img src="images/icon.png" alt="株式会社こあらのシンボル" width="401" height="401"></div></section>
    <section class="company-message-section"><div class="container"><a class="company-message-link" href="message.html"><span class="company-message-symbol">${icon('leaf')}</span><div><span class="eyebrow">President's Message</span><h2>社長あいさつ</h2><p>一人ひとりの「これから」に、寄り添うために。</p></div><div class="company-message-name"><span>代表取締役社長</span><strong>丸山 拓海</strong></div><span class="company-message-arrow">${arrow}</span></a></div></section>
    <section class="company-details section-space"><div class="container narrow">${heading('Company Profile', '会社情報')}<dl class="profile-table">
      <div><dt>会社名</dt><dd>株式会社こあら</dd></div>
      <div><dt>事業内容</dt><dd>整体事業<br>健康動画配信サブスクリプション「ReBody」<br>ノーコードLP開発ツールの販売</dd></div>
      <div><dt>所在地</dt><dd class="muted">公開準備中</dd></div>
      <div><dt>代表者</dt><dd>代表取締役社長　丸山 拓海</dd></div>
      <div><dt>設立</dt><dd><time datetime="2026-11">2026年11月</time>（予定）</dd></div>
      <div><dt>お問い合わせ</dt><dd><a class="inline-link" href="contact.html">お問い合わせのご案内${arrow}</a></dd></div>
    </dl></div></section>
    <section id="history" class="history-section section-space" aria-labelledby="history-title"><div class="container">
      <div class="history-heading"><div class="section-heading"><span class="eyebrow">Our History</span><h2 id="history-title">沿革</h2></div><p>小さな一歩から、<br>健やかな未来を育んでいく。</p></div>
      <ol class="history-timeline">
        <li class="history-milestone">
          <time class="history-date" datetime="2026-11" aria-label="2026年11月"><span class="history-year">2026<span>年</span></span><span class="history-month">11<span>月</span></span></time>
          <div class="history-track" aria-hidden="true"><span>${icon('leaf')}</span></div>
          <article class="history-card"><div class="history-card-copy"><span class="history-category">THE BEGINNING <span>設立予定</span></span><h3>株式会社こあら設立予定</h3><p>人と企業の、健やかな未来へ。<br>ここから、こあらの歩みがはじまります。</p></div><div class="history-emblem"><img src="images/icon.png" alt="" width="401" height="401" loading="lazy"></div></article>
        </li>
      </ol>
      <div class="history-continuation"><span></span><p>これからの歩みも、ともに。</p>${icon('leaf')}</div>
    </div></section>${contactBanner()}</main>`;
}

function presidentMessage() {
  return `<main id="main">${pageHero("President's Message", '社長あいさつ', '一人ひとりの「これから」に、寄り添うために。')}
    <section class="president-section section-space"><div class="container president-layout">
      <aside class="president-visual" aria-label="代表者紹介"><span class="president-visual-label">GROWING TOGETHER</span><div class="president-portrait"><img src="images/maruyama.jpeg" alt="代表取締役社長 丸山 拓海" width="1479" height="1479"></div><p class="president-visual-motto">人に寄り添い、<br>未来を育む。</p><div class="president-visual-name"><span>株式会社こあら<br>代表取締役社長</span><strong>丸山 拓海</strong></div><span class="president-visual-leaf">${icon('leaf')}</span></aside>
      <article class="president-letter" aria-labelledby="message-title"><span class="eyebrow">A Message from Our President</span><h2 id="message-title">健やかな毎日と、<br>挑戦できる未来を。</h2><span class="president-letter-rule"></span>
        <p>株式会社こあらのホームページをご覧いただき、ありがとうございます。</p>
        <p>からだが健やかであること。自分の想いを、自由にかたちにできること。私たちは、そのどちらも、人が自分らしく歩んでいくために大切なことだと考えています。</p>
        <p>こあらが大切にしたいのは、一人ひとりの暮らしと挑戦に寄り添うことです。日々のなかにある小さな困りごとや、「こうなりたい」という想いを受け止め、その先の可能性につなげていきたいと考えています。</p>
        <p>からだに向き合う「整体」。健康を日常の習慣にするきっかけを届ける「ReBody」。そして、伝えたい想いを自分の手でかたちにする「LP開発ツール」。健康とテクノロジーという異なる分野を通じて、人と企業の「これから」を支えてまいります。</p>
        <blockquote>身近な存在として、誠実に。<br>小さな「よかった」を、未来の力に。</blockquote>
        <p>親しみやすいこあらのように、安心して頼っていただける存在を目指して。一つひとつの出会いを大切にしながら、皆さまとともに、よりよい未来を育んでまいります。</p>
        <p>どうぞよろしくお願いいたします。</p>
        <div class="president-signature"><span>株式会社こあら</span><span>代表取締役社長</span><strong>丸山 拓海</strong></div>
      </article>
    </div><div class="container president-back">${button('company.html', '会社概要へ戻る', true)}</div></section>${contactBanner()}</main>`;
}

function servicePage(service) {
  return `<main id="main">${pageHero(service.label, service.title, service.subtitle)}
    <section class="section-space"><div class="container service-intro">
      <div class="service-illustration ${service.color}">${icon(service.icon)}<span>${service.title}</span><span class="illustration-decoration">${icon('leaf')}</span></div>
      <div>${heading('Service ' + service.number, service.subtitle)}<p class="long-copy">${service.intro}</p>${button('#details', 'サービスについて知る', true)}</div>
    </div></section>
    <section id="details" class="details-section section-space"><div class="container">${heading('What We Value', 'この事業で届けたいこと')}<div class="feature-grid">
      ${service.features.map(([title, text], index) => `<article class="feature-card"><span class="feature-number">0${index + 1}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}
    </div><div class="service-notice">${icon('leaf')}<div><h3>サービスの詳細について</h3><p>${service.note}</p><a class="inline-link" href="contact.html?service=${service.id}">お問い合わせのご案内${arrow}</a></div></div></div></section>
    <section class="section-space"><div class="container">${heading('Other Services', 'こあらのその他の事業')}<div class="service-grid other-services">${services.filter(item => item.id !== service.id).map(serviceCard).join('')}</div></div></section>${contactBanner()}</main>`;
}

function contact() {
  return `<main id="main">${pageHero('Contact', 'お問い合わせ', 'こあらの事業やサービスについてのご相談はこちら。')}
    <section class="section-space"><div class="container narrow">
      <div class="contact-notice"><span class="icon-circle">${icon('mail')}</span><div><h2>お問い合わせ窓口は準備中です</h2><p>現在、このフォームからの送信はできません。下記でお問い合わせ内容の下書きを作成し、確認・コピーできます。入力内容はサーバーに送信・保存されません。</p></div></div>
      <form id="contact-form">
        <div class="form-field"><label for="service">お問い合わせの種類 <span class="required">必須</span></label><select id="service" name="service" required><option value="">選択してください</option><option value="seitai">整体について</option><option value="rebody">ReBodyについて</option><option value="lp-tool">LP開発ツールについて</option><option value="other">その他のお問い合わせ</option></select></div>
        <div class="form-field"><label for="name">お名前 <span class="required">必須</span></label><input id="name" name="name" autocomplete="name" placeholder="例：山田 太郎" required maxlength="100"></div>
        <div class="form-field"><label for="organization">会社名・団体名 <span class="optional">任意</span></label><input id="organization" name="organization" autocomplete="organization" placeholder="例：株式会社〇〇" maxlength="150"></div>
        <div class="form-field"><label for="email">メールアドレス <span class="required">必須</span></label><input id="email" name="email" type="email" autocomplete="email" placeholder="example@company.jp" required maxlength="254"></div>
        <div class="form-field"><label for="message">お問い合わせ内容 <span class="required">必須</span></label><textarea id="message" name="message" rows="7" placeholder="ご相談内容をご記入ください。" required maxlength="5000"></textarea></div>
        <p class="form-privacy"><a class="inline-link" href="privacy.html" target="_blank" rel="noopener">個人情報の取り扱い（別タブ）</a>をご確認ください。</p>
        <button class="button form-submit" type="submit">お問い合わせ内容を確認する${arrow}</button>
        <p class="form-caption">※ 送信は行われません。内容確認のみのフォームです。</p>
      </form>
      <section id="contact-preview" class="contact-preview" hidden aria-labelledby="preview-title"><h2 id="preview-title" tabindex="-1">お問い合わせ内容の下書き</h2><p>まだ送信されていません。窓口の公開後にご利用いただけるよう、内容をコピーしてお手元に保存できます。</p><pre id="preview-text"></pre><div class="preview-actions"><button id="copy-draft" class="button" type="button">内容をコピー${icon('check')}</button><button id="edit-draft" class="button button-outline" type="button">内容を修正する</button></div><p id="copy-status" role="status" aria-live="polite"></p></section>
    </div></section></main>`;
}

function privacy() {
  return `<main id="main">${pageHero('Privacy', '個人情報の取り扱い', '当サイトをご利用の皆さまへ。')}
    <section class="section-space"><article class="container narrow legal-copy"><h2>当サイトの現在の運用について</h2><p>当サイトのお問い合わせ機能は、入力内容をお使いのブラウザ内で確認するための下書き作成機能です。入力されたお名前、メールアドレス、お問い合わせ内容などを、当機能からサーバーへ送信・保存することはありません。</p><h2>入力内容について</h2><p>入力内容はページを閉じたり再読み込みしたりすると失われます。共有端末をご利用の場合は、内容の確認後にページを閉じてください。コピーした内容の保管・管理には十分ご注意ください。</p><h2>外部サービスについて</h2><p>当サイトは、アクセス解析ツールや広告用Cookieを使用していません。サイト内の写真・画像はサイト内のファイルから読み込みます。</p><h2>今後のお問い合わせ受付について</h2><p>お問い合わせの送信受付を開始する際には、利用目的、保存・管理方法、第三者提供の有無、お問い合わせ窓口などを定めた個人情報保護方針を、このページで改めてご案内します。</p>${button('contact.html', 'お問い合わせのご案内', true)}</article></section></main>`;
}

let content;
if (pageName === 'company.html') content = company();
else if (pageName === 'message.html') content = presidentMessage();
else if (pageName === 'services.html') content = servicesPage();
else if (pageName === 'strength.html') content = strengthPage();
else if (pageName === 'news.html') content = newsPage();
else if (currentService) content = servicePage(currentService);
else if (pageName === 'contact.html') content = contact();
else if (pageName === 'privacy.html') content = privacy();
else content = home();

document.getElementById('app').innerHTML = `<div id="top"></div>${header()}${content}${footer()}`;

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.getElementById('main-nav');
const submenuToggles = [...navigation.querySelectorAll('.submenu-toggle')];
function closeSubmenus(except) {
  for (const toggle of submenuToggles) {
    if (toggle === except) continue;
    toggle.setAttribute('aria-expanded', 'false');
    document.getElementById(toggle.getAttribute('aria-controls')).hidden = true;
  }
}
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'メニューを開く');
  navigation.classList.remove('is-open');
  closeSubmenus();
}
for (const toggle of submenuToggles) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') !== 'true';
    closeSubmenus(toggle);
    toggle.setAttribute('aria-expanded', String(expanded));
    document.getElementById(toggle.getAttribute('aria-controls')).hidden = !expanded;
  });
}
menuToggle.addEventListener('click', () => {
  if (menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
  } else {
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'メニューを閉じる');
    navigation.classList.add('is-open');
  }
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  const expandedSubmenu = submenuToggles.find(toggle => toggle.getAttribute('aria-expanded') === 'true');
  if (expandedSubmenu) {
    closeSubmenus();
    expandedSubmenu.focus();
  } else if (menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-group')) closeSubmenus();
  if (!event.target.closest('.header-inner')) closeMenu();
});
navigation.addEventListener('focusout', event => {
  if (!navigation.contains(event.relatedTarget)) closeSubmenus();
});
matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);

function initializeMotion() {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  if (!('IntersectionObserver' in window) || !Element.prototype.animate) return;

  const targets = [...document.querySelectorAll(
    '.section-heading, .hero-copy > *, .hero-symbol, .page-hero h1, .page-hero > .container > p, ' +
    '.service-card, .about-visual, .about-copy > p, .strength-item, .news-list > a, ' +
    '.company-intro > img, .company-message-link, .profile-table > div, .history-milestone, ' +
    '.president-visual, .president-letter > *, .service-illustration, .feature-card, ' +
    '.service-notice, .strength-page-intro > img, .value-card, .contact-banner-inner'
  )];
  for (const element of targets) element.classList.add('motion-reveal');
  const revealed = new WeakSet();
  const animations = new Set();
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const element = entry.target;
      observer.unobserve(element);
      if (preference.matches || revealed.has(element)) continue;
      revealed.add(element);
      if (element.contains(document.activeElement)) continue;
      const siblings = [...element.parentElement.children].filter(sibling => targets.includes(sibling));
      const delay = Math.min(siblings.indexOf(element), 3) * 75;
      const animation = element.animate(
        [{ opacity: 0, translate: '0 20px' }, { opacity: 1, translate: '0 0' }],
        { duration: 650, delay, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'backwards' }
      );
      animations.add(animation);
      const release = () => animations.delete(animation);
      animation.onfinish = release;
      animation.oncancel = release;
    }
  }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });

  function updateMotion() {
    observer.disconnect();
    for (const animation of animations) animation.cancel();
    animations.clear();
    if (!preference.matches) {
      for (const element of targets) {
        if (!revealed.has(element)) observer.observe(element);
      }
    }
  }
  document.addEventListener('focusin', event => {
    for (const element of targets) {
      if (element.contains(event.target)) {
        revealed.add(element);
        observer.unobserve(element);
      }
    }
    for (const animation of animations) {
      if (animation.effect.target.contains(event.target)) animation.cancel();
    }
  });
  preference.addEventListener('change', updateMotion);
  updateMotion();
}
initializeMotion();

const form = document.getElementById('contact-form');
if (form) {
  const selectedService = new URLSearchParams(location.search).get('service');
  if (services.some(service => service.id === selectedService)) form.elements.service.value = selectedService;
  const preview = document.getElementById('contact-preview');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name')).trim();
    const message = String(data.get('message')).trim();
    const nameInput = form.elements.name;
    const messageInput = form.elements.message;
    nameInput.setCustomValidity(name ? '' : 'お名前を入力してください。');
    messageInput.setCustomValidity(message ? '' : 'お問い合わせ内容を入力してください。');
    if (!form.reportValidity()) return;
    const selectedLabel = form.elements.service.selectedOptions[0].textContent;
    document.getElementById('preview-text').textContent = `【${selectedLabel}】\n\nお名前：${name}\n会社名・団体名：${String(data.get('organization')).trim() || '未記入'}\nメールアドレス：${data.get('email')}\n\nお問い合わせ内容：\n${message}`;
    form.hidden = true;
    preview.hidden = false;
    document.getElementById('copy-status').textContent = '';
    document.getElementById('preview-title').focus();
    preview.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
  });
  for (const name of ['name', 'message']) form.elements[name].addEventListener('input', event => event.target.setCustomValidity(''));
  document.getElementById('edit-draft').addEventListener('click', () => {
    preview.hidden = true;
    form.hidden = false;
    form.elements.service.focus();
  });
  document.getElementById('copy-draft').addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText(document.getElementById('preview-text').textContent);
      status.textContent = '下書きをコピーしました。お問い合わせの送信は行われていません。';
    } catch (error) {
      console.error('お問い合わせの下書きをコピーできませんでした。', error);
      status.textContent = 'コピーできませんでした。上の下書きのテキストを選択し、手動でコピーしてください。';
    }
  });
}
