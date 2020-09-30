<template>
  <b-container>
    <div>
      <img class="image" src="../assets/logo.png" alt="" />
    </div>

    <div class="adduser">
      <b-form-input
        v-model="firstName"
        placeholder="Enter firstName"
      ></b-form-input>
      <b-form-input
        v-model="lastName"
        placeholder="Enter lastName"
      ></b-form-input>
      <b-button @click="addUser" class="btnAdd" variant="outline-primary"
        >Button</b-button
      >
    </div>
    <p class="error" v-if="error">{{ error }}</p>
    <div>
      <ul>
        <li class="user" v-for="user in users" :key="user.id">
          <span>{{ `${user.firstName} ${user.lastName}` }}</span>
          <b-icon-plus class="iconPlus" @click.stop="deleteUser(user._id)" />
        </li>
      </ul>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "todolist",
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
  methods: {
    addUser() {
      let user = {
        firstName: this.firstName,
        lastName: this.lastName,
      };

      this.$store.dispatch("addUserAction", user);
      this.resetData();
    },
    resetData() {
      this.firstName = "";
      this.lastName = "";
    },
    deleteUser(_id) {
      this.$store.dispatch("deleteUserAction", _id);
      console.log("da xoa");
    },
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    error() {
      return this.$store.state.error;
    },
  },
};
</script>

<style scoped>
.logo {
  margin: 0 auto;
}
.user {
  width: 500px;
  height: 50px;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: aquamarine;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.adduser {
  width: 500px;
  height: auto;
  margin: 0 auto;
  display: flex;
  margin-bottom: 20px;
}
.btnAdd {
  margin-left: 5px;
}
.iconPlus {
  transform: rotate(45deg);
  font-size: 2rem;
  position: absolute;
  right: 10px;
  cursor: pointer;
}
</style>
