<template>
  <div class="dialog">
    <v-card width="420px">
      <v-card-title>
        <div class="dialog__header">
          <span class="dialog__header__title">{{ modalPackage.name }}</span>
          <v-btn icon @click="clickCloseModal">
            <v-icon color="#B71C1C"> mdi-close </v-icon>
          </v-btn>
        </div>
      </v-card-title>
      <v-card-text>
        <div class="dialog-form">
          <div class="dialog-form__item" v-if="modalPackage.author">
            <div class="dialog-form__item__container">
              Автор:
              <span class="dialog-form__item__info"
                >{{ modalPackage.author.name }}
              </span>
            </div>
            <a :href="modalPackage.author.url" class="dialog-form__item__link"
              ><v-btn icon><v-icon>mdi-link</v-icon></v-btn></a
            >
          </div>
          <div class="dialog-form__item" v-if="modalPackage.date">
            <div class="dialog-form__item__container">
              Дата обновления:
              <span class="dialog-form__item__info"
                >{{ getformatDate(modalPackage.date) }}
              </span>
            </div>
          </div>
          <div class="dialog-form__item" v-if="modalPackage.description">
            <div class="dialog-form__item__container">
              Описание:
              <span class="dialog-form__item__info"
                >{{ modalPackage.description }}
              </span>
            </div>
          </div>
          <div
            class="dialog-form__item__tags-container"
            v-if="modalPackage.keywords"
          >
            <span>Ключевые слова: </span>
            <div class="tags-container">
              <div
                class="tags-container__item"
                v-for="(keyword, index) in modalPackage.keywords"
                :key="index"
              >
                {{ keyword }}
              </div>
            </div>
          </div>
          <div class="dialog-form__item" v-if="modalPackage.links">
            <div class="dialog-form__item__container">
              Ссылки:
              <a
                :href="modalPackage.links.homepage"
                class="dialog-form__item__link"
                v-if="modalPackage.links.homepage"
                target="_blank"
                ><v-btn icon large><v-icon> mdi-earth </v-icon></v-btn></a
              >
              <a
                :href="modalPackage.links.repository"
                class="dialog-form__item__link"
                v-if="modalPackage.links.repository"
                target="_blank"
                ><v-btn icon large><v-icon> mdi-github </v-icon></v-btn></a
              >
              <a
                :href="modalPackage.links.npm"
                class="dialog-form__item__link"
                v-if="modalPackage.links.npm"
                target="_blank"
                ><v-btn icon large><v-icon> mdi-npm </v-icon></v-btn></a
              >
            </div>
          </div>
          <div
            class="dialog-form__item__tags-container"
            v-if="modalPackage.maintainers"
          >
            <span>Сопровождающие: </span>
            <div class="tags-container">
              <div
                class="tags-container__item"
                v-for="(maintainer, index) in modalPackage.maintainers"
                :key="index"
              >
                Пользователь: {{ maintainer.username }}, <br />
                Адрес эл. почты:
                {{ maintainer.email }},
              </div>
            </div>
          </div>
          <div class="dialog-form__item" v-if="modalPackage.version">
            <div class="dialog-form__item__container">
              Версия:
              {{ modalPackage.version }}
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import store from "@plugins/store";
import { formatDate } from "@helpers/dates";

export default {
  name: "Home",
  components: {},
  data: () => ({}),
  methods: {
    clickCloseModal() {
      store.commit("updateShowModal", false);
    },
    getformatDate(date) {
      return formatDate(date);
    },
  },
  computed: {
    modalPackage: function () {
      return store.state.modalPackage;
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: 0.3);
  @media screen and (max-width: 599px) {
    padding: 12px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.3);
    padding-bottom: 8px;
  }
}
.dialog-form {
  display: flex;
  flex-direction: column;
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    &__container {
      width: 100%;
    }
    &__info {
      color: black;
      font-size: 16px;
    }
    &__link {
      text-decoration: none;
    }
    &__tags-container {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
