<template>
  <section class="workspace">
    <h1>Contact</h1>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4 mb-5 mb-lg-0">
          <div class="contact-left">
            <div class="media">
              <i class="ion-ios-mail"></i>
              <div class="media-body"><span>ravi8086@bu.edu</span></div>
            </div>
            <div class="media">
              <i class="ion-ios-call"></i>
              <div class="media-body"><span>512-915-2055</span></div>
            </div>
            <div class="media">
              <i class="ion-logo-skype"></i>
              <div class="media-body"><span>ravish.8086</span></div>
            </div>
            <div class="media">
              <a href="https://github.com/ravish8086" target="_blank" class="icon-block">
                <i class="ion-logo-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ravish8086" target="_blank" style="padding-left: 10px">
                <i class="ion-logo-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-7 offset-lg-2 col-md-8">
          <form id="contact-form" class="row contact-form" action="#">
            <div class="col-xs-12 col-sm-6">
              <div class="form-group">
                <input id="name" placeholder="Enter your name"
                       class="form-control"
                       v-model="contactForm.name"
                >
                <i class="ion-ios-checkmark-circle"></i>
                <i class="ion-ios-alert"></i>
                <small>Error message</small>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6">
              <div class="form-group">
                <input id="email" type="email"
                       name="email"
                       placeholder="Your email address"
                       class="form-control"
                       v-model="contactForm.email"
                >
                <i class="ion-ios-checkmark-circle"></i>
                <i class="ion-ios-alert"></i>
                <small>Error message</small>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12">
              <div class="form-group">
                <input id="subject" name="subject"
                       placeholder="Enter the discussion title"
                       class="form-control"
                       v-model="contactForm.subject"
                >
                <i class="ion-ios-checkmark-circle"></i>
                <i class="ion-ios-alert"></i>
                <small>Error message</small>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12">
              <div class="form-group">
                <textarea id="message" name="message"
                          placeholder="Write your message"
                          class="form-control"
                          v-model="contactForm.message"
                >
                </textarea>
                <i class="ion-ios-checkmark-circle"></i>
                <i class="ion-ios-alert"></i>
                <small>Error message</small>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12">
              <button type="submit" class="btn button-field" @click.prevent="formSubmit">
                Send Message now
              </button>
            </div>
          </form>
          <article v-show="showSubmitFeedback">
            <div class="message-body">
              Thank you for contacting me. Your message is received, I will connect with you at the earliest.
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.selectors.form = document.getElementById('contact-form');
    this.selectors.name = document.getElementById('name');
    this.selectors.email = document.getElementById('email');
    this.selectors.subject = document.getElementById('subject');
    this.selectors.message = document.getElementById('message');
  },
  data: () => {
    return {
      selectors: {
        form: '',
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      showSubmitFeedback: false,
      errors: [],
      ALPHA_REGEX: /^[A-Za-z]+$/,
      EMAIL_REGEX: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      contactForm: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    formSubmit() {
      this.showSubmitFeedback = false;
      this.errors = [];
      if (!this.validate()) {
        this.showSubmitFeedback = true;
      }
      console.log(this.contactForm);
    },

    validate() {
      let error;
      error = this.validateText(this.selectors.name, this.contactForm.name, 'Name');
      error = this.validateEmail(this.selectors.email, this.contactForm.email, 'Email');
      error = this.validateText(this.selectors.subject, this.contactForm.subject, 'Subject');
      error = this.validateText(this.selectors.message, this.contactForm.message, 'Message');

      return !!error;
    },

    validateText(field, value, name) {
      let error;
      if (value === '') {
        error = this.setErrorFor(field, name + ' cannot be blank');
      } else if (value.length < 2) {
        error = this.setErrorFor(field, name + ' minimum length should be 2');
      } else if (!value.match(this.ALPHA_REGEX)) {
        error = this.setErrorFor(field, name + ' must contain only alphabets');
      } else {
        error = this.setSuccessFor(field);
      }
      return error;
    },

    validateEmail(field, value, name) {
      let error;
      if (value === '') {
        error = this.setErrorFor(field, name + ' cannot be blank');
      } else if (!value.match(this.EMAIL_REGEX)) {
        error = this.setErrorFor(field, name + ' is not valid');
      } else {
        error = this.setSuccessFor(field);
      }
      return error;
    },
    setSuccessFor(input) {
      const formControl = input.parentElement;
      formControl.className = 'form-group success';
      return false;
    },
    setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
      formControl.className = 'form-group error';
      small.innerText = message;
      return true;
    },

  }
}
</script>
<style>
.contact-left {
  font-size: 1.4em;
}

.button-field {
  background-color: var(--primary);
  color: var(--shade)
}

.message-body {
  padding: 20px;
}

.form-group input:focus {
  border-color: var(--primary);
}

.form-group.success input {
  border-color: var(--success);
}

.form-group.error input {
  border-color: var(--error);
}

.form-group i {
  visibility: hidden;
  position: absolute;
  top: 10px;
  right: 20px;
}

.form-group.success i.ion-ios-checkmark-circle {
  color: var(--success);
  visibility: visible;
}

.form-group.error i.ion-ios-alert {
  color: var(--error);
  visibility: visible;
}

.form-group small {
  color: var(--error);
  visibility: hidden;
}

.form-group.error small {
  visibility: visible;
  padding: 10px;
}

</style>
