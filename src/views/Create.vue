<template>
  <div class="create">
    <h1>Upload photos to gallery</h1>
    <form>
      <input
        id="input"
        type="text"
        v-model="post.description"
        placeholder="Type a description here"
        required
      />

      <input
        type="file"
        ref="fileInput"
        accept="image/*"
        v-on:change="previewImage"
      />

      <button class="choose-image" type="button" v-on:click="triggerChooseImg">
        Choose Image
      </button>

      <div>
        <img :src="post.image" class="image-preview" alt="" />
      </div>
      <button id="createbutton" type="button" v-on:click="createPost">
        Upload
      </button>
    </form>
  </div>
</template>



<script>
import { postRef } from '../firebase-db.js'
export default {
  name: 'Create',
  data() {
    return {
      post: {
        description: '',
        image: null
      }
    }
  },
  methods: {
    triggerChooseImg() {
      this.$refs.fileInput.click()
    },
    previewImage(){
      const imageFile = this.$refs.fileInput.files[0]
      console.log(imageFile);
      const fileReader = new FileReader()
      fileReader.onload = (event) => {
        this.post.image = event.target.result
      }
      fileReader.readAsDataURL(imageFile)
    },
    createPost() {
    postRef.add(this.post)
    this.$router.push('/')
    }
  }
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}
html {
  width: 80%;
  margin: auto;
}
#input {
  padding: 15px;
  margin-bottom: 20px;
}

#input:hover {
  padding: 15px;
  margin-bottom: 20px;
}
#createbutton {
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
}

#createbutton:hover {
  color: #ffd000;
  border-color: #ffd000;
}

.choose-image {
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
}
.choose-image:hover {
  color: #ffd000;
  border-color: #ffd000;
}

input[type="file" i] {
  display: none;
}
</style>