import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    aboutView: {
      header: "Hello!",
      paragraph1:
        "My name`s Sergii. I live in Kyiv, Ukraine and my dream is to become a front-end developer.",
      paragraph2:
        "To reach my goal, I started diving into VueJS framework. I found it very attractive to build a project from scratch which would help me understand how this framework works. I used Ant Design Vue to enrich my application with UI components along with Reddit API which provides live data. Feel free to play around.",
      note: "Link to Memes Reddit community.",
      contacts:
        "I'll leave my contacts down below so you would like to give a feedback or just say hi.",
      message: "Glory to Ukraine!",
    },
  },
  ua: {
    aboutView: {
      header: "Привіт!",
      paragraph1:
        "Мене звуть Сергій. Я із Києва (Україна) і я збираюся стати фронт-енд розробником.",
      paragraph2:
        "Щоб досягнути своєї цілі, я почав вивчати фрейморк VueJS. Мене дуже зацікавила ідея створити пет-проєкт з нуля. Це - найкращий спосіб закріпити знання, отримані з документації, книжок та ютуба. В цьому проєкті були використані Ant Design Vue для створення UI компонентів та Reddit API як джерело данних. Переходьте на головну сторінку, щоб отримати порцію гарного настрою від мемасиків.",
      note: "Посилання на оригінал.",
      contacts:
        "Ось мої контакти на випадок, якщо захочете залишити фідбек чи просто привітатися.",
      message: "Слава Україні!",
    },
  },
};

export default new VueI18n({
  locale: "en", // set locale
  messages, // set locale messages
});
