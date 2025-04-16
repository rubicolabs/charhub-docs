---
layout: default
title: AI Art
nav_order: 10
---


<style>
  .tutor-bubble {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin: 2rem 0;
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
    padding: 1rem;
    max-width: 700px;
    width: fit-content;
    line-height: 1.5;
    font-style: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    word-break: break-word;
    position: relative;
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
</style>

# AI Art Generation

<div class="tutor-bubble">
  <img src="/assets/ghostchan.png" alt="Ghost-chan">
  <div class="assistant-bubble">
    “Hey there! I'm <strong>Ghost-chan</strong>, and I'm here to help you master AI art. Let's get started!”
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
    “More detail means better results! Think: Who is the subject? What are they wearing? Where are they?”
  </div>
</div>

---

## Negative Prompt

Negative prompts define what you do *not* want present in the image. These can range from styles, colors, to unwanted objects.

**Examples**: `gold`, `cgi`, `earrings`, `watermark`

<div class="tutor-bubble">
  <img src="/assets/ghostchan.png" alt="Ghost-chan">
  <div class="assistant-bubble">
    “Use negative prompts to avoid things like odd fingers, watermarks, or styles you don't want!”
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
    “Use weights to emphasize or tone down elements. It’s like turning a dial up or down on certain features!”
  </div>
</div>

---

## Upscaling / Edit

Once your image is generated, you can use the **Upscale** button to increase the resolution of your image.

If you like the image but want minor changes, use the **Edit** feature to tweak the prompt and regenerate a similar image.

<div class="tutor-bubble">
  <img src="/assets/ghostchan.png" alt="Ghost-chan">
  <div class="assistant-bubble">
    “The Edit tool is awesome when it’s *almost* right—just fine-tune and regenerate!”
  </div>
</div>

