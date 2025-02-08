<template>
  <v-app class="bg-transparent">
    <v-main>
      <v-empty-state>
        <template v-slot:media>
          <v-sheet class="d-flex bg-transparent">
            <v-img class="logo" :src="electronImg" width="128px" height="128px" aspect-ratio="1"></v-img>
          </v-sheet>
        </template>
        <v-container class="d-flex flex-column align-center py-0 px-12">
          <v-row>
            <v-col>
              <v-card class="d-flex flex-column align-center mb-5" density="compact" variant="text">
                <v-card-title class="text-title">
                  Build an Electron app with
                  <span class="text-vue">Vuetify</span>
                </v-card-title>
                <v-card-subtitle class="text-subtitle-1 font-weight-regular mt-2">Powered by electron-vite</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-card
                href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
                prepend-icon="$vuetify"
                target="_blank"
                text="Start with our dedicated feature guides"
                title="Learn Vuetify"
              ></v-card>
            </v-col>

            <v-col cols="12" md="6">
              <v-card
                href="https://electron-vite.org/"
                target="_blank"
                text="Next generation Electron build tooling"
                title="Learn Electron+Vite"
              >
                <template v-slot:prepend>
                  <v-img :src="electronViteImg" width="24px" aspect-ratio="1" cover></v-img>
                </template>
              </v-card>
            </v-col>

            <v-col cols="12" md="6">
              <!-- href="https://bin.vuetifyjs.com" -->
              <v-card
                prepend-icon="mdi-invoice-text-send"
                text="Click to send an IPC message to the main console"
                title="Send IPC message"
                @click="ipcHandle"
              ></v-card>
            </v-col>

            <v-col cols="12" md="6">
              <v-card
                href="https://issues.vuetifyjs.com"
                prepend-icon="$warning"
                target="_blank"
                text="File a bug report for Vuetify"
                title="Report a Bug"
              ></v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex flex-column align-center">
              <div class="tip">Press <code>F12</code> to open devTools</div>
            </v-col>
          </v-row>
          <!-- <v-footer class="d-flex flex-column bg-transparent" absolute> -->
          <v-spacer vertical></v-spacer>
          <v-row>
            <v-col> </v-col>
          </v-row>
        </v-container>
      </v-empty-state>
    </v-main>
    <v-footer class="d-flex flex-column bg-transparent" app>
      <Versions class="pa-1" :versions="appStorage.versions" />
    </v-footer>
  </v-app>
</template>
<script setup>
  import { onMounted, ref } from "vue";

  import Versions from "@renderer/components/Versions.vue";

  import electronImg from "@renderer/assets/electron.svg";
  import electronViteImg from "./assets/electron-vite.svg";

  import { useAppStorage } from "@renderer/stores/app-storage";

  const appStorage = useAppStorage();

  onMounted(() => {
    console.log("APP ::: onMounted");
    console.log(" apiBridge", appStorage.apiBridge);
    console.log(" apiBridge.getMessage()", appStorage.apiBridge.getMessage());
    console.log(" versions: ", appStorage.versions);
  });

  const ipcHandle = () => window.electron.ipcRenderer.send("ping");
</script>

<style lang="scss">
  .logo {
    -webkit-user-drag: none;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 1.2em #6988e6aa);
  }

  .text-title {
    font-size: 28px !important;
    font-weight: 700;
    line-height: 32px;
  }

  .text-vue {
    color: rgb(var(--v-theme-primary-lighten-2));
    font-weight: 700;
  }

  .v-footer {
    bottom: 20px !important;
  }
</style>
