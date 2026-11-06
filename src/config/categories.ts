export const categories = ["Space", "Life", "Earth", "Health", "Physics", "Technology"] as const;

export type Category = (typeof categories)[number];

export const categorySlug = (category: Category) =>
  category.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-");

export const categoryMeta: Record<Category, { description: string }> = {
  Space: {
    description:
      "Astronomy, planetary science, spacecraft, observatories, and the instruments extending our map of the universe.",
  },
  Life: {
    description:
      "Biology, ecology, evolution, oceans, behavior, and the living systems being reshaped by a changing planet.",
  },
  Earth: {
    description:
      "Climate systems, geology, oceans, atmosphere, cryosphere, and the measurements that reveal planetary change.",
  },
  Health: {
    description:
      "Medicine, neuroscience, public health, epidemiology, and the evidence behind how bodies and societies heal.",
  },
  Physics: {
    description:
      "Particles, cosmology, materials, quantum systems, energy, and the experiments testing nature at its edges.",
  },
  Technology: {
    description:
      "Robotics, renewable energy, sensing, scientific computing, instrumentation, and tools that change discovery.",
  },
};
