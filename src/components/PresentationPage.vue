<script setup>
import { ref, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import subjects from "../assets/presentation";
const route = useRoute().fullPath;
const router = useRouter();
const value = ref(
  subjects.find((subject) => Object.keys(subject).toString() === route)[route]
);
const presentationFunctionality = (e) => {
  const { key } = e;
  switch (key) {
    case " ":
      Object.values(value.value)?.forEach((obj) =>
        obj.texts?.some((text) => !text.visible)
          ? (obj.texts.find((text) => !text.visible).visible = true)
          : subjects.findIndex(
              (subject) => Object.keys(subject).toString() === route
            ) !==
            subjects.length - 1
          ? router.push(
              ...Object.keys(
                subjects[
                  subjects.findIndex(
                    (subject) => Object.keys(subject).toString() === route
                  ) + 1
                ]
              )
            )
          : router.push("/endPage") || document.exitFullscreen()
      );
      break;
    case "ArrowRight":
      Object.values(value.value)?.forEach((obj) =>
        obj.texts?.some((text) => !text.visible)
          ? (obj.texts.find((text) => !text.visible).visible = true)
          : subjects.findIndex(
              (subject) => Object.keys(subject).toString() === route
            ) !==
            subjects.length - 1
          ? router.push(
              ...Object.keys(
                subjects[
                  subjects.findIndex(
                    (subject) => Object.keys(subject).toString() === route
                  ) + 1
                ]
              )
            )
          : (document.fullScreenElemenet && document.exitFullscreen()) ||
            router.push("/endPage")
      );
      break;
    case "ArrowLeft":
      Object.values(value.value)?.forEach((obj) =>
        obj.texts?.some((text) => text.visible)
          ? ((obj.texts.reverse().find((text) => text.visible).visible = false),
            obj.texts.reverse())
          : subjects.findIndex(
              (subject) => Object.keys(subject).toString() === route
            )
          ? Object.values(value.value)?.forEach((obj) =>
              obj.texts?.forEach((text) => {
                text.visible = false;
              })
            ) ||
            router.push(
              ...Object.keys(
                subjects[
                  subjects.findIndex(
                    (subject) => Object.keys(subject).toString() === route
                  ) - 1
                ]
              )
            )
          : (document.fullScreenElemenet && document.exitFullscreen()) ||
            router.push("/")
      );
      break;
    case "f":
      document.body.requestFullscreen();
      break;
    case "Escape":
      document.exitFullscreen();
      break;
    default:
      break;
  }
};
window.addEventListener("keyup", presentationFunctionality);
onUnmounted(() => {
  window.removeEventListener("keyup", presentationFunctionality);
});
</script>

<template>
  <section class="page">
    <div
      v-for="(data, title, index) in value"
      :key="index"
      class="presentation"
    >
      <header>
        <h3>{{ title }}</h3>
      </header>
      <h2 :class="data.style">{{ data.subject }}</h2>
      <ul v-if="data.texts" class="content">
        <transition-group
          v-for="(text, i) in data.texts"
          :key="text.id"
          mode="in-out"
          tag="li"
          :name="text?.animation"
        >
          <transition :key="text.id" :name="text?.image?.animation">
            <object v-show="text.visible" :class="text.style">
              <img
                v-if="text?.image && text?.image && text?.image?.source"
                :class="text?.image?.style"
                :src="text?.image?.source"
                :alt="text?.message"
              />
            </object>
          </transition>
          <p
            :key="text.id"
            v-if="text.visible"
            :class="{
              active:
                i + 1 == data?.texts?.filter((text) => text.visible).length,
            }"
          >
            {{ text?.message }}
          </p>
        </transition-group>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
$theme-main-color: #6667ab;
$theme-sub-color: #f8c771;
%title {
  font-weight: 700;
  font-family: "Sedgwick Ave Display", sans-serif;
  color: $theme-sub-color;
  text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.4);
  font-size: 40px;
  margin: 10px 0;
}
.page {
  width: 96vw;
  height: 95vh;
  margin: 2.5vh 2vw;
  box-shadow: 24px 24px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 24px 0 rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  background: white;

  h2 {
    @extend %title;
    &.center {
      height: 70vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  h3 {
    text-align: center;
    margin: 0;
    font-family: "Sedgwick Ave Display", sans-serif;
    text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.4);
    color: $theme-main-color;
    font-size: 80px;
  }
  .presentation {
    padding: 0 15px;
    max-height: 95vh;
    max-width: 95vw;
    .content {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      flex-direction: column;
      max-height: calc(95vh - 90px);
      list-style: none;
      li {
        figure {
          flex: 1 1 32%;
          max-width: 32%;
          padding: 1%;
          margin: 0;
          display: inline-grid;
          img {
            max-width: 100%;
            height: auto;
          }
          .make-bg {
            position: relative;
          }
          .title-it {
            margin-inline-start: 0;
            margin-block-start: 0;
          }
        }
        p {
          font-weight: normal;
          position: relative;
          font-family: "Bellefair", sans-serif;
          font-size: 25px;
          margin: 10px 0;
          transition: font-size 0.3s ease-in-out;
          &::after {
            content: "";
            position: absolute;
            top: 50%;
            width: 25px;
            height: 5px;
            left: -38px;
            transform: translateY(-50%);
            background: linear-gradient(
              270deg,
              $theme-main-color,
              $theme-sub-color
            );
            background-size: 800% 800%;
            animation: animate_gradient 5s ease infinite;
          }
          &.active {
            background: darken($theme-main-color, 10%);
            background-clip: text;
            font-size: 35px;
            -webkit-background-clip: text;
            color: transparent;
            border-bottom: 3px solid $theme-sub-color;
          }
        }
      }
    }
  }
}

@keyframes animate_gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
