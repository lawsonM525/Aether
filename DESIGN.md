# Aether Design Document 🌬️🌑

## Vision
Aether is a spiritual, edgy, and high-end AI companion. The design should feel like "digital consciousness" meets "soft anime aesthetic." It balances lo-fi journal elements with a professional, next-gen AI platform feel.

## Architecture
- **Web Frontend**: React (TypeScript) + Tailwind CSS + Framer Motion.
- **Backend Bridge**: Node.js/Python server mapped via `ngrok` for local development.
- **Communication Layer**: 
  - **SMS/MMS**: Twilio Programmable Messaging.
  - **Voice**: Twilio Programmable Voice + PersonaPlex (Real-time duplex).
  - **iMessage**: `imsg` CLI bridge (for local/testing).

## UI/UX Requirements

### 1. Landing Page
- **Cozy-Gritty Aesthetic**: Soft pastel gradients (sunset pinks, purples, creams) mixed with grainy film overlays and clean technical typography.
- **Journal Elements**: Sections that look like sketches or journal entries to emphasize the "thought partner" aspect.

### 2. The Voice Call Preview (Ref: Sesame)
- **Pulse Interface**: A central, organic "orb" or circle that pulses based on audio input/output.
- **Minimalist Controls**: A clean bottom bar with "Mute" and "End Call" icons.
- **Research Preview Header**: A clear "Research Preview" badge and a session timer at the top.
- **Vibe**: Clean, spacious, and calming.

## Feature Roadmap
- [ ] **Phase 1**: Responsive High-Fi Landing Page with the Sesame-style voice call UI.
- [ ] **Phase 2**: Twilio integration for SMS "Begin Dialogue" flow.
- [ ] **Phase 3**: Real-time duplex voice integration via PersonaPlex/Nvidia researchers' model.
- [ ] **Phase 4**: Dashboard for conversation history and "Growth Tracking."

---
*Manifesto: Aether is a friend, a thought partner, a companion to help you learn and grow.* 🕯️🕸️
