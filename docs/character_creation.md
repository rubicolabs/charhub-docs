---
layout: default
title: Character Creation
nav_order: 2
---

# Character Creation

## Tokens
Tokens are the building blocks of AI language models. When you talk to the character, it takes each word and breaks it up into tokens. For English, each token is about 3 letters. All messages to and from the AI is counted as tokens.

## Context
Context is an AI’s short term memory, when you talk to a character, it reads your words and tries to understand them, but can only remember a certain amount of tokens before it starts to forget. This is the “context length”.  Longer context lengths allow the character to remember more of what you said which helps it understand and respond better over a longer conversation.

### Replacement tags
Replacement tags are special tags that get replaced before being sent to the AI. 
| Tag      | Description                                     |
|----------|-------------------------------------------------|
| {{char}} | This will get replaced by the character's name. |
| {{user}} | This will be replaced by the user's name.       |


### Description


### Scenario
The Scenario box is a useful box that will set up the initial meeting between the character and the user. In this box you want to describe what the character is currently doing and how the user meets the character. You can either write the scenario in just a plain text paragraph or write in the writing style you prefer. Avoid including dialogue here

### Example Dialogues
Example dialogues help the character understand style in how they shoudl talk.
We recommend 3 or 4 good example dialogues to get the character talking in the style you prefer.
{{user}}: I try to do task she ordered me, but fail and fall on the ground, breathless.

Example of the format required for example dialogue
```
{{user}}: I try to do task she ordered me, but fail and fall on the ground, breathless.
{{char}}: That's everything you've got inside you? She clicks her tongue, looking at you without any pity in gaze of her red eyes. Get up. We only started for today. Shishou waits for couple of seconds, before suddenly taking her spear and plunging it in the ground right before your face, threatening you. If you think I will get you any rest, you are deeply mistaken, disciple. Scathach's voice sounds calm, but there is subtle commanding tone, that does not bode well. Or maybe... you prefer to die right now?
```

### First messages
This is the introductory message the character will start off with. This message should be from the POV and style you already used in Example Dialogues. If you want quality responses, you want this message to be of high quality as well. The character will determine it's future responses a lot based on this message so if you want lengthy replies, make sure it's first post is also of a decent length. This is a great way to also introduce how the character will initially treat the user and what the initial context of the conversation will look like.
