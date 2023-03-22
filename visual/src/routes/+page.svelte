<script lang="ts">
    let cards = [["/src/lib/images/bg1.jpg", "*****", "lorem lorem lorem lorem lorem"],
                ["/src/lib/images/bg2.jpg", "*****", "lorem lorem lorem lorem lorem"],
                ["/src/lib/images/bg3.jpg", "*****", "lorem lorem lorem lorem lorem lorem"],
                ["/src/lib/images/bg1.jpg", "*****", "lorem lorem lorem lorem lorem"],
                ["/src/lib/images/bg2.jpg", "*****", "lorem lorem lorem lorem lorem"],
                ["/src/lib/images/bg3.jpg", "*****", "lorem lorem lorem lorem lorem"]]

    let index = 0

    function next() {
        index = (index + 1) % cards.length
    }
    setInterval(next, 3000)
</script>

<section class="flex items-center justify-center flex-col bg-no-repeat bg-center bg-fixed bg-cover" style="background-image: url({cards[index][0]});">
    <div class="flex flex-col items-center p-28 rounded-xl bg-white/30 backdrop-blur-md">
        <h1 class="text-7xl font-bold text-orange-600">
            Turismo Botucatu
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
</section>

<section class="bg-amber-500 flex overflow-x-scroll items-center snap-x snap-mandatory">
    {#each cards as card}
        <article class="bg-white w-96 h-[90vh] mx-6 inline-block shrink-0 snap-center overflow-hidden rounded-xl">
            <img src="{card[0]}" alt="#" class="w-96 h-96">
            Avaliações: {card[1]}<br>
            {card[2]}
        </article>
    {/each}
</section>

<section>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officiis iusto quidem mollitia doloribus tempora error quaerat soluta, amet ut eveniet excepturi quo, eius est dolorem saepe minima magnam debitis.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis labore cupiditate aliquid asperiores maiores deleniti praesentium saepe reiciendis fugiat ut repudiandae quia nihil quas, veniam molestiae ullam libero voluptates eius! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat recusandae culpa fugiat ipsam nulla minus quaerat. Odio magnam nobis ad exercitationem unde inventore consequuntur illum ea adipisci soluta! Quia, numquam.</p>
</section>

<style lang="postcss">
    section {
        width: 100vw;
        height: calc(100vh - 40px);
    }
</style>
