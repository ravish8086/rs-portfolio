<template>
  <h1>
    Hi, I'm a
    <span class="typed-text">{{ typeValue }}</span>
    <span class="blinking-cursor">|</span>
    <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
  </h1>
</template>

<script>
export default {
  name: 'TypeWriter',
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["Full Stack Engineer", "Designer", "AI-ML Enthusiast", "Certified Professional", "Freelancer"],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  props: {},
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
            this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
            0,
            this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>

<style>

h1 {
  font-size: 3rem;
  font-weight: normal;
}

h1 span.typed-text {
  color: var(--accent);
  font-weight: bold;
}

.blinking-cursor {
  font-size: 4rem;
  color: var(--pencil);
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}

@keyframes blink {
  from, to {
    color: transparent;
  }
  50% {
    color: var(--pencil);
  }
}

@-moz-keyframes blink {
  from, to {
    color: transparent;
  }
  50% {
    color: var(--pencil);
  }
}

@-webkit-keyframes blink {
  from, to {
    color: transparent;
  }
  50% {
    color: var(--pencil);
  }
}

@-ms-keyframes blink {
  from, to {
    color: transparent;
  }
  50% {
    color: var(--pencil);
  }
}

@-o-keyframes blink {
  from, to {
    color: var(--pencil);
  }
  50% {
    color: var(--pencil);
  }
}

@media screen and (max-width: 759px) {
  .blinking-cursor {
    font-size: 2rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: normal;
  }

  h1 span.typed-text {
    color: var(--accent);
    font-weight: bold;
  }


}
</style>