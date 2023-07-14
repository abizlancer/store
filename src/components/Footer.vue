<template>
  <footer class="footer">
    <div class="footer__content container">
      <a href="#!" class="footer--logo"></a>
      <nav class="footer__nav">
        <ul class="footer__nav--list">
          <li v-for="link in links" :key="link.id">
            <a :href="link.link">{{ link.name }}</a>
          </li>
        </ul>
      </nav>
      <div class="footer__contacts">
        <h4>Contacts</h4>
        <a href="#!" class="footer__contacts--address">
          <fa icon="fa-solid fa-location-dot" />
          <span>70 West Buckingham Ave. Farmingdale, NY 11735</span>
        </a>
        <a href="#!" class="footer__contacts--phone">
          <fa icon="fa-solid fa-mobile-screen-button" />
          <span>+88 01911 717 490</span>
        </a>
        <a href="#!" class="footer__contacts--phone">
          <fa icon="fa-regular fa-envelope" />
          <span>contact@sportdriven.com</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    const links = [
      {id: 1, link: '#!', name: 'Home'},
      {id: 2, link: '#!', name: 'Payment and delivery'},
      {id: 3, link: '#!', name: 'Product card'},
      {id: 4, link: '#!', name: 'Like'},
    ]
    
    return {
      links
    }
  }
}
</script>