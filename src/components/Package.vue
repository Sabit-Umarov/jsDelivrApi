<template>
  <div class="package">
    <div class="package__header">
      <button class="package__header__title" @click="clickShowModal">
        {{ item.name }}
      </button>
      <div class="package__header__links">
        <a
          :href="item.links.homepage"
          class="package__header__links__item"
          v-if="item.links.homepage"
          target="_blank"
          ><v-btn icon large><v-icon> mdi-earth </v-icon></v-btn></a
        >
        <a
          :href="item.links.repository"
          class="package__header__links__item"
          v-if="item.links.repository"
          target="_blank"
          ><v-btn icon large><v-icon> mdi-github </v-icon></v-btn></a
        >
        <a
          :href="item.links.npm"
          class="package__header__links__item"
          v-if="item.links.npm"
          target="_blank"
          ><v-btn icon large><v-icon> mdi-npm </v-icon></v-btn></a
        >
      </div>
    </div>
    <div class="package__main-info">
      <div class="package__main-info__author" v-if="item.author">
        Автор:
        <span class="package__main-info__author__name">{{
          item.author.name
        }}</span>
      </div>
      <div class="package__main-info__version-container">
        <img
          src="../assets/icons/version.svg"
          alt="версия"
          class="package__main-info__version-container__icon"
        />
        <div class="package__main-info__version-container__version">
          {{ item.version }}
        </div>
      </div>
    </div>
    <div class="package__description">
      {{ item.description }}
    </div>
    <div class="tags-container" v-if="item.keywords">
      <div
        class="tags-container__item"
        v-for="(keyword, index) in item.keywords"
        :key="index"
      >
        {{ keyword }}
      </div>
    </div>
  </div>
</template>

<script>
import store from "@plugins/store";

export default {
  name: "Home",
  components: {},
  props: {
    item: Object,
  },
  data: () => ({}),
  methods: {
    clickShowModal() {
      store.commit("updateShowModal", true);
      store.commit("updateModalPackage", this.item);
    },
  },
};
</script>

<style lang="scss" scoped>
.package {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.2);
  margin-bottom: 24px;
  transition: 0.3s;
  @media screen and (max-width: 599px) {
    margin-bottom: 12px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 959px) {
      flex-direction: column;
      align-items: flex-start;
    }
    &__title {
      font-size: 24px;
      color: black;
      max-width: 600px;
      cursor: pointer;
      @media screen and (max-width: 959px) {
        width: 100%;
        max-width: unset;
        margin-bottom: 12px;
      }
      &:hover {
        color: #b71c1c;
      }
    }
    &__links {
      &__item {
        text-decoration: none;
      }
    }
  }
  &__main-info {
    display: flex;
    align-items: center;
    margin: 18px 0;
    @media screen and (max-width: 599px) {
      margin: 8px 0;
    }
    &__author {
      font-size: 16px;
      &__name {
        color: black;
      }
      margin-right: 14px;
    }
    &__version-container {
      display: flex;
      align-items: center;
      border: 1px solid rgba($color: #000000, $alpha: 0.2);
      padding: 2px 6px;
      &__icon {
        width: 16px;
      }
      &__version {
        color: black;
        font-size: 14px;
        margin-left: 4px;
      }
    }
  }
}
</style>
