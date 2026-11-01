# Security

These apps (Notile, Notile Chart, Dental Set-App, Chrome Card and Ortho Card) are static pages served by GitHub Pages at notile.co.uk.

- Everything runs in the browser. There are no accounts, servers or databases.
- Each page carries a Content Security Policy that forbids network connections (`connect-src 'none'`), third-party scripts, styles, fonts and frames. Fonts and the QR code library are served from this site.
- Drafts and settings are kept in the browser's local storage on the device in use. Do not enter patient names, CHI or hospital numbers.

## Reporting a problem

Please report security issues privately through GitHub's **Report a vulnerability** button on the repository's Security tab, rather than in a public issue.
