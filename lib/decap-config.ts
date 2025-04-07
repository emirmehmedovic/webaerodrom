// Removed problematic type import - we'll rely on object structure
// import type { Config } from '@decap-cms/app/dist/esm/interface';

const config = { // Removed :Config type annotation
  backend: {
    name: 'github',
    repo: 'emirmehmedovic/webaerodrom', // Your GitHub username/repository
    branch: 'main', // Or whichever branch you want the CMS to commit to
    // Optional: base_url: 'https://your-auth-server.com' # For custom auth server
    // Optional: auth_endpoint: '/api/auth' # For custom auth server
  },
  media_folder: "public/images/uploads", // Where media files will be stored in the repo
  public_folder: "/images/uploads", // The public URL path for accessing media files
  collections: [
    // Novosti (News) Collection
    {
      name: "novosti",
      label: "Novosti",
      folder: "_content/novosti", // Path to the folder where content files are stored
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}", // Filename template using date and title slug
      fields: [
        { label: "Naslov", name: "title", widget: "string", },
        { label: "Datum objave", name: "publishedAt", widget: "datetime", },
        { label: "Glavna slika", name: "mainImage", widget: "image", required: false },
        { label: "Sadržaj", name: "body", widget: "markdown", },
      ],
    },
    // Javni Pozivi (Public Calls) Collection
    {
      name: "javni-pozivi",
      label: "Javni Pozivi",
      folder: "_content/javni-pozivi",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        { label: "Naslov", name: "title", widget: "string", },
        { label: "Datum objave", name: "publishedAt", widget: "datetime", },
        { label: "Status", name: "status", widget: "select", options: ["aktuelni", "arhiva"], default: "aktuelni", },
        { label: "Glavna slika", name: "mainImage", widget: "image", required: false },
        { label: "Sadržaj", name: "body", widget: "markdown", },
      ],
    },
  ],
};

export default config;
