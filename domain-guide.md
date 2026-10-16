# 🌐 How to Add a Custom Domain to Your Website

**For: Computer Saksharata Mission — GitHub Pages site**
**Current address:** `https://jackdebasish.github.io/computer-saksharata-mission/`
**New address (example):** `https://www.computersaksharatamission.in`

> ⭐ **First, the honest advice:** your free `github.io` address **already works fine and is already on Google**. A custom domain is optional — it just looks more professional (e.g. on visiting cards and banners). If you want it, follow this guide. **Do it once, do it right** — switching domains twice confuses Google.

---

## PART A — Buy the Domain (20 minutes, one time)

### Where to buy (India-friendly, cheapest first)

| Website | .in price (approx.) | .com price (approx.) |
|---|---|---|
| **Hostinger.in** | ~₹700–900/year | ~₹900–1100/year |
| **BigRock.in** | ~₹800/year | ~₹1000/year |
| **GoDaddy.in** | ~₹800–1200/year | ~₹1000–1200/year |
| **Namecheap.com** | — | ~₹1100/year |

💡 Tips:
- **`.in` is best for a local institute** (and slightly cheaper). `.com` also works.
- Buy for **1 year** first. Ignore the extra paid add-ons (privacy protection is nice but not required).

### ✨ Recommended — domains with YOUR institute's name

*(Checked on 12 Oct 2026 — all appear FREE. Final confirmation happens at checkout.)*

| Priority | Domain | Why |
|---|---|---|
| 🥇 | **`computersaksharatamission.in`** | Your exact institute name, India-local — **best choice!** |
| 🥈 | `computersaksharatamission.com` | Same name, global `.com` (buy this TOO if budget allows — stops others from copying) |
| 🥉 | `computer-saksharata-mission.in` | Same name with hyphens (matches your Facebook/GitHub branding) |
| 4 | `computersaksharata.in` | Shorter, still has the name |
| 5 | `computersaksharata.com` | Shorter, global |

> 🗣️ When you say the domain on a phone call: *"computer saksharata mission dot in"* — no spelling confusion since it's the institute's own name. It also tells Google exactly who you are (brand SEO).

### Backup ideas (shorter)
- `csmhirakud.in` (initials + city)
- `computersaksharatahirakud.in` (name + city)

### 🛒 Steps
1. Open **hostinger.in** (or bigrock.in / godaddy.in)
2. Search your chosen name → **Buy** → checkout (use your email + phone)
3. Done! You now own the domain for 1 year.

---

## PART B — Connect the Domain to GitHub Pages (30 minutes)

You do **two things**: tell the domain where to go (DNS), and tell GitHub about the domain.

### Step 1 — Set DNS records at the domain seller

Log in to your domain seller → **Manage / DNS / Nameservers** → **Add records**:

**Record 1 (for the plain domain — "apex"):**

| Type | Name / Host | Value / Points to | TTL |
|---|---|---|---|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |

**Record 2 (for www):**

| Type | Name / Host | Value / Points to | TTL |
|---|---|---|---|
| CNAME | www | jackdebasish.github.io | 600 |

> 📝 If the seller asks "Name", type `@` for the A records and `www` for the CNAME.
> ⛔ If there are old/conflicting records (like a "parking page" A record), **delete them first**.

### Step 2 — Tell GitHub your domain

1. Open your repository → **Settings** (top menu)
2. Left menu → **Pages**
3. Under **Custom domain** → type: `www.computersaksharatamission.in` (YOUR domain, with www)
4. Click **Save**
5. ⏳ Wait for the **DNS check** (green ✅ "Your site is live…") — can take **10 minutes to 24 hours**

### Step 3 — Turn on the padlock (HTTPS)

1. Same Pages settings page
2. Tick ✅ **Enforce HTTPS** (wait for it to become clickable — up to 24 hours)
3. Done — your site will show the 🔒 padlock!

---

## PART C — Very Important: Tell Me After You Buy! 🔔

Changing the domain **changes every URL of your website**. Google and the site files must be updated together. After you buy the domain, message me:

> **"I bought the domain ________"**

and I will update **everything** in one go:
- [ ] All page addresses (canonical tags) in the 12 files
- [ ] `sitemap.xml` + `robots.txt`
- [ ] Social/Open Graph links
- [ ] The business listing schema (sameAs, URLs)
- [ ] A "redirect" page on the old address (so old links still work)
- [ ] New ZIP package ready to upload

### Your Google checklist (I'll walk you through each):
- [ ] **Google Search Console** → Add new property `https://www.computersaksharatamission.in` → verify → submit `sitemap.xml` → Request Indexing
- [ ] **Google Business Profile** → edit Website → put the new domain (after verification unlocks)
- [ ] Keep the OLD property in GSC for a few months (so Google follows the move)

---

## FAQ

**Q: Will my old `jackdebasish.github.io` link stop working?**
No — it keeps working. We'll add a redirect so visitors end up at the new domain.

**Q: Will I lose my Google ranking?**
Done correctly (Part C), the move is smooth — Google transfers everything. The best time to switch is **early** (like now), before many pages rank.

**Q: Can I use the domain for email (info@mydomain.in)?**
Google Workspace / Zoho Mail handle that — separate paid service (optional, ~₹150–700/month). Your current `csmhkd@gmail.com` keeps working fine.

**Q: What if I don't buy a domain?**
Totally fine! Your free `github.io` website works forever and is already on Google. This guide is optional.

**Q: Do I need to pay GitHub?**
No — GitHub Pages is free. Only the domain seller charges (~₹800/year).

---

## ⚠️ The Golden Rules

1. **Buy once, connect once** — don't keep switching domains (hurts Google ranking).
2. **Never buy "website builder" packages** from domain sellers (GoDaddy Website Builder etc.) — you don't need them; your site already exists.
3. **Set the 4 A records + 1 CNAME exactly** as in Part B — one wrong digit = site won't load.
4. **Enforce HTTPS** only after the DNS check turns green.

Good luck! 🚀
