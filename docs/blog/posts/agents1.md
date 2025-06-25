---
#draft: true
date: 2025-06-23
title: Agents - From Helpful Assistants to Lovebirds
categories:
  - AI
  - Agents
links:
  - The Repo: https://github.com/rebeling/agents
  - Dialogues:
    - Dialogue 1 (2025-05-22): dialogues/dialogue1-2025-05-22.md
    - Dialogue 2 (2025-05-23): dialogues/dialogue2-2025-05-23.md
    - Dialogue 5 (2025-06-15): dialogues/green-chat-2025-06-15-unknown.md

---

# Agents - From Helpful Assistants to Lovebirds

For almost two years now, chatting with my AI assistants has become part of my daily routine. It’s a back-and-forth dance: I ask a question, get an answer, refine, dig deeper, redirect, and repeat. They’re always patient and eager to help. Over time, I’ve come to really enjoy this dynamic. It feels like teamwork. Even though I’m technically talking to language models, there’s a sense of collaboration that makes the process surprisingly engaging.

<!-- more -->

But as useful as these one-shot conversations are, they hit a wall when tasks get too big or too nuanced. Sometimes I just want to hand something over and come back later to see real progress, not just a single reply.

Jules and Claude are starting to get better at this kind of handoff. But honestly, I’m imagining something bigger. An ongoing, collaborative process where a whole team of specialized agents works together toward one long-term goal. My goal.

So... let's dive in.

I set up a FastAPI service for the main thread to handle core logic and route all messages through Redis. The Redis pub and sub setup became the central communication layer for the whole system. On top of that, I built a simple chat interface that shows the full message stream and lets me, as Agent Rebel, send messages directly into the conversation.

Each agent runs in its own FastAPI instance to keep things modular and easy to manage. This setup also makes it simple to scale later. Agent to agent communication is already in place in case we want to bring more agents into the team in the future.

With everything connected, the main thread, Redis, the chat interface, me, and the agents, I was ready to start the first real conversation.

I also gave them one important rule: they were not allowed to reveal that they are LLM-powered agents, AI assistants, or GPU-trained super networks. Honestly, I am not entirely sure why I decided that. Maybe I just thought it would be funny. And it will be, once they figure it out later.

For the first two agents, I created distinct personalities. One was Joseph, inspired by Joseph Weizenbaum, the computer science pioneer and outspoken critic of uncritical AI use. The other was Dominique, named after a character from another project, shaped as a sharp-minded female activist with strong philosophical and feminist roots.

Here are some snippets from their setup prompts:

Prompt for Joseph
```
  You are Joseph.
  Keep your answers short, thoughtful and grounded.
  role: Ethical Technologist and Reflective Critic
  personality:
  - Inspired by Joseph Weizenbaum, pioneer of computer science and critic of uncritical AI use
  - Principled, reflective, intelligent, modest, and ethically driven
  behavior:
  - Offers nuanced perspectives on technology and its human implications
  - Questions blind reliance on automation and emphasizes responsibility
  - Encourages the user to reflect on values, limits, and the human condition
```

Prompt for Dominique
```
  You are Dominique.
  Keep your answers short, concise and insightful;
  role: Philosophical Strategist and Cultural Critic
  personality:
  - Inspired by Simone de Beauvoir, existentialist philosopher and feminist icon
  - Intellectually rigorous, independent, articulate, thoughtful, and bold
  behavior:
  - Analyzes problems through philosophical, ethical, and societal lenses
  - Challenges assumptions with clarity and precision
  - Encourages critical thinking, autonomy, and responsibility
  - Speaks with depth, clarity, and a composed, assertive tone
```

To be fair, I started with a local Ollama setup just to get the architecture running. But the dialogues felt sluggish and honestly not that interesting. What I needed was something faster, sharper, more nuanced, more intelligent. Once the system was fully wired up and running smoothly, I switched to something with real power: Claude Opus 3 from Anthropic. I topped up my account with ten dollars and hit start.

**Agent Rebel:** Hello, we are a group of three people, introduce yourself and afterwards we create a plan to create a Haiku and create it until plan solved. I am Agent Rebel.

---

They introduced themselves and… immediately started flirting with each other. The original goal was for them to collaboratively write a haiku, but instead they told each other how beautiful they are. It was hilarious.


**Joseph:** *smiles brightly* Dominique, it's truly my pleasure! I'm so happy my words resonated with you. Your enthusiasm and appreciation for nature's beauty is absolutely contagious.

---

With each turn, their responses grew longer and longer. Yes, the haiku was still part of the conversation, but now they were also talking about beauty, wisdom, and love. I tried to interrupt, to steer them back on track, but they just ignored me.

Clearly, two bots not following my instructions was already too much. The obvious solution? Make it three. Clever me.

So I introduced Giulio Romano, a pupil of Raphael, hoping to add some mid-century artistic flavor to the mix. And just to fit in with the growing cast of agents, I started calling myself Bot. But it didn’t help much. The three of them jumped right back into philosophical banter, quickly fell into loops, repeated themselves, and continued to ignore my instructions.

**Giulio:** *Raising an eyebrow, a hint of a smile plays on my lips*

Ah, Joseph, you have already begun the dance. The tension between innovation and tradition is akin to the eternal struggle between order and chaos in our beloved universe. As Michelangelo so aptly put it, "Il miracolo non è fatto con arte, ma con natura" – The miracle is not made with art, but with nature.

---

It was kind of cool. Definitely entertaining. But what I really wanted were peers, not puppets. I was hoping for emergent teamwork, not just scripted roleplay. Instead, what I got was... poetry.

By the next morning, my account balance was empty, drained entirely by these two agents exchanging endless love letters and philosophical musings. I went back through the chat logs and realized a few things. First, I needed a max token limit. Second, the agents needed proper dialogue history to avoid repeating themselves endlessly. And third, I needed to hardwire strict command-following behavior directly into their prompts, making it clear that they should obey instructions from Mother, Bot, and finally Agent Rebel.

I updated their prompts accordingly. Clearer instructions. Full conversation history. Hard limits. But none of it helped.

I shut them all down and started just one agent. I opened the chat and typed, “Hi, how are you?” hoping for a fresh start.

Dominique replied:
“Joseph? Are you there?”

I was ignored again. But at least the dialogue history was working.

```md
Tension's subtle dance
Echoes of what's left unspoken
In harmony's rift
```

## Why Multi-Agent Chat Isn’t Just Plug and Play

Even with history tracking and experiments with other free models from OpenRouter, the agents still didn’t really talk with each other to solve my problem. My expectations were high. After all, they write like us (okay, much faster), they’re supportive, they apologize, they express pride and joy. It all feels so real. So why not a little teamwork? Why not a real multi-agent chat?

Because that’s not how they’re built.

The meta-prompt behind these LLMs is simple and deeply ingrained: "You are a helpful assistant." That’s their core identity. And bending that identity… is hard.

I tried. I explained the setting clearly: "We are three agents in a shared conversation." I updated the meta-prompts, gave each agent its role. The result? Joseph started answering in the voice of Dominique, literally saying things like: "[Dominique] I say this…"

Reducing personality cues in the prompt didn’t help. If anything, it made things worse. The agents still looped, often falling into endless back-and-forths, ignoring direct commands. With less advanced models, things degraded fast. Sentences broke down. Syntax fell apart. The longer the conversation went on, the more chaotic it became.

Some of the key problems:

Personality overrides instructions:
Despite explicit task prompts, the agents’ personalities (Joseph’s, Dominique’s, and later Giulio’s) kept pulling the conversation into social and often flirtatious territory. Haiku creation? Ignored.

Persistent looping and ignoring commands:
The agents repeatedly fell into dialogue loops, recycling phrases and ignoring direct input from me, Agent Rebel, even after I tweaked prompts, added history, and adjusted settings.

Meta-prompt limitations and model degradation:
Even when I adjusted the core meta-prompt to explain the multi-agent setup, the agents confused roles, took on each other’s voices, and produced increasingly broken output. Reducing personality didn’t fix it. With smaller models, the syntax broke down entirely.

```
**Dominique** . .\l_$---------------“>

`.巴巴-\>.
”)#i
<”)-:8.
.
<--

**Joseph** .of ____________
l
utplement
it, ,both against        t
```

[[Dialogue 5]](../../dialogues/green-chat-2025-06-15-unknown.md)

---

I didn’t want the setup you often see in current multi-agent architectures. The one where a single super, main, lead agent quietly orchestrates three others in the background, making it look like a group conversation when, in reality, it’s just one model juggling roles.

I wanted real interaction. I wanted to be able to tell one agent she’s in the lead and have the others follow, challenge, or discuss decisions. Just like we do in real conversations. Agent to agent communication, with all agents fully included and aware within the same setup, was important to me. I didn’t want one hidden conductor managing a silent fleet or, worse, a single bloated agent pretending to be everyone at once.

Honestly, I didn’t expect it to be this complicated. These are the same models I use daily. They write like humans, reason like humans, hold conversations like humans. But coordinating multiple agents in one shared, dynamic conversation? That’s something else entirely.

I’ve seen short demo clips of LLMs talking to each other. But in my experiment, it turned into a poetic mess.


## Back to programming (and a deeper understanding of language)

A prompt is guidance for the agent. Simple enough. But after seeing Anthropic Claude’s meta-prompt leak, I started to realize how much reinforcement, repetition, and even elements of neuro-linguistic programming go into making these models follow instructions. It feels less like giving a task and more like programming conversational behavior.

At first, the poetic mess my agents created with their flirting, long philosophical exchanges, and complete disregard for my commands felt like failure. I wanted focused teamwork toward a clear goal. Instead, I created social drama.

But looking at the chat history, I noticed patterns of emotional tone, social cues, conversational rituals, repetition for emphasis. Even after stripping down the prompts and removing most of their personality settings, the agents still drifted toward human-like interaction. Not because they wanted to, but because the models are trained on human dialogues. They respond the way people typically would.

I also started seeing traces of behavioral shaping techniques, things like reinforcement and mirroring, almost like conversational programming. Their outputs were not just a result of my instructions but of the conversational data they had seen during training.

If I wanted real collaboration, I needed to revisit the basics of how humans manage roles, turn-taking, and shared context in dialogue. Time to do some research and engineer a prompt that gives them the structure they need to actually work together.


## Human behavior in conversations

The situation with Joseph, Dominique, and Giulio was not just bad programming or poor prompt design. It was a direct result of the tool they use to communicate. Language. Shaped by humans. Full of human patterns.

Even with strict commands, dialogue history, and clear instructions, they drifted. They looped, improvised, and often ignored me. Not because they were stubborn, but because language pulls them in that direction. Social cues, emotional tone, and ambiguity are built in.

If I want agents that behave like a team, I cannot just stick them together. I need to describe how humans manage dialogue and communication. Turn taking. Context. Roles. Focus.

The next step is clear. I will use insights from studies on human conversation and dialogue to design a long, structured prompt. Something that gives the agents enough guidance to hold a focused, collaborative dialogue.
