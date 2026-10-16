# How to Publish Your Website on GitHub Pages — 3 Easy Options

Your website is ready in the folder: **`computer-saksharata-mission/`**
(it contains `index.html`, `README.md`, `.nojekyll`)

Pick **ONE** of the options below. Option A is the easiest — no coding at all.

---

## ✅ OPTION A — Do it yourself on github.com (easiest, ~2 minutes)

### 1. Sign in (or create a free account)
Go to **https://github.com** → *Sign up* if you don't have an account (choose the **Free** plan).

### 2. Create the repository
1. Click the **+** icon (top-right) → **New repository**
2. Repository name: `computer-saksharata-mission`
3. Select **Public** (GitHub Pages needs Public on the free plan)
4. ✅ Check **Add a README file**
5. Click **Create repository**

### 3. Upload the website files
1. On your new repo page, click **Add file** → **Upload files**
2. Drag the three files from the `computer-saksharata-mission/` folder into the box:
   - `index.html`
   - `README.md`
   - `.nojekyll`  *(hidden file — if you can't see it, that's fine, it's optional)*
3. Click **Commit changes**

### 4. Turn on GitHub Pages
1. Go to **Settings** (tab at the top of the repo)
2. Click **Pages** in the left sidebar
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** · folder: **/ (root)**
4. Click **Save**

### 5. Done! 🎉
Wait 1–2 minutes, then your site is live at:

**`https://YOUR-USERNAME.github.io/computer-saksharata-mission/`**

(Find your exact link under Settings → Pages → "Your site is live at …")

---

## 🤖 OPTION B — I publish it for you automatically

1. Go to **https://github.com/settings/tokens** (sign in first)
2. Click **Generate new token** → **Generate new token (classic)**
3. Settings:
   - Note: `publish-website`
   - Expiration: **7 days** (short is safer)
   - Scopes: check **`repo`** ✅  (that's all)
4. Click **Generate token** and **copy the token** (starts with `ghp_…`)
5. Paste it in the chat with your **GitHub username**

I will then:
- create the repository `computer-saksharata-mission`,
- upload the website files,
- enable GitHub Pages,
- give you the live URL.

🔒 After I confirm it's live, **delete the token**: same page → token → Delete.
(Nothing else on your GitHub is ever needed.)

---

## 💻 OPTION C — Git commands on your own computer

Open a terminal **inside the `computer-saksharata-mission/` folder**, then:

```bash
git init
git add .
git commit -m "Computer Saksharata Mission website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/computer-saksharata-mission.git
git push -u origin main
```

*(Create the empty repository on github.com first — Step 2 of Option A, but uncheck
the README box so the push works. GitHub will ask for your username and a token/password.)*

Then follow Step 4 of Option A to enable GitHub Pages.

---

## Later: updating the site
Just edit `index.html` and upload it again (drag-and-drop over the old file on github.com,
or `git add . && git commit -m "update" && git push`). The live site updates in ~1 minute.

**Tip:** After publishing, send me the live link and any photos — I'll update the gallery
and set the correct URL in the README.
