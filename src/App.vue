<script setup lang="ts">
</script>

<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">CryptoDash</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/home" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/calculators/simple" class="nav-link"
                >Simple</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/calculators/yield-farming-breakeven"
                class="nav-link"
                >Yield Farm Breakeven</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/dashboard" class="nav-link"
                >Dashboard</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/dashboard/chain" class="nav-link"
                >Chain</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>