<template>
  <div class="footer">
    <div class="container">
      <div class="row m-0">
        <section>
          <h4>InfoXpressions</h4>
        </section>
        <section>
          <ul class="links">
            <li class="list-item">
              HOME
            </li>
            <li class="list-item">
              ABOUT US
            </li>
            <li class="list-item">
              SPONSORS
            </li>
            <li class="list-item">
              GLIMPSES
            </li>
          </ul>
        
          <ul class="links">
            <li class="list-item">
              CONTACT US
            </li>
            <li class="list-item">
              PRIVACY POLICY
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.footer {
  height: fit-content;
  background-color: rgb(9, 0, 32);
  color: white;
  padding: 20px;
}
.footer section {
  margin: 0 10px;
}
.links {
  list-style-type: none;
  font-weight: bold;
  font-size: 0.8em;
}
.list-item {
  opacity: 0.5;
  cursor: pointer;
  margin: 10px 0;
  transition: opacity 100ms ease-out;
}
.list-item:hover {
  opacity: 1;
}
</style>