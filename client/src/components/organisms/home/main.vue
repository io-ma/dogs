<template>
  <main class="main" role="main">
    <article class="main__card" role="article">
      <h2 class="main__title" role="heading">Responsible dog ownership</h2>
      <section class="main__section" role="region">
        <p class="main__p">With all the companionship and love that our dogs give so freely, it's hard to imagine that some owners just don't take responsibility for their dogs. But it's true. Millions of dogs—healthy dogs—are euthanized every year. Whether through owner neglect or owner ignorance, millions of healthy dogs will endure the same fate this year. So what's a responsible dog owner to do? The best thing you can do, as a dog owner, is to ensure that your dog doesn't become a statistic, and you do that through responsible pet ownership.</p>
      <p class="main__p">Welcoming a new dog into your house means taking on additional long-term responsibility. Many new dog owners find something cute or romantic about bringing that puppy in the window home until they realize that there's a modicum of work involved in caring for that cute, adorable little face, and a price to pay for those wet, slobbering kisses. You wouldn't expect to return a baby. Its' no less wrong to return a dog when the novelty wears off, and it ought to be criminal to leave a dog somewhere on its own. In many ways, dogs are as vulnerable as newborn infants are, but dogs are dependent upon their owners for their entire lives.</p>
    </section>
  </article>
  <article class="main__card" role="article">
    <h2 class="main__title">Dogs imune system</h2>
    <section class="main__section" role="region">
      <p class="main__p">In my practice, I've always used probiotics in general -; as animals need probiotics just like humans. Adding beneficial bacteria to a pet's diet helps the digestive system combat intestinal parasites and improves digestive function.</p>
      <p class="main__p">The gastrointestinal tract is such an important foundation to pets' immune systems because the gut is an entry point for pathogens. If you're using probiotics, the immune system is supported and strengthened to fight infection quickly and aggressively. Probiotics also help stop the immune system from over-reacting and creating inflammation.</p>
      <p class="main__p">One common issue for pets is ear infection. I've observed that whether we used conventional or alternative treatments, adding a probiotic product for immune system support shortens the length and reduces the severity of the infection. I usually see a better outcome by adding Del-Immune V to treatment, and generally don't need to do additional treatments, as is common with ear infections.</p>
      <p class="main__p">Another common issue with pets is skin problems, including mange. I have found that skin problems improve quickly with a probiotic product, like Del-Immune V. I use it for immune system support with all types of mange, including the problematic demodectic mange. Some animals have genetically inherited immune weaknesses that allow mange-inducing mites to overgrow. Dogs can inherit the mites from their parents. You will know the mites are out of control if mange becomes a problem.</p>
      <p class="main__p">Probiotics help immensely by supporting the immune system in mounting an appropriate response to the mange mites. Traditional treatments for mange can include strong antibiotics and dips in toxic medicines. But many dogs, if provided a good diet and Del-Immune V, can get over it on their own -- unless the infection is too severe. Most dogs survive with veterinary intervention, but if severe enough, mange can be fatal. See your local veterinarian if your pet begins to display any symptoms.</p>
      </section>
    </article>
  </main>
</template>

<script>
  export default {
    name: 'organisms-home-main',
};
</script>

<style scoped lang="sass">
  .main
    @apply flex flex-col items-center
    @apply w-full
    @apply p-12 mx-auto my-8
    box-sizing: border-box
    &__title
      @apply m-8 ml-0
    &__card
      @apply p-8 
      @apply w-1/2
      @apply flex flex-col
      box-sizing: border-box
    &__p
      @apply px-0 py-4
</style>
