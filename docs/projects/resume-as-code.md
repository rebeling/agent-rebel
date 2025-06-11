---
date: 2025-05-27
title: Resume as Code
categories:
  - Dev Life

links:
  - JSON Resume: https://jsonresume.org
  - JSON Resume registry: https://registry.jsonresume.org
  - JSON Resume Gist: https://gist.github.com/rebeling
  - HackMyResume: https://github.com/hacksalot/HackMyResume
  - RenderCV: https://rendercv.com
  - Typst: https://typst.app
---

# Resume as Code

Resumes are often treated as static documents, but over time I found that approach limiting. I was looking for a way to keep my CV reliable, easy to update, and flexible enough to handle different formats and languages—especially when clarity and consistency across contexts mattered.

<!-- more -->

Traditional tools like Google Docs and PDF exports often introduced small but persistent issues: formatting quirks, inconsistent layout, or extra effort when translating.

What I needed was a more structured approach—something I could version, reuse, and export cleanly to web, print, or even machine-readable formats.


## JSON Resume: Great Concept, Mixed Execution

[JSON Resume](https://jsonresume.org) looked promising. It defines your resume in a single JSON file and lets you apply themes for HTML, PDF, and other outputs.

``` json title="resume.json" linenums="1"
{
  "basics": {
    "name": "Matthias Rebel",
    "label": "Senior Software Engineer",
    "image": "images/portrait.png",
    "summary": "A passionate ...",
```

It worked well inside their ecosystem: I published my resume as a GitHub Gist, connected it to their [live registry](https://registry.jsonresume.org), and instantly had shareable links with themes like:

https://registry.jsonresume.org/rebeling?theme={theme}

**[professional](https://registry.jsonresume.org/rebeling?theme=professional)**,
**[kendall](https://registry.jsonresume.org/rebeling?theme=kendall)**,
**[paper-plus-plus](https://registry.jsonresume.org/rebeling?theme=paper-plus-plus)**,
**[elegant](https://registry.jsonresume.org/rebeling?theme=elegant)**, ...

And also output in different formats, like
- https://registry.jsonresume.org/rebeling.txt
- https://registry.jsonresume.org/rebeling.md
- https://registry.jsonresume.org/rebeling.rendercv

But the command-line tools were less reliable. Rendering didn’t always match what I saw online. And for a CV—where layout, clarity, and precision matter—that’s a problem.

## HackMyResume: CLI That Works
While the JSON Resume ecosystem showed a lot of promise, the command-line tooling didn’t quite hold up in day-to-day use. That’s where [HackMyResume](https://github.com/hacksalot/HackMyResume) came in—it picked up where the official CLI fell short and delivered exactly what I needed: reliable, multi-format exports from a single JSON source.

Setup was straightforward. Installation took just a few seconds, and I was able to generate all major formats with a single command. No tweaking, no layout surprises—just consistent results.

Supported outputs include:

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css"
/>

<div style="display:flex; gap:2.25rem; justify-content: center; font-size:1.42rem;">
    <a href="/agent-rebel/resume/out/positive/resume.pdf">
        <i class="fa-solid fa-file-pdf" style="color: #74C0FC;"></i>
    </a>
    <a href="/agent-rebel/resume/out/positive/resume.doc">
        <i class="fa-solid fa-file-word" style="color: #74C0FC;"></i>
    </a>
    <a href="/agent-rebel/resume/cv.html">
        <i class="fa-brands fa-html5" style="color: #74C0FC;"></i>
    </a>
    <a href="/agent-rebel/resume/out/positive/resume.md" download>
        <i class="fa-brands fa-markdown" style="color: #74C0FC;"></i>
    </a>
    <a href="/agent-rebel/resume/out/positive/resume.yml">
        <i class="fa-brands" style="font-size:1.1rem; color: #74C0FC;">yml</i>
    </a>
</div>


HackMyResume also supports custom themes, allowing you to control layout and styling across formats without duplicating effort. Once configured, it provided a reproducible, flexible resume pipeline that fits naturally into a developer workflow.

It’s a simple tool—but it solved the problem completely. For example, with a single command, you can instantly analyze the coverage of key skills:

```
    hackmyresume analyze resume.json
```

## Update: RenderCV – Clean Structure and Academic Focus

A relatively new and well-maintained addition to the resume-as-code ecosystem is [RenderCV](https://rendercv.com), an open-source tool designed with a focus on academics and engineers. It uses a Typst-based rendering engine to turn structured YAML input into clean, professional documents in PDF, HTML, or Markdown formats—perfect for anyone who values clarity and control.

Interestingly, the JSON Resume registry also supports automatic conversion to RenderCV’s YAML format via Gists. For example, this URL:

[https://registry.jsonresume.org/rebeling.rendercv](https://registry.jsonresume.org/rebeling.rendercv)

…automatically transforms your resume into a RenderCV-compatible layout. The results look promising,  definitely worth exploring further. But at the end the next schema specific to the system used. You name it and suddenly sticked to the system. And its nice to have a website, a pdf, docx, ...from the same data. But its not specific to one task, it solve every task quite not as great as it could be.

## Stumbled upon Typst

Typst is a modern, open-source typesetting system that allows you to create beautiful documents with ease. It's designed to be easy to learn and use, and it offers a powerful set of features for creating professional-looking documents. Made in Berlin and a bit complicated at first, it is widly accepted by community creating templates for everything + a lot of stars on github.

At the end it creates just a PDF, but it looks really good. So I am redefining my idea to serve them all, with lets create m incredible pdf. The point where we started - the circle of enlightning.

## Conclusion

Checked out some cv rendering strategies and endup with Typst. The templates I find need some work to apply my data. But I put it into a structured yaml file finally. And then I need to update the code or some people use toml file as data base. But the result is worth the transformation for now. May the community will develop their own structure for coverletter and resume. We will see.

Typst is pretty nice, remember the hassle with latex, but the advantage over docs for writings at university.

**Treat your resume like any other project and discover new things.**
