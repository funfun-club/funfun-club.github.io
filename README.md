# 面白い活動 — Design System

> **Omoshiroi Katsudou** — a 2-person YouTube / SNS creator duo inspired by long-form travel variety shows , with side content of everyday小ネタ. This site is the hub of their activity.

---

## Sources given

- **GitHub repo:** `funfun-club/funfun-club.github.io` @ `main` — currently empty (23-byte placeholder README). No existing codebase, assets, or style to inherit from.
- **Logo:** None provided. Placeholder wordmark + mark generated (`assets/logo-wordmark.svg`, `assets/logo-mark.svg`) — flag for replacement.
- **Fonts:** No licensed files provided. All fonts are Google Fonts substitutions — see [Fonts](#fonts-substituted) below. Flag for replacement.

## Product surfaces

Just one, for now: a **public-facing homepage (広報ページ)** that links out to the group's YouTube, X, Instagram, TikTok. No app, no dashboard, no docs. The site is a hub, not a product.

## Index

| File | What it's for |
|---|---|
| `index.html` | 公開サイトの本体（GitHub Pages で配信） |
| `colors_and_type.css` | Core tokens — colors, gradients, type stacks, spacing, shadows |
| `assets/` | Logo marks, placeholder illustrations, icons, マーク SVG（音符・コード括弧など） |
| `fonts/` | Any self-hosted font files (currently empty — using Google Fonts CDN) |
| `preview/` | Design-system cards shown in the Design System tab |
| `ui_kits/website/` | React component recreations of the public website |
| `.nojekyll` | GitHub Pages の Jekyll を無効化（`_` 始まりの `preview/_base.css` を配信するため） |
| `SKILL.md` | Skill manifest for cross-project reuse |

## 公開サイト (`index.html`)

GitHub Pages で `https://funfun-club.github.io/` にそのまま配信される 1 ページ構成。

**セクション構成（上から順）**

1. **Nav** — ロゴ + ページ内リンク（近況報告 / 動画 / メンバー / SNS）。720px 以下でハンバーガーメニューに切り替わる（CSS のみ、JS 不要）
2. **Hero** — グラデーション背景 + 大見出し + WATCH NOW CTA + 「絶賛鋭意作成中（まだデモサイト）」ステッカー。装飾マークは音符と `</>` コード括弧
3. **News (`#news`)** — 近況報告リスト（日付 + タイトル + 本文）
4. **Videos (`#videos`)** — YouTube 動画カードグリッド 4 枚（プレースホルダ）
5. **Members (`#members`)** — メンバー紹介 2 枚（MEMBER 01 実況担当 / MEMBER 02 解説担当 — 写真・紹介文はプレースホルダ）
6. **SNS (`#sns`)** — YouTube / X / Instagram / TikTok のリンクカード
7. **Footer** — ロゴ + コピーライト

**差し替え予定の TODO**

- 各 SNS の実アカウント URL とハンドル名（現在は `@placeholder`）
- 動画カードのサムネイル・タイトル・エピソード情報
- メンバーの写真・名前・紹介文（`MEMBER A` / `MEMBER B` プレースホルダ）
- 近況報告の実コンテンツ

## ローカル確認

```sh
python3 -m http.server 8765
# → http://localhost:8765/
```

---

## CONTENT FUNDAMENTALS

**Voice.** ユーモア＋ツッコミ系. The group is two dudes on a loosely-planned adventure; the site should feel like the voiceover テロップ that shows up on screen when one of them says something dumb. Short, punchy, with a straight-man reaction. Written Japanese-first with small English accents (bilingual sprinkles — headings, UI labels, captions).

**Casing & polite register.**
- **Japanese:** タメ口, not ですます. But not aggressive — friendly タメ口, like talking to your 仲間.
- **English:** ALL CAPS for テロップ-style accents ("COMING SOON", "WATCH NOW"), sentence case for running copy. Never Title Case.

**Emoji.** Sparingly. No generic 🎉✨🔥. If emoji is used, it should be the kind of kaomoji / text-emoji you'd see on 2ch or early Twitter: `(^ω^)`, `( ˘ω˘ )`, `www`, `！？`. Prefer typographic exclamation: `！？`, `〜〜〜！`, `…`.

**Punctuation as texture.** 長音 `〜`, 中黒 `・`, 二重感嘆 `！！`, `！？`. These carry most of the tone. Use them.

**Examples.**

| Good | Bad |
|---|---|
| 「今日も適当に旅します」 | 「本日も素敵な旅をお届けします」 |
| 最新動画〜！ | Latest Videos |
| 次どこ行く？ 〜決めてない〜 | Upcoming Trip: TBD |
| `MEMBER 01 / ツッコミ担当` | `Member: The Straight Man` |
| WATCH NOW ▶ / みてってー | Click here to watch |

**Copy rhythm.** Favor two-beat constructions: `短く、強く。` / `行って、帰る。` / `適当、でも全力。` One line of setup, one line of 落ち — like a テロップ.

---

## VISUAL FOUNDATIONS

The visual system is **Heisei-retro × cyber-gradient** — late-90s / early-2000s Japanese TV variety aesthetic, modernized with saturated gradient washes. Think: VHS case art, バラエティ番組 テロップ, hanko stamps, dot-matrix printer output, VHS menu screens.

### Colors

- **Ink** `#0E0B1F` (near-black with violet tint) and **Paper** `#F7F1E4` (warm cream, like a VHS manual) are the two grounds. Everything sits on one or the other.
- **Signal accents** — used loud: magenta `#FF2E88`, cyan `#22E8FF`, violet `#9B4CFF`, yellow `#FFD63A`, lime, orange, red. These are the テロップ palette.
- **Gradients** are reserved for: hero washes, ribbon banners, CTA buttons. Not for body backgrounds or card fills. Recipe defaults in `--grad-hero` (135° violet → magenta → cyan), `--grad-ribbon` (horizontal), `--grad-sunset` (yellow → magenta).

### Typography

- **Display (テロップ):** Reggae One — thick, rounded, built-in outline feel.
- **Brush (筆文字):** Yuji Mai / Yuji Syuku — for special moments, episode titles, quotes.
- **Sans (body):** Zen Kaku Gothic New — clean, legible JP+EN.
- **Pixel accent:** DotGothic16 — for captions, timestamps, episode numbers, "MEMBER 01".
- **Mono:** JetBrains Mono — code only.

Display headings often have an **ink-stroke outline** (`--text-stroke-ink`) and optionally a colored fill on gradient backgrounds. Brush is used *alone*, never combined with other display faces in the same block.

### Backgrounds

Three modes:
1. **Paper ground** — default, warm cream with very subtle paper-fiber noise.
2. **Ink ground** — deep violet-black, used for hero and video-forward sections. Pair with neon accents.
3. **Full-bleed image** — always desaturated slightly, warm-leaning (think VHS color cast), with a hard ink border.

No soft blurred bokeh. No abstract 3D blobs. No liquid gradients. When gradients appear, they're **sharp and banded** — more sunset poster than Material You.

### Corners & borders

- Default corner radius: **4px** (`--r-1`). Crisp.
- Cards: **8–14px** (`--r-2`, `--r-3`).
- Badges / pills: `--r-pill`.
- **Borders are heavy.** 2px ink border on paper cards is default. 3px for feature cards. Borders never disappear on hover — they intensify.

### Shadows / elevation

**No Material soft shadows.** Always hard-offset, printed-テロップ style:
- `--shadow-hard`: `4px 4px 0 var(--ink)` — default card
- `--shadow-hard-lg`: `8px 8px 0 var(--ink)` — feature
- `--shadow-cyan` / `--shadow-magenta` — colored offset for special cards
- `--shadow-glow`: soft violet glow — only on dark ground, for neon feel

### Hover & press

- **Hover:** the hard shadow shifts — element nudges `-2px, -2px` and shadow grows to `6px 6px 0` — like lifting a sticker off paper. Optionally the bg flips to yellow with ink text.
- **Press:** shadow collapses to `0 0 0` and element moves into its shadow position — like pressing a button down.
- **Links:** default underlined, on hover the bg fills yellow behind the text.

### Animation

- Default easing: `cubic-bezier(0.2, 0.9, 0.3, 1.2)` — slight overshoot, like a テロップ snapping in.
- Durations: `120ms` for micro (hover, press), `300ms` for entries, `600ms` for テロップ reveals.
- **Signature moves:** text slides in from offscreen with a skew (`skew(-6deg)` → `skew(0)`), テロップ stars burst-scale on appear, video thumbnails have a subtle VHS-jitter on hover.
- No fade-only anims. No continuous loops except the SNS pulse and the "● REC" indicator on videos.

### Transparency & blur

Use rarely. **When used:** always behind text on top of imagery, as a solid-color 80% rectangle (never backdrop-blur glassmorphism). Heisei graphics are opaque and confident.

### Layout rules

- Grid: 12-column on desktop, 4-column on mobile, 24px gutter.
- Max content width: `1280px`; hero/full-bleed can go edge-to-edge.
- Sticky top nav with a thin magenta rule underneath.
- **Signature rhythm:** alternate ink sections and paper sections vertically. Never two of the same ground back-to-back.

### Imagery treatment

- Slightly warm color cast (VHS-leaning).
- Always bordered in ink (2–3px) OR placed on a ribbon background.
- Never circular-cropped for photos (only for member 顔写真 stamps).
- Grain is OK. Heavy filter effects aren't — trust the content.

---

## ICONOGRAPHY

**No custom icon set yet.** Icons are used sparingly — this isn't a dashboard. For the handful needed (SNS brands, play/arrow, menu), we use:

- **SNS brand marks:** SVGs for YouTube, X (formerly Twitter), Instagram, TikTok — stored in `assets/icons/social/` as inline SVG for easy recoloring. All drawn in the brand's ink color at 1.5px stroke or solid fill.
- **UI icons:** **Lucide** via CDN (`https://unpkg.com/lucide@latest`) for small utility needs — arrow-right, menu, external-link. 1.75px stroke, `currentColor`, 20px default size.
  - Substitution flag: if the brand later wants custom icons, Lucide is a stand-in.
- **Decorative marks:** ✴ burst stars, ◉ hanko circles, ❤ / ★ are drawn as SVG assets (in `assets/marks/`), not emoji. These are core visual motifs (appear on hero, member cards, telop stamps).
- **Emoji:** not used in UI chrome. OK inside user-facing body copy when punctuating a joke, max 1 per paragraph.
- **Unicode as icons:** `▶` (play), `▪` (list bullet), `●` (REC), `➔`/`→` (flow) — encouraged, they feel Heisei-appropriate.

---

## Fonts (substituted)

All fonts currently loaded from Google Fonts. **Flagged for user confirmation / replacement:**

| Role | Using (Google Fonts) | Licensed alternative? |
|---|---|---|
| テロップ display | Reggae One | Consider DNP 秀英角ゴシック金 B or a bolder kaomoji-era face |
| 筆文字 brush | Yuji Mai / Yuji Syuku | Could swap for モリサワ 陸隷 or similar |
| JP sans body | Zen Kaku Gothic New | Fine as-is; also works with Hiragino Kaku Gothic |
| Pixel accent | DotGothic16 | Fine as-is |
| Mono | JetBrains Mono | Fine as-is |

**→ If you have brand-licensed fonts, drop `.woff2` files into `fonts/` and update the `@import` in `colors_and_type.css`.**

---

## Caveats for iteration

- Logo is placeholder (stamp-style 面 + 活 overlap with a burst star). Needs real wordmark + mark.
- No member photos, no show thumbnails — all placeholders.
- Color direction #4 was chosen (cyber gradient), which is slightly in tension with Heisei-retro; the system resolves this by treating gradients as テロップ ribbons rather than ambient washes. Worth confirming it feels right.
