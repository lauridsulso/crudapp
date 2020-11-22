<template>
  <div>
    <h2>Photo gallery</h2>
    <div class="grid-container">
      <article v-for="post in posts" :key="post.id">
        <img v-bind:src="post.image" />
        <h3>{{ post.description }}</h3>
        <router-link :to="{ name: 'Update', params: { post: post } }">
          <button id="updatebutton">Update</button>
        </router-link>
        <button
          id="deletebutton"
          type="button"
          v-on:click="deletePost(post.id)"
        >
          Delete
        </button>
      </article>
    </div>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";

export default {
  data() {
    return {
      posts: [],
    };
  },
methods: {
deletePost(id){
  console.log(id);
  postRef.doc(id).delete(); 
}
}, 
  firestore: {
    posts: postRef,
  }
};
</script>

<style scoped>
/* ---------- Grid container ---------- */
.grid-container {
  display: grid;
  grid-template-columns: 100%;
  padding: 10px;
}

@media (min-width: 600px) {
  .grid-container {
    grid-template-columns: 50% 50%;
  }
}

@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: 33.33% 33.33% 33.33%;
  }
}

.grid-container article {
  text-align: center;
  padding: 10px;
}

.grid-container img {
  max-width: 300px;
  width: 100%;
}

.grid-container h3 {
  font-weight: 600;
  margin: 0 0 1.5em;
}

#updatebutton {
  background-color: transparent;
  border-radius: 13px;
  border: 2px solid #ffffff;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  padding: 13px 30px;
  text-decoration: none;
  margin: -50px 5px 100px 5px;
}

#updatebutton:hover {
  color: greenyellow;
  border-color: greenyellow;
}
#deletebutton {
  background-color: transparent;
  border-radius: 13px;
  border: 2px solid #ffffff;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  padding: 13px 30px;
  text-decoration: none;
  margin: -50px 5px 100px 5px;
}

#deletebutton:hover {
  color: rgb(255, 59, 59);
  border-color: rgb(255, 59, 59);
}
</style>
