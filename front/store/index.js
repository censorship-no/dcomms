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
          en: `<p>Messaging that supports end-to-end encryption, private chats, private rooms and public rooms. Note that registration is open to everyone - take due care in establishing the user's identity before trusting that source. Private groups are only known, available to their creator and invited people. This is a federated service - people on one server can chat with people connected to another.
</p><p>
Public group moderation is on.</p>
`,
          ru: `<p>Сервис для обмена сообщениям, поддерживающий сквозное шифрование, приватные чаты, личные и публичные комнаты. Внимание: регистрация открыта для всех — будьте внимательны при установлении личности пользователя, прежде чем доверять ему. Приватные группы доступны только их создателю и приглашенным людям. Это федеративный сервис - люди на одном сервере могут общаться с людьми, подключенными к другому.
</p><p>
Включена модерация публичных групп.</p>
`,
        },
        logo: "/logo/Matrix_logo.png",
        desktopApp: {
          name: { ua: "", ru: "", en: "" },
          logo: "/logo/logo-mark-primary.svg",
          platforms: [],
          link: "",
          localLink: "",
          servers: [
            {
              name: {
                ua: "Web chat: Київ",
                ru: "Веб чат: Киев",
                en: "Web chat: Kyiv",
              },
              link: "https://chat.kyiv.dcomm.net.ua/",
              docs: [
                {
                  name: "HTML",
                  link: {
                    ua: "/docs/matrix/kyiv.html",
                    en: "/docs/matrix/kyiv.html",
                    ru: "/docs/matrix/kyiv.html",
                  },
                },
                {
                  name: "PDF",
                  link: {
                    ua: "/docs/matrix/kyiv.pdf",
                    en: "/docs/matrix/kyiv.pdf",
                    ru: "/docs/matrix/kyiv.pdf",
                  },
                },
              ],
            },
            {
              name: {
                ua: "Web chat: Харків",
                ru: "Веб чат: Харьков",
                en: "Web chat: Kharkiv",
              },
              link: "https://chat.kharkiv.dcomm.net.ua/",
              docs: [
                {
                  name: "HTML",
                  link: {
                    ua: "/docs/matrix/kharkiv.html",
                    en: "/docs/matrix/kharkiv.html",
                    ru: "/docs/matrix/kharkiv.html",
                  },
                },
                {
                  name: "PDF",
                  link: {
                    ua: "/docs/matrix/kharkiv.pdf",
                    en: "/docs/matrix/kharkiv.pdf",
                    ru: "/docs/matrix/kharkiv.pdf",
                  },
                },
              ],
            },
            {
              name: {
                ua: "Web chat: Одеса",
                ru: "Веб чат: Одесса",
                en: "Web chat: Odessa",
              },
              link: "https://chat.odessa.dcomm.net.ua/",
              docs: [
                {
                  name: "HTML",
                  link: {
                    ua: "/docs/matrix/odessa.html",
                    en: "/docs/matrix/odessa.html",
                    ru: "/docs/matrix/odessa.html",
                  },
                },
                {
                  name: "PDF",
                  link: {
                    ua: "/docs/matrix/odessa.pdf",
                    en: "/docs/matrix/odessa.pdf",
                    ru: "/docs/matrix/odessa.pdf",
                  },
                },
              ],
            },
            {
              name: {
                ua: "Web chat: Львів",
                ru: "Веб чат: Львов",
                en: "Web chat: Lviv",
              },
              link: "https://chat.lviv.dcomm.net.ua/",
              // docs: [
              // {
              //   name: "HTML",
              //   link: {
              //     ua: "/docs/matrix/lviv.html",
              //     en: "/docs/matrix/lviv.html",
              //     ru: "/docs/matrix/lviv.html",
              //   },
              // },
              // {
              //   name: "PDF",
              //   link: {
              //     ua: "/docs/matrix/odessa.pdf",
              //     en: "/docs/matrix/odessa.pdf",
              //     ru: "/docs/matrix/odessa.pdf",
              //   },
              // },
              // ],
            },
          ],
        },
        mobileApp: {
          name: {
            ua: "Element",
            ru: "Element",
            en: "Element",
          },
          logo: "/logo/logo-mark-primary.svg",
          platforms: [{ name: "Android", link: "" }],
          link: "https://element.io/get-started#download",
          localLink: "/package/element/files/",
          servers: [
            {
              name: {
                ua: "Київ сервер: matrix.kyiv.dcomm.net.ua",
                ru: "Киев сервер: matrix.kyiv.dcomm.net.ua",
                en: "Kyiv server: matrix.kyiv.dcomm.net.ua",
              },
              link: "",

              docs: [
                {
                  name: "HTML",
                  link: {
                    ua: "/docs/element/kyiv.html",
                    en: "/docs/element/kyiv.html",
                    ru: "/docs/element/kyiv.html",
                  },
                },
                {
                  name: "PDF",
                  link: {
                    ua: "/docs/element/kyiv.pdf",
                    en: "/docs/element/kyiv.pdf",
                    ru: "/docs/element/kyiv.pdf",
                  },
                },
              ],
            },
            {
              name: {
                ua: "Харків сервер: matrix.kharkiv.dcomm.net.ua",
                ru: "Харьков сервер: matrix.kharkiv.dcomm.net.ua",
                en: "Kharkiv server: matrix.kharkiv.dcomm.net.ua",
              },
              link: "",

              docs: [
                {
                  name: "HTML",
                  link: {
                    ua: "/docs/element/kharkiv.html",
                    en: "/docs/element/kharkiv.html",
                    ru: "/docs/element/kharkiv.html",
                  },
                },
                {
                  name: "PDF",
                  link: {
                    ua: "/docs/element/kharkiv.pdf",
                    en: "/docs/element/kharkiv.pdf",
                    ru: "/docs/element/kharkiv.pdf",
                  },
                },
              ],
            },
            {
              name: {
                ua: "Одеса сервер: matrix.odessa.dcomm.net.ua",
                ru: "Одесса сервер: matrix.odessa.dcomm.net.ua",
                en: "Odessa server: matrix.odessa.dcomm.net.ua",
              },
              link: "",
              docs: [
                {
                  name: "HTML",
                  link: {
                    ua: "/docs/element/odessa.html",
                    en: "/docs/element/odessa.html",
                    ru: "/docs/element/odessa.html",
                  },
                },
                {
                  name: "PDF",
                  link: {
                    ua: "/docs/element/odessa.pdf",
                    en: "/docs/element/odessa.pdf",
                    ru: "/docs/element/odessa.pdf",
                  },
                },
              ],
            },
            {
              name: {
                ua: "Львів сервер: matrix.lviv.dcomm.net.ua",
                ru: "Львов сервер: matrix.lviv.dcomm.net.ua",
                en: "Lviv server: matrix.lviv.dcomm.net.ua",
              },
              link: "",
              // docs: [
              // {
              //   name: "HTML",
              //   link: {
              //     ua: "/docs/element/lviv.html",
              //     en: "/docs/element/lviv.html",
              //     ru: "/docs/element/lviv.html",
              //   },
              // },
              // {
              //   name: "PDF",
              //   link: {
              //     ua: "/docs/element/odessa.pdf",
              //     en: "/docs/element/odessa.pdf",
              //     ru: "/docs/element/odessa.pdf",
              //   },
              // },
              // ],
            },
          ],
        },
      },
      {
        id: 2,
        show: true,
        descr: {
          ua: `<p>Delta.chat — це зашифрований сервіс обміну повідомленнями, який використовує для зв'язку протокол електронної пошти (SMTP). За дизайном схожий на WhatsApp.
</p><p>
Користувачам необхідно встановити додаток для смартфона та додати сервер за допомогою QR-кодів, наведених нижче. Інші люди можуть спілкуватися з вами, створивши QR-код запрошення в додатку.
</p>`,
          en: `<p>Delta.chat is an encrypted messaging service that uses email protocols (SMTP) for communications. Similar in design to WhatsApp. Users need to install a smartphone application and add the server via QR codes, linked below. Other people can chat with you by generating a chat invitation QR code from the app. </p>`,
          ru: `<p>Delta.chat —  зашифрованная служба обмена сообщениями, использующая протокол электронной почты (SMTP). Дизайн похож на Whatsapp. Пользователям необходимо установить приложение для смартфона и добавить сервер с помощью QR-кодов, ссылки на которые приведены ниже. Другие люди могут общаться с вами, сгенерировав QR-код приглашения в чат в самом приложении.</p>`,
        },
        logo: "/logo/deltachat.svg",
        desktopApp: {
          name: { ua: "Deltachat", ru: "Deltachat", en: "Deltachat" },
          logo: "/logo/deltachat.svg",
          platforms: [
            { name: "Linux", link: "" },
            { name: "Windows", link: "" },
            { name: "macOs", link: "" },
          ],
          link: "https://delta.chat/en/download",
          localLink: "",
          servers: [
            {
              name: { ua: "Київ сервер", ru: "Киев сервер", en: "Kyiv server" },
              link: "/docs/deltachat/kyiv-invite.png",
            },
            {
              name: {
                ua: "Харків сервер",
                ru: "Харьков сервер",
                en: "Kharkiv server",
              },
              link: "/docs/deltachat/kharkiv-invite.png",
            },
            {
              name: {
                ua: "Одеса сервер",
                ru: "Одесса сервер",
                en: "Odessa server",
              },
              link: "/docs/deltachat/odessa-invite.png",
            },
            {
              name: {
                ua: "Львів сервер",
                ru: "Львов сервер",
                en: "Lviv server",
              },
              link: "/docs/deltachat/lviv-invite.png",
            },
          ],
          docs: [
            {
              name: "PDF",
              link: {
                ua: "/docs/deltachat/deltachat-manual.pdf",
                en: "/docs/deltachat/deltachat-manual_en.pdf",
                ru: "/docs/deltachat/deltachat-manual_ru.pdf",
              },
            },
          ],
        },
        mobileApp: {
          name: {
            ua: "Deltachat",
            ru: "Deltachat",
            en: "Deltachat",
          },
          logo: "/logo/deltachat.svg",
          platforms: [
            { name: "Android", link: "" },
            { name: "iOs", link: "" },
          ],
          link: "https://get.delta.chat/",
          docs: [
            {
              name: "PDF",
              link: {
                ua: "/docs/deltachat/deltachat-manual.pdf",
                en: "/docs/deltachat/deltachat-manual_en.pdf",
                ru: "/docs/deltachat/deltachat-manual_ru.pdf",
              },
            },
          ],
          localLink: "/package/deltachat/files/",
          servers: [
            {
              name: { ua: "Київ сервер", ru: "Киев сервер", en: "Kyiv server" },
              link: "/docs/deltachat/kyiv-invite.png",
            },
            {
              name: {
                ua: "Харків сервер",
                ru: "Харьков сервер",
                en: "Kharkiv server",
              },
              link: "/docs/deltachat/kharkiv-invite.png",
            },
            {
              name: {
                ua: "Одеса сервер",
                ru: "Одесса сервер",
                en: "Odessa server",
              },
              link: "/docs/deltachat/odessa-invite.png",
            },
            {
              name: {
                ua: "Львів сервер",
                ru: "Львов сервер",
                en: "Lviv server",
              },
              link: "/docs/deltachat/lviv-invite.png",
            },
          ],
        },
      },
      {
        id: 3,
        show: true,
        descr: {
          ua: `<p>ОМесенджер Briar — це безпечний інструмент чату, який за замовчуванням використовує мережу Tor, а також може створювати локальні мережеві мережі за допомогою функції Bluetooth у вашому смартфоні.</p>`,
          en: `<p>Briar messenger is a secure chat tool that uses the Tor network by default and can also build local area mesh networks using the phone’s Bluetooth connectivity</p>`,
          ru: `<p>Briar — это безопасный инструмент для обмена сообщениями, который по-умолчанию использует сеть Tor, а также может создавать локальные меш-сети, используя bluetooth телефона.</p>`,
        },
        logo: "/logo/briar.png",

        mobileApp: {
          name: {
            ua: "Briar",
            ru: "Briar",
            en: "Briar",
          },
          logo: "/logo/briar.png  ",
          platforms: [{ name: "Android", link: "" }],
          docs: [
            {
              name: "HTML",
              link: {
                ua: "/docs/briar/index.html",
                en: "/docs/briar/index_en.html",
                ru: "/docs/briar/index_ru.html",
              },
            },
            {
              name: "PDF",
              link: {
                ua: "/docs/briar/briar.pdf",
                en: "/docs/briar/briar_en.pdf",
                ru: "/docs/briar/briar_ru.pdf",
              },
            },
          ],
          link: "https://briarproject.org/download-briar/",
          localLink: "/package/briar/files/",
        },
      },
    ],
    browsing: [
      {
        id: 1,
        show: true,
        descr: {
          ua: `<p>СENO — це веб-браузер для доступу до Інтернету там, де задіяні обмеження чи відключення інтернету. Браузер використовує сучасний метод маршрутизації запитів в Інтернеті на основі протоколів Bittorrent. Користувачі автоматично обмінюються отриманим контентом один з одним, використовуючи однорангове підключення (пірингове/ P2P). У випадку зовнішнього відключення Інтернету контент, що вже є у вашій мережі, залишається доступним і й розподіляється між користувачами.</p>`,
          en: `<p>CENO is a web browser for accessing the Internet from censored network environments. It uses a novel method built on Bittorrent protocols to route requests through the Internet. Users automatically share retrieved content with each other using peer-to-peer connectivity. During an Internet shutdown, content already in your network continues to be available and shared among users there.</p>`,
          ru: `<p>CENO — это веб-браузер для доступа к Интернету в обход цензуры. Приложение использует метод, основанный на  Bittorrent-протоколе, для маршрутизации запросов через Интернет. Пользователи автоматически обмениваются полученным контентом друг с другом, через одноранговое соединение. Во время отключения Интернета контент, уже находящийся в вашей сети, продолжает быть доступным и распространяться среди пользователей.</p>`,
        },
        logo: "/logo/ceno.png",

        mobileApp: {
          name: {
            ua: "CENO",
            ru: "CENO",
            en: "CENO",
          },
          logo: "/logo/ceno.png",
          platforms: [{ name: "Android", link: "" }],
          docs: [
            {
              name: "HTML",
              link: {
                ua: "/docs/ceno/index.html",
                en: "/docs/ceno/index_en.html",
                ru: "/docs/ceno/index_ru.html",
              },
            },
            {
              name: "PDF",
              link: {
                ua: "/docs/ceno/ceno-manual.pdf",
                en: "/docs/ceno/ceno-manual_en.pdf",
                ru: "/docs/ceno/ceno-manual_ru.pdf",
              },
            },
          ],
          link: "https://censorship.no/download",
          localLink: "/package/ceno/files/",
        },
      },
      {
        id: 2,
        show: true,
        descr: {
          ua: `<p>NewNode VPN створює альтернативне мережеве з'єднання, що дозволяє вашому пристрою спілкуватися в ситуаціях, коли потрібний інтернет-сайт або ресурс заблоковані або недоступні. Він використовує однорангову мережу для маршрутизації ваших даних навколо мережевих перешкод. Незалежний від сервера, стійкий до DDoS-атак і перевірений безпекою, що робить його унікальним серед додатків VPN.</p>`,
          en: `<p>NewNode VPN creates an alternative network connection allowing your device to communicate in situations where a desired internet site or resource is blocked or unavailable. It utilizes peer-to-peer networking to route your data around network obstacles. Server-independent, resistant to DDoS attacks, and security audited - making it unique among VPN apps.</p>`,
          ru: `</p>NewNode VPN создает альтернативное сетевое подключение, позволяющее вашему устройству обмениваться данными в ситуациях, когда нужный интернет-сайт или ресурс заблокирован или недоступен. Он использует одноранговую сеть для маршрутизации ваших данных в обход сетевых препятствий. Децентрализованный доступ, устойчив к DDoS-атакам и проверен на безопасность, что делает его уникальным среди VPN-приложений.</p>`,
        },
        logo: "/logo/newnode.png",

        mobileApp: {
          name: {
            ua: "NewNode VPN",
            ru: "NewNode VPN",
            en: "NewNode VPN",
          },
          logo: "/logo/newnode.png",
          platforms: [
            { name: "Android", link: "" },
            { name: "iOs", link: "" },
          ],
          docs: [
            {
              name: "HTML",
              link: {
                ua: "/docs/newnode/index.html",
                en: "/docs/newnode/index_en.html",
                ru: "/docs/newnode/index_ru.html",
              },
            },
          ],

          link: "https://newnode.com/download-vpn",
          localLink: "/package/newnode/files/",
        },
      },
    ],
//    filesharing: [
//      {
//        id: 1,
//        show: true,
//        descr: {
//          ua: `<p>Syncthing (Синхронізатор) замінює синхронізацію володільця та хмарні сервіси за принципами відкритості, надійності і децентралізації. Ваші дані – це тільки ваші дані, і вам обирати, де вони повинні зберігатися у випадку, якщо ці дані передаються третій стороні, а також яким способом ці дані передаються через Інтернет.</p>`,
//          en: `<p>Syncthing replaces proprietary sync and cloud services with something open, trustworthy and decentralized. Your data is your data alone and you deserve to choose where it is stored, if it is shared with some third party and how it's transmitted over the Internet. </p>`,
//          ru: `<p>Syncthing — это надёжное, децентрализованное облачное хранение. Ваши данные остаются только в ваших руках, вы выбираете где они хранятся, хотите ли вы делиться ими с кем-то и каким образом перeдавать их по сети.</p>`,
//        },
//	logo: "/logo/syncthing.png",

//        mobileApp: {
//          name: {
//            ua: "Syncthing",
//            ru: "Syncthing",
//            en: "Syncthing",
//          },
//          logo: "/logo/syncthing.png",
//          platforms: [
//            { name: "Android", link: "" },
//            { name: "Linux", link: "" },
//            { name: "Windows", link: "" },
//            { name: "macOs", link: "" },
//          ],
          // docs: [
          //   {
          //     name: "HTML",
          //     link: {
          //       ua: "/docs/syncthing/index_en.html",
          //       en: "/docs/syncthing/index_en.html",
          //       ru: "/docs/syncthing/index_en.html",
          //     },
          //   },
          //   {
          //     name: "PDF",
          //     link: {
          //       ua: "/docs/syncthing/syncthing.pdf",
          //       en: "/docs/syncthing/syncthing.pdf",
          //       ru: "/docs/syncthing/syncthing.pdf",
          //     },
          //   },
          // ],
//          link: "https://syncthing.net/downloads",
//          localLink: "/package/syncthing/files/",
//        },
//      },
//    ],
  },
});
