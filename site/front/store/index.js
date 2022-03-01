export const state = () => ({
  items: {
    messaging: [
      {
        id: 1,
        show: true,
        descr: {
          ua: `<p>Обмін повідомленнями, що підтримують наскрізне шифрування, приватні чати, приватні кімнати та публічні
        кімнати. Зважайте, що реєстрація доступна для всіх – будьте уважні щодо ідентифікації особи користувача, перш
        ніж довіряти цьому джерелу.</p>

        <p>Приватні групи доступні лише їхнім засновникам і запрошеним користувачам. Діє принцип зв'язаного сервісу – люди
        на одному сервері можуть спілкуватися з людьми, підключеними до іншого.</p>

        <p>Для публічних груп діє модерація</p>`,
          en: `Messaging that supports end-to-end encryption, private chats, private rooms and public rooms. Note that registration is open to everyone - take due care in establishing the user's identity before trusting that source. Private groups are only known, available to their creator and invited people. This is a federated service - people on one server can chat with people connected to another.

Public group moderation is on.
`,
          ru: `Сервис для обмена сообщениям, поддерживающий сквозное шифрование, приватные чаты, личные и публичные комнаты. Внимание: регистрация открыта для всех — будьте внимательны при установлении личности пользователя, прежде чем доверять ему. Приватные группы доступны только их создателю и приглашенным людям. Это федеративный сервис - люди на одном сервере могут общаться с людьми, подключенными к другому.

Включена модерация публичных групп.
`,
        },
        logo: "/logo/Matrix_logo.png",
        desktopApp: {
          name: { ua: "", ru: "", en: "" },
          logo: "/logo/logo-mark-primary.svg",

          docs: [{ name: { ua: "", ru: "", en: "" }, link: "" }],
          link: "",
          localLink: "",
          servers: [
            {
              name: { ua: "Web chat: Київ", ru: "", en: "" },
              link: "https://chat.kyiv.dcomm.net.ua/",
              docs: [{ name: { ua: "PDF", ru: "PDF", en: "PDF" }, link: "" }],
            },
            {
              name: { ua: "Web chat: Kharkiv", ru: "", en: "" },
              link: "https://chat.kharkiv.dcomm.net.ua/",
              docs: [{ name: { ua: "PDF", ru: "PDF", en: "PDF" }, link: "" }],
            },
            {
              name: { ua: "Web chat: Kharkiv", ru: "", en: "" },
              link: "https://chat.odessa.dcomm.net.ua/",
              docs: [{ name: { ua: "PDF", ru: "PDF", en: "PDF" }, link: "" }],
            },
          ],
        },
        mobileApp: {
          name: {
            ua: "Element",
            ru: "",
            en: "",
          },
          logo: "/logo/logo-mark-primary.svg",

          docs: [{ name: { ua: "", ru: "", en: "" }, link: "" }],
          link: "https://element.io/get-started#download",
          localLink: "https://kharkiv.dcomm.net.ua/package/element/files/",
          servers: [
            {
              name: { ua: "Kyiv server", ru: "", en: "" },
              link: "https://matrix.kyiv.dcomm.net.ua",
              docs: [
                {
                  name: { ua: "PDF", ru: "", en: "" },
                  link: "http://matrix.kyiv.dcomm.net.ua",
                },
              ],
            },
            {
              name: { ua: "Київ сервер", ru: "", en: "" },
              link: "https://matrix.kyiv.dcomm.net.ua",
              docs: [
                {
                  name: { ua: "PDF", ru: "", en: "" },
                  link: "http://matrix.kyiv.dcomm.net.ua",
                },
              ],
            },
            {
              name: { ua: "Харків сервер", ru: "", en: "" },
              link: "https://matrix.kharkiv.dcomm.net.ua",
              docs: [
                {
                  name: { ua: "PDF", ru: "", en: "" },
                  link: "http://matrix.kharkiv.dcomm.net.ua",
                },
              ],
            },
            {
              name: { ua: "Одеса сервер", ru: "", en: "" },
              link: "https://matrix.odessa.dcomm.net.ua",
              docs: [
                {
                  name: { ua: "PDF", ru: "", en: "" },
                  link: "http://matrix.odessa.dcomm.net.ua",
                },
              ],
            },
          ],
        },
      },
    ],
    browsing: {},
  },
});
