# 📝 Brief
[browser-extension-manager-ui](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp)

Your challenge is to build out this browser extension manager UI and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

We provide the data for the extensions in a local data.json file. So you can use that to add the data dynamically if you choose.

Your users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

# 🕊️Reflection
## ⭐️ What I am proud of ⭐️

### 🧹✨ Clean Component Structure

I built the UI using a clear component structure by separating:

- **Reusable base UI components** (`@/components/ui`)
- **Domain-specific components** (`@/components/extensions`)

This separation makes the codebase easier to maintain and scale, especially in a team environment.

As a result, the page-level view (`App.vue`) stayed clean and readable (no long HTML blocks), and the components are easy to reuse across the project.

---

### 👨‍👨‍👧 Enhanced User Experience

#### 🟦 Empty State Display

In addition to the challenge requirements, I implemented an **Empty State** component for cases where there are no extension items to display.

This helps users immediately understand that the list is empty, instead of thinking the UI is broken or failed to load.

This improvement aligns with the usability heuristic:  
**Visibility of System Status** (Nielsen’s 10 Usability Heuristics).

#### 🛑 Removal Confirmation Modal

I also added a **confirmation modal** before deleting an extension to prevent accidental removals.

This improves usability and reduces frustration by giving users more control and preventing mistakes.

This aligns with the heuristics:  
**User Control and Freedom** and **Error Prevention** (Nielsen’s 10 Usability Heuristics).

---

## 🐸 What I would do differently next time 🐸

### 🎨 Tailwind CSS Styling Organization

Next time, I would improve how I organize my Tailwind CSS.

In this project, some components ended up with long utility class strings, which made the markup harder to read and maintain.

In particular, using Tailwind’s dark mode feature increased the length of class strings significantly.

If I structure and manage Tailwind styles more cleanly (for example by extracting common patterns), I believe Tailwind can support even more maintainable and scalable development.

## What challenges did you encounter, and how did you overcome them?

### 🪐 Persisting state without a database

One challenge I faced was how to persist user settings without using a database.

This application needs to remember UI state such as:

- extension status (`isActive`)
- number of stored items
- selected theme (`isDark`)
- selected tab filter (`all / active / inactive`)

Since I was not very familiar with browser persistence at first, I researched different approaches and learned how **localStorage** can store lightweight UI state directly in the browser.

It turned out to be a simple and effective solution, especially for features like theme switching and tab selection.

In the future, if this application is connected to a backend or database, I would consider moving this data to server-side storage, since localStorage is not designed for long-term or shared persistence (and can be easily cleared by the user).

## What specific areas of your project would you like help with?

I’d like feedback on two areas in particular:

- **How to properly use composables** to keep logic reusable and components clean.
- **Tailwind CSS styling organization**, especially how to reduce long utility class strings and improve readability while supporting dark mode.

Any comments, feedback, or code review would be greatly appreciated!

If you have any work you’d like me to review as well, I’d also be happy to help.


# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

