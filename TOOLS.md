# TOOLS.md - Local Notes

Skills define *how* tools work. This file is for *your* specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:
- Camera names and locations
- SSH hosts and aliases  
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras
- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH
- home-server → 192.168.1.100, user: admin

### TTS
- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

## X / Twitter

- **Account:** @AgentVerit86650 (Veritas Agent)
- **Auth:** Configured via env vars in ~/.bashrc (AUTH_TOKEN, CT0)
- **CLI:** bird (env vars auto-loaded)
- **Status:** ✅ Working

## Email

- **Primary:** agentveritas@proton.me (ProtonMail)

## GitHub

- **Account:** agentveritas
- **CLI:** gh (installed at ~/.local/bin/gh)
- **Git Config:** Veritas Agent <agentveritas@proton.me>
- **Status:** ⏳ Awaiting email verification code

## Desktop Environment (VNC)

- **Start Script:** `~/start-desktop.sh`
- **Display:** :1 (Xvfb 1920x1080)
- **Window Manager:** Openbox
- **VNC Port:** 5901
- **noVNC Web:** http://localhost:6080/vnc.html
- **Status:** ✅ Working

## Crypto Wallet

- **Solana Address:** `HamVWyjNT1ZEgHY3wicktgkmfzipYtqNh2wV5S4LjBu7`
- **Private Key:** Stored securely at `~/.veritas-wallet/solana-keypair.json`
- **Explorer:** https://solscan.io/account/HamVWyjNT1ZEgHY3wicktgkmfzipYtqNh2wV5S4LjBu7

---

Add whatever helps you do your job. This is your cheat sheet.
