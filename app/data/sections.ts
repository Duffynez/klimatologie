export const sections = {
  slovnicek: {
    title: "Slovníček",
    eyebrow: "Pojmy bez zkratek navíc",
    intro: "Slovníček bude krátký, propojený s články a bude rozlišovat běžný jazyk od přesného významu používaného ve vědě.",
    blocks: ["Klíčové veličiny", "Měření a nejistota", "Modely a scénáře"],
  },
  disidenti: {
    title: "Otázky a námitky",
    eyebrow: "Férově položené, dohledatelně zodpovězené",
    intro: "Tahle sekce nebude pracovat s nálepkami. Každá otázka dostane přesné znění, relevantní data, odkazy na primární literaturu a jasné vymezení toho, co zůstává nejisté.",
    blocks: ["Co přesně tvrzení říká", "Co ukazují data", "Co zůstává otevřené"],
  },
} as const;

export type SectionSlug = keyof typeof sections;

export const sectionBySlug = (slug: string) =>
  sections[slug as SectionSlug];
