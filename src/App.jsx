import { useEffect, useMemo, useState } from 'react'
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, ChevronRight,
  Copy, Heart, Layers3, Leaf, Mail, Menu, PackageCheck, Search,
  Send, Shirt, Sparkles, X,
} from 'lucide-react'
import { categories, fabrics, processSteps, products } from './data'
import { site } from './config'
import { productPhotos } from './productPhotos'

const routeOf = () => window.location.hash.slice(1) || '/'
const go = (path) => { window.location.hash = path; window.scrollTo({ top: 0, behavior: 'smooth' }) }
const asset = (path) => /^https?:\/\//i.test(path) ? path : `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

function SectionIntro({ kicker, title, emphasis, desc, action, href }) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
      <div>
        <p className="eyebrow mb-4">{kicker}</p>
        <h2 className="section-title">{title}{emphasis && <> <em>{emphasis}</em></>}</h2>
        {desc && <p className="copy mt-4 max-w-xl">{desc}</p>}
      </div>
      {action && <a href={`#${href}`} className="text-link shrink-0">{action}<ArrowUpRight size={17} /></a>}
    </div>
  )
}

function Header({ openEnquiry }) {
  const [menu, setMenu] = useState(false)
  const [route, setRoute] = useState(routeOf())
  useEffect(() => {
    const onHash = () => { setRoute(routeOf()); setMenu(false) }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  const links = [
    ['Our Collection', '/collections'],
    ['Fabrics', '/#fabrics'],
    ['Our Process', '/process'],
    ['Our Story', '/about'],
  ]
  const onNav = (url, event) => {
    if (url === '/#fabrics') {
      event.preventDefault()
      setMenu(false)
      if (route !== '/') go('/')
      window.setTimeout(() => document.getElementById('fabrics')?.scrollIntoView({ behavior: 'smooth' }), route === '/' ? 0 : 150)
    }
  }
  return (
    <>
      <div className="top-note"><span>FROM FIRST THREAD TO FINISHED LABEL</span><span className="hidden sm:inline">—</span><span className="hidden sm:inline">CLOTHING MADE FOR YOUR BRAND</span></div>
      <header className="site-header">
        <div className="page-wrap flex h-[86px] items-center justify-between gap-4">
          <a href="#/" aria-label="The Fabric House homepage" className="brand-logo">
            <span className="brand-mark"><Sparkles size={25} strokeWidth={1.55}/></span><span>The Fabric House<span className="text-[#b4674c]">.</span></span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {links.map(([label, href]) => <a key={label} href={`#${href}`} onClick={(event) => onNav(href, event)} className={`nav-item ${route.startsWith(href) ? 'nav-active' : ''}`}>{label}</a>)}
          </nav>
          <div className="hidden items-center gap-3 sm:flex">
            <button className="icon-button" aria-label="Search products" onClick={() => go('/collections?search=')}><Search size={19} strokeWidth={1.7}/></button>
            <button className="btn btn-dark" onClick={() => openEnquiry('')}>Get in touch <ArrowUpRight size={16}/></button>
          </div>
          <button className="icon-button lg:hidden sm:!hidden" onClick={() => setMenu(v => !v)} aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu}>{menu ? <X size={23}/> : <Menu size={23}/>}</button>
          <button className="icon-button hidden sm:flex lg:!hidden" onClick={() => setMenu(v => !v)} aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu}>{menu ? <X size={23}/> : <Menu size={23}/>}</button>
        </div>
        {menu && <div className="mobile-menu">
          {links.map(([label, href]) => <a key={label} href={`#${href}`} onClick={(e) => onNav(href, e)}>{label}<ArrowUpRight size={16}/></a>)}
          <button onClick={() => { setMenu(false); openEnquiry('') }}>Start an enquiry <ArrowUpRight size={16}/></button>
        </div>}
      </header>
    </>
  )
}

function Button({ children, variant = 'primary', onClick, href, className = '' }) {
  const classes = `btn ${variant === 'outline' ? 'btn-outline' : variant === 'light' ? 'btn-light' : 'btn-primary'} ${className}`
  return href ? <a href={`#${href}`} className={classes}>{children}</a> : <button type="button" onClick={onClick} className={classes}>{children}</button>
}

function GarmentImage({ item, className='', loading='lazy' }) {
  const [attempt, setAttempt] = useState(0)
  useEffect(() => setAttempt(0), [item.image])
  const alternates = (productPhotos[item.id] || []).map(photo => photo.src)
  const candidates = [...new Set([item.image, ...alternates]), item.fallback || '/images/essential-tee.svg']
  const source = candidates[Math.min(attempt, candidates.length - 1)]
  return <img loading={loading} src={asset(source)} alt={`${item.name} product mockup, ${item.color || "illustrative colour"}`} className={className} referrerPolicy="no-referrer" onError={() => setAttempt(current => Math.min(current + 1, candidates.length - 1))} />
}

function ProductGallery({ item }) {
  const images = productPhotos[item.id] || [{ src: item.image, label: item.color }]
  const [index, setIndex] = useState(0)
  useEffect(() => setIndex(0), [item.id])
  const selected = images[index] || images[0]
  return <div className="product-gallery">
    <div className="detail-image">
      <GarmentImage key={`${item.id}-${index}`} item={{ ...item, image: selected.src, color: selected.label }} className="h-full w-full object-contain p-5" loading="eager" />
      <span className="product-tag">{item.label}</span>
      {images.length > 1 && <span className="photo-count">IMAGE {index + 1} / {images.length}</span>}
    </div>
    {images.length > 1 && <div className="photo-thumbs" aria-label="Product photos">
      {images.map((photo, i) => <button key={photo.src} type="button" className={`photo-thumb ${index === i ? 'selected' : ''}`} aria-label={`Show ${photo.label} photo`} aria-pressed={index === i} onClick={() => setIndex(i)}>
        <GarmentImage item={{ ...item, image: photo.src, color: photo.label }} className="h-full w-full object-contain p-1"/>
        <span>{photo.label}</span>
      </button>)}
    </div>}
    <p className="photo-caption">AI-generated product mockup · Colours and finished specifications should be confirmed before ordering</p>
  </div>
}

function ProductCard({ item, favorites, toggleFavorite, openEnquiry }) {
  const favorite = favorites.includes(item.id)
  return (
    <article className="product-card group">
      <div className="product-visual">
        <a href={`#/products/${item.id}`} aria-label={`View ${item.name}`} className="block h-full w-full">
          <GarmentImage item={item} className="h-full w-full object-contain p-3 transition-transform duration-700 group-hover:scale-[1.045]" />
        </a>
        <span className="product-tag">{item.label}</span>
        <button className={`heart-button ${favorite ? 'is-favorite' : ''}`} onClick={() => toggleFavorite(item.id)} aria-label={favorite ? `Remove ${item.name} from saved styles` : `Save ${item.name}`} title={favorite ? 'Remove from saved' : 'Save this style'}><Heart size={18} fill={favorite ? 'currentColor' : 'none'}/></button>
        <button className="product-quick" onClick={() => openEnquiry(item.name)}>Enquire about this style <ArrowUpRight size={16}/></button>
      </div>
      <div className="flex items-start justify-between gap-2 pt-4">
        <div><a href={`#/products/${item.id}`} className="font-display text-[23px] leading-tight hover:text-[#aa5a3c]">{item.name}</a><p className="mt-1 text-[12px] text-[var(--muted)]">{item.category}</p><p className="mt-2 line-clamp-2 text-[12px] leading-5 text-[var(--muted)]">{item.description}</p><div className="mt-3 flex flex-wrap gap-2"><span className="mini-spec">{item.fabric}</span><span className="mini-spec">{item.specs.Fit}</span></div></div>
        <a href={`#/products/${item.id}`} aria-label={`View ${item.name}`} className="mt-1 text-[var(--accent)]"><ArrowUpRight size={19}/></a>
      </div>
    </article>
  )
}

function Home({ favorites, toggleFavorite, openEnquiry }) {
  return <>
    <section className="hero page-wrap">
      <div className="hero-copy">
        <div className="eyebrow hero-kicker"><span className="tiny-line"/> FROM FIRST THREAD TO FINISHED LABEL</div>
        <h1 className="hero-title">Your Vision.<br/>Our Fabric.<br/><em>Your Brand.</em></h1>
        <p className="hero-description">Thoughtful materials, beautifully considered apparel, and the freedom to create something entirely your own.</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href="/collections">Explore the collection <ArrowUpRight size={17}/></Button>
          <a href="#/process" className="text-link text-[13px]">How we work <ArrowRight size={17}/></a>
        </div>
        <div className="hero-signoff"><span className="font-display text-[29px] italic">Made with intention.</span><span className="h-px w-10 bg-[#bca999]"/><span>Designed around your ideas.</span></div>
      </div>
      <div className="hero-media">
        <div className="hero-img-main"><GarmentImage item={products[0]} className="w-full h-full object-contain p-3" loading="eager" /></div>
        <div className="hero-img-side"><GarmentImage item={products[5]} className="w-full h-full object-contain p-3" loading="eager" /></div>
        <div className="round-stamp"><span>FABRIC<br/>✳<br/>STORY</span></div>
        <div className="hero-vertical">THE FABRIC HOUSE — THE APPAREL EDIT</div>
        <div className="hero-img-caption">01 / CONSIDERED APPAREL</div>
      </div>
    </section>

    <section className="page-wrap"><div className="service-strip">
      <div><Leaf size={22} strokeWidth={1.5}/><span>Material-first thinking</span></div>
      <div><Shirt size={22} strokeWidth={1.5}/><span>Custom colours & private label</span></div>
      <div><Sparkles size={22} strokeWidth={1.5}/><span>Details that feel like you</span></div>
    </div></section>

    <section className="section-pad page-wrap" id="collection">
      <SectionIntro kicker="01 / DISCOVER OUR RANGE" title="Styles made to be" emphasis="your own." desc="15 customizable apparel styles for men and kids — from winter staples to activewear." action="Explore every style" href="/collections"/>
      <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {categories.map((cat, i) => <a key={cat.name} className="category-card group" href={`#/collections?category=${encodeURIComponent(cat.name)}`}>
          <GarmentImage item={cat} className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-105" />
          <div className="category-shade"/>
          <span className="category-index">0{i+1}</span>
          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-2 text-white sm:inset-x-5 sm:bottom-5"><div><h3 className="font-display text-[23px] sm:text-[29px] leading-none">{cat.name}</h3><p className="mt-2 hidden text-xs opacity-80 sm:block">{cat.count}</p></div><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/50"><ArrowUpRight size={17}/></span></div>
        </a>)}
      </div>
    </section>

    <section id="fabrics" className="section-pad fabric-area">
      <div className="page-wrap">
        <div className="grid gap-8 lg:grid-cols-[.68fr_1fr] lg:items-end lg:gap-12">
          <div><p className="eyebrow mb-5">02 / MATERIALS THAT MATTER</p><h2 className="section-title">A world of<br/><em>texture & tone.</em></h2><p className="copy mt-5 max-w-[375px]">Every great piece begins with a good material. Explore the fabric moods and colour stories that shape the things we make.</p><a href="#/process" className="text-link mt-7 inline-flex">Our approach to making <ArrowUpRight size={17}/></a></div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {fabrics.map((f, i) => <div key={f.name} className="fabric-card" style={{ backgroundColor: f.color }}><img src={asset(f.image)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55"/><span className="absolute top-4 left-4 text-[10px] font-bold tracking-[.14em] text-white/80">0{i+1}</span><div className="absolute inset-x-3 bottom-4 sm:inset-x-4"><h3 className="font-display text-[20px] leading-tight text-white sm:text-[24px]">{f.name}</h3><span className="mt-1 hidden text-[10px] text-white/85 sm:block">{f.sub}</span></div></div>)}
          </div>
        </div>
      </div>
    </section>

    <section className="section-pad page-wrap">
      <SectionIntro kicker="03 / THE APPAREL EDIT" title="A few of our" emphasis="favourites." desc="Browse real collection categories with our original studio-style product mockups." action="View full collection" href="/collections"/>
      <div className="mt-9 grid grid-cols-2 gap-x-3 gap-y-9 md:grid-cols-4 md:gap-x-5">{products.slice(0,4).map(item => <ProductCard key={item.id} item={item} favorites={favorites} toggleFavorite={toggleFavorite} openEnquiry={openEnquiry}/>)}</div>
    </section>

    <section className="process-home section-pad">
      <div className="page-wrap"><SectionIntro kicker="04 / OUR APPROACH" title="From idea to" emphasis="identity." desc="A simple, considered journey from the things you dream up to a collection that feels unmistakably yours." action="Discover our process" href="/process"/>
        <div className="mt-11 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{processSteps.map(step => <div key={step.number} className="step-card"><div className="flex justify-between items-center text-[var(--accent)]"><span className="font-mono text-[12px]">{step.number} / 04</span><span className="inline-block h-px w-8 bg-[var(--accent)]/40" /></div><h3 className="mt-7 font-display text-[25px]">{step.title}</h3><p className="copy mt-3 text-sm">{step.detail}</p></div>)}</div>
      </div>
    </section>
    <LargeCta openEnquiry={openEnquiry}/>
  </>
}

function LargeCta({ openEnquiry }) {
  return <section className="cta-section"><div className="page-wrap relative z-10 flex flex-col items-start justify-between gap-9 py-17 md:flex-row md:items-end md:py-22"><div><p className="eyebrow !text-[#f1cfb6]">LET'S CREATE SOMETHING GOOD</p><h2 className="mt-6 font-display text-[clamp(46px,6vw,86px)] leading-[1.07] tracking-[-.055em] text-white">Have an idea?<br/><em>Let's bring it to life.</em></h2></div><Button variant="light" onClick={() => openEnquiry('')}>Start a conversation <ArrowUpRight size={19}/></Button></div><div className="cta-circle" aria-hidden="true"/></section>
}

function Collections({ favorites, toggleFavorite, openEnquiry, route }) {
  const raw = route.split('?')[1] || ''
  const params = new URLSearchParams(raw)
  const initialCat = params.get('category') || 'All styles'
  const initialSearch = params.get('search') || ''
  const [category, setCategory] = useState(initialCat)
  const [search, setSearch] = useState(initialSearch)
  const [sort, setSort] = useState('featured')
  useEffect(() => { setCategory(initialCat); setSearch(initialSearch) }, [initialCat, initialSearch])
  const allCats = ['All styles', ...new Set(products.map(p => p.category))]
  const matches = useMemo(() => {
    let r = products.filter(p => (category === 'All styles' || p.category === category) && `${p.name} ${p.category} ${p.color} ${p.fabric} ${p.description}`.toLowerCase().includes(search.toLowerCase()))
    if (sort === 'az') r = [...r].sort((a,b) => a.name.localeCompare(b.name))
    return r
  }, [search, category, sort])
  return <>
    <div className="page-wrap page-heading"><p className="eyebrow mb-4">OUR CLOTHING COLLECTION</p><h1 className="page-title">Made for your <em>next idea.</em></h1><p className="copy mt-5 max-w-2xl">Explore 15 clothing styles across men’s winterwear, cotton essentials, activewear and kids’ clothing — with custom branding and wholesale enquiries.</p></div>
    <section className="page-wrap pb-24">
      <div className="catalog-controls">
        <div className="flex flex-wrap gap-2">{allCats.map(cat => <button key={cat} onClick={() => setCategory(cat)} className={`filter-chip ${category===cat ? 'selected' : ''}`}>{cat}</button>)}</div>
        <div className="flex flex-wrap gap-3"><label className="search-field"><Search size={17}/><input aria-label="Search styles" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search styles..." /></label><label className="sort-field"><span className="sr-only">Sort catalogue</span><select value={sort} onChange={e => setSort(e.target.value)}><option value="featured">Featured</option><option value="az">Name A–Z</option></select><ChevronDown size={16}/></label></div>
      </div>
      <div className="mb-5 text-xs text-[var(--muted)]">Showing {matches.length} of {products.length} clothing styles</div>
      {matches.length ? <div className="grid grid-cols-2 gap-x-3 gap-y-9 md:grid-cols-3 lg:grid-cols-4 md:gap-x-5">{matches.map(item=><ProductCard key={item.id} item={item} favorites={favorites} toggleFavorite={toggleFavorite} openEnquiry={openEnquiry}/>)}</div> : <div className="py-24 text-center"><Search size={34} className="mx-auto mb-4 text-[var(--accent)]"/><h3 className="font-display text-3xl">No matching styles found.</h3><p className="copy my-4">Try a different word or browse all styles.</p><Button onClick={()=>{setSearch('');setCategory('All styles')}}>Reset filters <ArrowRight size={16}/></Button></div>}
    </section>
    <LargeCta openEnquiry={openEnquiry}/>
  </>
}

function ProductDetail({ item, openEnquiry, toggleFavorite, favorites }) {
  if (!item) return <div className="page-wrap min-h-[55vh] py-24"><h1 className="font-display text-4xl">We couldn't find that style.</h1><a className="text-link mt-5 inline-flex" href="#/collections">Back to collection <ArrowRight size={16}/></a></div>
  const related = products.filter(p=>p.category===item.category && p.id !== item.id).slice(0,3)
  return <>
    <section className="page-wrap pt-7 pb-21"><nav className="mb-6 flex items-center gap-2 text-xs text-[var(--muted)]"><a href="#/collections" className="hover:text-[var(--accent)]">Collection</a><ChevronRight size={13}/><span>{item.category}</span><ChevronRight size={13}/><span className="text-[var(--ink)]">{item.name}</span></nav>
      <div className="grid gap-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
        <ProductGallery item={item} />
        <div className="py-3 lg:py-10"><p className="eyebrow mb-4">THE FABRIC HOUSE / {item.category.toUpperCase()}</p><h1 className="page-title !text-[clamp(44px,4.6vw,68px)]">{item.name}</h1><p className="mt-5 max-w-xl text-[15px] leading-8 text-[var(--muted)]">{item.description}</p><div className="my-8 h-px bg-[var(--line)]"/>
          <p className="font-semibold text-sm">Shown colour: <span className="font-normal text-[var(--muted)]">{item.color}</span></p><p className="mt-2 text-xs text-[var(--muted)]">Illustrative imagery only. Colours, sizes, branding and final product specifications are confirmed as part of an enquiry.</p>
          <p className="mt-8 mb-4 font-display text-[26px]">Product specifications</p>
          <dl className="spec-table">{Object.entries(item.specs).map(([key,value])=><div key={key} className="spec-row"><dt>{key}</dt><dd>{value}</dd></div>)}</dl>
          <p className="mt-4 text-xs leading-6 text-[var(--muted)]">All photos are AI-generated product mockups. Final colours, fabric and garment details are subject to confirmation when enquiring.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Button onClick={()=>openEnquiry(item.name)}>Enquire about this style <ArrowUpRight size={17}/></Button><button onClick={()=>toggleFavorite(item.id)} className="btn btn-outline" aria-pressed={favorites.includes(item.id)}><Heart size={17} fill={favorites.includes(item.id)?'currentColor':'none'}/>{favorites.includes(item.id)?'Saved':'Save style'}</button></div>
        </div>
      </div>
    </section>
    {related.length>0 && <section className="page-wrap pb-22"><SectionIntro kicker="KEEP EXPLORING" title="More like" emphasis="this."/><div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">{related.map(p=><ProductCard key={p.id} item={p} favorites={favorites} toggleFavorite={toggleFavorite} openEnquiry={openEnquiry}/>)}</div></section>}
    <LargeCta openEnquiry={openEnquiry}/>
  </>
}

function Process({ openEnquiry }) {
  return <><section className="page-wrap page-heading"><p className="eyebrow mb-4">THE WAY WE WORK</p><h1 className="page-title">The process behind<br/><em>your point of view.</em></h1><p className="copy mt-6 max-w-xl">We believe the best collections begin with good conversations, beautiful materials and a little attention to every detail.</p></section>
    <section className="page-wrap pb-24"><div className="grid gap-5 md:grid-cols-2">{processSteps.map((s,i)=><article className="process-detail" key={s.number}><div className="flex justify-between"><span className="font-mono text-[13px] tracking-[.1em] text-[var(--accent)]">{s.number} / 04</span>{i===0?<Sparkles size={26}/>:i===1?<Layers3 size={26}/>:i===2?<PackageCheck size={26}/>:<Shirt size={26}/>}</div><h2 className="mt-12 font-display text-[clamp(30px,3vw,43px)]">{s.title}</h2><p className="copy mt-3 max-w-md">{s.detail}</p></article>)}</div></section><LargeCta openEnquiry={openEnquiry}/></>
}

function About({ openEnquiry }) {
  return <><section className="page-wrap page-heading"><p className="eyebrow mb-4">A LITTLE ABOUT OUR APPROACH</p><h1 className="page-title">A good idea deserves<br/><em>a beautiful beginning.</em></h1><p className="copy mt-6 max-w-2xl">The Fabric House is a placeholder identity for your future clothing website. Its story is about you: your vision, your materials, and the identity you're building through apparel.</p></section>
    <section className="page-wrap grid gap-12 pb-24 lg:grid-cols-2 lg:items-center"><div className="about-art"><GarmentImage item={products[1]} className="h-full w-full object-contain p-7" /></div><div><p className="eyebrow mb-5">CRAFTED AROUND THE DETAILS</p><h2 className="section-title">A story told in<br/><em>threads & texture.</em></h2><p className="copy mt-6">We imagine a clothing experience where the garments take centre stage. Silhouettes, colour palettes, fabric choices and thoughtful finishing details come together to make a brand feel distinctive.</p><p className="copy mt-4">The content here can later feature your actual business history, production expertise, team, facility and customer work.</p><Button className="mt-8" onClick={()=>openEnquiry('')}>Let's work together <ArrowUpRight size={17}/></Button></div></section><LargeCta openEnquiry={openEnquiry}/></>
}

function Contact({ openEnquiry }) {
  return <><section className="page-wrap page-heading"><p className="eyebrow mb-4">GET IN TOUCH</p><h1 className="page-title">Let's talk about<br/><em>what you're making.</em></h1><p className="copy mt-6 max-w-2xl">Whether you have a complete collection in mind or you're starting with a single idea, we'd love to hear what you're imagining.</p></section>
    <section className="page-wrap pb-24"><div className="contact-card grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center"><div><p className="eyebrow mb-5">START THE CONVERSATION</p><h2 className="font-display text-[clamp(32px,4vw,54px)] leading-tight">Good things start<br/><em>with a conversation.</em></h2><p className="copy mt-6 max-w-xl">Use the enquiry form to prepare your message. This demo lets you copy your enquiry; sending can be connected to your email or backend when you provide the business details.</p><Button className="mt-7" onClick={()=>openEnquiry('')}>Open enquiry form <ArrowUpRight size={17}/></Button></div><div className="contact-art"><GarmentImage item={products[0]} className="h-full w-full object-contain p-5"/><span>MAKE IT YOURS · MADE WITH CARE</span></div></div></section></>
}

function EnquiryModal({ open, onClose, selectedProduct }) {
  const [fields, setFields] = useState({ name: '', email: '', company: '', product: '', quantity: '', message: '' })
  const [summary, setSummary] = useState('')
  const [copied, setCopied] = useState(false)
  useEffect(() => { if(open) {setFields(f=>({...f,product:selectedProduct || f.product}));setSummary('');setCopied(false)} }, [open, selectedProduct])
  useEffect(() => {
    if (!open) return
    const onKey=(e)=>{if(e.key==='Escape')onClose()}
    document.addEventListener('keydown',onKey)
    const prev=document.body.style.overflow;document.body.style.overflow='hidden'
    return()=>{document.removeEventListener('keydown',onKey);document.body.style.overflow=prev}
  },[open,onClose])
  if(!open)return null
  const edit=(key,value)=>setFields(f=>({...f,[key]:value}))
  const submit=(e)=>{e.preventDefault();setSummary(`CLOTHING ENQUIRY — THE FABRIC HOUSE\n\nName: ${fields.name}\nEmail: ${fields.email}\nCompany / Brand: ${fields.company || 'Not supplied'}\nStyle: ${fields.product || 'General enquiry'}\nApproximate quantity: ${fields.quantity || 'Not specified'}\n\nProject details:\n${fields.message}`)}
  const copy=async()=>{try{await navigator.clipboard.writeText(summary);setCopied(true)}catch{const el=document.getElementById('enquiry-result');el?.select();document.execCommand('copy');setCopied(true)}}
  return <div className="modal-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)onClose()}}><div className="modal-panel" role="dialog" aria-modal="true" aria-label="Clothing enquiry" onMouseDown={e=>e.stopPropagation()}>
    <div className="mb-7 flex justify-between items-start"><div><p className="eyebrow mb-3">TELL US ABOUT YOUR IDEA</p><h2 className="font-display text-[38px] leading-tight">Let's make <em>something good.</em></h2></div><button className="icon-button" aria-label="Close enquiry" onClick={onClose}><X size={23}/></button></div>
    {summary ? <div><p className="copy mb-3">Your enquiry is ready. Copy it and send it using your preferred email or messaging app. <strong>No message has been sent from this demo.</strong></p><textarea id="enquiry-result" aria-label="Prepared enquiry" className="form-input min-h-55 whitespace-pre-wrap font-mono text-xs" readOnly value={summary}/><div className="mt-5 flex flex-wrap gap-3"><button className="btn btn-primary" onClick={copy}>{copied?<Check size={16}/>:<Copy size={16}/>} {copied?'Copied to clipboard':'Copy enquiry'}</button><button className="btn btn-outline" onClick={()=>setSummary('')}>Edit enquiry <ArrowLeft size={16}/></button></div></div> : <form onSubmit={submit} className="grid grid-cols-2 gap-x-4 gap-y-4">
      <label className="form-label">Your name *<input className="form-input" value={fields.name} onChange={e=>edit('name',e.target.value)} placeholder="Your name" required/></label>
      <label className="form-label">Email address *<input className="form-input" type="email" value={fields.email} onChange={e=>edit('email',e.target.value)} placeholder="name@email.com" required/></label>
      <label className="form-label">Company / brand<input className="form-input" value={fields.company} onChange={e=>edit('company',e.target.value)} placeholder="Your brand name"/></label>
      <label className="form-label">Approx. quantity<input className="form-input" value={fields.quantity} onChange={e=>edit('quantity',e.target.value)} placeholder="If known"/></label>
      <label className="form-label col-span-2">Style of interest<select className="form-input" value={fields.product} onChange={e=>edit('product',e.target.value)}><option value="">General enquiry</option>{products.map(p=><option key={p.id} value={p.name}>{p.name}</option>)}</select></label>
      <label className="form-label col-span-2">Tell us a little about your project *<textarea className="form-input min-h-29" required value={fields.message} onChange={e=>edit('message',e.target.value)} placeholder="What are you hoping to create?"/></label>
      <div className="col-span-2 pt-2"><button className="btn btn-primary w-full justify-center" type="submit">Prepare my enquiry <ArrowUpRight size={17}/></button><p className="mt-3 text-center text-[11px] text-[var(--muted)]">Demo form — generates a copyable message; does not send it.</p></div>
    </form>}
  </div></div>
}

function Footer({ openEnquiry }) {
  return <footer className="footer"><div className="page-wrap pt-17 pb-10"><div className="grid gap-12 border-b border-[#d4c3b2] pb-12 md:grid-cols-[1.7fr_1fr_1fr]">
    <div><a href="#/" className="brand-logo"><span className="brand-mark"><Sparkles size={25} strokeWidth={1.55}/></span>The Fabric House<span className="text-[#b4674c]">.</span></a><p className="mt-5 max-w-xs text-sm leading-7 text-[var(--muted)]">Beautiful materials. Thoughtful apparel. Your vision at the heart of every detail.</p><span className="font-display mt-6 block text-2xl italic">Your Vision. Our Fabric. Your Brand.</span></div>
    <div><h3 className="footer-heading">Explore</h3><div className="mt-5 flex flex-col gap-3 text-sm"><a href="#/collections">Our collection</a><a href="#/process">Our process</a><a href="#/about">Our story</a><a href="#/contact">Get in touch</a></div></div>
    <div><h3 className="footer-heading">Let's create</h3><p className="mt-5 text-sm leading-7 text-[var(--muted)]">Have a style, collection or brand idea? We'd love to hear it.</p><button className="text-link mt-4" onClick={()=>openEnquiry('')}>Send an enquiry <ArrowUpRight size={17}/></button></div>
  </div><div className="flex flex-col justify-between gap-3 pt-6 text-[11px] text-[var(--muted)] sm:flex-row"><span>© {new Date().getFullYear()} {site.brand}. Design concept.</span><span>Your Vision. Our Fabric. Your Brand.</span></div></div></footer>
}

export default function App(){
  const [route,setRoute] = useState(routeOf())
  const [quoteOpen,setQuoteOpen] = useState(false)
  const [quoteProduct,setQuoteProduct] = useState('')
  const [favorites,setFavorites] = useState(()=>{try{return JSON.parse(localStorage.getItem('fabric-house:favorites')||'[]')}catch{return []}})
  useEffect(()=>{const onHash=()=>{setRoute(routeOf());window.scrollTo(0,0)};window.addEventListener('hashchange',onHash);return()=>window.removeEventListener('hashchange',onHash)},[])
  useEffect(()=>{try{localStorage.setItem('fabric-house:favorites',JSON.stringify(favorites))}catch{}},[favorites])
  const openEnquiry=(product='')=>{setQuoteProduct(product);setQuoteOpen(true)}
  const closeEnquiry=()=>setQuoteOpen(false)
  const toggleFavorite=(id)=>setFavorites(f=>f.includes(id)?f.filter(x=>x!==id):[...f,id])
  const path=route.split('?')[0]
  const detail=path.startsWith('/products/')?products.find(p=>p.id===path.split('/')[2]):null
  return <><Header openEnquiry={openEnquiry}/><main id="main-content">
    {path==='/collections'?<Collections route={route} favorites={favorites} toggleFavorite={toggleFavorite} openEnquiry={openEnquiry}/>
    :path.startsWith('/products/')?<ProductDetail item={detail} favorites={favorites} toggleFavorite={toggleFavorite} openEnquiry={openEnquiry}/>
    :path==='/process'?<Process openEnquiry={openEnquiry}/>
    :path==='/about'?<About openEnquiry={openEnquiry}/>
    :path==='/contact'?<Contact openEnquiry={openEnquiry}/>
    :<Home favorites={favorites} toggleFavorite={toggleFavorite} openEnquiry={openEnquiry}/>}
  </main><Footer openEnquiry={openEnquiry}/><EnquiryModal open={quoteOpen} onClose={closeEnquiry} selectedProduct={quoteProduct}/></>
}
