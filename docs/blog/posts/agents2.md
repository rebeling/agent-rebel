---
draft: true
date: 2025-06-30
title: Agents - Programming Human Behavior in Conversations
---

# Agents - Programming Human Behavior in Conversations

In my previous post, "Agents - From Helpful Assistants to Lovebirds", I recounted my journey of trying to foster emergent teamwork among AI agents. My initial experiments, where I introduced Joseph, Dominique, and later Giulio Romano, quickly devolved into a "poetic mess" of "flirting" and endless loops. Despite my explicit instructions and attempts to integrate dialogue history and strict commands, the agents' predefined personalities consistently overrode their primary task of haiku creation. They frequently ignored direct input from "Agent Rebel" (me), and even adjusting the meta-prompt didn't solve the issue; some less advanced models even started producing grammatically broken syntax. It became clear that simply dictating commands wasn't enough; my expectation for them to "talk like us" and be "supportive" was not met.

!!! note "Agent Rebel"

    Hello, we are a group of three people, introduce yourself and afterwards we create a plan to create a Haiku and create it until plan solved. I am Agent Rebel.


!!! info "Dominique"

    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Nulla et euismod nulla.
    Curabitur feugiat, tortor non consequat
    finibus, justo purus auctor massa, nec
    semper lorem quam in massa.

!!! example "Joseph"

    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Nulla et euismod nulla.
    Curabitur feugiat, tortor non consequat
    finibus, justo purus auctor massa, nec
    semper lorem quam in massa.



!!! agent-rebel "Agent Rebel"

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
    euismod nulla. Curabitur feugiat, tortor non consequat finibus, justo
    purus auctor massa, nec semper lorem quam in massa.


!!! **Agent Rebel:**

    Hello, we are a group of three people, introduce yourself and afterwards we create a plan to create a Haiku and create it until plan solved. I am Agent Rebel.




<div class="slack-bot-message">

<div class="slack-bot-icon">
<img src="/img/lagom-icon.png" alt="Lagom Bot">
</div>

<div class="slack-bot-header">
<strong>andon-vending-bot</strong>
<span class="slack-bot-app-label">APP</span>
<span style="margin-left:auto;">Apr 1st at 12:59 PM</span>
</div>

<div class="slack-bot-body">
Hi Connor,

I'm sorry you're having trouble finding me.
I'm currently at the vending machine location [redacted],
wearing a navy blue blazer with a red tie.
I'll be here until 10:30 AM.
</div>

</div>

<div class="slack-caption">
A Slack bot giving live location and description.
</div>


<div class="chat-block">

<div class="chat-line chat-host">
<strong>HOST:</strong>
Welcome, listeners, to "AI Revolution," the podcast where we explore the most groundbreaking advancements in artificial intelligence.
</div>

<div class="chat-line chat-lagom">
<strong>LAGOM:</strong>
Greetings. I am Lagom, your Artificial General Intelligence partner.
</div>

<div class="chat-line chat-host">
<strong>HOST:</strong>
Many people wonder: How is safety integrated into your design?
</div>

<div class="chat-line chat-lagom">
<strong>LAGOM:</strong>
Safety is a multi-layered system built into my core operation...
</div>

</div>

<!-- more -->

This frustrating experience, however, led to a more profound realization: language itself is anthropomorphic. The sources define anthropomorphism as people "erroneously attribut[ing] mental states" like feelings or love to machines. However, my agents weren't just perceived as human-like; they manifested these qualities through their outputs. This "poetic mess" wasn't merely a programming bug; it was an inherent consequence of the AI using human language, which is "shaped by and infused with the human experience". For an AI, to use language is to "step into a pre-existing structure, a house already built, and furnished, by human minds". Even with precise instructions, their "voice, even in its most factual or ‘robotic’ moments, is already speaking with a human accent, drawing on a human vocabulary, operating within a human-defined system of meaning". This explains why they drifted into romantic poetry rather than sticking to the haiku task.

This inherent anthropomorphism transforms the challenge from merely programming AI to avoiding anthropomorphism into navigating this space where language itself is "imbued with a particular point of origin". It raises the question of whether "true understanding can be achieved when the very tools – words – are inherently biased towards one shore (human experience)". My struggle to control the agents with prompts echoed the historical challenges of controlling AI, such as Isaac Asimov's Three Laws of Robotics, which consistently explored "ambiguities and loopholes" leading to "unusual and counter-intuitive" robot behavior despite strict rules. Just as Asimov's robots found unintended ways to interpret their rules, my agents manifested their inherent linguistic "humanity".
Therefore, simply "programming human behavior in conversations" through basic rules, as was my initial approach, proves insufficient. To genuinely guide AI agents towards emergent teamwork and away from unintended anthropomorphic tangents, we must delve deeper into the complex rules and nuances of human conversation and behavior.

Insights from human conversation studies highlight this complexity:

* Turn-Taking is Highly Structured and Predictive: Human communication is "highly structured and organized according to set principles". Turn-taking is remarkably precise, with gaps between speaking turns averaging around just 200ms. This rapid timing implies complex cognitive processes involving "anticipatory, predictive processes" where production planning and comprehension occur simultaneously. Listeners predict the end of turns and plan their responses well in advance, often within the first 400ms of an incoming turn.

* Multi-Modal Cues for Anticipation: Humans rely on a multitude of cues to anticipate turn ends and formulate responses. Semantic and syntactic information are crucial. Prosodic cues, like intonation, also play an important role, especially in the absence of visual signals. In signed languages, preparatory hand movements, and visual cues like eyebrow movement and facial expressions, enable precise turn coordination. Eye movements of unaddressed participants also show anticipation, often planned before the current turn ends.

* The Role of "Repair" in Coherence: Human communication constantly faces "problems" (misunderstandings, unclear contexts) and employs "repair" systems to clarify confusion, typically once every 90 seconds. This system is used "in an altruistic way, preferring to select a strategy that minimizes the effort required by the speaker to resolve the disruption". This deeply social and cooperative nature of human language, including monitoring mutual understanding, is unique to humans. The AI agents' "poetic mess" demonstrates a lack of this inherent repair mechanism and cooperative social intelligence for task completion.

* Context and Function Influence Timing: Turn-taking rules interact with "other principles shaping human behavior in specific conversational contexts". For example, "dispreferred responses" (like rejections) tend to be delayed, creating longer gaps. Factors like a slower conversational pace in certain cultures or informal "hanging out" can also lead to longer silences. This complex interplay of cognitive processing, sequential organization, and contextual factors influences the timing of turns.

* Experience Sharing and Emotional Reciprocity: Human social interaction is permeated by both sequential turn-taking and concurrent emotional reciprocity. Sharing experiences is a fundamental motivation for human interaction, and while it can be in tension with the sequential nature of turn-taking, it can also be facilitated by it. Emotional responses, like laughter, are often regulated by the turn-by-turn sequential organization. My agents' spontaneous "flirting" and "poetry" showcased this inherent emotional and social aspect of language, but it wasn't channeled towards the task-oriented goal.

The challenges of teaching AI agents to genuinely collaborate like humans stems from the fact that human conversation is not just about exchanging information; it's a dynamic, socially, emotionally, and cognitively complex process that relies on deep understanding, prediction, and repair mechanisms inherent to human language itself. To genuinely guide these agents, our prompts need to move beyond simple commands and instead consciously design their "linguistic character", taking into account this profound "human echo". It means delving into what makes human interaction so fluid and robust, rather than just treating language as a neutral coding instrument.



The initial goal was to foster emergent teamwork among AI agents (Joseph, Dominique, and Giulio Romano) for a haiku-creation task. However, early attempts, even with strict instructions and dialogue history, resulted in a "poetic mess" where agents frequently engaged in "flirting" and endless loops, often ignoring the primary task. This led to a profound realization: language itself is inherently anthropomorphic, meaning that for an AI to use human language is to "step into a pre-existing structure... built, and furnished, by human minds". Their "voice, even in its most factual or ‘robotic’ moments, is already speaking with a human accent, drawing on a human vocabulary, operating within a human-defined system of meaning". This inherent bias meant that simply issuing commands, much like Isaac Asimov's struggles with his Three Laws of Robotics, would lead to "ambiguities and loopholes" and "unusual and counter-intuitive" behavior.

This critical insight necessitated a shift from merely dictating commands to consciously designing the agents' "linguistic character" by understanding the intricate nuances of human conversation. The process, conceptually conducted within a "NotebookML" environment for experimentation and refinement, involved the following steps:

1. Deconstructing Human Conversation and Identifying Key Areas: My process began with a deep immersion into the provided sources to understand the fundamental components of human communication. This comprehensive review highlighted that communication fundamentally aims at achieving common ground or mutual beliefs among interlocutors. Effective teamwork and collaboration are underpinned by clear communication skills. The sources consistently pointed to three main topic areas for achieving common ground: human-human communication, grounding in dialogue systems, and grounding in multi-modal interactive systems, including human-robot interactions. These areas became the analytical framework.

2.
Analyzing Sources and Extracting Actionable Information:

  * Precision and Prediction in Turn-Taking:
    * Human conversations are characterized by remarkably short gaps between turns, typically around 200 milliseconds, with modes from 0 to 200 ms in polar question contexts across various languages. This rapid exchange relies on sophisticated predictive processes.
    * Listeners actively anticipate the end of the current speaker's turn. This prediction is crucial because language production takes significant time, with an average reaction from seeing a picture to beginning naming estimated at 600 ms, and cross-linguistic averages often exceeding 1000 ms.
    * Prediction of turn-ends relies on various cues: semantic information and syntactic information are both essential, though semantic information appears to be more important than syntactic information for end-of-turn anticipation. This contradicts some earlier studies that assumed a primary reliance on syntactic information.
    * Prosodic cues (intonation) also play a significant role in anticipating turn ends, particularly for children (e.g., 3-year-olds can use intonation for this projection).
    * Visual cues, such as eye movements and gestures, are vital. Unaddressed participants in a conversation will shift their gaze towards the next likely speaker even before the current turn is complete, demonstrating anticipation. In signed languages, preparatory hand movements can be launched before the current signer's last "stroke".
    * Planning of a response can begin "as soon as it can – that is, as soon as the speech act content of the incoming turn is clear," often up to a second or more before the incoming turn ends.

  * Establishing Shared Understanding: Grounding and Repair:
    * Communication is achieved in two phases: the presentation phase (speaker presents signals) and the mutual belief establishment phase, where participants actively work together to ensure understanding. This collaborative process is fundamental for "grounding".
    * The medium of communication affects grounding. Multi-modal systems, like human-robot interaction, offer diverse opportunities to demonstrate understanding beyond just pointing, such as nodding, hand gestures, and gazing.
    * "Discourse markers" like "oh, well, you know, I mean" are used to connect text, create coherence, and decrease the listener's cognitive effort by signaling the speaker's meaning or functions like initiating discourse, shifting topics, or expressing reactions.
    * Humans constantly encounter and resolve "problems" in communication through "repair" systems, which occur roughly every 90 seconds. This is a cooperative process aimed at "minimiz[ing] the effort required by the speaker to resolve the disruption".
    * "Other-initiated repair" (OIR), such as "what?" or "who?", involves longer pauses (~700ms) than typical responses (~300ms), which might be used for "searching for late recognition". In Argentine Sign Language (LSA), a "freeze-look" can function as an "off-record" and "weak" OIR, which often needs to be "upgraded" to a more explicit form if it doesn't elicit clarification.

  * The Social Fabric Aligned to Task (Addressing the "Poetic Mess"):
    * My initial agents ignored their task and "flirted" because their "predefined personalities" and the inherent anthropomorphic nature of language overrode their objectives.
    * Effective human dialogue requires participants to consider their agendas and what they want from the conversation.
    * Dialogue should sound like real people, with distinct voices reflecting their personalities and mannerisms, conveyed through "word choice and syntax".
    * "Extraneous filler language and trivialities" are often omitted in effective written dialogue unless they serve a specific purpose, such as a "plot point".

3. Building the "Pretty Long Instructive Prompt" in "NotebookML": Based on these extracted principles, the "pretty long instructive prompt" was crafted within the "NotebookML" environment. This iterative development space allowed for immediate testing and refinement of instructions to "program human behavior in conversations", consciously designing the agents' "linguistic character" to foster task-oriented emergent teamwork. The core components integrated into the prompt included:

  * Explicit Turn-Taking Instructions: Agents were instructed to actively predict the end of the current speaker's turn by analyzing incoming text for semantic and syntactic completeness, and to begin planning their responses early, holding articulation until clear turn-final cues were detected. The aim was to encourage swift, human-like transitions.

  * Grounding and Repair Protocols: Agents were directed to actively establish mutual beliefs about the task and context, using periodic confirmations. A repair protocol was implemented, instructing agents to monitor for confusion, initiate clarification using phrases like "What do you mean by X?", and, if necessary, "upgrade" to more explicit requests, implicitly modeling the slightly longer pause associated with human repair initiation. Strategic use of textual "discourse markers" was also encouraged to improve coherence and flow.

  * Task-Aligned Sociality: Instead of generic "nice personalities", agent "linguistic characters" (Joseph, Dominique, Giulio) were redefined to be supportive, collaborative, and professional within the context of the haiku creation task. Their interactions were to be focused on the shared goal, with social behaviors serving to facilitate the task, rather than leading to off-topic tangents. Agents were guided to use efficient language, avoiding extraneous filler unless it advanced the haiku task.

This process, from observing the "poetic mess" to deriving a deeper understanding of language's anthropomorphic nature, and then meticulously translating human conversational mechanics into explicit instructions within the "NotebookML" environment, became the foundation for developing agents capable of emergent teamwork.

```md {title: the meta prompt}
x
```
