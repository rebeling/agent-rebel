
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

<div markdown="1" class="text-center">
[![uv](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/astral-sh/uv/main/assets/badge/v0.json)](https://github.com/astral-sh/uv)
[![Pydantic v2](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/pydantic/pydantic/main/docs/badge/v2.json)](https://pydantic.dev)
[![LF AI & Data](https://img.shields.io/badge/LF%20AI%20%26%20Data-003778?logo=linuxfoundation&logoColor=fff&color=0094ff&labelColor=003778)](https://lfaidata.foundation/projects/) <a href="https://github.com/rebeling/agent-rebel/blob/main/LICENSE"><img src="https://img.shields.io/github/license/rebeling/agent-rebel.svg" alt="License"/></a> <a href="mailto:m.rebel@gmx.net"><img src="https://img.shields.io/badge/Email-get_in_touch-blue?logo=gmail" alt="Email Badge"></a>

</div>

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

<div id="status-badge-container"></div>

<script>
function getCurrentTheme() {
  return document.body.dataset.mdColorScheme;
}

function updateStatusBadge() {
  const isDark = getCurrentTheme() === 'slate';
  const badgeUrl = `https://status.betterstack.com/badge?theme=${isDark ? 'dark' : 'light'}`;

  const container = document.getElementById('status-badge-container');
  if (container) {
    container.innerHTML = `
      <iframe
        src="${badgeUrl}"
        width="250"
        height="30"
        frameborder="0"
        scrolling="no"
        style="border:0;">
      </iframe>
    `;
  }
}

function observeThemeChanges() {
  const observer = new MutationObserver(() => {
    updateStatusBadge();
  });

  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['data-md-color-scheme'],
  });
}

window.addEventListener('DOMContentLoaded', () => {
  updateStatusBadge();
  observeThemeChanges();
});
</script>


## How ChatGPT Perceives Me: A Personality Reflection

The following is a reflection of my personality as interpreted by ChatGPT, based purely on the questions I’ve asked and the topics we’ve discussed over time. (June 28, 2025)

### 🔍 Curious and Analytical
You like to dig deep into systems, whether it’s evaluating how Kaiserpinguine raise their young or benchmarking vector databases. You ask detailed, structured questions and often look for precision and performance.

### 🧠 Technically Sharp and Versatile
You work across many domains—FastAPI, Elasticsearch, React, Drupal, MLOps, and more—indicating adaptability and depth. You don't just use tools; you build and optimize them. You think in architectures and flows, not just isolated functions.

### 🧭 Independent but Collaborative
You often work on systems that involve multiple agents, environments, or integrations. You build for teams, even if you're solo in the moment—e.g., tracking OKRs, badge editors, or setting up shared knowledgebases.

### 🧩 System-Oriented Thinker
You think modularly and build things that scale—structured quizzes, multi-agent FastAPI systems, Elasticsearch connectors. You're methodical and care about repeatability, clarity, and maintainability.

### ❤️ Grounded and Family-Oriented
You’re mindful of balance—asking about relaxation spots in nature, budgeting thoughtfully for your kids’ activities, and seeking meaningful weekend time. That speaks to a strong sense of grounding and presence.

### 🌱 Explorative and Practical
You enjoy practical skills like survival, aquaponics, and camping, which suggests you're not just digital—you value tangible, real-world problem solving and self-reliance.
