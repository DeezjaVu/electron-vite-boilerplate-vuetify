// Utilities
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const ELECTRON_API = window.api;
const ELECTRON_IPC = window.electron;

/**
 * App State
 * Pinia: https://pinia.esm.dev/
 */
export const useAppStorage = defineStore(
  "appState",
  () => {
    //[-]============================
    //[-] STATE (PROPERTIES)
    //[-]============================

    //[-]============================
    //[-] GETTERS
    //[-]============================

    const apiBridge = computed(() => {
      console.log("appState ::: apiBridge");
      return ELECTRON_API;
    });

    const ipcBridge = computed(() => {
      console.log("appState ::: apiBridge");
      return ELECTRON_IPC;
    });

    const versions = computed(() => {
      console.log("appState ::: versions");
      return { ...ELECTRON_IPC.process.versions };
    });

    //[-]============================
    //[-] ACTIONS
    //[-]============================

    return {
      versions,
      apiBridge,
      ipcBridge
    };
  },
  { persist: true }
);
