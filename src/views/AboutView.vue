<template>
  <div class="about-container">
    <header>
      <h1>About the Developer</h1>
    </header>
    <div class="about-container__wrapper">
      <div class="content">
        <div class="description">
          <h2>Dinesh Mahawaththa</h2>
          <p>
            Dinesh Mahawaththa is a passionate software developer with over 10 years of experience in the field of web development. 
            He specializes in creating efficient and scalable web applications using modern technologies. Dinesh has a strong 
            background in algorithms, data structures, and software engineering principles.
          </p>
          <p>
            Throughout his career, Dinesh has worked on numerous projects ranging from small startups to large enterprise applications. 
            He has a keen interest in solving complex problems and optimizing solutions for better performance. Dinesh is also an 
            advocate for clean and maintainable code, always striving to follow best practices in software development.
          </p>
          <p>
            In addition to his professional work, Dinesh is an active member of the developer community, contributing to open-source projects 
            and participating in local meetups and conferences. He is constantly learning and staying up-to-date with the latest industry trends.
          </p>
        </div>
  
        <div class="media">
          <div class="image">
            <h3>Connect with Dinesh</h3>
            <p>Feel free to reach out to Dinesh on LinkedIn to learn more about his work and experiences.</p>
            <a href="https://www.linkedin.com/in/dineshindika" target="_blank">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAYFBMVEUAd7X///8Ac7NGlMRGk8QAdrUAbLAAbrDZ7PXV6fPy+fw9ir/p9Pkugbo0hr3D2umz0ORUnMh3q9C72eplocoIe7dsps6dxN6lyeCDs9TL4u+WwNzg7vVTmMYhg7uy1OcLxWtDAAABaklEQVRIie3W7Y6CMBAFUBxohwIK8qEIgu//lltou7TortNu9p83MRGSIzgzlEaHwETyU51jr5wrBWsODDzCgNcLrHjkHV5JOIE/hEnCOATGEiYhMHGgLBELgdi1lxlJ1IH8uvS17CjShtiriRCekM1mlm7oBaE2sCEMhA1vBg5+kCUG9n63GmGqXJYTqmNDlhcrrAkXdPsIx3FI+4TidpPDkHNOm7ndrP6U9TH/5VZxDewPsEvaS5t0CK8h9qXKSd4tq9T3EaC73rOl2EVp/X0bcqcddzMMU7YtbFuHHShsqH+lnJwlsUIqFIW7mLZAhPuYOfaGh5nR4fBotgLVQIWik+PE+11h38NCLUGmV+Ypfw9HdQU0j/lAhfr9AKafggizXHc81/VJibA4qvKzk4HE4nzgB/4jfLU8UiA26RqxQn0wfEOhTjTPMEIdZh9EOsw9QXzpPOdvMHgTGLztDN7oBm+twzfzYfkCChobmnKthiYAAAAASUVORK5CYII=" alt="LinkedIn Profile" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutView',
});
</script>

<style scoped src="../styles/about.css"></style>
