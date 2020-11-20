<template>
  <section class="contact-form" id="contact-form">
    <h2 class="section__title">Contact Me</h2>

    <div class="form__container">
      <form name="contact" netlify>
        <div class="form-group mt-4">
          <label for="name" class="form-label">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            class="form-control"
            required
          />
        </div>

        <div class="form-group mt-4">
          <label for="email" class="form-label">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            class="form-control"
            required
          />
        </div>

        <div class="form-group mt-4">
          <label for="message" class="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            class="form-control"
            rows="6"
            cols="50"
            required
          ></textarea>
        </div>

        <div class="row">
          <button class="btn btn-submit">Send</button>
        </div>
      </form>
    </div>
  </section>
</template>
