# electron-vite-boilerplate-vuetify

An Electron (electron-vite) application with Vuetify.
This repository is meant to be cloned.

## Documentation

Detailed documentation for this and other boilerplate repositories can be found here:

<!-- TODO: fix boilerplate monorepo url -->

<!-- - [Boilerplate Monorepo](https://github.com/DeezjaVu/boilerplate-monorepo) -->

- [Boilerplate Monorepo (coming soon)](https://github.com/DeezjaVu)

## Project Setup

### Clone

Start by cloning to repo to a local folder.

```bash
git clone https://github.com/DeezjaVu/electron-vite-boilerplate-vuetify.git
```

### Install

Go into the folder where the repo was cloned and run the following command:

```bash
npm install
```

### Development

To test that everything is working as-is, run the following command:

```bash
npm run vite:dev
```

### Build

To verify that a production build can be built, run one of the following scripts:

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

### Update

If you got this far without any hickups, you should try and update the packages to the latest version.

```bash
npm update
```

Note: I'll look into running an automated [Github workflow](https://docs.github.com/en/actions/writing-workflows/about-workflows) to update the `package.json` dependencies with the latest versions.
