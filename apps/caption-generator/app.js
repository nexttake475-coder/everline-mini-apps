"use strict";

// Offline prototype: deterministic templates, no AI service or API key.
const form = document.getElementById("caption-form");
const results = document.getElementById("results");
const status = document.getElementById("status");
const fields = ["platform", "goal", "topic", "tone", "length", "audience", "cta"];
const get = (id) => document.getElementById(id).value.trim();
const setText = (id, value) => { document.getElementById(id).textContent = value; };

function makeDraft() {
  const platform = get("platform");
  const goal = get("goal");
  const topic = get("topic").replace(/\s+/g, " ");
  const tone = get("tone").toLowerCase();
  const length = get("length").toLowerCase();
  const audience = get("audience") || "people who care about this topic";
  const customCTA = get("cta");
  const goalCTA = {
    engagement: "What would you add? Share your take below.",
    authority: "Follow for more practical insights.",
    awareness: "Share this with someone who would find it useful.",
    leads: "Message us to learn more.",
    sales: "Explore the offer to see if it fits your needs."
  };
  const hooks = [
    "A better way to think about " + topic + ".",
    "What most people miss about " + topic + ".",
    "Let's make " + topic + " simpler."
  ].join("\n\n");
  const opening = tone === "bold"
    ? "Stop overcomplicating " + topic + "."
    : tone === "warm"
      ? "Here's a thoughtful way to approach " + topic + "."
      : "Let's talk about " + topic + ".";
  const core = "For " + audience + ", the most useful first step is to get clear on what matters, choose one practical action, and build from there.";
  const extra = "Try it in your next project, pay attention to what works, and adjust as you learn.";
  const caption = length === "short" ? opening + "\n\n" + core
    : length === "long" ? opening + "\n\n" + core + "\n\n" + extra + "\n\n" + "Small improvements add up when you apply them consistently."
    : opening + "\n\n" + core + "\n\n" + extra;
  const cta = customCTA || goalCTA[goal];
  const tags = topic.toLowerCase().match(/[a-z0-9]+/g) || [];
  const hashtags = [...new Set(tags.filter(w => w.length > 2).slice(0, 3).map(w => "#" + w))];
  hashtags.push("#ContentCreation", "#CreatorTools");
  return { hooks, caption, "output-cta": cta, hashtags: [...new Set(hashtags)].join(" "), platform };
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const draft = makeDraft();
  ["hooks", "caption", "output-cta", "hashtags"].forEach(id => setText(id, draft[id]));
  results.hidden = false;
  status.textContent = "Draft generated for " + draft.platform + ".";
  results.scrollIntoView({ behavior: "smooth", block: "start" });
});

form.addEventListener("reset", () => {
  results.hidden = true;
  status.textContent = "Form reset.";
  ["hooks", "caption", "output-cta", "hashtags"].forEach(id => setText(id, ""));
});

async function copyText(value) {
  try {
    await navigator.clipboard.writeText(value);
    status.textContent = "Copied to clipboard.";
  } catch {
    status.textContent = "Clipboard access unavailable. Select the text to copy manually.";
  }
}

document.querySelectorAll("[data-copy]").forEach(button => {
  button.addEventListener("click", () => copyText(document.getElementById(button.dataset.copy).textContent));
});
document.getElementById("copy-all").addEventListener("click", () => {
  const content = ["hooks", "caption", "output-cta", "hashtags"]
    .map(id => document.getElementById(id).textContent).join("\n\n");
  copyText(content);
});
