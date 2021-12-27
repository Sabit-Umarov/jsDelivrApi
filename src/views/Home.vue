<template>
  <v-container>
    <v-card class="d-flex justify-center mb-6" flat>
      <v-card max-width="1000px" width="100%">
        <v-card-title>
          <div class="main-header">
            <div class="main-header__title">Поиск пакетов jsDelivr.com</div>
            <v-text-field
              v-model="search"
              outlined
              label="Введите название пакета"
              prepend-inner-icon="mdi-magnify"
              :loading="isLoading"
            ></v-text-field>
          </div>
        </v-card-title>
        <v-card-text v-if="!isLoading">
          <Package
            v-for="(item, index) in packages"
            :key="index"
            :item="item.package"
          />
        </v-card-text>
        <div class="search-tip" v-if="isPackagesEmpty">
          По вашему запросу не найдено пакетов.
        </div>
        <div class="pagination-container" v-if="pagesLength > 1">
          <v-pagination
            v-model="page"
            :length="pagesLength"
            :total-visible="5"
          ></v-pagination>
        </div>
      </v-card>
    </v-card>
    <PackageDetailModal v-if="isShowModal" />
  </v-container>
</template>

<script>
import store from "@plugins/store";

import Package from "@components/Package";
import PackageDetailModal from "@components/PackageDetailModal";
import { getSearchingPackages } from "@api";

export default {
  name: "Home",

  components: {
    Package,
    PackageDetailModal,
  },
  data: () => ({
    page: 1,
    pagesLength: 1,
    search: "",
    packages: {},
    isLoading: false,
    isPackagesEmpty: false,
  }),
  watch: {
    search() {
      if (!this.search) {
        return (this.isPackagesEmpty = false);
      }
      this.packages = {};
      this.pagesLength = 1;
      this.page = 1;
      this.searchPackages();
    },
    page() {
      this.searchPackages();
    },
  },
  computed: {
    isShowModal: function () {
      return store.state.isShowModal;
    },
  },
  methods: {
    async searchPackages() {
      this.isLoading = true;
      const packagesResponse = await getSearchingPackages(
        encodeURIComponent(this.search),
        (this.page - 1) * 10
      );
      if (packagesResponse?.data) {
        this.packages = packagesResponse.data.objects;
        this.pagesLength = Math.round(packagesResponse.data.total / 10);
        console.log(this.packages);
      }
      this.isPackagesEmpty = this.packages.length ? false : true;
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss">
.main-header {
  width: 100%;
  &__title {
    margin-bottom: 28px;
  }
}

.pagination-container {
  padding: 12px;
  @media screen and (max-width: 599px) {
    padding: 6px;
  }
}

.search-tip {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  margin: 18px 0;
  width: 100%;
  &__item {
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    padding: 2px 10px;
    color: black;
    margin: 0 12px 12px 0;
  }
}
</style>
