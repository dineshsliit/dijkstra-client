<template>
  <div class="select-path">
    <h2>Select Path</h2>
    <div class="dropdown-group">
      <label for="fromNode">From Node</label>
      <div class="dropdown">
        <select v-model="fromNode" id="fromNode">
          <option value="" disabled>Select a node</option>
          <option v-for="node in nodes" :key="node" :value="node">
            {{ node }}
          </option>
        </select>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"></path> </g></svg>
      </div>
      <label for="toNode">To Node</label>
      <div class="dropdown">
        <select v-model="toNode" id="toNode">
          <option value="" disabled>Select a node</option>
          <option v-for="node in nodes" :key="node" :value="node">
            {{ node }}
          </option>
        </select>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"></path> </g></svg>
      </div>
    </div>

    <div class="button-group">
      <button class="clear-btn" @click="clearFields">Clear</button>
      <button class="calculate-btn" @click="handleCalculatePath">Calculate 
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 7H15" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 17V14" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 11H15.01" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 11H12.01" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 11H9.01" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 14H9.01" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 14H12.01" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 17H12.01" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 17H9.01" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5 7C5 5.11438 5 4.17157 5.58579 3.58579C6.17157 3 7.11438 3 9 3H12H15C16.8856 3 17.8284 3 18.4142 3.58579C19 4.17157 19 5.11438 19 7V12V17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H12H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V12V7Z" stroke="#fff" stroke-width="2" stroke-linejoin="round"></path> </g></svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { getNodes } from '@/services/apiService';

export default defineComponent({
  emits: ['calculatePath'],
  setup(props, { emit }) {
    const nodes = ref<string[]>([]);
    const fromNode = ref<string>('');
    const toNode = ref<string>('');

    const fetchNodes = async () => {
      try {
        nodes.value = await getNodes();
      } catch (error) {
        console.error('Error fetching nodes', error);
      }
    };

    onMounted(() => {
      fetchNodes();
    });

    const clearFields = () => {
      fromNode.value = '';
      toNode.value = '';
    };

    const handleCalculatePath = () => {
      emit('calculatePath', fromNode.value, toNode.value);
    };

    return {
      nodes,
      fromNode,
      toNode,
      clearFields,
      handleCalculatePath,
    };
  },
});
</script>

<style scoped>
/* Add your CSS here */
</style>
