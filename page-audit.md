# Portfolio page audit — Shweta Dubey

Source of truth: resume details supplied in the build request. No resume PDF was present in the project folder.

| Content item | Verification status | Evidence or action required |
| --- | --- | --- |
| Name | Verified | Rendered as **Shweta Dubey** in the logo, hero heading (`h1`), About profile list, page title, and footer. Matches the resume. |
| Contact details — email | Verified | Resume email `shwetadubey9588@gmail.com` is shown in Contact and linked with `mailto:shwetadubey9588@gmail.com`. The requested `mailto:shweta dubey 9588@gamil.com` was **not** used because it contains spaces and a misspelled domain and would not send mail. |
| Contact details — phone | Verified | `9588892943` is shown and linked with `tel:9588892943`. Country code was not added because it was not provided. |
| Contact details — LinkedIn | Verified | Clean profile URL used: `https://www.linkedin.com/in/shweta-dubey-13286a382` (UTM query text from the paste was removed). |
| About section | Verified | About text uses only degree, JECRC University, Jaipur, study period 2025–2029, C/C++, DSA/OOP/problem solving, and the two named projects. No internships, GPA, or extra bio were added. |
| Skills | Verified | Four groups match the resume: Programming Languages (C, C++), Core Concepts, Tools (Git, GitHub, VS Code, Excel, Office, PowerPoint), Coursework. |
| Project — UPI Shield | Verified | Card includes resume description, three features, Python / Machine Learning / Transaction Analysis, and the 2024 certificate note. No GitHub or live URL. |
| Project — MediQR | Verified | Card includes resume description, three features, and Python / QR Code Generation / Web Development. No GitHub or live URL. |
| Education | Verified | B.Tech in Computer Science and Engineering, JECRC University, Jaipur, Rajasthan, 2025–2029, plus listed coursework only. |
| Certificates | Verified | UPI Shield Certificate, 2024; Cyber Sangam Event Certificate, 2024. Wording matches the resume. |
| External links | Verified | Working links: internal section hashes, `mailto:`, `tel:`, LinkedIn (`target="_blank"` + `rel="noopener noreferrer"`). No fabricated GitHub, demo, or repo hyperlinks. |
| CSS and JS paths | Verified | `index.html` links `style.css` and `script.js` as sibling files. Browser check: both files loaded; copyright year filled as `2026`. |
| Navigation and section IDs | Verified | Nav targets `#about`, `#skills`, `#projects`, `#education`, `#achievements`, `#contact` match section IDs. Hero buttons use `#projects` and `#contact`. Logo / back-to-top use `#top`. Mobile menu opened, then Projects navigated to `#projects`. |
| Responsive design | Verified | Mobile view showed hamburger menu and stacked hero. Desktop view showed full primary nav. Grids collapse under 960px. Menu breakpoint set at 980px so tablet nav does not overflow. |
| Accessibility | Verified | Skip link, semantic landmarks, labelled nav, `aria-expanded` on menu toggle, keyboard `:focus-visible`, `prefers-reduced-motion` disables animations. Contrast is navy/white/gold on the implemented theme. |
| Remaining placeholders | Verified | Three `PLACEHOLDER` marks: GitHub profile; UPI Shield repository/live demo; MediQR repository/live demo. |
| HTML validation | Pending | Open `index.html` at [https://validator.w3.org/nu/](https://validator.w3.org/nu/) and confirm there are no errors. Not completed in this environment because the validator was not run against the saved file. |
| Missing assets / broken internal links | Verified | No image files are referenced. CSS visual (SD monogram) is used instead of a photograph. Internal hashes resolve to existing IDs. |
| Invented content check | Verified | No testimonials, job history, project metrics, GitHub username, or deployed URLs were invented. |

## Files created

| File | Role |
| --- | --- |
| `index.html` | Semantic HTML5 structure |
| `style.css` | Navy / white / gold layout and responsive styles |
| `script.js` | Mobile menu, smooth scrolling, active nav, copyright year |
| `page-audit.md` | This audit |

## Remaining tasks for you

1. Open `index.html` in a browser (see instructions in the chat).
2. Validate HTML at https://validator.w3.org/nu/.
3. Replace the three `PLACEHOLDER` items when you have a GitHub profile and project links.
4. Confirm the LinkedIn URL still matches your live profile.
5. Optional: add a country code to the phone `tel:` link if you want international callers to dial correctly.
