# Pictureframes Relay

Real-time collaborative folders for Obsidian, synced through the pictureframes
relay network. A fork of [Relay](https://github.com/No-Instructions/Relay)
(MIT) pointed at our self-hosted server — no subscription, no storage limits.

## Install

1. In Obsidian: **Settings → Community plugins**, install and enable **BRAT**
   (Beta Reviewers Auto-update Tool).
2. In BRAT settings: **Add beta plugin** → enter `PicoBEAN-eng/pictureframes-relay`
   → Add. Enable **Relay** when prompted (or in Community plugins).
3. Open the Relay settings tab and **sign in with Google** — any gmail works.
4. Paste the **Share Key** you were given. The shared folder appears in your
   vault and stays in sync.

Updates install automatically via BRAT.

## What it talks to

All sync goes to `relay.08d5743r4qj3w.com` — a private, self-hosted server.
Access is invitation-only; signing in without a Share Key gets you an empty
lobby. Document content is never sent to any third-party service.
