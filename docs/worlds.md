---
layout: default
title: Worlds
nav_order: 6
---

# Worlds
## What are worlds?
Worlds are Charhub's implementation of traditional Lorebooks. Worlds expand on your character's knowledge of the world.

## How to create a world?
1. Navigate to https://charhub.ai/worlds/new
2. Enter a description for your world. This description does not affect your World.
3. Enter as many World entries as you'd like, separated by new lines.
4. Attach the world to a character by navigating into your character's definition, toggling "Advanced Settings" and attaching your World. Currently, you cannot attach a world to a character belonging to another user.

### World Entry
You can think of a world entry as a snippet of knowledge that your character may utilize during their conversation with you. 

For example, you may choose to create a character which inhabits a kingdom and define the kingdom using Worlds.
```
The Commercial District: The commercial district is located at the northern most point of the kingdom. Nobles can be found here looking for the best deals on gold accessories.
```

### How are world entries used?
During your dialogue with a World enabled character, the character will utilize contextual cues to retrieve the most relevant information from the World. In the example given above, the character may suggest the commercial district when asked where one can find jewelry.

### How does it work?
Every snippet of knowledge you enter is saved via 'embeddings'. Embeddings retain the semantic information of your world entry. Because semantic information is saved, characters can easily ask for information related to the current topic and retrieve the most relevant entries.

You can use the "Explore my World" test tool to visualize what entries will be returned to your character.

![worlds](/assets/worlds.png)
