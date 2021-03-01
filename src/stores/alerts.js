import { writable } from "svelte/store";

function createAlerts() {
  let idCounter = 1;
  const { subscribe, update } = writable([]);

  return {
    subscribe,
    add: (alertData) => {
      update((alertList) => [
        ...alertList,
        { ...alertData, ...{ id: idCounter++ } },
      ]);
    },
    remove: (alertId) => {
      update((alertList) => alertList.filter((a) => a.id !== alertId));
    },
  };
}

export const alerts = createAlerts();
