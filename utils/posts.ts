type Post = {
  id: number
  link: string
  title: string
  summary: string
  category: string
  publishedOn: Date
  readingDuration: number
}

export const posts: Post[] = [
  {
    id: 1,
    link: 'post-1',
    title: "Astro 4.3",
    readingDuration: 5,
    publishedOn: new Date(2024, 2, 1),
    category: "Changelog",
    summary:
      "Astro 4.3 is now available! This release includes a new experimental i18n feature to try out, and improvements to working with your build output, component prop types, Markdown images, and more. How to upgrade: to take advantage of the latest features, make sure you’re running the latest version of Astro. You can upgrade to Astro 4.3 by running the @astrojs/upgrade command:",
  },

  {
    id: 2,
    link: 'post-2',
    readingDuration: 8,
    publishedOn: new Date(2024, 1, 11),
    title: "What's new in Astro - January 2024",
    category: "Company News",
    summary:
      "2023 was a huge year for Astro, and 2024 is already shaping up to be even bigger. Let’s dive into the updates! New this month in both Astro and Starlight docs: dedicated community resource pages. Check out the community-produced educational summary about Astro, and the growing list of Starlight summary. Catch up on some of the classic talks, interviews, and streams you might have missed. Our weekly Discord call “Talking and Doc’ing” is a chance for you to watch Team Docs work in public, jump in a shared Codespace or Gitpod Workspace, and contribute to the docs live, together.",
  },

  {
    id: 3,
    link: 'post-3',
    readingDuration: 5,
    title: "Astro Studio 1.0",
    publishedOn: new Date(2024, 2, 1),
    category: "Engineering",
    summary:
      "Astro is launching a hosted service in 2024. It's not a web hosting company. It's not a CMS. It's something entirely new for the web ecosystem and it will be available exclusively for Astro. We're calling it: Astro Studio. Astro Studio is a globally-distributed edge data platform, built for Astro. Connect any new or existing Astro project to a dedicated hosted database in seconds. It's fast everywhere, secure, and unbelievably easy-to-use. Astro Studio comes with a generous free tier. This is our first paid product, and we want it to be accessible to everyone who uses Astro. We take this commitment to our users seriously.",
  },
]
