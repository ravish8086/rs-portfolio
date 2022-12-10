<template>
    <footer class="footer">
      <p>Designed By Ravi Shankar<br>
        <a href="mailto:ravi8086@bu.edu">ravi8086@bu.edu</a><br>
        © {{ new Date().getFullYear() }}
      </p>
    </footer>
</template>
<style>
.footer a {
  color: var(--accent);
  position: relative;
  text-decoration: none;
  font-weight: bold;
}

.footer a:hover {
  color: var(--accent);
}

.footer p {
  margin: 0;
  color: var(--dark-shade);
}
</style>