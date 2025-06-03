---
hide:
  - footer
---

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css"
/>

<h1 class="text-center" >
  <i class="fa-solid fa-book-open-reader"></i> <b>Agent Rebel</b>
</h1>

<p class="text-center">
    <em>shim to use agent rebel with LLMs</i></em>
</p>
<p class="text-center">


<a href="/agent-rebel/resume/cv.html">
  <img src="https://img.shields.io/badge/HTML-CV-blue--orange?logo=html5" alt="HTML" style="margin-right: 10px;" />
</a>

    <a href="https://github.com/rebeling/agent-rebel/blob/main/LICENSE">
        <img
            src="https://img.shields.io/github/license/rebeling/agent-rebel.svg"
            alt="License"
        />
    </a>
    <a href="mailto:m.rebel@gmx.net">
      <img src="https://img.shields.io/badge/Email-get_in_touch-blue?logo=gmail" alt="Email Badge">
    </a>
</p>


<p class="text-emphasis">
    Python agent to make it less painful to
    build production grade applications with Generative AI.
</p>


```py
from rebel import Agent

agent = Agent(
    name="Matthias",
    description="Processes messages and replies using LLM",
    instructions=(
        "Respond in a helpful, friendly tone. "
        "If someone says 'hello world', "
        "greet them. Otherwise, clarify politely."
    )
)

def process_chat_message(message: str) -> str:
    response = agent.run(message)
    return response
```
