<template>
  <div class="calculator-container">
    <header>
      <h1>Dijkstra's Algorithm Calculator</h1>
      <p>Discovering Optimal Routes Through Nodes Using Dijkstra's Method</p>
    </header>
    <div class="calculator-container__wrapper">
      <div class="content">
        <SelectPath @calculatePath="calculatePath" />
        <div class="result">
          <h2>Result</h2>
          <textarea readonly v-model="result" placeholder="Result will be displayed here"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SelectPath from './SelectPath.vue';
import { getShortestPath } from '@/services/apiService';

export default defineComponent({
  components: {
    SelectPath,
  },
  data() {
    return {
      result: '',
    };
  },
  methods: {
    async calculatePath(fromNode: string, toNode: string) {
      if (!fromNode || !toNode) {
        this.result = 'Please select both nodes.';
        return;
      }

      try {
        const data = await getShortestPath(fromNode, toNode);
        this.result = `
          From Node: ${data.nodeNames[0]}
          To Node: ${data.nodeNames[data.nodeNames.length - 1]}
          Path: ${data.nodeNames.join(' -> ')}
          Total Distance: ${data.distance}
        `;
      } catch (error) {
        console.error('Error fetching shortest path from API call', error);
        this.result = 'Error fetching shortest path from API call';
      }
    },
  },
});
</script>

<style src="../styles/calculator.css"></style>
