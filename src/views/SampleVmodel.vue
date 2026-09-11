<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      course: ""
    }
  }
}
</script>

<template>
  <div>
    <h2>Live Profile Form</h2>
    <p><label>Name: <input type="text" v-model="name"></label></p>
    <p><label>Age: <input type="number" v-model="age"></label></p>
    <p><label>Course: <input type="text" v-model="course"></label></p>

    <hr>

    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <p>Course: {{ course }}</p>
  </div>
</template>