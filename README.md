# Marta Mrozowska - Personal Website (Redesigned)

A minimalist academic website with golden ratio layout and GitHub theme colors.

## Files Included

- `index.html` - Homepage with golden ratio layout
- `research.html` - Research page with four topic sections
- `software.html` - Software page (Veropt)
- `teaching.html` - Teaching & Outreach page
- `fieldwork.html` - Fieldwork page (M189)
- `styles.css` - Stylesheet with light/dark themes
- `script.js` - Theme switcher with localStorage
- `README.md` - This file

## Setup Instructions

### 1. Add Your Files

You'll need to add these files to complete the website:

**Required:**
- `profile.jpg` - Your profile picture (round format works best, will be cropped to circle)
- `MartaMrozowska_CV_Oct2025.pdf` - Your CV PDF (or update the filename in index.html)

**Optional (for content):**
- Research topic images (referenced in research.html)
- Fieldwork cruise photo (referenced in fieldwork.html)
- Veropt visualization HTML (referenced in software.html)
- Any poster PDFs you want to link

### 2. Update Content

The website has placeholder text that you should replace:

**Homepage (`index.html`):**
- Replace the Lorem Ipsum in the highlights section with your actual research highlights

**Research page (`research.html`):**
- Update descriptions for each research topic
- Add your publications and links
- Upload topic images and update image paths
- Add poster PDF links

**Software page (`software.html`):**
- Update the Veropt description
- Add your specific contributions
- Add publications
- Add the HTML visualization

**Teaching & Outreach (`teaching.html`):**
- Fill in details for GFD and NIWs sections
- ULAB section is already filled based on your CV

**Fieldwork (`fieldwork.html`):**
- Add details about your M189 cruise work
- Upload cruise photo
- Add cruise report and publication links

### 3. Deploy to GitHub Pages

1. In your `mrozowskamartaa.github.io` repository, delete all old files
2. Upload all the new HTML, CSS, and JS files
3. Upload your profile picture as `profile.jpg`
4. Upload your CV as `MartaMrozowska_CV_Oct2025.pdf`
5. Commit and push

Your site will update automatically!

## Features

- **Golden ratio layout** (38.2% : 61.8% column split)
- **GitHub themes** - Light and Dark modes matching GitHub's color schemes
- **Persistent theme** - Your choice is saved across visits
- **Responsive design** - Works on mobile, tablet, and desktop
- **Clean navigation** - Home link on all subpages
- **Easy to update** - All content in simple HTML

## Design Details

### Color Themes

**Light Theme (GitHub Light Default):**
- Background: `#ffffff`
- Text: `#1f2328`
- Links: `#0969da`

**Dark Theme (GitHub Dark Default):**
- Background: `#0d1117`
- Text: `#e6edf3`
- Links: `#4493f8`

### Layout

- Left column: 38.2% (golden ratio)
- Right column: 61.8%
- Split horizontally: 50/50
- Profile picture centered horizontally, aligned to bottom of upper left
- Contact info centered in lower left
- Highlights in upper right
- Navigation in lower right

## Customization Tips

### Changing the CV filename

If you want to use a different CV filename, edit line 54 in `index.html`:
```html
<a href="YOUR_CV_FILENAME.pdf" target="_blank" class="nav-link">> CV</a>
```

### Adding images

To add images to research topics, fieldwork, etc.:
1. Upload your image file (e.g., `research-mixing.jpg`)
2. In the HTML, replace the placeholder div with:
```html
<div class="topic-image">
    <img src="research-mixing.jpg" alt="Description">
</div>
```

### Updating links

All external links are already set up in the homepage:
- Google Scholar
- LinkedIn
- ORCID
- GitHub

To change them, edit lines 24-27 in `index.html`.

## Jupyter Notebooks

For hosting Jupyter notebooks on the Teaching & Outreach page, you have three options:

1. **Convert to HTML** (recommended):
   ```bash
   jupyter nbconvert --to html your_notebook.ipynb
   ```
   Upload the HTML file and link to it from teaching.html

2. **Use nbviewer**:
   Upload the .ipynb file to your GitHub repo and link to:
   ```
   https://nbviewer.org/github/mrozowskamartaa/mrozowskamartaa.github.io/blob/main/notebook.ipynb
   ```

3. **Embed with iframe**:
   Convert to HTML and embed directly in the page

## Troubleshooting

**Profile picture not showing:**
- Make sure the file is named exactly `profile.jpg`
- It should be in the root directory (same level as index.html)
- Try .png or .jpeg if .jpg doesn't work (update line 18 in index.html)

**CV link not working:**
- Verify the PDF filename matches exactly
- Make sure it's in the root directory
- Check the link in index.html line 54

**Theme not saving:**
- Make sure JavaScript is enabled in your browser
- Check browser console for errors
- localStorage should be supported in all modern browsers

**Page looks broken on mobile:**
- The responsive design should work automatically
- If not, clear your browser cache and reload

## Support

For questions or issues:
- Email: mm6851@princeton.edu
- GitHub: https://github.com/mrozowskamartaa

---

Designed with golden ratio layout and GitHub color themes
