---
layout: default
title: AI Art
nav_order: 10
has_toc: false
---

<style>
  .tutor-bubble {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin: 2rem 0;
    opacity: 0;
    transform: translateX(-30px);
    animation: slideFadeIn 0.6s ease-out forwards;
  }

  .tutor-bubble:nth-of-type(2) { animation-delay: 0.2s; }

  .tutor-bubble img {
    width: 120px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .assistant-bubble {
    background-color: #6d4ea0;
    color: #ffffff;
    border-radius: 1rem;
    border-bottom-left-radius: 0;
    position: relative;
    padding: 1rem;
    width: auto;  /* Let the width grow based on the text */
    max-width: 700px;  /* Still limit max width */
    line-height: 1.5;
    font-style: normal;
    overflow: hidden;
    opacity: 0;
    transform: translateX(-30px);
    animation: slideFadeInText 0.6s ease-out forwards;
    animation-delay: 0.6s;
    white-space: normal; /* Ensure wrapping */
    word-wrap: break-word; /* Break words if they are too long */
    overflow-wrap: break-word; /* Break word at the end of line */
  }

  .assistant-bubble::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 20px;
    height: 20px;
    background-color: #6d4ea0;
    clip-path: polygon(0 0, 100% 0, 0 100%);
  }

  /* Slide in animation for tutor-bubble */
  @keyframes slideFadeIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Slide in animation for assistant-bubble */
  @keyframes slideFadeInText {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Typewriter animation */
  .typewriter {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid white;
    animation:
      typing 2.5s steps(60, end) 0.6s forwards,
      blink 0.8s step-end infinite;
  }

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink {
    from, to { border-color: transparent }
    50% { border-color: white }
  }
</style>

# AI Art Generation

<div class="tutor-bubble">
  <img src="/assets/ghostchan.png" alt="Ghost-chan">
  <div class="assistant-bubble">
    <span class="typewriter">
      “Hey there! I'm <strong>Ghost-chan</strong>, and I'm here to help you master AI art. Let's get started!”
    </span>
  </div>
</div>
