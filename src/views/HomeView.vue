<template>
  <div class="home-container">
    <header>
      <h1>Welcome to Dijkstra's Algorithm Explorer</h1>
      <p>Discovering Optimal Routes Through Nodes Using Dijkstra's Method</p>
    </header>
    <div class="home-container__wrapper">
      <div class="navigation">
        <router-link to="/calculator">Go to Dijkstra's Algorithm Calculator</router-link>
      </div>
      <div class="content">
        <div class="description">
          <h2>What is Dijkstra's Algorithm?</h2>
          <p>
            Dijkstra's Algorithm is an algorithm for finding the shortest paths between nodes in a graph,
            which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956
            and published three years later.
          </p>
        </div>

        <div class="media">
          <div class="image">
            <h3>Visualization of Dijkstra's Algorithm</h3>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif" alt="Dijkstra's Algorithm Visualization" />
          </div>

          <div class="video">
            <h3>Learn More About Dijkstra's Algorithm</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GazC3A4OQTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});
</script>

<style scoped src="../styles/home.css"></style>