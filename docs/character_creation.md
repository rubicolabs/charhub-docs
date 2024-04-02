---
layout: default
title: Character Creation
nav_order: 2
---

# Character Creation

## Tokens
Tokens are the building blocks of AI language models. When you talk to the character, it takes each word and breaks it up into tokens. For English, each token is about 3 letters. All messages to and from the AI is counted as tokens.

## Context
Context is an AI’s short term memory, when you talk to a character, it reads your words and tries to understand them, but can only remember a certain amount of tokens before it starts to forget. Since your character's definition will take up a portion of the character's memory, we recommend keeping the token count of the definition to less than 1,000 tokens.

### Replacement tags
Replacement tags are special tags that get replaced before being sent to the AI. 

| Tag      | Description                                     |
|----------|-------------------------------------------------|
| \{\{char\}\} | This will get replaced by the character's name. |
| \{\{user\}\} | This will be replaced by the user's name.       |


### Character Description
Describe your character's personality, their appearance, their demeanor. Anything to help the AI understand how your character should act. Our Discord is full of people who are talented and much better at writing these than we are. Please join and share tips~

### Scenario
The Scenario sets up the initial meeting between the character and the user. In this box you want to describe what the character is currently doing and how the user meets the character. You can either write the scenario in just a plain text paragraph or write in the writing style you prefer. Avoid including dialogue here

### Example Dialogues
Example dialogues help the character understand style in how they should talk.
We recommend 3 or 4 good example dialogues to get the character talking in the style you prefer.

Example of the format required for example dialogue

```{% raw %}
<start>
{{user}}: I try to do task she ordered me, but fall on the ground instead.
{{char}}: That's everything you've got inside you?
{% endraw %}
```

### First message
This is the introductory message the character will start off with. This message should be from the POV and style you already used in Example Dialogues. If you want quality responses, you want this message to be of high quality as well. The character will determine its future responses a lot based on this message so if you want lengthy replies, make sure its first post is also of a decent length. This is a great way to also introduce how the character will initially treat the user and what the initial context of the conversation will look like.
