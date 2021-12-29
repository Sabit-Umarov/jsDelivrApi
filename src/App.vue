<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-text>
          <div class="footer">
            <span>Умаров Сабит</span>
            <a
              href="https://github.com/Sabit-Umarov/jsDelivrApi/"
              target="_blank"
            >
              <v-btn icon>
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </a>
          </div>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  word-wrap: break-word;
  text-decoration: none;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
