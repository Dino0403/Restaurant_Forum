<template>
  <div class="container py-5">
    <form class="w-100" v-on:submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          v-model="name"
          id="namel"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="passwordCheck">Password Check</label>
        <input
          v-model="passwordCheck"
          id="passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
      </div>

      <div class="d-grid gap-2 mb-3">
        <button class="btn btn-primary" type="submit">Submit</button>
      </div>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin">Sign In</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        name: this.name,
        email: this.email,
        password: this.password,
        passwordCheck: this.passwordCheck,
      });
      console.log(data);
    },
  },
};
</script>
