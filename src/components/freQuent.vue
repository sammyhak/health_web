<script>
import "../styles/components/frequent.scss";
export default { 
 name:'freQuent'
}

document.addEventListener("DOMContentLoaded", function() {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(function(question) {
    question.addEventListener("click", function() {
      const answer = this.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });
});

</script>

<template>
  <section class="faq">
    <div class="faq-container">
      <div class="header">
        <h3>Frequently asked Questions and Answers</h3>
        <p>What is on your mind about us </p>
      </div>

      <div class="faqs">
        <div class="container container1">
          <div class="faq-question">
            <img src="../assets/Plus.svg" alt="faq-plus">
            <p>How do I get my Products delivered to my location.</p>
          </div>
          <div class="faq-answer">
            <p>Our products will be delivered to your request location via our trusted courier agency FEDEX EXPRESS (Red star logistics) with there offices all over the country.</p>
          </div>

          <div class="faq-question">
            <img src="../assets/Plus.svg" alt="faq-plus">
            <p>Are there extra charges for product delivery.</p>
          </div>
          <div class="faq-answer">
            <p>No extra charge for product delivery</p>
          </div>         
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.faq-answer {
  transition: height 1s ease-out;
}
</style>