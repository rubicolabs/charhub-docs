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
    <span class="typewriter">“Hey there! I'm <strong>Ghost-chan</strong>, and I'm here to help you master AI art. Let's get started!”</span>
  </div>
</div>

## Prompt

Prompts define what should be present in the generated image. Charhub automatically augments prompts to ensure that the final output image is of high quality.

### Subject

When describing the subject of your image, be detailed and specific about what you would like. Think about their outfit, the environment, and the overall mood/lighting of the image.

**Okay**: `a wizard`  
**Good**: `a mysterious wizard, evil smile, ragged pointy hat, intricate robe, long beard`

<div class="tutor-bubble">
  <img src="/assets/ghostchan.png" alt="Ghost-chan">
  <div class="assistant-bubble">
    <span class="typewriter">“More detail means better results! Think: Who is the subject? What are they wearing? Where are they?”</span>
  </div>
</div>

---

## Negative Prompt

Negative prompts define what you do *not* want present in the image. These can range from styles, colors, to unwanted objects.

**Examples**: `gold`, `cgi`, `earrings`, `watermark`

<div class="tutor-bubble">
  <img src="/assets/ghostchan.png" alt="Ghost-chan">
  <div class="assistant-bubble">
    <span class="typewriter">“Use negative prompts to avoid things like odd fingers, watermarks, or styles you don't want!”</span>
  </div>
</div>

---

## Image Prompts

Image prompts affect the look & feel of the output image. For example, adding an image of an alleyway to your prompt would result in the AI incorporating elements of the alleyway within the final image. This may be color, style, or subject. The best results are achieved by defining it via prompt AND image prompt.

![image_prompts](/assets/tutorial.png)

---

## 🎨 Advanced Prompting Techniques

### ⚖️ Adjusting Prompt Weight

You can fine-tune the importance of a word using the format: `(keyword: weight)`

- `(earrings:1.3)` → Makes earrings more prominent  
- `(earrings:0.7)` → De-emphasizes earrings  

A weight **greater than 1** increases importance, while **less than 1** decreases it.

<div class="tutor-bubble">
  <img src="/assets/ghostchan.png" alt="Ghost-chan">
  <div class="assistant-bubble">
    <span class="typewriter">“Use weights to emphasize or tone down elements. It’s like turning a dial up or down on certain features!”</span>
  </div>
</div>

---

## Upscaling / Edit

Once your image is generated, you can use the **Upscale** button to increase the resolution of your image.

If you like the image but want minor changes, use the **Edit** feature to tweak the prompt and regenerate a similar image.

<div class="tutor-bubble">
  <img src="/assets/ghostchan.png" alt="Ghost-chan">
  <div class="assistant-bubble">
    <span class="typewriter">“The Edit tool is awesome when it’s *almost* right—just fine-tune and regenerate!”</span>
  </div>
</div>

