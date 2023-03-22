<script lang="ts">
    import '../app.css'
    import Header from './components/Header.svelte'
    import Footer from './components/Footer.svelte'
</script>

<Header />

<main class="font-sans text-xl">
    <slot />
</main>

<Footer />
