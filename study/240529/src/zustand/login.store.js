import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useLoggedInStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      logIn: () =>
        set(() => ({
          isLoggedIn: true,
        })),
      logOut: () =>
        set(() => ({
          isLoggedIn: false,
        }
      )),
    }),
    {
      name: "storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useLoggedInStore;
