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
    width: fit-content;
    line-height: 1.5;
    font-style: normal;
    opacity: 0;
    transform: translateX(-30px);
    animation: slideFadeInText 0.6s ease-out forwards;
    animation-delay: 0.4s;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
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
    display: inline-block;
    border-right: 2px solid white;
    white-space: pre-wrap;
    overflow: hidden;
    animation: typing 3s steps(80, end) forwards, blink 0.8s step-end infinite;
  }

  @keyframes typing {
    from { max-width: 0; }
    to { max-width: 100%; }
  }

  @keyframes blink {
    0%, 100% { border-color: transparent }
    50% { border-color: white }
  }
</style>

<div class="tutor-bubble">
  <img src="/assets/ghostchan.png" alt="Ghost-chan">
  <div class="assistant-bubble">
    <div class="typewriter">
      “Hey there! I'm Ghost-chan, and I'm here to help you master AI art. Let's dive deep into how prompts and image settings affect your results, and how to use negative prompts, image conditioning, and editing to your advantage.”
    </div>
  </div>
</div>

