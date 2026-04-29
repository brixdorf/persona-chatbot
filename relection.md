# Reflection — Persona Chatbot Assignment

## What This Assignment Was

The goal was to build a working persona-based AI chatbot featuring three real
Scaler personalities — Kshitij Mishra, Abhimanyu Saxena, and Anshuman Singh.
Every concept taught in the Prompt Engineering lecture had to be applied inside
a single, deployed application.

## What Worked

The most effective decision was treating each persona's research as a separate
problem. Abhimanyu's Twitter gave a completely different picture than LinkedIn
would have — casual, raw, builder-focused. If I had relied on LinkedIn alone
for all three, the personas would have been indistinguishable. The research
phase directly determined the quality of the prompts, and the quality of the
prompts directly determined the quality of the responses. GIGO was visible in
real time.

The Chain-of-Thought instruction was surprisingly impactful. Adding a single
line that told the model to reason about what the user needs beneath the
surface — rather than just answering the literal question — produced noticeably
more authentic and useful responses. It made the difference between a chatbot
that answers and one that mentors.

Few-shot examples were the second most impactful element. Writing three
realistic examples per persona forced me to think deeply about how each person
actually communicates. The examples also served as a reference the model could
pattern-match against for every subsequent response.

## What GIGO Taught Me

GIGO was the most practical lesson of this assignment. Early drafts of the
system prompts produced generic, flat responses — the model sounded the same
regardless of which persona was selected. The problem was always in the prompt,
not the model. Every time a response felt off, going back and improving the
prompt fixed it. The model is only as good as the instructions it receives.
This applies beyond AI — the quality of any output is determined by the quality
of the input and the clarity of the brief.

## What I Would Improve

The biggest limitation was research depth. Anshuman's persona is based entirely
on LinkedIn posts, which naturally sound formal and structured. With access to
his talks or interviews, the persona would feel more human. More research equals
better prompts equals better output — GIGO again.

I would also add conversation memory that persists across sessions, and a
feature that lets users rate each response. That feedback could be used to
continuously improve the prompts over time.

Finally, I would explore giving each persona a slightly different UI treatment
beyond just accent colors — typography, layout density, or even response
animation speed could reinforce each personality visually.
