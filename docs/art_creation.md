---
layout: default
title: AI Art
nav_order: 5
---
<button onclick="alert('JS is working!')">Test JavaScript</button>
# AI Art Generation
## Prompt
Prompts define what should be present in the generated image. Charhub automatically augments prompts to ensure that the final output image is of high quality. 

### Subject
When describing the subject of your image, be detailed and specific about what you would like. Think about their outfit, the environment, and the overall mood/lighting of the image.

**Okay**: "a wizard"

**Good**: "a mysterious wizard, evil smile, ragged pointy hat, intricate robe, long beard"

## Negative Prompt
Negative prompts define what you do not want present in the image. These can be range from styles, colors, to objects.

Some examples of negative prompt: gold, cgi, earrings, watermark

## Image Prompts
Image prompts affect the look & feel of the output image. For example, adding an image of an alleyway to your prompt would result in the AI incorporating elements of the alleyway within the final image. This may be color, style, or subject. The best results are achieved by defining it via prompt AND image prompts.

![image_prompts](/assets/tutorial.png)

## 🎨 Advanced Prompting Techniques  

### ⚖️ Adjusting Prompt Weight  

You can fine-tune the importance of a word using the format:  `(keyword: weight)`

- `(earrings:1.3)` → Makes earrings more prominent.  
- `(earrings:0.7)` → De-emphasizes earrings.  

A weight **greater than 1** increases importance, while **less than 1** decreases it.


## Upscaling / Edit
Once your image is generated, you can use the Upscale button to increase the resolution of your image.

If you overall like the image but there are some minor changes you'd like to make, try the Edit feature. It allows you to modify the prompt & negative prompt and regenerate the image in a similar style.
