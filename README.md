# Marta Mrozowska - Personal Website

A professional academic website showcasing research, education, and experience in climate modeling and oceanography.

## Features

- 📱 Fully responsive design
- 🎨 Clean, professional academic aesthetic
- 🌊 Ocean-inspired color scheme
- ⚡ Smooth animations and scrolling
- 📊 Research and education timeline
- 🔗 Integrated ORCID and GitHub links
- 📧 Easy contact information

## Deployment to GitHub Pages

### Option 1: Create a New Repository

1. Create a new repository on GitHub named `username.github.io` (replace `username` with your GitHub username: `mrozowskamartaa`)
   - This will make your site available at `https://mrozowskamartaa.github.io`

2. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/mrozowskamartaa/mrozowskamartaa.github.io.git
   cd mrozowskamartaa.github.io
   ```

3. Copy all the website files (index.html, styles.css, script.js) into this repository

4. Commit and push:
   ```bash
   git add .
   git commit -m "Initial commit - personal website"
   git push origin main
   ```

5. Your site will be live at `https://mrozowskamartaa.github.io` within a few minutes!

### Option 2: Use an Existing Repository

1. In your existing GitHub repository, go to **Settings** → **Pages**

2. Under "Source", select the branch you want to use (usually `main` or `master`)

3. Select the root folder `/` (or `/docs` if you place files there)

4. Click **Save**

5. Your site will be available at `https://mrozowskamartaa.github.io/repository-name`

## File Structure

```
.
├── index.html       # Main HTML file
├── styles.css       # Stylesheet with custom styling
├── script.js        # JavaScript for interactions and animations
└── README.md        # This file
```

## Customization

### Updating Content

All content is in `index.html`. Key sections to update:

- **Hero section**: Update name, title, institution
- **About**: Modify the personal profile text
- **Research**: Add or update research projects
- **Education**: Update degrees and institutions
- **Experience**: Add or modify work experience
- **Contact**: Update email and phone number

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #0077be;      /* Main blue color */
    --secondary-color: #005a8d;    /* Darker blue */
    --accent-color: #00a8e8;       /* Light blue accent */
}
```

### Adding a Custom Domain

1. Buy a domain from a registrar (e.g., Namecheap, Google Domains)
2. In your repository settings, go to **Pages** and add your custom domain
3. Configure DNS records with your registrar:
   - Add an `A` record pointing to GitHub's IP addresses
   - Add a `CNAME` record pointing to `mrozowskamartaa.github.io`

See [GitHub's custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for detailed instructions.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Google Fonts (Inter)

## License

Feel free to use this template for your own personal website. Attribution appreciated but not required.

## Contact

For questions or issues, contact: mm6851@princeton.edu

---

Built with ❤️ for climate science research
