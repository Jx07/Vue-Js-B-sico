<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="success">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item :to="{name:'Home'}" except>Home</b-nav-item>
            <b-nav-item  :to="{name:'About'}">About</b-nav-item>
            <b-nav-item  :to="{name:'Grid'}">Grids</b-nav-item>
            <b-nav-item  :to="{name:'Card'}">Cards</b-nav-item>
            <b-nav-item :to="{name:'Input'}">Inputs</b-nav-item>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    <b-container>
    <router-view/>
    </b-container>
  </div>
</template>

