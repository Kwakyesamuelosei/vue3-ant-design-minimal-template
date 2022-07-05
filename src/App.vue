<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider
      :collapsed="collapsed"
      :trigger="null"
      :style="{
        overflow: 'auto',
        height: '100vh',
        position: 'none',
        left: 0,
        top: 0,
        bottom: 0,
      }"
      collapsible
    >
      <div class="logo" />
      <a-menu
        :selectedKeys="selectedKeys"
        @click="onSelect"
        @select="onSelect"
        mode="inline"
        theme="dark"
      >
        <a-menu-item key="overview">
          <template #icon>
            <HomeOutlined />
          </template>
          <span>Overview</span>
        </a-menu-item>
        <a-menu-item key="products">
          <template #icon>
            <ReconciliationOutlined />
          </template>
          <span>Product Catalog</span>
        </a-menu-item>
        <!-- <a-menu-item key="3">
          <template #icon>
            <InboxOutlined />
          </template>
          <span>Option 3</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #icon>
            <MailOutlined />
          </template>
          <template #title>Navigation One</template>
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
          <a-menu-item key="7">Option 7</a-menu-item>
          <a-menu-item key="8">Option 8</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #icon>
            <AppstoreOutlined />
          </template>
          <template #title>Navigation Two</template>
          <a-menu-item key="9">Option 9</a-menu-item>
          <a-menu-item key="10">Option 10</a-menu-item>
          <a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="11">Option 11</a-menu-item>
            <a-menu-item key="12">Option 12</a-menu-item>
          </a-sub-menu>
        </a-sub-menu> -->
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="toggleCollapsed"
        />
        <menu-fold-outlined v-else class="trigger" @click="toggleCollapsed" />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <div
          :style="{
            padding: '24px',
            background: '#fff',
          }"
        >
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ReconciliationOutlined,
  // MailOutlined,
  HomeOutlined,
  // InboxOutlined,
  // AppstoreOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, reactive, toRefs, watch } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined,
    ReconciliationOutlined,
    // MailOutlined,
    // InboxOutlined,
    // AppstoreOutlined,
  },

  setup() {
    const router = useRouter();
    const state = reactive({
      collapsed: false,
      selectedKeys: [],
      openKeys: ["sub1"],
      preOpenKeys: ["sub1"],
    });
    watch(
      () => state.openKeys,
      (_val, oldVal) => {
        state.preOpenKeys = oldVal;
      }
    );
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };

    const onSelect = (value) => {
      state.selectedKeys = [value.key];
      router.push(`/${value.key}`);
    };

    return {
      ...toRefs(state),
      toggleCollapsed,
      onSelect,
    };
  },
});
</script>
<style>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

html,
body {
  background-color: #f0f2f5 !important;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
