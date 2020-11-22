<template>
  <div class="update">
    <h1>Update</h1>
    <form>
      <input
        type="text"
        class="updateinput"
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
      <button id="updatepostbutton" type="button" v-on:click="updatePost">
        Update post
      </button>
    </form>
  </div>
</template>

<script>
import {postRef} from "../firebase-db";
export default {
    name: "Update",
    props: {
        post: Object
    },
    methods: {
        triggerChooseImg() {
            this.$refs.fileInput.click();
        },
        previewImage() {
            const imageFile = this.$refs.fileInput.files[0];
            const fileReader = new FileReader();
            fileReader.onload = event => {
                this.post.image = event.target.result;

            };
            fileReader.readAsDataURL(imageFile);
        },
        updatePost(){
            console.log(this.post);
            postRef.doc(this.post.id).set({description: this.post.description,
            image: this.post.image});
            this.$router.push("/");
        }
    }
}

</script>

<style>
#updatepost {
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
  margin-bottom: 10px;
}
.updateinput {
  padding: 15px;
  margin-bottom: 10px;
}

#updatepostbutton {
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
  margin-bottom: 10px;
}

.choose-image {
  margin-bottom: 10px;
}
.hey {
}

.image-preview {
  max-width: 300px;
}
</style>