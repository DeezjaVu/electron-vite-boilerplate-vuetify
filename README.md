# electron-vite-boilerplate-vuetify

An Electron ([electron-vite](https://electron-vite.org/)) boilerplate application with [Vuetify](https://vuetifyjs.com/en/).
This repository is meant to be cloned.

It is a fully configured starting point for an Electron app and includes the following:

- [Electron](https://www.electronjs.org/)
- [Electron Builder](https://www.electron.build/index.html)
- [Vite](https://vitejs.dev/)
- [Vuetify](https://vuetifyjs.com/en/)
- [Pinia](https://pinia.esm.dev/)

## Documentation

More information about this and other boilerplate repositories can be found here:

<!-- TODO: fix boilerplate monorepo url -->

<!-- - [Boilerplate Monorepo](https://github.com/DeezjaVu/boilerplate-monorepo) -->

- [Boilerplate Monorepo (coming soon)](https://github.com/DeezjaVu)

## Project Setup

### Clone

Start by cloning this repo to a local folder.

```bash
git clone https://github.com/DeezjaVu/electron-vite-boilerplate-vuetify.git
```

### Install

Note: Because this repo uses a Github workflow to update the `package.json` file, it may be out of sync with the `package-lock.json` file. To fix that, you can simply delete the `package-lock.json` file before running `npm install`.

Go into the folder where the repo was cloned and run the following command:

```bash
npm install
```

This will then install all the dependencies specified in the `package.json` file and afterwards execute the `postinstall` script.

### Development

To test that everything is working as-is, run the following command:

```bash
npm run vite:dev
```

### Build

To verify that a production build can be built, run one of the following scripts:

```bash
# For windows
npm run build:win

# For macOS
npm run build:mac

# For Linux
npm run build:linux
```

### Update

If you got this far without any hickups, you should try and update the project's dependencies to the latest version.

```bash
npm update
```

## Project Structure

The `src` folder has the following structure:

```bash
- src/
  - main/
      index.js
  - preload/
      index.js
  - renderer/
      index.html
    - src/
        App.vue
        main.js
```

- `src/main/` contains the Electron main process code.
- `src/preload/` contains the Electron preload process code.
- `src/renderer/` contains the Electron renderer process code.

Furthermore, the `src/renderer/src/` folder contains the actual Vue/Vuetify application code.

This seperation is also reflected in the `Vite` configuration files.

```js
// electron.vite.config.mjs
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  main: {},
  preload: {},
  renderer: {}
});
```
