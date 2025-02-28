# Git Tag and Publish Guide

## Prerequisites

1. Set up GPG signing (one-time setup):

```bash
# Install GPG if needed
brew install gnupg

# Generate GPG key if needed
gpg --full-generate-key

# Configure Git with your key
gpg --list-secret-keys --keyid-format=long
git config --global user.signingkey YOUR_KEY_ID
git config --global tag.gpgSign true
```

## Release Process

1. Ensure your CHANGELOG.md is up to date
2. Create and sign a Git tag based on latest version documentation:

```bash
git tag -s v1.0.5 -m "First Release v1.0.5

Major Changes:
- Initial setup with complete CI/CD pipeline, documentation, testing, and version management
- Fully configured template for npm package development

Notable Changes:
- Simplified package name to npm-template
- Updated workflows and configurations
- Added Biome formatter configurations
- Improved documentation and badges
- Package naming convention updates for best practices"
```

3. Push the tag to trigger automatic publish:

```bash
git push origin v1.0.5
```

4. Verify the tag signature (optional):

```bash
git verify-tag v1.0.5
```

## What Happens Next

1. Pushing the tag creates a GitHub Release
2. GitHub Release triggers the publish workflow
3. Package is automatically published to NPM with provenance
4. Check publish status in GitHub Actions
