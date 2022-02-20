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
      console.log(e);
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
      <h2>{{ data.subject }}</h2>
      <section v-if="data.texts" class="content">
        <transition-group
          v-for="text in data.texts"
          :key="text.id"
          mode="in-out"
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
          <p :key="text.id" v-show="text.visible">{{ text?.message }}</p>
        </transition-group>
      </section>
    </div>
  </section>
</template>

<style lang="scss">
%title {
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
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
  }
  h3 {
    text-align: center;
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 40px;
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

          p {
            @extend %title;
          }
        }
        .black-bg {
          background: black;
          color: white;
          p {
            color: yellowgreen;
          }
        }
      }
    }
  }
}
</style>
