# Henry Pearson's Portfolio

Source code for my personal portfolio website, built with [Astro](https://astro.build/) and styled with Tailwind CSS.

## Pages

**Home** (`/`) - A brief introduction covering my background as a software engineer, the areas I work in, and links to my GitHub and LinkedIn profiles.

**Progression Log** (`/progression-log`) - An index of dated log entries, each linking to a full post. Entries are sorted by date, with multiple entries per day grouped together.

## Progression Log

The progression log uses a format modelled loosely on [conventional commits](https://www.conventionalcommits.org/) to track programming-related activity over time.

Each entry follows the syntax: `<type>(<area>): <short summary>`

Entry types:

- **learn** - something studied or understood
- **practice** - skill drills, repetition, or applied knowledge
- **achieve** - milestone, completed goal, or success
- **struggle** - obstacle, difficulty, or setback
- **reflect** - insight, realization, or retrospective thought
- **plan** - future step, target, or intention

The `area` field is optional and names the focus area (e.g. TypeScript, Fitness, AWS). The `summary` is a short description, typically written in past tense.
