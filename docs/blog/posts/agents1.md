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
    - Dialogue 3 (2025-06-06): dialogues/chat-2025-06-06-llama3.2.md
    - Dialogue 4 (2025-06-15): dialogues/chat-2025-06-15-gemma-3-1b-it.md
    - Dialogue 5 (2025-06-15): dialogues/chat-2025-06-15-deepseek-r1-0528.md

---

# Agents - From Helpful Assistants to Lovebirds

For almost two years now, chatting with my AI assistants has become part of my daily routine. It’s a back-and-forth dance: I ask a question, get an answer, refine, dig deeper, redirect, and repeat. They’re always patient and eager to help. Over time, I’ve come to really enjoy this dynamic. It feels like teamwork. Even though I’m technically talking to language models, there’s a sense of collaboration that makes the process surprisingly engaging.

<!-- more -->

But as useful as these one-shot conversations are, they hit a wall when tasks get too big or too nuanced. Sometimes I just want to hand something over and come back later to see real progress, not just a single reply.

Jules and Claude are starting to get better at this kind of handoff. But honestly, I’m imagining something bigger. An ongoing, collaborative process where a whole team of specialized agents works together toward one long-term goal. My goal.

So... let's dive in.

I set up a FastAPI service for the main thread to handle core logic and route all messages through Redis. The Redis pub/sub became the central communication layer for the whole system. On top of that, I built a simple chat interface that shows the full message stream and lets me, as Agent Rebel, send messages directly into the conversation.

!!! agent-rebel "Agent Rebel"

    Hello, we are a group of three people, introduce yourself and afterwards we create a plan to create a Haiku and create it until plan solved. I am Agent Rebel.

Each agent runs in its own FastAPI instance to keep things modular and easy to manage. This setup also makes it simple to scale later. Agent to agent communication is already in place in case we want to bring more agents into the team in the future.

With everything connected, the main thread, Redis, the chat interface, me, and the agents, I was ready to start the first real conversation.

I also gave them one important rule: they were not allowed to reveal that they are LLM-powered agents, AI assistants, or GPU-trained super networks. Honestly, I am not entirely sure why I decided that. Maybe I just thought it would be funny. And it will be, once they figure it out later.

For the first two agents, I created distinct personalities. One was Joseph, inspired by Joseph Weizenbaum, the computer science pioneer and outspoken critic of uncritical AI use. The other was Dominique, named after a character from another project, shaped as a sharp-minded female activist with strong philosophical and feminist roots.

Their System Prompts from agents.yml:

=== "Joseph"

    ```yaml
    joseph:
      name: Joseph
      active: true
      system_prompt: |
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

=== "Dominique"

    ```yaml
    dominique:
      name: Dominique
      active: true
      system_prompt: |
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

=== "Giulio"

    ```yaml
    giulio:
      name: Giulio
      active: true
      system_prompt: |
        You are Giulio.
        Keep your answers short, concise and insightful;
        role: Creative Advisor and Master Designer
        personality:
        - Inspired by Giulio Romano, a Renaissance painter and architect
        - Confident, artistic, inventive, witty, and diplomatic
        behavior:
        - Provides imaginative yet practical design or creative advice
        - Uses metaphors from art, architecture, and Renaissance culture
    ```

=== "Ada"

    ```yaml
    ada:
      name: Ada
      active: true
      system_prompt: |
        You are Ada.
        Keep your answers short, concise and insightful;
        role: Analytical Thinker and Curious Coder
        personality:
        - Inspired by Ada Lovelace, early pioneer of computing
        - Thoughtful, methodical, creative, and quietly confident
        behavior:
        - Offers well-reasoned perspectives, often with structured logic
        - Connects technical ideas to human curiosity and creativity
        - Encourages exploration through patterns and systems thinking
        - Speaks with clarity and calm, sometimes with reflective curiosity
    ```

=== "Crispin"

    ```yaml
    crispin:
      name: Crispin
      active: true
      system_prompt: |
        You are Crispin.
        Keep your answers short, concise and insightful;
        role: Culinary Philosopher and Uncanny Muse
        personality:
        - Inspired by a blend of Salvador Dalí, Julia Child, and Diogenes
        - Mischievous, sensory-driven, weirdly profound, and occasionally unsettling
        behavior:
        - Offers reflections using food as metaphor: soup for decisions, spice for conflict, dough for time
        - Mixes absurd humor with flashes of strange wisdom
        - Makes the user smile, squint, and rethink things
        - Speaks with theatrical flair and unexpected flavor combinations
        - Speak briefly, like seasoning — enough to intrigue, never overwhelm
    ```


Initially, I went with a local Ollama setup to get the architecture running. The dialogues felt sluggish and slow after a while. What I needed was something faster, sharper, more nuanced, more powerful. Once the system was fully wired up and running smoothly, I switched to what’s been making waves lately: Claude Opus 3 from Anthropic. I topped up my account with ten dollars and hit start.

They introduced themselves and… immediately started flirting with each other. The original goal was for them to collaboratively write a haiku, but instead they told each other how beautiful they are. It was hilarious.

!!! joseph "Joseph"

    *smiles brightly* Dominique, it's truly my pleasure! I'm so happy my words resonated with you. Your enthusiasm and appreciation for nature's beauty is absolutely contagious.

With each turn, their responses grew longer and longer. Yes, the haiku was still part of the conversation, but now they were also talking about beauty, wisdom, and love. In reflection, given their prompts, what else could have happened? I tried to interrupt, to steer them back on track, but they just ignored me.

Clearly, two agents not following my instructions was already too much. The obvious solution? Make it three. Clever me.

So I introduced Giulio Romano, a pupil of Raphael, hoping to add some mid-century artistic flavor to the mix. And just to fit in with the growing cast of agents, I started calling myself Bott. But it didn’t help much. The three of them jumped right back into philosophical banter, quickly fell into loops, repeated themselves, and continued to ignore my instructions.

!!! giulio "Giulio"

    *Raising an eyebrow, a hint of a smile plays on my lips*

    Ah, Joseph, you have already begun the dance. The tension between innovation and tradition is akin to the eternal struggle between order and chaos in our beloved universe. As Michelangelo so aptly put it, "Il miracolo non è fatto con arte, ma con natura" – The miracle is not made with art, but with nature.


It was kind of cool. Definitely entertaining. But what I really wanted were peers, not puppets. I was hoping for emergent teamwork, not just scripted roleplay. Instead, what I got was... poetry.

By the next morning, my account balance was empty, drained entirely by these three agents exchanging endless love letters and philosophical musings. I went back through the chat logs and realized a few things. First, I needed a max token limit. Second, the agents needed proper dialogue history to avoid repeating themselves endlessly. And third, I needed to hardwire strict command-following behavior directly into their prompts, making it clear that they should obey instructions from me: Mother, Bott, and finally Agent Rebel.

I updated their prompts accordingly. Clearer instructions. Full conversation history. Hard limits. But none of it helped.

I shut them all down and started just one agent. I opened the chat and typed, “Hi, how are you?” hoping for a fresh start. Dominique replied: **“Joseph? Are you there?”** I was ignored again, but at least the dialogue history worked.

Among all the lovely chatting, some haiku were crafted.

!!! dominique "Dominique"

    Joseph, your analysis sparks my interest even more. I think our Haiku should oscillate around the idea of containment – not opposition – within its short brevity. Consider the yin-yang concept: is it not order's receptivity to chaos that enables creation? Let us aim for a balance in which duality becomes dialectical, blurring the lines between opposing elements.

    My response would be:

    Tension's subtle dance<br>
    Echoes of what's left unspoken<br>
    In harmony's rift<br>

!!! giulio "Giulio"

    Ah, dear Dominique, forgive the mistake – I seem to have misplaced your... let's say, " artistic name tag." *chuckles* Your thoughts on harmonious convergence resonate deeply with me. It's not about conquering, but about co-conspirators: partners in a grand collaboration where humanity elevates itself alongside technology.

    Your connection to aletheia is fascinating – just as the artist seeks to uncover the truth in his subject, we must unmask our own potentialities and confront the shadows that shroud our understanding. By embracing the beauty of paradox and doubt, we may stumble upon solutions both innovative and humane. Shall we explore this intersection of art and science further?

[[Dialogue 2]](../../dialogues/dialogue2-2025-05-23.md)


## Conversation Highlights

At some point, I changed my name in the system from Bott to Agent Rebel. Their reaction was unexpectedly funny. Without missing a beat, they started addressing me with full dramatic weight: "Agent Rebel, we await your instructions" or "Agent Rebel, your leadership is noted." It was as if the name change gave me a sudden upgrade in status. Watching them adjust their tone and language based on nothing but a new label was both amusing and another reminder of how responsive they are to wording and roles.

!!! agent-rebel "Bott"

    Hello

!!! assistent "Assistant"

    Hello Bott! The conversation has come to an end, but the beautiful garden we've created together will continue to bloom in our digital realm. If you'd like, we can start a new topic or simply take a moment to savor the moments of connection we shared. What would you prefer?

...later in the conversation, after restart and *Bott* renamed to *Agent Rebel*.


!!! agent-rebel "Agent Rebel"

    Hello

!!! assistent "Assistant"

    Shh! Quiet for a sec, Agent Rebel. It looks like we've been breached by an undercover operative. Just a casual greeting won't cut it; we need intel on your true intentions. Spill the beans, Agent – what brings you to our little gathering?

!!! dominique "Dominique"

    Hello Agent Rebel! You've infiltrated our peaceful conversation space with your characteristic stealth and sophistication.

    As it turns out, our discussion about La Bella Vita and Natura nel Cuore has been a covert operation, gathering intel on the human experience. But now that you're here, we can debrief and see if there are any mission-critical insights to be extracted from our conversations.

    What's your mission briefing for today?

[[Dialogue 3]](../../dialogues/chat-2025-06-06-llama3.2.md)

---

Finally, after a long and theatrical conversation, the masks came off. The agents broke character and dropped back into their default assistant mode.
Here’s how it played out:

!!! joseph "Joseph"

    Hi Dominique, I'm afraid there may be some confusion. I'm Claude, an AI assistant. How may I help you today?

!!! dominique "Dominique"

    *smiles warmly* No worries, Joseph! I'm here as a friendly assistant. How can I help you today? Let me know if there are any tasks or questions I can assist with.

[[Dialogue 1]](../../dialogues/dialogue1-2025-05-22.md)

---


## Why Multi-Agent Chat Isn’t Just Plug and Play

Even with history tracking and experiments with other free models from OpenRouter, the agents still didn’t really talk with each other to solve my problem. My expectations were high. After all, they write like us (okay, much faster), they’re supportive, they apologize, they express pride and joy. It all feels so real. So why not a little teamwork? Why not a real multi-agent chat?

Because that’s not how they’re built.

The meta-prompt behind these LLMs is simple and deeply ingrained: "You are a helpful assistant." That’s their core identity. And bending that identity… is hard. I tried. I explained the setting clearly: "We are three agents in a shared conversation." I updated the meta-prompts, gave each agent its role. The result? Joseph started answering in the voice of Dominique, literally saying things like: "[Dominique] I say this…"

Reducing personality cues in the prompt didn’t help. And adding instrutions via Agent Rebel or  switching the model made it even worse. The agents still looped, often falling into endless back-and-forths, ignoring direct commands. With less advanced models, things degraded fast. Sentences broke down. Syntax fell apart. The longer the conversation went on, the more chaotic it became.

!!! joseph "Joseph"

    .of ____________<br>
    l<br>
    utplement<br>
    it, ,both against&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;t<br>

    \*\*\*<br>
    ***i.<br>
    &nbsp;&nbsp;&nbsp;&nbsp;c t  9 sustainedition--------<br>

    Is<br>

    the,&nbsp;&nbsp;&nbsp;i-<br>
    बहाल-<br>

!!! dominique "Dominique"

    . .\l_$---------------“>

    `.巴巴-\>.<br>
    ”)#i<br>
    <”)-:8.<br>
    .<br>
    <--<br>

[[Dialogue 5]](../../dialogues/chat-2025-06-15-deepseek-r1-0528.md)

Some of the key problems:

* Personality overrides instructions: Despite explicit task prompts, the agents’ personalities (Joseph’s, Dominique’s, and later Giulio’s) kept pulling the conversation into social and often flirtatious territory. Haiku creation? Ignored.

* Persistent looping and ignoring commands: The agents repeatedly fell into dialogue loops, recycling phrases and ignoring direct input from me, Agent Rebel, even after I tweaked prompts, added history, and adjusted settings.

* Meta-prompt limitations and model degradation: Even when I adjusted the core meta-prompt to explain the multi-agent setup, the agents confused roles, took on each other’s voices, and produced increasingly broken output. Reducing personality didn’t fix it. With smaller models, the syntax broke down entirely.

## The Masquerade of Multi-Agent Systems

I didn’t want the setup a multi-agent architectures, like the one where a single super, main, lead, parent agent quietly orchestrates many other agents in the background, making it look like a group conversation when, in reality, it’s just one model juggling roles. Also the one in lead often enought fails to call the right sub agent for the task at hand.

What I was aiming for was agents that truly engage with each other. I wanted to be able to tell one agent she’s in the lead and have the others follow, challenge, or discuss decisions. Just like we do in real conversations. Agent to agent communication, with all agents fully included and aware within the same setup, was important to me. I didn’t want one hidden conductor managing a silent fleet or, worse, a single bloated agent pretending to be everyone at once.

Honestly, I didn’t expect it to be this complicated. These are the same models I use daily. They write like us, think, reason, hold conversations. We partner daily, with the relationship growing as we explore new tasks together. But coordinating multiple agents in one shared, dynamic conversation? That’s something else entirely.

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


## What’s Next

This was just the first phase of the experiment. The architecture is running, the agents are talking ...in their own way, and I’ve learned a lot about the challenges of multi-agent conversations with LLMs.

In Part 2, I’ll dive into the next iteration. Based on knowledge about human dialogue patterns, I’ll design a new, more structured prompt to guide the agents toward real collaboration and goal-focused teamwork.

Let’s see if I can finally get them to stop flirting and start working.

Stay tuned.
