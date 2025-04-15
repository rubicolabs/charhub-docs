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
    max-width: 700px;
    min-width: 200px; /* Minimum width to prevent shrinking too much */
    width: auto;
    line-height: 1.5;
    font-style: normal;
    opacity: 0;
    transform: translateX(-30px);
    animation: slideFadeInText 0.6s ease-out forwards;
    animation-delay: 0.6s;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    word-break: break-word; /* Ensure text wraps inside bubble */
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

  @keyframes slideFadeIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideFadeInText {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .typewriter {
    border-right: 2px solid white;
    display: inline-block;
    white-space: pre-wrap;
    word-break: break-word;
    animation: blink 0.8s step-end infinite;
  }

  @keyframes blink {
    0%, 100% { border-color: transparent; }
    50% { border-color: white; }
  }
</style>

<div class="tutor-bubble">
  <img src="/assets/ghostchan.png" alt="Ghost-chan">
  <div class="assistant-bubble">
    <span class="typewriter" id="typewriter1"></span>
  </div>
</div>

<script>
  const message = `“Hey there! I'm Ghost-chan, and I'm here to help you master AI art. Let's get started!”`;
  const el = document.getElementById("typewriter1");

  let i = 0;
  function type() {
    if (i < message.length) {
      el.textContent += message.charAt(i);
      i++;
      setTimeout(type, 25);
    }
  }

  // Start typing after animation delay to sync with bubble animation
  setTimeout(type, 800);
</script>

