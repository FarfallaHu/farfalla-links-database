// 本地备用数据 - 从 Supabase 导出
// 导出时间: 2026-05-21T22:15:51.936Z

export interface LocalLink {
  id: string
  url: string
  title: string
  favicon?: string
  folderId?: string | null
  createdAt: string
  order?: number
}

export interface LocalFolder {
  id: string
  name: string
  icon?: string | null
  createdAt: string
  order?: number
}

export const localFolders: LocalFolder[] = [
  {
    "id": "b5cc64f6-aec0-4a55-a42d-5abc65177f08",
    "icon": null,
    "name": "Products",
    "order": 6,
    "createdAt": "2026-01-10T08:40:46.884Z"
  },
  {
    "id": "c785b54a-7c28-41f1-bbc4-f5a5e128ac2c",
    "icon": null,
    "name": "Google",
    "order": 20,
    "createdAt": "2025-12-06T00:46:52.243Z"
  },
  {
    "id": "d821e903-d619-4add-9246-7a25364c3019",
    "icon": null,
    "name": "AI Products",
    "order": 5,
    "createdAt": "2025-12-03T19:44:07.598Z"
  },
  {
    "id": "f5c5acd8-c49f-4ed7-acfb-c2f4660a3136",
    "icon": null,
    "name": "Lifetime",
    "order": 19,
    "createdAt": "2025-10-29T16:25:53.868Z"
  },
  {
    "id": "e71444ff-bfb0-400f-8375-d54c9b7bcf19",
    "icon": null,
    "name": "Print",
    "order": 14,
    "createdAt": "2025-10-10T18:01:55.769Z"
  },
  {
    "id": "3d793461-609a-4372-8a57-634978f37f25",
    "icon": null,
    "name": "Domain",
    "order": 10,
    "createdAt": "2025-10-10T07:27:45.449Z"
  },
  {
    "id": "0846b3a1-3883-414b-a664-d1d562ee7874",
    "icon": null,
    "name": "Wordpress",
    "order": 11,
    "createdAt": "2025-09-23T19:25:12.638Z"
  },
  {
    "id": "eab44842-3237-4906-998c-f22301555473",
    "icon": null,
    "name": "Subscriptions",
    "order": 18,
    "createdAt": "2025-08-29T22:22:20.859Z"
  },
  {
    "id": "7a94f2bf-186c-490b-9c9b-d26b7d3e8929",
    "icon": null,
    "name": "My Studio",
    "order": 1,
    "createdAt": "2025-08-27T21:32:51.025Z"
  },
  {
    "id": "27f81867-1bd2-4a19-a2da-1cc51a446344",
    "icon": null,
    "name": "Others",
    "order": 17,
    "createdAt": "2025-08-27T21:22:14.004Z"
  },
  {
    "id": "fd2d91df-eae8-4dfb-8a78-3e3f0f4b1e0d",
    "icon": null,
    "name": "Tools",
    "order": 7,
    "createdAt": "2025-08-27T20:56:09.871Z"
  },
  {
    "id": "4e3309d3-7f88-4be9-961a-9e41422edf5d",
    "icon": null,
    "name": "Farfalla",
    "order": 0,
    "createdAt": "2025-08-27T04:15:56.663Z"
  },
  {
    "id": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "icon": null,
    "name": "AI",
    "order": 4,
    "createdAt": "2025-08-27T02:52:38.679Z"
  },
  {
    "id": "2c6afd26-b4ba-4361-b79b-33b1bb84fad5",
    "icon": null,
    "name": "wlop",
    "order": 16,
    "createdAt": "2025-08-27T02:37:01.170Z"
  },
  {
    "id": "cce0ed2f-0a20-48d7-93e7-498d2ae45da7",
    "icon": null,
    "name": "Email",
    "order": 13,
    "createdAt": "2025-08-26T22:50:21.255Z"
  },
  {
    "id": "6c39923d-f15d-4b59-869e-6b195bccc347",
    "icon": null,
    "name": "Google",
    "order": 3,
    "createdAt": "2025-08-26T22:41:53.389Z"
  },
  {
    "id": "584d48fd-f97a-4b38-8c7c-3f450c161544",
    "icon": null,
    "name": "Game",
    "order": 15,
    "createdAt": "2025-08-26T22:37:02.158Z"
  },
  {
    "id": "119e3089-4599-45a3-936b-9d30d39ff246",
    "icon": null,
    "name": "Dev",
    "order": 12,
    "createdAt": "2025-08-26T22:18:07.632Z"
  },
  {
    "id": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "icon": null,
    "name": "Design",
    "order": 8,
    "createdAt": "2025-08-26T21:40:02.008Z"
  },
  {
    "id": "240937cc-2e69-497f-9434-12008684e5a2",
    "icon": null,
    "name": "Host",
    "order": 9,
    "createdAt": "2025-08-26T21:20:57.213Z"
  },
  {
    "id": "d2bc8744-ae18-4d94-9224-e9e120dbe922",
    "icon": null,
    "name": "My Clients",
    "order": 2,
    "createdAt": "2025-08-26T21:10:37.300Z"
  }
]

export const localLinks: LocalLink[] = [
  {
    "id": "25e0aa16-3b8e-4e86-badf-4f0d460936d9",
    "url": "https://www.youtube.com/playables",
    "order": 1,
    "title": "YouTube Playables",
    "favicon": "https://www.youtube.com/s/desktop/40cd5ddc/img/favicon.ico",
    "folderId": null,
    "createdAt": "2026-04-27T02:43:57.917Z"
  },
  {
    "id": "bc2efc5c-9aa8-4af8-aa12-4271f0ebf41c",
    "url": "https://cluely.com/",
    "order": 32,
    "title": "Cluely",
    "favicon": "https://cluely.com/favicon/light/favicon.png",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2026-03-03T21:57:58.955Z"
  },
  {
    "id": "a0121942-2e46-4d73-bdbb-24e9b587384c",
    "url": "https://dxdxdxd.com/",
    "order": 7,
    "title": "DXD Studio",
    "favicon": "https://freight.cargo.site/t/original/i/Y2454915570883159593818830322869/touxiang.ico",
    "folderId": "27f81867-1bd2-4a19-a2da-1cc51a446344",
    "createdAt": "2026-02-26T21:02:22.562Z"
  },
  {
    "id": "ab4fb5de-2283-4066-9b57-c590f4d2e0ea",
    "url": "https://www.kimi.com/bot",
    "order": 31,
    "title": "Kimi Claw",
    "favicon": "https://www.kimi.com/favicon.ico",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2026-02-26T06:02:31.683Z"
  },
  {
    "id": "fecacb96-be77-4144-8af5-fff78c0994cc",
    "url": "https://www.kimi.com/",
    "order": 6,
    "title": "Kimi",
    "favicon": "https://www.kimi.com/favicon.ico",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2026-02-26T05:59:20.571Z"
  },
  {
    "id": "290cfb13-d0dd-415e-bd37-7f1a6777ab49",
    "url": "https://www.xingliu.art/",
    "order": 30,
    "title": "星流",
    "favicon": "https://www.xingliu.art/favicon.ico",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2026-02-13T20:11:28.941Z"
  },
  {
    "id": "308084f2-dd6b-4a2a-a761-7cadfb51ad44",
    "url": "https://seko.sensetime.com/explore",
    "order": 29,
    "title": "Seko",
    "favicon": "https://seko.sensetime.com/logo-48x48.svg",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2026-02-06T00:11:23.885Z"
  },
  {
    "id": "5cb8b144-3484-470c-a305-cc8d76c9c370",
    "url": "https://www.genstore.ai/",
    "order": 28,
    "title": "Genstore",
    "favicon": "https://assets-cdn.genstore.ai/web/index/static/assets/images/favicon.svg",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2026-02-04T19:53:50.542Z"
  },
  {
    "id": "cf7714e8-873a-426d-bf1d-5f666cf78b05",
    "url": "https://streamlit.io/",
    "order": 11,
    "title": "Streamlit",
    "favicon": "https://streamlit.io/favicon.svg",
    "folderId": "119e3089-4599-45a3-936b-9d30d39ff246",
    "createdAt": "2026-02-03T03:36:21.015Z"
  },
  {
    "id": "3657bf01-8efc-4343-a00f-cf2126453691",
    "url": "https://fal.ai/",
    "order": 27,
    "title": "fal.ai",
    "favicon": "https://fal.ai/favicon.png",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2026-02-03T03:34:31.562Z"
  },
  {
    "id": "c444ab57-578b-4fed-bf83-6a8c2d076b3a",
    "url": "https://dify.ai/",
    "order": 26,
    "title": "Dify",
    "favicon": "https://framerusercontent.com/images/5DjvEqzd8wAijK6D0yeFokYMteE.svg",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2026-02-03T03:32:17.567Z"
  },
  {
    "id": "379898ea-2608-4b0b-a035-991e9ee9b9d8",
    "url": "https://sinirio.cloud/",
    "order": 2,
    "title": "sinirio.cloud",
    "favicon": "https://sinirio.cloud/web/image/website/1/favicon?unique=53cc123",
    "folderId": "7a94f2bf-186c-490b-9c9b-d26b7d3e8929",
    "createdAt": "2026-01-28T05:34:43.683Z"
  },
  {
    "id": "3d5eaf84-1ca2-46de-9451-672c51d6c70e",
    "url": "https://my.setapp.com/subscription",
    "order": 5,
    "title": "Setapp",
    "favicon": "https://my.setapp.com/static/media/icons-c07c6d9989937c6b3229f10186f0ee18a798eb9e27ce019017d3f4d97ced07fc/favicon.ico",
    "folderId": "eab44842-3237-4906-998c-f22301555473",
    "createdAt": "2026-01-27T23:30:26.859Z"
  },
  {
    "id": "10779d7b-abe3-4fe9-ada0-4c11121d8a65",
    "url": "https://activetheory.net/",
    "order": 5,
    "title": "Active Theory",
    "favicon": "https://activetheory.net/assets/meta/favicon-32x32.png",
    "folderId": null,
    "createdAt": "2026-01-27T03:24:47.182Z"
  },
  {
    "id": "4dde36e8-6f24-415c-bf09-fdbcb2f08fd1",
    "url": "https://nuwa.world/",
    "order": 4,
    "title": "Nuwa",
    "favicon": "https://nuwa.world/favicon.ico",
    "folderId": null,
    "createdAt": "2026-01-23T07:56:53.940Z"
  },
  {
    "id": "6e7a4857-6df3-4e0f-990d-945d52b26770",
    "url": "https://bubble.io/",
    "order": 10,
    "title": "Bubble",
    "favicon": "https://meta-q.cdn.bubble.io/cdn-cgi/image/w=128,h=,f=auto,dpr=1,fit=contain/f1530294839424x143528842134401200/Icon-no-clearspace.png",
    "folderId": "119e3089-4599-45a3-936b-9d30d39ff246",
    "createdAt": "2026-01-22T06:08:45.245Z"
  },
  {
    "id": "252226f3-8284-4680-96bb-01ae734640d2",
    "url": "https://vercel.com/",
    "order": 7,
    "title": "Vercel",
    "favicon": "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/apple-touch-icon-57x57.png",
    "folderId": "119e3089-4599-45a3-936b-9d30d39ff246",
    "createdAt": "2026-01-22T03:44:14.415Z"
  },
  {
    "id": "3ef050ab-cf52-4887-a55b-8f2ee47c5abf",
    "url": "https://v0.app/",
    "order": 8,
    "title": "v0 by Vercel",
    "favicon": "https://v0.app/assets/icon-light-32x32.png",
    "folderId": "119e3089-4599-45a3-936b-9d30d39ff246",
    "createdAt": "2026-01-22T03:42:35.743Z"
  },
  {
    "id": "a2c7607e-fec8-4a69-ac41-40bbd198e419",
    "url": "https://cursor.com/",
    "order": 6,
    "title": "Cursor",
    "favicon": "https://cursor.com/marketing-static/icon-192x192.png",
    "folderId": "119e3089-4599-45a3-936b-9d30d39ff246",
    "createdAt": "2026-01-22T03:15:42.594Z"
  },
  {
    "id": "4c165043-e71c-43f8-93cb-f7f1663af7ea",
    "url": "https://suno.com/home",
    "order": 17,
    "title": "Suno",
    "favicon": "https://cdn-o.suno.com/favicon.ico",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2026-01-21T20:20:46.036Z"
  },
  {
    "id": "7f7a793a-3693-45ac-9126-28d10355b15e",
    "url": "https://cargo.site/",
    "order": 5,
    "title": "Cargo",
    "favicon": "https://static.cargo.site/favicon/c3-favicon.ico",
    "folderId": "119e3089-4599-45a3-936b-9d30d39ff246",
    "createdAt": "2026-01-20T09:30:20.211Z"
  },
  {
    "id": "dc588547-1856-4691-a4e5-4b794ab8d866",
    "url": "https://nicolaipalmkvist.com/",
    "order": 7,
    "title": "Nicolai Palmkvist",
    "favicon": "https://nicolaipalmkvist.com/wp-content/uploads/2024/10/cropped-apple-touch-icon-32x32.png",
    "folderId": "0846b3a1-3883-414b-a664-d1d562ee7874",
    "createdAt": "2026-01-16T23:54:37.126Z"
  },
  {
    "id": "0d9681c8-bede-44f6-ac1e-0c7413f2608b",
    "url": "https://media.farfallahu.com",
    "order": 4,
    "title": "Farfalla Hu - Media",
    "favicon": "https://media.farfallahu.com/favicon.ico",
    "folderId": "4e3309d3-7f88-4be9-961a-9e41422edf5d",
    "createdAt": "2026-01-16T23:03:43.993Z"
  },
  {
    "id": "344b5250-3105-4a5a-965e-a98a39d0fcf9",
    "url": "https://icons8.com/icons",
    "order": 22,
    "title": "icons8",
    "favicon": "https://maxst.icons8.com/vue-static/icon/favicon/icons8_fav_32×32.png",
    "folderId": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "createdAt": "2026-01-16T22:48:48.873Z"
  },
  {
    "id": "40565070-5ada-4642-ae5c-f5172f144c0b",
    "url": "https://www.lummi.ai/",
    "order": 25,
    "title": "Lummi",
    "favicon": "https://www.lummi.ai/apple-icon.png?ecde11f55b11e587",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2026-01-16T22:24:50.598Z"
  },
  {
    "id": "474d5744-4736-46b5-8b06-cf929b3d0fb8",
    "url": "https://notebooklm.google/",
    "order": 2,
    "title": "Google NotebookLM",
    "favicon": "https://notebooklm.google/_/static/branding/v4/light_mode/favicon/favicon.svg",
    "folderId": "6c39923d-f15d-4b59-869e-6b195bccc347",
    "createdAt": "2026-01-16T20:49:35.502Z"
  },
  {
    "id": "47f48443-3296-4dff-8db1-5682c44ce142",
    "url": "https://printify.com/",
    "order": 2,
    "title": "Printify",
    "favicon": "https://printify.com/pfh/assets/png/favicon-96x96.png",
    "folderId": "e71444ff-bfb0-400f-8375-d54c9b7bcf19",
    "createdAt": "2026-01-16T07:28:51.108Z"
  },
  {
    "id": "61ffc7f8-532a-4f84-a490-3d60fa3e2712",
    "url": "https://apple.farfallahu.com/",
    "order": 3,
    "title": "Farfalla Hu - Apple Store",
    "favicon": "https://apple.farfallahu.com/favicon.ico",
    "folderId": "4e3309d3-7f88-4be9-961a-9e41422edf5d",
    "createdAt": "2026-01-14T20:28:09.009Z"
  },
  {
    "id": "035c5c9c-c745-4156-ab42-1409e8c3fd63",
    "url": "https://www.designkit.com/",
    "order": 24,
    "title": "Designkit",
    "favicon": "https://pc.meitudata.com/designkit-global/_next/static/media/favicon.3e797464.png",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2026-01-14T05:38:33.486Z"
  },
  {
    "id": "c6bfa9c3-9380-4591-bf89-cd0420dd8f9d",
    "url": "http://camillecdesign.com/",
    "order": 6,
    "title": "Camille Chen",
    "favicon": "http://camillecdesign.com/favicon.ico",
    "folderId": "27f81867-1bd2-4a19-a2da-1cc51a446344",
    "createdAt": "2026-01-12T23:00:23.130Z"
  },
  {
    "id": "ee3b9aad-3082-475c-9fa9-5969b5bd4826",
    "url": "https://egov.uscis.gov/",
    "order": 0,
    "title": "egov.uscis.gov",
    "favicon": "https://egov.uscis.gov/favicon.ico",
    "folderId": "27f81867-1bd2-4a19-a2da-1cc51a446344",
    "createdAt": "2026-01-12T22:59:54.081Z"
  },
  {
    "id": "57e61d16-d8a3-4272-b39f-db0c1d69e6f9",
    "url": "https://runwayml.com/",
    "order": 23,
    "title": "Runway",
    "favicon": "https://runwayml.com/icon.png?icon.8128ee70.png",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2026-01-12T20:18:23.518Z"
  },
  {
    "id": "09dc3fce-c0fc-40c7-86a8-fcfa68857b01",
    "url": "https://hailuoai.video/",
    "order": 16,
    "title": "Hailuo AI",
    "favicon": "https://cdn.hailuoai.video/open-hailuo-video-web/public_assets/favicon.png",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2026-01-12T20:12:02.688Z"
  },
  {
    "id": "39375109-0de7-4d33-8a5d-1d14e81e02e1",
    "url": "https://beeble.ai/",
    "order": 22,
    "title": "Beeble",
    "favicon": "https://framerusercontent.com/images/jccjy1njZrsPwbEWJlvxOG61bo4.png",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2026-01-12T20:11:31.246Z"
  },
  {
    "id": "36bf631a-4252-4586-b187-91390140511e",
    "url": "https://www.relume.io/",
    "order": 21,
    "title": "Relume",
    "favicon": "https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/65b5bb942a2c4afdf861aa21_favicon.png",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2026-01-11T06:08:55.169Z"
  },
  {
    "id": "34e84663-4b31-4081-b0ee-e67816fc34a0",
    "url": "https://www.aura.build/",
    "order": 9,
    "title": "Aura",
    "favicon": "https://www.aura.build/favicon.ico",
    "folderId": "119e3089-4599-45a3-936b-9d30d39ff246",
    "createdAt": "2026-01-11T04:28:35.500Z"
  },
  {
    "id": "cfa2f1d3-ed13-406f-b362-226765f64cbd",
    "url": "https://screen.studio/",
    "order": 8,
    "title": "Screen Studio",
    "favicon": "https://screen.studio/icon.png",
    "folderId": "fd2d91df-eae8-4dfb-8a78-3e3f0f4b1e0d",
    "createdAt": "2026-01-11T04:01:01.230Z"
  },
  {
    "id": "f42d206b-5229-413a-854e-bfc75af44e77",
    "url": "https://www.liinks.co/",
    "order": 3,
    "title": "Liinks",
    "favicon": "https://d1ym67wyom4bkd.cloudfront.net/assets/bundles/f92011bd25b93301f7b049e2c1d2238ad9609d00/images/favicon.png",
    "folderId": null,
    "createdAt": "2026-01-10T08:40:34.617Z"
  },
  {
    "id": "9fd8bb0a-d410-465c-9008-256203f28ad9",
    "url": "https://klingai.com/cn/",
    "order": 15,
    "title": "Kling AI",
    "favicon": "https://p2-kling.klingai.com/kcdn/cdn-kcdn112452/kling-homepage-aio-prod_aio/favicon.ico",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2026-01-09T09:13:42.354Z"
  },
  {
    "id": "78dcd088-21fb-43a0-abfd-f677bd8a9934",
    "url": "https://jimeng.jianying.com/",
    "order": 14,
    "title": "即梦AI",
    "favicon": "https://lf3-lv-buz.vlabstatic.com/obj/image-lvweb-buz/common/images/dreamina-v1.ico",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2026-01-09T09:11:53.998Z"
  },
  {
    "id": "bae6f358-fa3c-4a29-8b56-2d9337eed005",
    "url": "https://manus.im",
    "order": 13,
    "title": "Manus",
    "favicon": "https://manus.im/favicon.ico",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2026-01-08T06:52:26.523Z"
  },
  {
    "id": "684f235a-88e0-430e-ac8b-014c2e1f2187",
    "url": "https://xeo.io",
    "order": 2,
    "title": "XEO",
    "favicon": "https://xeo.io/favicon.ico",
    "folderId": "b5cc64f6-aec0-4a55-a42d-5abc65177f08",
    "createdAt": "2026-01-07T00:28:25.152Z"
  },
  {
    "id": "5c067b05-d6ca-4a9a-a5ff-a9caedea7281",
    "url": "https://playground.com/",
    "order": 21,
    "title": "Playground",
    "favicon": "https://playground.com/favicon.ico",
    "folderId": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "createdAt": "2025-12-25T22:39:15.006Z"
  },
  {
    "id": "85558d6b-a1cd-44ef-a4c7-27ce343de47d",
    "url": "https://luna.amazon.com/",
    "order": 15,
    "title": "Amazon Luna",
    "favicon": "https://m.media-amazon.com/images/G/01/T/TC05316420/A07531864/brand/Round_Icon_128x128.png",
    "folderId": "584d48fd-f97a-4b38-8c7c-3f450c161544",
    "createdAt": "2025-12-25T22:19:36.417Z"
  },
  {
    "id": "4c92d040-d3dd-4b0a-8372-1c2cfba9f145",
    "url": "https://www.buildyourstore.ai/",
    "order": 12,
    "title": "Build Your Store",
    "favicon": "https://www.buildyourstore.ai/wp-content/themes/buildyourstore/src/img/favicon.png",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2025-12-20T07:58:16.109Z"
  },
  {
    "id": "9e5ff629-b97e-4d37-a57e-774ceb4aada7",
    "url": "https://upscayl.org/",
    "order": 11,
    "title": "Upscayl - AI Image Upscaler",
    "favicon": "https://upscayl.org/logo/64x64.png",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2025-12-16T21:11:17.369Z"
  },
  {
    "id": "c1649be6-6883-4a26-aa7e-02b630087c2d",
    "url": "https://store.epicgames.com/en-US/free-games",
    "order": 4,
    "title": "Epic Free Game",
    "favicon": "https://store.epicgames.com/favicon.ico",
    "folderId": "584d48fd-f97a-4b38-8c7c-3f450c161544",
    "createdAt": "2025-12-12T07:56:44.604Z"
  },
  {
    "id": "febb05b3-3b2e-43e8-be8f-27188c6d095f",
    "url": "https://www.xbox.com/en-us/play",
    "order": 2,
    "title": "Xbox Cloud Gaming",
    "favicon": "https://assets.play.xbox.com/playxbox/static/media/apple-icon-180.8db22303.png",
    "folderId": "584d48fd-f97a-4b38-8c7c-3f450c161544",
    "createdAt": "2025-12-12T07:56:09.854Z"
  },
  {
    "id": "547482ac-4658-48e3-984b-b7001b4ba8f4",
    "url": "https://app.envato.com/",
    "order": 20,
    "title": "Envato",
    "favicon": "https://app.envato.com/favicon.ico?v=2",
    "folderId": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "createdAt": "2025-12-10T22:36:53.764Z"
  },
  {
    "id": "62592e3d-ab8a-48d4-b5b4-17437bd8369f",
    "url": "https://www.kookapp.cn/",
    "order": 14,
    "title": "KOOK",
    "favicon": "https://www.kookapp.cn/favicon.ico",
    "folderId": "584d48fd-f97a-4b38-8c7c-3f450c161544",
    "createdAt": "2025-12-08T04:11:53.611Z"
  },
  {
    "id": "d65562c0-21ac-4dcd-ad8a-f13baef1310a",
    "url": "https://www.imagine.art/",
    "order": 7,
    "title": "ImagineArt",
    "favicon": "https://www.imagine.art/favicon.ico",
    "folderId": "6c39923d-f15d-4b59-869e-6b195bccc347",
    "createdAt": "2025-12-06T00:46:57.170Z"
  },
  {
    "id": "38915e72-54dc-4515-b153-7a2e6a66f427",
    "url": "https://labs.google.com/pomelli/about/",
    "order": 6,
    "title": "Pomelli by Google Labs",
    "favicon": "https://gstatic.com/_/bettany/MjAyNTEyMDQuMDVfcDA/foundry_about%2Fassets/favicon-48x48.png",
    "folderId": "6c39923d-f15d-4b59-869e-6b195bccc347",
    "createdAt": "2025-12-05T23:01:49.368Z"
  },
  {
    "id": "1b7aefdf-5f33-40eb-a654-8bd1b8796122",
    "url": "https://www.affinity.studio/",
    "order": 19,
    "title": "Affinity",
    "favicon": "https://static.canva.com/domain-assets/affinity/static/images/favicon-1.ico",
    "folderId": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "createdAt": "2025-12-04T22:12:26.428Z"
  },
  {
    "id": "4fbefdb4-4854-4c7d-9252-eee4288d715c",
    "url": "https://www.figma.com/community/plugin/1537393131401569370/gemdesign",
    "order": 20,
    "title": "GemDesign @ Figma",
    "favicon": "https://www.figma.com/favicon.ico",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2025-12-04T22:07:59.150Z"
  },
  {
    "id": "848f63f2-9139-4593-aa66-21c32edacd2d",
    "url": "https://design.gemcoder.com/",
    "order": 19,
    "title": "GemDesign",
    "favicon": "https://design.gemcoder.com/./logo.ico",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2025-12-04T22:06:38.557Z"
  },
  {
    "id": "b4230a28-df13-4058-9d01-620d60785218",
    "url": "https://www.boxgenie.com/",
    "order": 16,
    "title": "Box Genie",
    "favicon": "https://www.boxgenie.com/cdn/shop/files/Box_Genie_Favicon.png?crop=center&height=32&v=1724357984&width=32",
    "folderId": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "createdAt": "2025-12-03T22:35:02.151Z"
  },
  {
    "id": "fa99bcff-7b89-4f34-90bb-8b4b9edba808",
    "url": "https://www.plaud.ai/",
    "order": 1,
    "title": "Plaud.ai",
    "favicon": "https://www.plaud.ai/cdn/shop/files/plaud-fa.png?crop=center&height=32&v=1759170821&width=32",
    "folderId": "d821e903-d619-4add-9246-7a25364c3019",
    "createdAt": "2025-12-03T20:17:41.409Z"
  },
  {
    "id": "ae186961-fe61-43ac-802e-365d6cd01f05",
    "url": "https://recolx.ai/",
    "order": 0,
    "title": "RECOLX",
    "favicon": "https://recolx.ai/cdn/shop/files/App-Icon.png?crop=center&height=32&v=1761106092&width=32",
    "folderId": "d821e903-d619-4add-9246-7a25364c3019",
    "createdAt": "2025-12-03T19:44:25.022Z"
  },
  {
    "id": "de443bf3-a016-4efa-aa03-d00d3d988a77",
    "url": "https://about.google/products/",
    "order": 9,
    "title": "Google's products and services - About Google",
    "favicon": "https://www.gstatic.com/marketing-cms/assets/images/08/98/8100a1f54b648a5eb6d3749cb027/favicon.png=s32",
    "folderId": "6c39923d-f15d-4b59-869e-6b195bccc347",
    "createdAt": "2025-12-02T20:56:12.402Z"
  },
  {
    "id": "acb70b75-b8d0-4dcc-8780-805dbf2fbaa3",
    "url": "https://www.canva.com/zh_cn/pricing/",
    "order": 4,
    "title": "Canva",
    "favicon": "https://www.canva.com/favicon.ico",
    "folderId": "eab44842-3237-4906-998c-f22301555473",
    "createdAt": "2025-12-02T07:55:41.405Z"
  },
  {
    "id": "68fb6b59-4d0e-4896-902c-cc870362ba3e",
    "url": "https://picsart.com/",
    "order": 11,
    "title": "Picsart",
    "favicon": "https://pastatic.picsart.com/cms-pastatic/a955cef0-f4ba-415c-bb7a-722f01a68cf6.png",
    "folderId": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "createdAt": "2025-12-02T07:52:17.157Z"
  },
  {
    "id": "01376101-55a3-4ba3-bf47-adb4d410d23a",
    "url": "https://www.tapnow.ai/en",
    "order": 0,
    "title": "TapNow",
    "favicon": "https://www.tapnow.ai/favicon.ico",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2025-12-01T21:24:31.417Z"
  },
  {
    "id": "0f14914e-0c41-4df0-8822-485ae03fd42b",
    "url": "https://linktr.ee/",
    "order": 2,
    "title": "Linktree",
    "favicon": "https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66693601ff7950e64e66b56b_favicon.png",
    "folderId": null,
    "createdAt": "2025-11-21T07:13:14.559Z"
  },
  {
    "id": "de5f526e-cdc5-4bd5-b50d-b38e48d315ba",
    "url": "https://hpanel.hostinger.com/paid-invoices",
    "order": 3,
    "title": "Hostinger - Refound",
    "favicon": "https://hpanel.hostinger.com/favicon.ico",
    "folderId": "240937cc-2e69-497f-9434-12008684e5a2",
    "createdAt": "2025-11-20T22:03:33.735Z"
  },
  {
    "id": "34f6dfa1-1958-44ec-9edc-c3ed28c94b85",
    "url": "https://antigravity.google/",
    "order": 1,
    "title": "Google Antigravity",
    "favicon": "https://antigravity.google/assets/image/antigravity-logo.png",
    "folderId": "6c39923d-f15d-4b59-869e-6b195bccc347",
    "createdAt": "2025-11-20T18:35:42.707Z"
  },
  {
    "id": "5981750b-08c2-4dcd-abbf-d9e461d8adde",
    "url": "https://aistudio.google.com/",
    "order": 4,
    "title": "Google AI Studio",
    "favicon": "https://www.gstatic.com/aistudio/ai_studio_favicon_2_32x32.png",
    "folderId": "6c39923d-f15d-4b59-869e-6b195bccc347",
    "createdAt": "2025-11-20T18:32:37.181Z"
  },
  {
    "id": "6fb8fd0f-8d6b-433f-a814-1d56cc8d46ef",
    "url": "https://www.creativesouth.com/",
    "order": 15,
    "title": "Creative South 2026",
    "favicon": "https://cdn.prod.website-files.com/68bb33785cd5d03bee4fb31a/690d939f31f970e02b5db6ee_32%20x%2032%20Peach.png",
    "folderId": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "createdAt": "2025-11-19T22:17:36.799Z"
  },
  {
    "id": "3ba53b6a-e066-44b3-ba68-95c88973f730",
    "url": "https://yuxinpan.cargo.site/",
    "order": 5,
    "title": "Yuxin Pan",
    "favicon": "https://freight.cargo.site/t/original/i/W2409963831109135474376491579383/WechatIMG411.ico",
    "folderId": "27f81867-1bd2-4a19-a2da-1cc51a446344",
    "createdAt": "2025-11-18T18:39:47.610Z"
  },
  {
    "id": "65d48f8b-f0ef-4603-bb30-784b83f1ee39",
    "url": "https://www.lovart.ai/",
    "order": 1,
    "title": "Lovart",
    "favicon": "https://www.lovart.ai/favicon.ico",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2025-11-12T19:22:00.034Z"
  },
  {
    "id": "f1e78d67-aeb5-4522-adb9-e33d0df07568",
    "url": "https://www.namecheap.com/",
    "order": 2,
    "title": "Namecheap",
    "favicon": "https://www.namecheap.com/favicon.ico",
    "folderId": "3d793461-609a-4372-8a57-634978f37f25",
    "createdAt": "2025-11-12T18:09:06.556Z"
  },
  {
    "id": "c380bd14-8056-4bf0-8442-ce0d67559d5f",
    "url": "https://pkmps.mr-king.top/ZA/WorkBench.html",
    "order": 13,
    "title": "宝可梦传说Z-A",
    "favicon": "https://pkmps.mr-king.top/./pic/favicon.ico",
    "folderId": "584d48fd-f97a-4b38-8c7c-3f450c161544",
    "createdAt": "2025-11-10T06:35:28.246Z"
  },
  {
    "id": "c41836ac-c80d-41c6-9890-d1b3f2fa9d22",
    "url": "https://www.signs.com/",
    "order": 14,
    "title": "Signs.com",
    "favicon": "https://www.signs.com/img/signs-favicon.png",
    "folderId": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "createdAt": "2025-11-06T09:52:25.395Z"
  },
  {
    "id": "175e2c3a-badc-41d0-b4c2-d487698808cc",
    "url": "https://www.barcodesinc.com/generator/",
    "order": 13,
    "title": "UPC, Barcode and Label Generator Tools",
    "favicon": "https://cdn.barcodesinc.com/themes/barcodesinc/images/barcodesinc-apple-touch-icon.png",
    "folderId": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "createdAt": "2025-10-31T13:44:20.955Z"
  },
  {
    "id": "fea0f402-41d6-4a86-b7e8-0c9b84cbdd9e",
    "url": "https://picsart.com/background-remover/",
    "order": 12,
    "title": "Free Background Remover",
    "favicon": "https://pastatic.picsart.com/cms-pastatic/a955cef0-f4ba-415c-bb7a-722f01a68cf6.png",
    "folderId": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "createdAt": "2025-10-31T06:35:32.808Z"
  },
  {
    "id": "9477e475-1f6c-4daa-ab0f-816a9d33de46",
    "url": "https://shift.com/account/browser/",
    "order": 3,
    "title": "Shift",
    "favicon": "https://static.tryshiftcdn.com/static/images/head-icon-62-x.a6b63a54d5f4.png",
    "folderId": "eab44842-3237-4906-998c-f22301555473",
    "createdAt": "2025-10-29T18:21:27.210Z"
  },
  {
    "id": "3c8a66fe-5220-4003-a157-60d0da2eae3d",
    "url": "https://ultimateelementor.com/",
    "order": 5,
    "title": "Ultimate Addons for Elementor",
    "favicon": "https://ultimateelementor.com/wp-content/uploads/2020/03/favicon-150x150.png",
    "folderId": "0846b3a1-3883-414b-a664-d1d562ee7874",
    "createdAt": "2025-10-29T06:31:54.967Z"
  },
  {
    "id": "b47e718f-8427-45d7-a986-5cd397b6ee0c",
    "url": "https://lovable.dev/",
    "order": 10,
    "title": "Lovable",
    "favicon": "https://lovable.dev/favicon.ico",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2025-10-29T05:52:15.033Z"
  },
  {
    "id": "4e8f30d8-eb85-4ad7-8b24-8d26c99efdb0",
    "url": "https://www.design.com/",
    "order": 10,
    "title": "Design.com",
    "favicon": "https://bcassetcdn.com/favicon/dcom-production/favicon.ico",
    "folderId": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "createdAt": "2025-10-29T05:02:42.586Z"
  },
  {
    "id": "5ebf0937-388f-48e5-957e-182ca4cf5cd9",
    "url": "https://unlimited-elements.com/",
    "order": 3,
    "title": "Unlimited Elements",
    "favicon": "https://cdn.shortpixel.ai/spai2/q_glossy+ret_img+to_webp/unlimited-elements.com/wp-content/uploads/2024/09/cropped-favicon-new-ue-32x32.png",
    "folderId": "0846b3a1-3883-414b-a664-d1d562ee7874",
    "createdAt": "2025-10-29T04:17:58.705Z"
  },
  {
    "id": "81859b07-a31e-44b0-8a34-e8a6bf44060c",
    "url": "https://fonts.google.com/",
    "order": 3,
    "title": "Google Fonts",
    "favicon": "https://www.gstatic.com/images/icons/material/apps/fonts/1x/catalog/v5/favicon.svg",
    "folderId": "6c39923d-f15d-4b59-869e-6b195bccc347",
    "createdAt": "2025-10-27T21:37:05.770Z"
  },
  {
    "id": "14aa9e25-96d4-4b90-bce5-c174d76b06dc",
    "url": "https://essential-addons.com/demos/",
    "order": 1,
    "title": "Essential Addons for Elementor",
    "favicon": "https://essential-addons.com/wp-content/uploads/2024/08/cropped-Essential-Addons-Logo-2-1-32x32.png",
    "folderId": "0846b3a1-3883-414b-a664-d1d562ee7874",
    "createdAt": "2025-10-27T21:36:12.401Z"
  },
  {
    "id": "ed5ab456-3dc9-4057-84e4-2cab3cd0ee81",
    "url": "https://builtwith.com/",
    "order": 4,
    "title": "BuiltWith Technology Lookup",
    "favicon": "https://d28rh9vvmrd65v.cloudfront.net/img/favicon.ico",
    "folderId": "119e3089-4599-45a3-936b-9d30d39ff246",
    "createdAt": "2025-10-27T16:33:16.677Z"
  },
  {
    "id": "d8710f11-def0-4e1d-9f13-7e1acc66fa12",
    "url": "https://www.elegantthemes.com/",
    "order": 0,
    "title": "Divi",
    "favicon": "https://www.elegantthemes.com/images/favicon/favicon-et-32.png",
    "folderId": "f5c5acd8-c49f-4ed7-acfb-c2f4660a3136",
    "createdAt": "2025-10-22T18:09:05.837Z"
  },
  {
    "id": "dd0dc672-8814-4612-82dc-abd61070e5b4",
    "url": "https://store.wpdeveloper.com/user/download",
    "order": 4,
    "title": "WPDeveloper",
    "favicon": "https://store.wpdeveloper.com/smallLogo.svg",
    "folderId": "f5c5acd8-c49f-4ed7-acfb-c2f4660a3136",
    "createdAt": "2025-10-22T18:07:48.214Z"
  },
  {
    "id": "b14ff1e7-b01c-4119-a9c6-651df50c627a",
    "url": "https://wpspectra.com/",
    "order": 8,
    "title": "Spectra",
    "favicon": "https://wpspectra.com/wp-content/uploads/2022/07/spectra-favicon.png",
    "folderId": "0846b3a1-3883-414b-a664-d1d562ee7874",
    "createdAt": "2025-10-21T22:44:25.171Z"
  },
  {
    "id": "1b1d4813-72f1-442d-9a15-3c80bb5dfab8",
    "url": "https://servmask.com/subscription/ce08d57f-a4b1-40b0-97b2-b9b7a48450be/billing-details",
    "order": 2,
    "title": "All-in-One WP Migration Unlimited Extension",
    "favicon": "https://servmask.com/favicon.ico",
    "folderId": "eab44842-3237-4906-998c-f22301555473",
    "createdAt": "2025-10-20T17:28:24.410Z"
  },
  {
    "id": "26ef9e96-8f76-4dfb-b954-53c21e1bb650",
    "url": "https://roadmap.hostinger.com/tabs/3-website-builder",
    "order": 2,
    "title": "roadmap.hostinger.com",
    "favicon": "https://roadmap.hostinger.com/favicon.ico",
    "folderId": "240937cc-2e69-497f-9434-12008684e5a2",
    "createdAt": "2025-10-15T22:54:34.811Z"
  },
  {
    "id": "6b7af97b-0216-4ae0-b4aa-f1ade83fcd46",
    "url": "https://claude.ai/",
    "order": 9,
    "title": "claude.ai",
    "favicon": "https://claude.ai/favicon.ico",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2025-10-13T22:50:03.880Z"
  },
  {
    "id": "f8430893-4837-4203-8a1a-48f596fb92b6",
    "url": "https://www.moo.com/us/",
    "order": 1,
    "title": "Moo",
    "favicon": "https://www.moo.com/.resources/front-end-resources/images/favicons/favicon.ico?v=2",
    "folderId": "e71444ff-bfb0-400f-8375-d54c9b7bcf19",
    "createdAt": "2025-10-10T19:34:59.038Z"
  },
  {
    "id": "342cb293-037a-4178-8a01-4e2516fd0013",
    "url": "https://www.vistaprint.com/",
    "order": 0,
    "title": "VistaPrint",
    "favicon": "https://www.vistaprint.com/favicon.ico",
    "folderId": "e71444ff-bfb0-400f-8375-d54c9b7bcf19",
    "createdAt": "2025-10-10T18:02:02.364Z"
  },
  {
    "id": "1a4b259e-1b7e-4976-b98d-96b483f1a93b",
    "url": "https://instantdomainsearch.com/",
    "order": 4,
    "title": "Domain Name Search",
    "favicon": "https://instantdomainsearch.com/favicon.svg",
    "folderId": "3d793461-609a-4372-8a57-634978f37f25",
    "createdAt": "2025-10-10T07:32:09.606Z"
  },
  {
    "id": "66f9dd33-34f5-47a6-9f3d-756a462d7192",
    "url": "https://tld-list.com/",
    "order": 5,
    "title": "tld-list.com",
    "favicon": "https://tld-list.com/favicon.ico",
    "folderId": "3d793461-609a-4372-8a57-634978f37f25",
    "createdAt": "2025-10-10T07:31:32.209Z"
  },
  {
    "id": "91beb38c-91d3-4794-80f6-947c5fb1d34d",
    "url": "https://account.squarespace.com/domains",
    "order": 1,
    "title": "Squarespace - domains",
    "favicon": "https://account.squarespace.com/favicon.ico",
    "folderId": "3d793461-609a-4372-8a57-634978f37f25",
    "createdAt": "2025-10-10T07:31:00.191Z"
  },
  {
    "id": "f5e93291-3ad9-4f1b-b466-37bec8d5da4a",
    "url": "https://www.hostinger.com/domain-name-search",
    "order": 0,
    "title": "Hostinger - Domain Name Search",
    "favicon": "https://www.hostinger.com/favicon.ico",
    "folderId": "3d793461-609a-4372-8a57-634978f37f25",
    "createdAt": "2025-10-10T07:29:32.266Z"
  },
  {
    "id": "a39f0a1d-ee28-4a11-bf48-ee5c5d3bd833",
    "url": "https://www.spaceship.com/",
    "order": 3,
    "title": "spaceship.com",
    "favicon": "https://www.spaceship.com/favicon.ico",
    "folderId": "3d793461-609a-4372-8a57-634978f37f25",
    "createdAt": "2025-10-10T07:27:49.329Z"
  },
  {
    "id": "61f6b3c1-b280-4d92-8749-266abb264628",
    "url": "https://creativemarket.com/",
    "order": 9,
    "title": "creativemarket.com",
    "favicon": "https://creativemarket.com/favicon.ico",
    "folderId": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "createdAt": "2025-10-09T20:30:12.014Z"
  },
  {
    "id": "39535d9a-c70d-406c-a4b2-6a1f801e4de8",
    "url": "https://www.youworkforthem.com/",
    "order": 8,
    "title": "youworkforthem.com",
    "favicon": "https://www.youworkforthem.com/favicon.ico",
    "folderId": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "createdAt": "2025-10-09T20:25:57.131Z"
  },
  {
    "id": "1b0b72dc-dc6a-4792-bb28-d36f26655981",
    "url": "https://logodiffusion.com/",
    "order": 8,
    "title": "Logo Diffusion",
    "favicon": "https://cdn.prod.website-files.com/67319ecc5a80fcb0f18f2e74/673dddcbc136fc622fbbb019_Group%2040393.png",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2025-10-09T19:53:29.634Z"
  },
  {
    "id": "88587bc1-8e23-460b-a42d-89ad2a5eceec",
    "url": "https://www.canva.com",
    "order": 7,
    "title": "canva.com",
    "favicon": "https://www.canva.com/favicon.ico",
    "folderId": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "createdAt": "2025-10-06T18:47:33.150Z"
  },
  {
    "id": "127e5634-d2cb-4fa9-819f-dfd3d1a8921d",
    "url": "https://www.canva.cn/",
    "order": 6,
    "title": "canva.cn",
    "favicon": "https://www.canva.cn/favicon.ico",
    "folderId": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "createdAt": "2025-10-06T18:47:03.546Z"
  },
  {
    "id": "2d7c39bf-93d4-406e-9724-7289cdf4d4f9",
    "url": "https://labelife.net/#/pm241",
    "order": 7,
    "title": "Labelife",
    "favicon": "https://labelife.net/favicon.ico",
    "folderId": "fd2d91df-eae8-4dfb-8a78-3e3f0f4b1e0d",
    "createdAt": "2025-10-02T17:34:11.460Z"
  },
  {
    "id": "aa163f75-cf06-4f00-bfaf-fc4058d1074b",
    "url": "https://music.youtube.com/",
    "order": 0,
    "title": "YouTube Music",
    "favicon": "https://music.youtube.com/favicon.ico",
    "folderId": null,
    "createdAt": "2025-10-02T15:46:25.670Z"
  },
  {
    "id": "3786ca91-d2d0-445b-a91d-2f747f6a35e4",
    "url": "https://www.roomgpt.io/",
    "order": 7,
    "title": "RoomGPT",
    "favicon": "https://www.roomgpt.io/favicon.ico",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2025-09-30T21:00:51.683Z"
  },
  {
    "id": "4ba05ada-22ba-4ac7-bcf1-9e3ad5b82941",
    "url": "https://labs.google/",
    "order": 5,
    "title": "Google Labs",
    "favicon": "https://labs.google/assets/icons/favicon-48x48.png",
    "folderId": "6c39923d-f15d-4b59-869e-6b195bccc347",
    "createdAt": "2025-09-30T05:12:51.050Z"
  },
  {
    "id": "f9c55e66-5d6e-48c1-a766-b186804f171d",
    "url": "https://labs.google.com/mixboard/welcome",
    "order": 8,
    "title": "Mix Board",
    "favicon": "https://labs.google.com/favicon.ico",
    "folderId": "6c39923d-f15d-4b59-869e-6b195bccc347",
    "createdAt": "2025-09-29T20:24:58.760Z"
  },
  {
    "id": "2435365e-8fcf-4de4-a8d5-b717a36a8de8",
    "url": "https://xyq.jianying.com/",
    "order": 4,
    "title": "小云雀网页版",
    "favicon": "https://sf16-web-tos-buz.capcutstatic.com/obj/capcut-web-buz-sg/cc4b_web/logo-white-64.ico",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2025-09-29T16:30:25.573Z"
  },
  {
    "id": "45096c6c-3aae-43d8-8fa7-e1f2f203f52f",
    "url": "https://www.doubao.com/chat/",
    "order": 6,
    "title": "豆包",
    "favicon": "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/logo-icon.png",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2025-09-25T22:23:35.594Z"
  },
  {
    "id": "4e30c6d4-9078-4e9f-aa45-14a2f32b7850",
    "url": "https://588ku.com/",
    "order": 5,
    "title": "千库网",
    "favicon": "https://js.588ku.com/comp/public/images/favicon.ico",
    "folderId": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "createdAt": "2025-09-25T18:24:42.535Z"
  },
  {
    "id": "3a8df4de-a8b2-43ad-a7b7-3948d233ae61",
    "url": "https://www.stan.store/",
    "order": 6,
    "title": "Stan - Your Creator Store",
    "favicon": "https://www.stan.store/favicon.ico",
    "folderId": "fd2d91df-eae8-4dfb-8a78-3e3f0f4b1e0d",
    "createdAt": "2025-09-24T22:49:21.649Z"
  },
  {
    "id": "0fc4093c-50ad-4830-9b05-516d58f29ac7",
    "url": "https://www.jotform.com/workspace/",
    "order": 5,
    "title": "Jotform",
    "favicon": "https://cdn.jotfor.ms/assets/img/favicons/favicon-2021-light.png",
    "folderId": "fd2d91df-eae8-4dfb-8a78-3e3f0f4b1e0d",
    "createdAt": "2025-09-23T19:26:43.678Z"
  },
  {
    "id": "93711fe9-b57a-48a9-8a24-9243c0a92d29",
    "url": "https://www.jotform.com/ai/wordpress-agent/",
    "order": 7,
    "title": "WordPress Agent: AI chatbot for WordPress websites",
    "favicon": "https://cdn.jotfor.ms/assets/img/favicons/favicon-2021-light.png",
    "folderId": "0846b3a1-3883-414b-a664-d1d562ee7874",
    "createdAt": "2025-09-23T19:25:23.442Z"
  },
  {
    "id": "8dcf9a2b-a8b1-48c1-aef2-47dd3679883a",
    "url": "https://www.comfy.org/",
    "order": 5,
    "title": "ComfyUI",
    "favicon": "https://framerusercontent.com/images/3cNQMWKzIhIrQ5KErBm7dSmbd2w.png",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2025-09-22T17:08:24.778Z"
  },
  {
    "id": "983deee6-d0c6-49c3-9ec8-b5ff77b2af4e",
    "url": "https://www.artstation.com/wlop",
    "order": 7,
    "title": "WLOP - artstation.com",
    "favicon": "https://www.artstation.com/favicon.ico",
    "folderId": "2c6afd26-b4ba-4361-b79b-33b1bb84fad5",
    "createdAt": "2025-09-17T18:11:57.606Z"
  },
  {
    "id": "a85ec50a-c1c8-46a0-b96f-bfded3e31df7",
    "url": "https://hostinger.titan.email/login/",
    "order": 2,
    "title": "Hostinger Mail",
    "favicon": "https://hostinger.titan.email/favicon.png",
    "folderId": "cce0ed2f-0a20-48d7-93e7-498d2ae45da7",
    "createdAt": "2025-09-12T17:46:26.675Z"
  },
  {
    "id": "acda2b0a-21f9-412f-9403-1e069417eba7",
    "url": "https://isigner.app/keys",
    "order": 12,
    "title": "iSigner",
    "favicon": "https://isigner.app/favicon.png",
    "folderId": "584d48fd-f97a-4b38-8c7c-3f450c161544",
    "createdAt": "2025-09-04T01:18:57.729Z"
  },
  {
    "id": "89620086-bc27-4726-91fa-8fe1b15edc53",
    "url": "https://wizardmore.com/patronus-guide/",
    "order": 10,
    "title": "Patronus Guide",
    "favicon": "http://wizardmore.com/favicon.ico",
    "folderId": "584d48fd-f97a-4b38-8c7c-3f450c161544",
    "createdAt": "2025-09-01T04:49:36.006Z"
  },
  {
    "id": "816f4de9-6a27-4355-83f8-9b37ebfb0c2e",
    "url": "https://wizardmore.com/patronus-x/",
    "order": 11,
    "title": "Extended Patronus Quiz",
    "favicon": "http://wizardmore.com/favicon.ico",
    "folderId": "584d48fd-f97a-4b38-8c7c-3f450c161544",
    "createdAt": "2025-09-01T04:48:35.319Z"
  },
  {
    "id": "0ee1f420-2739-49c8-a4c6-a01b0263c284",
    "url": "https://www.harrypotter.com/",
    "order": 9,
    "title": "Harry Potter",
    "favicon": "https://www.harrypotter.com/data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAABRUlEQVQYGQXBPU9TYRgA0PPeXlpKrcHWRKMJYXBwQGc3HHRy1Bh34+rizmKMcXJy4Rc4m8DWzaH6A+pXWCSpgRqkAkK5b+/jOckuSVjSMQHX0PDbaU7d+E6kEL0Q4mVsxVoIIcrohjAu5MtZfpzH+Um+kdfzz/w8v8lvc85HZ8uclKk8xY5lc1N/1V75Jay5r+uoUVAjOTNXWnDsyNA79zywq68IiwglppoeKvUtYQUNRdOB1y6aObWqre9Qyw9zU9SKHpqeadlw28SmA2uequxgrth3yQufLfrogwWsmurZ8skVfxS1Gu8d25Y1cKhyxyNMzBXJOa5KehoCLSPcQo0idLCq7boTNToSZkgoOMbIhm03dfDVHv4RUHKmZWiIgW/WfTHAPgIlzCzoyTbBXedIFEilSqKyh5W4YJQGxsF5Ummr/gOxJ4mfb9X2vwAAAABJRU5ErkJggg==",
    "folderId": "584d48fd-f97a-4b38-8c7c-3f450c161544",
    "createdAt": "2025-08-31T09:14:36.036Z"
  },
  {
    "id": "5dd809b1-623f-4580-b418-b1bd599aab6f",
    "url": "https://en-americas-support.nintendo.com/app/contact",
    "order": 8,
    "title": "Contact us | Nintendo Support",
    "favicon": "https://csassets.nintendo.com/image/upload/v1739900333/favicon-32x32.png",
    "folderId": "584d48fd-f97a-4b38-8c7c-3f450c161544",
    "createdAt": "2025-08-31T07:18:45.876Z"
  },
  {
    "id": "bab8c029-9db9-4d3a-9dc0-654775718d16",
    "url": "https://ec.nintendo.com/my/transactions/",
    "order": 7,
    "title": "Nintendo Account",
    "favicon": "https://ec.nintendo.com/favicon.ico?t=1678156809",
    "folderId": "584d48fd-f97a-4b38-8c7c-3f450c161544",
    "createdAt": "2025-08-31T07:13:42.222Z"
  },
  {
    "id": "b93f8f96-6ad5-4c76-85a1-3f7705d2dcd0",
    "url": "https://www.nintendo.com/us/",
    "order": 6,
    "title": "Nintendo",
    "favicon": "https://assets.nintendo.com/image/upload/ncom/icons/fav-icons/favicon-32x32.png",
    "folderId": "584d48fd-f97a-4b38-8c7c-3f450c161544",
    "createdAt": "2025-08-31T07:04:22.504Z"
  },
  {
    "id": "446c7a7c-a0e6-4b8b-910b-c3f00f0f8245",
    "url": "https://vectormagic.com/account",
    "order": 1,
    "title": "Vector Magic",
    "favicon": "https://d2f7anuvnar8n5.cloudfront.net/p/assets/m/favicons/vm/favicon-32_21bf2f694fb7af7af89910dba2f455a8.png",
    "folderId": "eab44842-3237-4906-998c-f22301555473",
    "createdAt": "2025-08-29T22:25:23.135Z"
  },
  {
    "id": "9f29bee2-d8cb-4b23-9bf7-a88beb10b2e4",
    "url": "https://vectormagic.com/",
    "order": 4,
    "title": "Vector Magic",
    "favicon": "https://d2f7anuvnar8n5.cloudfront.net/p/assets/m/favicons/vm/favicon-32_21bf2f694fb7af7af89910dba2f455a8.png",
    "folderId": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "createdAt": "2025-08-29T22:22:03.659Z"
  },
  {
    "id": "99110557-5605-443f-9af3-56e90d1f1fc2",
    "url": "https://lottiefiles.com/featured-free-animations",
    "order": 3,
    "title": "lottiefiles.com",
    "favicon": "https://lottiefiles.com/favicon.ico",
    "folderId": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "createdAt": "2025-08-29T22:09:29.923Z"
  },
  {
    "id": "273cd438-23b9-4a4a-90d0-5e2745eb2f48",
    "url": "https://leekduck.com/events/",
    "order": 5,
    "title": "Leek Duck - Pokémon GO News and Resources",
    "favicon": "https://leekduck.com/assets/img/favicon/favicon.ico",
    "folderId": "584d48fd-f97a-4b38-8c7c-3f450c161544",
    "createdAt": "2025-08-29T20:52:03.125Z"
  },
  {
    "id": "8bc45a97-078d-4f87-bfe6-dc6a578806d7",
    "url": "https://www.mediamister.com/free-youtube-video-downloader",
    "order": 2,
    "title": "Free YouTube Downloader",
    "favicon": "https://www.mediamister.com/images/favicon.png",
    "folderId": "fd2d91df-eae8-4dfb-8a78-3e3f0f4b1e0d",
    "createdAt": "2025-08-29T17:50:39.075Z"
  },
  {
    "id": "ad57a4f1-5c45-4427-b087-fa1d8a6f590e",
    "url": "https://www.mediamister.com/",
    "order": 3,
    "title": "Media Mister",
    "favicon": "https://www.mediamister.com/images/favicon.png",
    "folderId": "fd2d91df-eae8-4dfb-8a78-3e3f0f4b1e0d",
    "createdAt": "2025-08-29T17:49:18.966Z"
  },
  {
    "id": "2f8ee302-69ff-4882-8f31-b01b52cbb2d8",
    "url": "https://www.midjourney.com/",
    "order": 2,
    "title": "www.midjourney.com",
    "favicon": "https://www.midjourney.com/favicon.ico",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2025-08-28T19:36:56.629Z"
  },
  {
    "id": "950f9d18-c75c-42c4-9a35-918789c66ec1",
    "url": "https://hostinger.com/",
    "order": 1,
    "title": "Hostinger",
    "favicon": "https://hostinger.com/favicon.ico",
    "folderId": "240937cc-2e69-497f-9434-12008684e5a2",
    "createdAt": "2025-08-28T19:18:50.305Z"
  },
  {
    "id": "662a61b6-674c-4b1d-a4c7-b0e488b9494d",
    "url": "https://map.sinirio.studio/",
    "order": 5,
    "title": "map.sinirio.studio",
    "favicon": "https://map.sinirio.studio/favicon.ico",
    "folderId": "7a94f2bf-186c-490b-9c9b-d26b7d3e8929",
    "createdAt": "2025-08-27T21:55:18.371Z"
  },
  {
    "id": "be9448da-fdd2-43d0-a797-8c107d23380a",
    "url": "https://kaicaidesign.com/",
    "order": 3,
    "title": "K A I C A I",
    "favicon": "https://kaicaidesign.com/favicon.ico",
    "folderId": "27f81867-1bd2-4a19-a2da-1cc51a446344",
    "createdAt": "2025-08-27T21:54:23.534Z"
  },
  {
    "id": "d6b34b3a-ec02-4ff7-a59f-a1e8bfc08c88",
    "url": "https://gaoacademy.com/",
    "order": 20,
    "title": "Gao Academy",
    "favicon": "https://gaoacademy.com/wp-content/uploads/2022/03/cropped-Gao-icon-32x32.png",
    "folderId": "d2bc8744-ae18-4d94-9224-e9e120dbe922",
    "createdAt": "2025-08-27T21:53:51.386Z"
  },
  {
    "id": "f1cd0582-0bb9-44bf-aae8-dc05cd4f12a8",
    "url": "https://hopf0605.wixsite.com/poagny",
    "order": 19,
    "title": "poagny",
    "favicon": "https://www.wix.com/favicon.ico",
    "folderId": "d2bc8744-ae18-4d94-9224-e9e120dbe922",
    "createdAt": "2025-08-27T21:53:01.716Z"
  },
  {
    "id": "df8f8580-a804-4ab0-a313-fd765d029df8",
    "url": "https://farfallahu.wixsite.com/vixenartatl",
    "order": 18,
    "title": "Vixenartatl",
    "favicon": "https://www.wix.com/favicon.ico",
    "folderId": "d2bc8744-ae18-4d94-9224-e9e120dbe922",
    "createdAt": "2025-08-27T21:52:30.260Z"
  },
  {
    "id": "3b60a753-c19e-4ed7-b091-700f0fdd03d2",
    "url": "https://dimensionsauto.com/",
    "order": 17,
    "title": "Dimensions Auto",
    "favicon": "https://i0.wp.com/dimensionsauto.com/wp-content/uploads/2021/02/cropped-Dimensions_auto_logo_D_car_nooutline-mini.png?fit=32%2C32&#038;ssl=1",
    "folderId": "d2bc8744-ae18-4d94-9224-e9e120dbe922",
    "createdAt": "2025-08-27T21:51:41.707Z"
  },
  {
    "id": "33baaca3-d6f8-4566-a237-0df282bf34ce",
    "url": "https://autoartisanatl.com/",
    "order": 16,
    "title": "Auto Artisan",
    "favicon": "https://autoartisanatl.com/favicon.ico",
    "folderId": "d2bc8744-ae18-4d94-9224-e9e120dbe922",
    "createdAt": "2025-08-27T21:50:54.758Z"
  },
  {
    "id": "270d5c7a-0d3e-4d4f-8246-7afc081ac417",
    "url": "https://lizhou.pro/",
    "order": 2,
    "title": "Li Zhou",
    "favicon": "https://lizhou.pro/wp-content/uploads/2022/02/cropped-icon-32x32.png",
    "folderId": "27f81867-1bd2-4a19-a2da-1cc51a446344",
    "createdAt": "2025-08-27T21:50:32.879Z"
  },
  {
    "id": "53451c35-dea5-494e-9aa7-fc6f39018508",
    "url": "https://wasabi.sinirio.studio/",
    "order": 4,
    "title": "Wasabi",
    "favicon": "https://wasabi.sinirio.studio/wp-content/uploads/2023/02/cropped-icon-32x32.png",
    "folderId": "7a94f2bf-186c-490b-9c9b-d26b7d3e8929",
    "createdAt": "2025-08-27T21:44:53.182Z"
  },
  {
    "id": "9148a091-4d09-43a3-8988-0655b3e99882",
    "url": "https://www.alphalawus.com/",
    "order": 10,
    "title": "Alpha Law",
    "favicon": "https://static.parastorage.com/client/pfavico.ico",
    "folderId": "d2bc8744-ae18-4d94-9224-e9e120dbe922",
    "createdAt": "2025-08-27T21:44:07.834Z"
  },
  {
    "id": "4e7c9cdd-c9e2-4dc2-9eb7-d4a897cd6529",
    "url": "https://www.wemusicacademy.com/",
    "order": 1,
    "title": "W.E. Music Academy",
    "favicon": "https://static.wixstatic.com/media/53fff9_b3bd234fdf304923a6decadcca27df48%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/53fff9_b3bd234fdf304923a6decadcca27df48%7Emv2.png",
    "folderId": "d2bc8744-ae18-4d94-9224-e9e120dbe922",
    "createdAt": "2025-08-27T21:43:11.498Z"
  },
  {
    "id": "841f5580-a16c-4842-95b6-e00290ca7132",
    "url": "https://sinirio.studio/",
    "order": 1,
    "title": "sinirio.studio",
    "favicon": "https://sinirio.studio/wp-content/uploads/2024/03/cropped-s-icon-32x32.png",
    "folderId": "7a94f2bf-186c-490b-9c9b-d26b7d3e8929",
    "createdAt": "2025-08-27T21:41:40.067Z"
  },
  {
    "id": "34fdfb89-2ca9-4c9a-9954-dd8b1c8ffff7",
    "url": "https://farfallahu.wixsite.com/2019",
    "order": 7,
    "title": "Farfalla Hu - 2019",
    "favicon": "https://www.wix.com/favicon.ico",
    "folderId": "4e3309d3-7f88-4be9-961a-9e41422edf5d",
    "createdAt": "2025-08-27T21:41:13.758Z"
  },
  {
    "id": "631867d9-f08e-43eb-aedf-4820ae17ec0c",
    "url": "https://farfallahu.wixsite.com/2018",
    "order": 8,
    "title": "Farfalla Hu - 2018",
    "favicon": "https://www.wix.com/favicon.ico",
    "folderId": "4e3309d3-7f88-4be9-961a-9e41422edf5d",
    "createdAt": "2025-08-27T21:40:47.875Z"
  },
  {
    "id": "a067f736-a130-4cf7-9756-5d03c39bdd7f",
    "url": "https://www.suitebridal.com/",
    "order": 2,
    "title": "Suite Bridal",
    "favicon": "https://irp.cdn-website.com/2ba46d98/site_favicon_16_1751589148461.ico",
    "folderId": "d2bc8744-ae18-4d94-9224-e9e120dbe922",
    "createdAt": "2025-08-27T21:39:37.355Z"
  },
  {
    "id": "6dbcee98-af1e-43e2-8cb7-f9d138d827e0",
    "url": "https://www.nailstery.com/",
    "order": 7,
    "title": "Nailstery",
    "favicon": "https://static.parastorage.com/client/pfavico.ico",
    "folderId": "d2bc8744-ae18-4d94-9224-e9e120dbe922",
    "createdAt": "2025-08-27T21:38:25.061Z"
  },
  {
    "id": "8d5b34a6-d776-4699-9241-8b535197d838",
    "url": "https://suitebridal.sinirio.studio/",
    "order": 3,
    "title": "Suite Bridal",
    "favicon": "https://suitebridal.sinirio.studio/wp-content/uploads/2022/09/cropped-wedding-dress-32x32.png",
    "folderId": "7a94f2bf-186c-490b-9c9b-d26b7d3e8929",
    "createdAt": "2025-08-27T21:37:03.721Z"
  },
  {
    "id": "17abb1e1-b342-4562-9f0d-14d882331d83",
    "url": "https://raisingthevibe.org/",
    "order": 5,
    "title": "Raising The Vibe",
    "favicon": "https://raisingthevibe.org/wp-content/uploads/2020/03/cropped-Raising-the-Vibe-32x32.png",
    "folderId": "d2bc8744-ae18-4d94-9224-e9e120dbe922",
    "createdAt": "2025-08-27T21:35:57.430Z"
  },
  {
    "id": "1638ab1c-62f0-4e56-b65d-2458e11c123a",
    "url": "https://webflow.com/",
    "order": 0,
    "title": "Webflow",
    "favicon": "https://cdn.prod.website-files.com/64f794cdbc8227dafd183278/64f8a6d532452784f72a75d1_favicon.png",
    "folderId": "119e3089-4599-45a3-936b-9d30d39ff246",
    "createdAt": "2025-08-27T21:35:09.281Z"
  },
  {
    "id": "68b004a3-bb92-48a3-a71e-61381ada2116",
    "url": "https://sinirio.com/",
    "order": 0,
    "title": "sinirio.com",
    "favicon": "https://sinirio.com/wp-content/uploads/2024/03/cropped-s-icon-32x32.png",
    "folderId": "7a94f2bf-186c-490b-9c9b-d26b7d3e8929",
    "createdAt": "2025-08-27T21:32:53.577Z"
  },
  {
    "id": "357c8b44-58e2-43f7-8eb9-26609e30c050",
    "url": "https://noto.li/hg0ylD",
    "order": 6,
    "title": "Farfalla Hu - My Works",
    "favicon": "https://farfallahu.notion.site/image/https%3A%2F%2Ffarfallahu.notion.site%2F%F0%9F%92%BC?table=block&id=981285f1-d3c2-4b50-a198-fcf70402d6ef&spaceId=23fa9be5-ff0d-462a-9408-dc6f5b220ec6&width=2000&userId=&cache=v2",
    "folderId": "4e3309d3-7f88-4be9-961a-9e41422edf5d",
    "createdAt": "2025-08-27T21:31:47.005Z"
  },
  {
    "id": "79a69f9c-bf1b-48e6-a6bf-ae58d39f8eec",
    "url": "https://www.2awings.com/",
    "order": 15,
    "title": "2A Wings",
    "favicon": "https://static.parastorage.com/client/pfavico.ico",
    "folderId": "d2bc8744-ae18-4d94-9224-e9e120dbe922",
    "createdAt": "2025-08-27T21:30:09.470Z"
  },
  {
    "id": "2f692cb8-a5f0-4f6e-ac9a-3b18d91cccdd",
    "url": "https://www.haieat.com/",
    "order": 9,
    "title": "Hai Chinese Restaurant",
    "favicon": "https://static.parastorage.com/client/pfavico.ico",
    "folderId": "d2bc8744-ae18-4d94-9224-e9e120dbe922",
    "createdAt": "2025-08-27T21:29:35.847Z"
  },
  {
    "id": "ecca11f1-33aa-4876-b63a-6aecf9e677ab",
    "url": "https://www.quickbowlasiankitchen.com/",
    "order": 14,
    "title": "Quick Bowl",
    "favicon": "https://www.quickbowlasiankitchen.com/favicon.ico",
    "folderId": "d2bc8744-ae18-4d94-9224-e9e120dbe922",
    "createdAt": "2025-08-27T21:29:06.855Z"
  },
  {
    "id": "b79bb197-d4fb-409d-99a3-238227405148",
    "url": "https://www.inorified.com/",
    "order": 8,
    "title": "Nori Thai & Sushi",
    "favicon": "https://www.inorified.com/favicon.ico",
    "folderId": "d2bc8744-ae18-4d94-9224-e9e120dbe922",
    "createdAt": "2025-08-27T21:28:06.827Z"
  },
  {
    "id": "a85b12e7-710e-4448-90fe-5fa05b550209",
    "url": "https://www.ginkakujapanesebistro.com/",
    "order": 13,
    "title": "Ginkaku",
    "favicon": "https://static.parastorage.com/client/pfavico.ico",
    "folderId": "d2bc8744-ae18-4d94-9224-e9e120dbe922",
    "createdAt": "2025-08-27T21:26:56.294Z"
  },
  {
    "id": "5279da56-37d0-4ba2-85e9-2759cf8b2e23",
    "url": "https://www.mysushisakura.com/",
    "order": 6,
    "title": "Sushi Sakura",
    "favicon": "https://irp.cdn-website.com/78e7cda0/site_favicon_16_1738268652309.ico",
    "folderId": "d2bc8744-ae18-4d94-9224-e9e120dbe922",
    "createdAt": "2025-08-27T21:26:23.356Z"
  },
  {
    "id": "4ffd2f65-bfda-48bb-a5bb-09d73d021961",
    "url": "https://www.tokyosushiatl.com/",
    "order": 12,
    "title": "Tokyo Sushi & Steak House",
    "favicon": "https://static.parastorage.com/client/pfavico.ico",
    "folderId": "d2bc8744-ae18-4d94-9224-e9e120dbe922",
    "createdAt": "2025-08-27T21:25:44.926Z"
  },
  {
    "id": "87e5083c-b710-4cd3-9395-08eee823eb70",
    "url": "https://greywhalesushilincoln.com/",
    "order": 11,
    "title": "Grey Whale Sushi",
    "favicon": "https://static.spotapps.co/website_images/ab_websites/101382_website/favicons2/favicon-32x32.png",
    "folderId": "d2bc8744-ae18-4d94-9224-e9e120dbe922",
    "createdAt": "2025-08-27T21:24:52.276Z"
  },
  {
    "id": "c0f4a3cf-b9fe-4d92-8274-04aa09362ebb",
    "url": "https://maveloscat.com/",
    "order": 1,
    "title": "Mavelos Cat",
    "favicon": "https://maveloscat.com/wp-content/uploads/2021/06/cropped-Fav-32x32.png",
    "folderId": "27f81867-1bd2-4a19-a2da-1cc51a446344",
    "createdAt": "2025-08-27T21:22:16.497Z"
  },
  {
    "id": "18830601-d518-4af4-aef1-b99c44ab80f1",
    "url": "https://ozealtech.com/",
    "order": 4,
    "title": "Ozeal Tech",
    "favicon": "https://ozealtech.com/wp-content/uploads/2025/01/cropped-ozealtech-32x32.png",
    "folderId": "d2bc8744-ae18-4d94-9224-e9e120dbe922",
    "createdAt": "2025-08-27T21:21:32.834Z"
  },
  {
    "id": "afb5e8ff-1c2b-4483-a055-1cc61c4bbda5",
    "url": "https://link.farfallahu.com/",
    "order": 1,
    "title": "Farfalla Hu - Link",
    "favicon": "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop,f=png/YrDlg8bKZ2i5r5Eo/f-A0xwXbevqvfp0wNN.png",
    "folderId": "4e3309d3-7f88-4be9-961a-9e41422edf5d",
    "createdAt": "2025-08-27T21:20:36.030Z"
  },
  {
    "id": "11edc8d5-c5a8-4267-b777-c2c46046bb03",
    "url": "https://timer.farfallahu.com/",
    "order": 2,
    "title": "Farfalla Hu - Timer",
    "favicon": "https://timer.farfallahu.com/favicon.ico",
    "folderId": "4e3309d3-7f88-4be9-961a-9e41422edf5d",
    "createdAt": "2025-08-27T21:19:44.603Z"
  },
  {
    "id": "84721c96-8ced-4ddf-9a5d-5893e76b4ce2",
    "url": "https://www.inspiredbyemilylymanfoundation.org/",
    "order": 4,
    "title": "Emily",
    "favicon": "https://storage.googleapis.com/wzukusers/user-12958760/images/fav-553a73dfa71e7uNDkI0i/favicon.ico?v=fav-553a73dfa71e7uNDkI0i",
    "folderId": "27f81867-1bd2-4a19-a2da-1cc51a446344",
    "createdAt": "2025-08-27T20:57:45.338Z"
  },
  {
    "id": "3f241c6f-911c-4d76-93b0-383decf47f37",
    "url": "https://wordpress.org/plugins/",
    "order": 6,
    "title": "WordPress Plugins",
    "favicon": "https://s.w.org/favicon.ico?2",
    "folderId": "0846b3a1-3883-414b-a664-d1d562ee7874",
    "createdAt": "2025-08-27T18:37:26.547Z"
  },
  {
    "id": "7805496c-ec34-4a97-9d55-7412757c9b63",
    "url": "https://webflow.com/@farfallahu",
    "order": 5,
    "title": "Farfalla Hu - Webflow",
    "favicon": "https://d3e54v103j8qbb.cloudfront.net/static/favicon_default.b10796b955.png",
    "folderId": "4e3309d3-7f88-4be9-961a-9e41422edf5d",
    "createdAt": "2025-08-27T04:17:31.212Z"
  },
  {
    "id": "d5612afa-3bba-4891-9ee5-c6b4ba21089f",
    "url": "https://farfallahu.com/",
    "order": 0,
    "title": "Farfalla Hu - Home",
    "favicon": "https://farfallahu.com/wp-content/uploads/2019/12/cropped-F-32x32.png",
    "folderId": "4e3309d3-7f88-4be9-961a-9e41422edf5d",
    "createdAt": "2025-08-27T04:16:05.656Z"
  },
  {
    "id": "3659cb69-ba0a-47fb-b5d8-d2d1001f0ca4",
    "url": "https://www.flaticon.com/",
    "order": 2,
    "title": "Flaticom",
    "favicon": "https://www.flaticon.com/favicon.ico",
    "folderId": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "createdAt": "2025-08-27T04:11:16.094Z"
  },
  {
    "id": "12d3dc73-8aa8-43a4-92f4-bdca7e827409",
    "url": "https://www.figma.com/",
    "order": 1,
    "title": "Figma",
    "favicon": "https://static.figma.com/app/icon/1/favicon.ico",
    "folderId": "eab44842-3237-4906-998c-f22301555473",
    "createdAt": "2025-08-27T03:59:16.294Z"
  },
  {
    "id": "6f08cff0-2ff5-431e-b769-13781b7112e0",
    "url": "https://store.steampowered.com/",
    "order": 3,
    "title": "Steam",
    "favicon": "https://store.steampowered.com/favicon.ico",
    "folderId": "584d48fd-f97a-4b38-8c7c-3f450c161544",
    "createdAt": "2025-08-27T02:56:11.099Z"
  },
  {
    "id": "ba901388-4ab0-4082-aa2d-32643a897a38",
    "url": "https://www.nvidia.com/en-us/geforce-now/",
    "order": 1,
    "title": "GeForce NOW",
    "favicon": "https://www.nvidia.com/favicon.ico",
    "folderId": "584d48fd-f97a-4b38-8c7c-3f450c161544",
    "createdAt": "2025-08-27T02:55:41.134Z"
  },
  {
    "id": "c1d61c26-a2fe-48d2-9734-f718dd0d8b6c",
    "url": "https://pika.art/",
    "order": 3,
    "title": "Pika",
    "favicon": "https://pika.art/favicon.ico",
    "folderId": "35b6228b-20b5-4fe8-a74c-c4819ca1afb9",
    "createdAt": "2025-08-27T02:52:47.076Z"
  },
  {
    "id": "cd485787-80c9-4d07-9205-bbb97c8638af",
    "url": "https://nodejs.org/en/",
    "order": 3,
    "title": "Node.js — Run JavaScript Everywhere",
    "favicon": "https://nodejs.org/static/images/favicons/favicon.png",
    "folderId": "119e3089-4599-45a3-936b-9d30d39ff246",
    "createdAt": "2025-08-27T02:51:34.702Z"
  },
  {
    "id": "4c1e3d5c-b6df-4aa4-8e8e-584a007f2249",
    "url": "https://wlop.gumroad.com/",
    "order": 5,
    "title": "WLOP - Gumroad",
    "favicon": "https://public-files.gumroad.com/e5cxz3pyydxv11dnquvg3ss74ufs",
    "folderId": "2c6afd26-b4ba-4361-b79b-33b1bb84fad5",
    "createdAt": "2025-08-27T02:44:00.404Z"
  },
  {
    "id": "076937ac-60b9-41cb-bd35-52c23711f6d5",
    "url": "https://wlop.artstation.com/",
    "order": 3,
    "title": "WLOP - Artstation",
    "favicon": "https://wlop.artstation.com/favicon.ico",
    "folderId": "2c6afd26-b4ba-4361-b79b-33b1bb84fad5",
    "createdAt": "2025-08-27T02:43:01.081Z"
  },
  {
    "id": "6afbcb4a-d68c-431e-92db-408e419a58af",
    "url": "https://www.patreon.com/wlop",
    "order": 1,
    "title": "WLOP - Patreon",
    "favicon": "https://c5.patreon.com/external/favicon/rebrand/favicon-32.png?v=af5597c2ef",
    "folderId": "2c6afd26-b4ba-4361-b79b-33b1bb84fad5",
    "createdAt": "2025-08-27T02:40:13.824Z"
  },
  {
    "id": "2b605a5f-7f44-48ce-aa27-c1fec67b2aef",
    "url": "https://www.youtube.com/wlop",
    "order": 0,
    "title": "WLOP - YouTube",
    "favicon": "https://www.youtube.com/s/desktop/e5522eef/img/logos/favicon.ico",
    "folderId": "2c6afd26-b4ba-4361-b79b-33b1bb84fad5",
    "createdAt": "2025-08-27T02:39:09.986Z"
  },
  {
    "id": "032e3be9-c331-4e23-ad0b-84011da38b60",
    "url": "https://www.deviantart.com/wlop",
    "order": 2,
    "title": "WLOP - DeviantArt",
    "favicon": "https://st.deviantart.net/eclipse/icons/da_favicon_v2.ico",
    "folderId": "2c6afd26-b4ba-4361-b79b-33b1bb84fad5",
    "createdAt": "2025-08-27T02:38:27.424Z"
  },
  {
    "id": "df0b5f56-cc78-4c3c-8c7c-57a95a24c777",
    "url": "https://www.instagram.com/wlop/",
    "order": 4,
    "title": "WLOP - instagram",
    "favicon": "https://www.instagram.com/favicon.ico",
    "folderId": "2c6afd26-b4ba-4361-b79b-33b1bb84fad5",
    "createdAt": "2025-08-27T02:38:01.514Z"
  },
  {
    "id": "1a51e7d6-40aa-4510-8ee8-a71715f0b3af",
    "url": "https://wlop.huotan.net/",
    "order": 6,
    "title": "WLOP - huotan",
    "favicon": "https://cc.huotan.net/huotan/img/favicon.ico",
    "folderId": "2c6afd26-b4ba-4361-b79b-33b1bb84fad5",
    "createdAt": "2025-08-27T02:37:09.739Z"
  },
  {
    "id": "25e212ae-baa0-4c2c-b0b0-e5fe5c226710",
    "url": "https://mail.google.com/",
    "order": 0,
    "title": "Gmail",
    "favicon": "https://mail.google.com/favicon.ico",
    "folderId": "cce0ed2f-0a20-48d7-93e7-498d2ae45da7",
    "createdAt": "2025-08-26T22:52:08.333Z"
  },
  {
    "id": "c207ce1e-ffe1-4f9f-a9e4-f1e781b90e05",
    "url": "https://mail.notion.so/",
    "order": 1,
    "title": "Notion Mail",
    "favicon": "https://mail.notion.so/assets/favicon.ico",
    "folderId": "cce0ed2f-0a20-48d7-93e7-498d2ae45da7",
    "createdAt": "2025-08-26T22:51:42.821Z"
  },
  {
    "id": "c7d3cac7-a418-445a-b927-1b40eeeade58",
    "url": "https://titan.email/",
    "order": 3,
    "title": "Titan",
    "favicon": "https://i0.wp.com/titan.email/wp-content/uploads/2021/08/favicon.png?fit=32%2C32&#038;ssl=1",
    "folderId": "cce0ed2f-0a20-48d7-93e7-498d2ae45da7",
    "createdAt": "2025-08-26T22:50:28.470Z"
  },
  {
    "id": "74d8900d-ff72-471e-b43a-2257b4b414ee",
    "url": "https://keep.google.com/",
    "order": 0,
    "title": "Google Keep",
    "favicon": "https://keep.google.com/favicon.ico",
    "folderId": "6c39923d-f15d-4b59-869e-6b195bccc347",
    "createdAt": "2025-08-26T22:41:59.754Z"
  },
  {
    "id": "7559adfc-8be6-40e8-a19e-09accca049f5",
    "url": "https://cg.163.com/#/mobile",
    "order": 0,
    "title": "网易云游戏",
    "favicon": "https://cg.163.com/favicon.ico",
    "folderId": "584d48fd-f97a-4b38-8c7c-3f450c161544",
    "createdAt": "2025-08-26T22:37:07.275Z"
  },
  {
    "id": "9de0a306-e990-4b71-8e6a-af2094e412e0",
    "url": "https://github.com/",
    "order": 2,
    "title": "GitHub",
    "favicon": "https://github.githubassets.com/favicons/favicon",
    "folderId": "119e3089-4599-45a3-936b-9d30d39ff246",
    "createdAt": "2025-08-26T22:19:07.533Z"
  },
  {
    "id": "fa8ee880-a034-43fd-afe9-4bf37d3debea",
    "url": "https://supabase.com/",
    "order": 1,
    "title": "Supabase",
    "favicon": "https://supabase.com/favicon/favicon-16x16.png",
    "folderId": "119e3089-4599-45a3-936b-9d30d39ff246",
    "createdAt": "2025-08-26T22:18:19.561Z"
  },
  {
    "id": "073ae38f-658f-4e3f-bab2-499be24604f7",
    "url": "https://www.notion.com/",
    "order": 0,
    "title": "Notion",
    "favicon": "https://www.notion.com/front-static/favicon.ico",
    "folderId": "eab44842-3237-4906-998c-f22301555473",
    "createdAt": "2025-08-26T22:15:37.605Z"
  },
  {
    "id": "1a7b1877-8e4c-41a0-8d00-9f18553b2a18",
    "url": "https://www.behance.net/",
    "order": 0,
    "title": "Behance",
    "favicon": "https://a5.behance.net/a4ed801bf012b8101338db26f392dca2387e7713/img/site/favicon.png?cb=264615658",
    "folderId": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "createdAt": "2025-08-26T21:40:27.666Z"
  },
  {
    "id": "03b9456b-1d77-4e16-ac32-ca238f260f2e",
    "url": "https://dribbble.com/",
    "order": 1,
    "title": "Dribbble",
    "favicon": "https://cdn.dribbble.com/assets/favicon-452601365a822699d1d5db718ddf7499d036e8c2f7da69e85160a4d2f83534bd.ico",
    "folderId": "2ee43288-3acd-462b-9c46-f89694eb49d6",
    "createdAt": "2025-08-26T21:40:05.489Z"
  },
  {
    "id": "01c17612-ab82-45a7-bf05-ca10f9276870",
    "url": "https://hpanel.hostinger.com/",
    "title": "hpanel.hostinger.com",
    "favicon": "https://hpanel.hostinger.com/favicon.ico",
    "folderId": "240937cc-2e69-497f-9434-12008684e5a2",
    "createdAt": "2025-08-26T21:21:05.152Z"
  },
  {
    "id": "ab8b2403-c493-4791-85b8-12f1efcde864",
    "url": "https://www.brizy.io/",
    "order": 2,
    "title": "Brizy",
    "favicon": "https://cloud-1de12d.b-cdn.net/media/iW=32%26iH=any/3ab259a190fbf62c85a5b6e313c4d06b.png",
    "folderId": "f5c5acd8-c49f-4ed7-acfb-c2f4660a3136",
    "createdAt": "2025-08-26T21:19:16.113Z"
  },
  {
    "id": "d538103e-0581-48ae-9c01-460f1e0c8bd2",
    "url": "https://informwomen.org/",
    "order": 0,
    "title": "informwomen.org",
    "favicon": "https://informwomen.org/wp-content/uploads/2025/06/cropped-favicon-32x32.png",
    "folderId": "d2bc8744-ae18-4d94-9224-e9e120dbe922",
    "createdAt": "2025-08-26T20:59:59.619Z"
  },
  {
    "id": "4759916e-19fe-4ed6-88dc-2a6de0d318ad",
    "url": "https://fliphtml5.com/",
    "order": 4,
    "title": "FlipHTML5",
    "favicon": "https://fliphtml5.com/favicon.ico",
    "folderId": "fd2d91df-eae8-4dfb-8a78-3e3f0f4b1e0d",
    "createdAt": "2025-08-26T20:56:29.657Z"
  }
]

