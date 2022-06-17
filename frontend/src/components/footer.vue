<!-- composant Footer -->

<template>
  <footer>
    <div>
      <p>Siège social : 22 bld Elysée - 75015 Paris</p>
    </div>
    <div>
      <p>Téléphone : 01 35 78 67 25</p>
    </div>
    <div>
      <p>Email : contact@admin.com</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterPage",
};
</script>

<style scoped lang="scss">
footer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 95%;
}

p {
  padding-left: 20px;
}
</style>
