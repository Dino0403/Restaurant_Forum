

<template>
  <!--  v-if : 不符合條件不會出現在 html 中
        v-show : 不符合條件的話會透過 display : none 讓使用者看不到
  -->
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"> 餐廳評論網 </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav d-flex align-items-start">
          <router-link
            to="#"
            class="nav-link text-white mr-3"
            v-if="currentUser.isAdmin"
          >
            管理員後台
          </router-link>
          <template v-if="isAuthenticated">
            <router-link to="#" class="nav-link text-white mr-3">
              {{ currentUser.name || "使用者" }} 您好
            </router-link>
            <button
              type="button"
              class="nav-link btn btn-sm btn-outline-success my-2 my-sm-0"
              style="min-width: 50px"
            >
              登出
            </button>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// 模擬 API 回傳的資料
/* eslint-disable */
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  data() {
    return {
      currentUser: {
        id: 1,
        name: "",
        email: "",
        image: "",
        isAdmin: false,
      },
      isAuthenticated: false,
    };
  },
  methods: {
    fetchUser() {
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser,
      };
      this.isAuthenticated = dummyUser.isAuthenticated;
      /*
        this.currentUser = 
          // 預設值
          id: -1,
          name: "",
          email: "",
          image: "",
          isAdmin: false,
          // 屬性值重複的以後方的資料為主，進行覆蓋
          id: 1,
          name: "",
          email: "",
          image: "",
          isAdmin: false,
      */
    },
  },
  // Vue 組件建立好夠開始執行
  created() {
    console.log("created");
    this.fetchUser();
  },
  // DOM 掛載到網頁上後開始執行
  mounted() {
    console.log("mouted");
  },
};
</script>


