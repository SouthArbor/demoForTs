import { defineStore } from "pinia";
import { UserGenderEnum, UserInfo, UserTokenEnum } from "@/types/user";


const useGlobalStore = defineStore("global", {
  state: () => ({
    userInfo: null,
  }),
  actions: {
    setUserInfo(info: UserInfo | null) {
      this.userInfo = info;
    },

    updateUserInfo(info: {
      avatar: string;
      username: string;
      gender: UserGenderEnum;
    }) {
      if (this.userInfo) {
        this.userInfo.avatar = info.avatar;
        this.userInfo.username = info.username;
        this.userInfo.gender = info.gender;
      }
    },
    handleLogout() {
      this.userInfo = null;
      window.localStorage.removeItem(UserTokenEnum.ASSET_TOKEN);
      window.localStorage.removeItem(UserTokenEnum.REFRESH_TOKEN);
    },
  },
});

export default useGlobalStore;