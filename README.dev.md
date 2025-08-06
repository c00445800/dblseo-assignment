# Process

## 1. Understanding & Setup

By using the AI agent and reading the README.md file, I gained an understanding of what was required. Additionally, I took notes on important information about the client's business model and how a webpage could positively impact it.

## 2. Planning

I installed Next.js and Git, as Node was already present in the environment. If any issues arise, I can consult the AI agent for potential missed problems, using the AI as a tool throughout the process.

I also provided the AI with the project requirements as context so that all subsequent implementations would align with the requests and avoid any deviations.

After giving the AI the required context, the steps were:

Adding metadata to layout.tsx (important for search engines and embedded information).

Creating a homepage with the correct structure and SEO.

Developing the other pages and sections.

Implementing the service pages, focusing on the most important aspects of the business model.

Implementing the "About" and "Contact" sections.

In all these steps, I ensured the use of a11y (accessibility), optimized images to WebP, implemented the sitemap.xml as requested, and constantly checked that the implementation followed proper cybersecurity measures, especially for input fields like textboxes.

## 3. Coding

In this section, I focused on first creating the "Blocks," components, and pages, as well as their relationships. With the AI's help, I was able to generate a preliminary version of these to serve as a fallback.

The AI created an initial version of the page with my design guidance. Now that the preliminary process is complete, we have a semi-functional page, and the next step is to review and test it.

## 4. Reviewing

Further testing and analysis of the results were conducted using developer tools like Lighthouse for SEO conventions. Design-wise, the overall decision was to use a metallic, modern style. The AI created a background texture that resembled this idea, and the color blue was chosen because most reference photos for plumbing services shared that motif. This color was also used for highlighting buttons.

The SEO and meta tags were implemented, and the robots.txt and sitemap.xml files were added. The main focus of this business is residential plumbing, so the keywords centered on "local business" and "plumbing service." Although other tools normally add additional tags, these are already explicitly stated in the offer catalog, where we list the services.

## 5. Release

This project has been uploaded to Vercel. Since it's a preview deployment, there's an issue with indexing (X-Robots-Tag: noindex). However, this is only a server-side problem, as the scores achieved during the Lighthouse validation were sufficient in normal testing (100, 96, 100, 100).

## 6. Conclusions

Based on my observations, the development process using Cursor has demonstrated that a webpage can be created in a relatively short time. While the absence of a comprehensive design system (which takes longer to produce) might slightly affect the UX experience, this would be a more serious concern if the challenge's primary focus were design choices. However, since it was purely to test my SEO skills, I'm confident that I've achieved what was required.
