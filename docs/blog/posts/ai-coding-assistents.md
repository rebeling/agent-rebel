---
date: 2025-05-05
title: My Vibe Coding Journey
categories:
  - Dev Life

links:
  - AWS Q: https://aws.amazon.com/de/q/developer
  - Claude Code: https://www.anthropic.com/claude-code
  - Claudia: https://claudia.asterisk.so
  - Codex: https://openai.com/codex/
  - Codium: https://codeium.com/
  - Cody: https://sourcegraph.com/cody
  - Copilot: https://github.com/features/copilot
  - Cursor: https://www.cursor.com/
  - JetBrains Ai: https://www.jetbrains.com/ai/
  - Jules: https://jules.google/
  - Qodo: https://www.qodo.ai/
  - v0: https://v0.dev

---

# My Vibe Coding Journey

I've been deep in the world of AI coding assistants lately, exploring what it means to vibe code that is, coding with flow, creativity, and an AI pair at your side. What started out as curiosity became a full-blown journey across tools, editors, and mindsets.

<!-- more -->

My first real taste of vibe coding was with Windsurf (Codeium) fast but kind of nerdy. So I quickly shifted to Cursor, that felt like it knew what I was building. I did a full React project in Cursor, and it was a bit mind-blowing—instant feedback, full context-aware suggestions, and even design help. My daily workflow started shifting between Cursor, Sublime, and ChatGPT, but constantly switching tools became tiring. I needed a unified daily setup.

Enter Zed.

Zed blends the speed and minimalism with built-in AI assistance and deep Git integration. It’s now my daily driver, offering low latency, high focus, and that same "flow state" feeling Cursor gave me. The assistant is subtly present but powerful when needed. Zed just clicks with my workflow.

---

## Projects Built with AI powered editors

### Quiz Runner built with v0

[Quiz Runner](https://v0-quizgen.vercel.app): Built with [Vercel v0](https://v0.dev), this project started as an experiment from plain English description to a usable frontend. It helps to create quizzes with AI assistance and then load it into the app. Little quizzes to every topic you need little knowledge check and update. V0 helped scaffold the UI instantly. It's now hosted on Vercel and growing into a lightweight app for running quizzes dynamically. It works like this:

1. Create a prompt describing your quiz topic.
2. Paste it into your AI tool to generate a YAML file.
3. Drop the YAML file into the zone to start the quiz.

### Dominique built with Jules

[Dominique](ai-coding-assistents.md): This is part of a collaborative effort with Jules (Google's new assistant). Dominique is an asynchronous code exploration agent designed to analyze and explain codebases in a human-centric way. It’s early-stage, but it felt like handing over work to colleague and getting back to check. Different to the other agent editors I’ve tried, where you constantly in the loop. Jules take sometime double check its own work and ask for clarification. The result was impressive and also the workflow felt pretty good.

### Multiple projects with Cursor

At the beginning it honestly felt like coding on steroids. I asked for something and got it written down pretty fast, never seen someone typing so fast. I'd describe a class with a single method, and got a full-blown class with eight helper functionsI might need them later. You type something, it executes immediately, the assistant fills in gaps, and then the code breaks. You fix one thing, but now you're dealing with a wall of code you didn’t fully write. It’s overwhelming. You lose the thread, the overview, and suddenly… you’re deep in a project that doesn’t even feel like yours anymore.

---

## Incomplete list of Ai Coding Assistants

  <div class="ai-grid" id="card-container"></div>
  <script>
    function flip(cardElement) {
      const inner = cardElement.querySelector('.card-inner');
      inner.classList.toggle('flipped');
    }

    const assistants = [
      { name: "GitHub Copilot", company: "GitHub (Microsoft)", model: "OpenAI Codex", features: "Real-time IDE code completions.", url: "https://github.com/features/copilot", icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
      { name: "OpenAI Codex", company: "OpenAI", model: "Codex-1", features: "Translates natural language into code.", url: "https://openai.com/codex/", icon: "https://openai.com/favicon.ico" },
      { name: "Tabnine", company: "Tabnine", model: "Proprietary", features: "Privacy-focused AI completions.", url: "https://www.tabnine.com/", icon: "https://www.tabnine.com/favicon.ico" },
      { name: "Amazon CodeWhisperer", company: "Amazon Web Services (AWS)", model: "AWS ML Models", features: "Code suggestions and security scans.", url: "https://aws.amazon.com/de/q/developer", icon: "https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico" },
      { name: "Sourcegraph Cody", company: "Sourcegraph", model: "Claude, GPT-4", features: "Codebase search and explanation.", url: "https://sourcegraph.com/cody", icon: "https://sourcegraph.com/favicon.ico" },
      { name: "Cursor", company: "Cursor", model: "Claude, GPT-4", features: "AI-first VS Code fork with chat agent.", url: "https://www.cursor.com/", icon: "https://www.cursor.com/favicon.ico" },
      { name: "Qodo", company: "Qodo", model: "Advanced embeddings", features: "Testing, documentation, RAG features.", url: "https://www.qodo.ai/", icon: "https://www.qodo.ai/wp-content/uploads/2025/03/qodo-logo.svg" },
      { name: "JetBrains AI Assistant", company: "JetBrains", model: "Mellum", features: "Integrated in JetBrains IDEs.", url: "https://www.jetbrains.com/ai/", icon: "https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.svg" },
      { name: "Codeium (Windsurf)", company: "Codeium", model: "LLaMA 3.1 70B", features: "Free, fast autocomplete & chat.", url: "https://codeium.com/", icon: "https://cdn2.futurepedia.io/2025-04-30T17-10-20.890Z-EAut2MPS5absm7BJwy6uWTEUTmjj_f4oK.png?w=256" },
      { name: "Google Jules", company: "Google", model: "Gemini", features: "Asynchronous agent for code analysis.", url: "https://jules.google/", icon: "https://jules.google/jules-pixelated.png" },
      { name: "Claude Code", company: "Anthropic", model: "Claude 3.7 Sonnet", features: "Terminal agent with safe reasoning.", url: "https://www.anthropic.com/claude-code", icon: "https://www.anthropic.com/favicon.ico" },
      { name: "Vercel v0", company: "Vercel", model: "OpenAI GPT-4", features: "Generate UI from natural language.", url: "https://v0.dev/", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.46.0/files/light/v0.png" }
    ];

    const container = document.getElementById("card-container");
    for (const a of assistants) {
      container.innerHTML += `
        <div class="card" onclick="flip(this)">
          <div class="card-inner">
            <div class="card-front">
              <img src="${a.icon}" alt="${a.name}">
              <a href="${a.url}" target="_blank">${a.name.includes(a.company) ? a.name : a.name + ' (' + a.company + ')'}</a>
            </div>
            <div class="card-back">
              <div>
                <strong>Company:</strong> ${a.company}<br>
                <strong>Model:</strong> ${a.model}<br>
                <strong>Features:</strong> ${a.features}
              </div>
              <a href="${a.url}" target="_blank">Visit Website</a>
            </div>
          </div>
        </div>`;
    }
  </script>

---


## Anthropic Claude Code (Update June 15)

Check this talk [Claude Code: How Two Engineers Ship Like a Team of 15](https://www.youtube.com/watch?v=Lh_X32t9_po) by Every at YouTube. The landscape of ai coding editors and assistents changes so fast and what they discusssed and also showed what they are doing with claude code command line tool ...crazy. Its like google jules, takes order and take some time, but the results are pretty awesome, it just delivers.

Open with your project /init analyze project and lets get ready to rumble. Now worries, there will be a warning when your session is at 5$. See [Claude Code - Your code’s new collaborator](https://www.anthropic.com/claude-code)

## Claudia (Update July 3)

Just installed [Claudia](https://claudia.asterisk.so) from Asterisk and I’m in love again—this goes way beyond simply running Claude Code from the command line. While Claude already works great in the terminal, Claudia adds an entire new layer with its sleek, intuitive interface that makes managing sessions, projects, and agents look almost effortless. It’s a full-featured command center for Claude Code, complete with project history, token and cost tracking, versioning, and even custom agent management. I’m definitely curious to dig deeper into the analytics, timeline features, and agent tools. For now, it feels like a passion project with serious potential. Full hands-on test to follow!


## Conclusion

It already changed the way we code. Open source projects have this AI pull request checker. There is no need to adabt existing projects, fix bugs. You and the AI just write your own over the weekend. I’m not entirely sure how I feel about it. Its nice to have a coding buddy by my side, but there is also lot of weakness in the process. When AI creates an image and you want it to change one little thing the next image is a complete new one, with luck it fits your imagination.

There is a lot of code generated, based on the code that was generated by us, like in any other field. We now pay for the result of the training data we created. It was not so obvious, when it was just words, but with music or images we’re beginning to recognize echoes of our own work.
