<template>
  <article class="contact">
    <a href="tel:0032123456789" class="contact__item">
      <div class="contact__icon-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          class="contact__icon"
        >
          <path
            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
          />
        </svg>
      </div>
      <div class="contact__text">+32 123 45 67 89</div>
    </a>
    <a
      href="https://www.google.com/maps/place/Simply+Wood/@50.8452081,4.4895991,17z/data=!3m1!4b1!4m5!3m4!1s0x47c3dea0ce6ec523:0x5340d0c762968d45!8m2!3d50.8452231!4d4.4917984"
      target="_blank"
      class="contact__item"
    >
      <div class="contact__icon-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          class="contact__icon"
        >
          <path
            fill-rule="evenodd"
            d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
          />
        </svg>
      </div>
      <div class="contact__text">Van Severlaan 12, 1970 Wezembeek-Oppem</div>
    </a>
    <a href="mailto:simplywood.be@gmail.com" class="contact__item">
      <div class="contact__icon-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          class="contact__icon"
        >
          <path
            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
          />
        </svg>
      </div>
      <div class="contact__text">simplywood.be@gmail.com</div>
    </a>
  </article>
</template>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;

.contact {
  margin: 1.5rem 0;
  @include responsive($screen-desktop-s) {
    margin: 3rem 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  &__item {
    display: flex;
    align-items: center;
    font-weight: 700;
    padding: 0.75rem 1.5rem;
    transition: color 0.25s ease, background-color 0.25s ease;
    border-top: 1px solid $color-shadow;
    &:last-child {
      border-bottom: 1px solid $color-shadow;
    }
    @include responsive($screen-desktop-s) {
      border-left: 1px solid $color-shadow;
      border-top: none;
      &:last-child {
        border-right: 1px solid $color-shadow;
        border-bottom: none;
      }
    }
    &:hover,
    &:focus {
      background-color: $color-blue;
      color: $color-gold;
    }
  }
  &__icon-box {
    margin-right: 0.75rem;
  }
  &__icon {
    height: 2.25rem;
    fill: currentColor;
  }
}
</style>
