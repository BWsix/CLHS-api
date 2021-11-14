# @CLHS-api/core

驅動 clhs-api 的核心套件，支援 typescript。

> 因為學校 api 有設定 cors，因此此套件無法於前端使用。

## 目錄

- [安裝](#installation)
- [範例](#example)
- [api](#api)
  - [取得新聞列表 - newsListQuery()](#api_newsListQuery)
  - [取得詳細新聞資料 - newsContentQuery()](#api_newsContentQuery)
  - [Constants](#api_constants)
- [typescript](#ts)

## 安裝 <a name="installation"></a>

npm:

```bash
npm install @clhs-api/core
```

yarn:

```bash
yarn add @clhs-api/core
```

## 範例 <a name="example"></a>

### 取得學校升學資訊專區的前 10 筆新聞

```ts
import { newsListQuery } from "@clhs-api/core";

newsListQuery({where: "升學資訊", itemsPerPage: 10}, (data, error) => {
  if (error) {
    console.error(error):
    return;
  }

  data.newsList.forEach(news => {
    console.log(news.title);
  });
});
```

<details><summary>with try-catch</summary>

```ts
try {
  const { newsList } = await newsListQuery({
    where: "升學資訊",
    itemsPerPage: 10,
  });

  newsList.forEach(news => {
    console.log(news.title);
  });
} catch (errorMessage) {
  console.error(errorMessage);
}
```

</details>

### 取得 id 為 28418 的新聞內容(html)

```ts
import { newsContentQuery } from "@clhs-api/core";

newsContentQuery("28418", (data, error) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(data.content);
});
```

<details><summary>with try-catch</summary>

```ts
try {
  const { content } = await newsContentQuery("28418");

  console.log(content);
} catch (errorMessage) {
  console.error(errorMessage);
}
```

</details>

## api <a name="api"></a>

### 取得新聞列表 <a name="api_newsListQuery"></a>

#### `newsListQuery([queryInput[, callback]])`

#### parameters

- queryInput: (optional) object

  |     key      | default value | value                                                                     |
  | :----------: | :-----------: | :------------------------------------------------------------------------ |
  |     attr     |  `undefined`  | 這應該算是應該是"分類"吧。所有選項請見 [Constants](#api_constants)的 ATTR |
  | itemsPerPage |     `20`      | 預設值(`20`)沿用學校的設定。可選擇大於 0 的整數                           |
  |   keyword    |     `""`      | 關鍵字搜尋                                                                |
  |   orderBy    |   `"DESC"`    | 排序順序。可選擇 `"DESC"`(新->舊) 或 `"ASC"`(舊->新)                      |
  |     page     |      `0`      | 頁面                                                                      |
  |     unit     |  `undefined`  | 這應該算是公告者。所有選項請見 [Constants](#api_constants)的 UNIT         |
  |   useCache   |    `false`    | 用意不明的欄位。可以填 `true` 或 `false`                                  |
  |    where     |   `"首頁"`    | 新聞來源。所有選項請見 [Constants](#api_constants)的 UID                  |

- callback: (optional) callback function

#### examples

with try-catch :

```ts
import { newsListQuery } from "@clhs-api/core";

const queryInput = {
  // options
};

try {
  const data = await newsListQuery(queryInput);
  // ...
} catch (errorMessage) {
  // ...
}
```

with callback function :

```ts
import { newsListQuery } from "@clhs-api/core";

const queryInput = {
  // options
};

newsListQuery(queryInput, (data, error) => {
  // ...
});
```

### 取得詳細新聞資料 <a name="api_newsContentQuery"></a>

#### `newsContentQuery(id[, callback])`

#### parameter

- id: string
- callback: (optional) callback function

#### examples

with try-catch :

```ts
import { newsContentQuery } from "@clhs-api/core";

try {
  const data = await newsContentQuery("28418");
  // ...
} catch (errorMessage) {
  // ...
}
```

with callback function :

```ts
import { newsContentQuery } from "@clhs-api/core";

newsContentQuery("28418", (data, error) => {
  // ...
});
```

### Constants <a name="api_constants"></a>

```ts
import { Options } from "@clhs-api/core";

// key為所有`attr`欄位的選項
Options.ATTR;
// key為所有`where`欄位的選項
Options.UID;
// key為所有`unit`欄位的選項
Options.UNIT;
```

<details><summary>Options.ATTR</summary>

```ts
Options.ATTR: {
全部: "",
公告: "attr_1",
通知: "attr_2",
最新消息: "attr_3",
緊急: "attr_4",
校內競賽: "attr_5",
校外競賽: "attr_6",
獎助學金: "attr_7",
榮譽榜: "attr_8",
"": "attr_9",
研習營隊: "attr_10",
衛生保健: "attr_11",
升學資訊: "attr_12",
法令公告: "attr_13",
},
```

</details>

<details><summary>Options.UID</summary>

```ts
  UID: {
    首頁: "WID_549_2_3e2e399a2649fb6ba9918090490f4741fd4453bf",
    升學資訊: "WID_549_2_13cfc702096566ef38571aebe89498c49f56f236",
    法令公告: "WID_549_2_09b16f4944d742185cf599bb45ca292da6547c9e",
    校內競賽: "WID_549_2_c0df1de1135dbf425a0f988515224a49c98ad257",
    校外競賽: "WID_549_2_5d8f79c34d01e52061f469da52357fe253c45db9",
    新生專區: "WID_284_2_74ade31d9f46e4440ca9b60301b5f651004cec49",
    衛生保健: "WID_549_2_5cd5617d2dd2bc130e7f76c333f2d442dffd0681",
    營隊研習: "WID_549_2_0470a8e2b5755791156cb8f5d9af5e1b81db7168",
    壢中新聞: "WID_549_29_6b87c0e5ed0f8ecb2694390de5e69cc1d48ef84",
  },
```

</details>
<details><summary>Options.UNIT</summary>

```ts
Options.UNIT: {
  設備組官網: "unit_27",
  資訊媒體組: "unit_29",
  活動組官網: "unit_31",
  主計室官網: "unit_32",
  教學組官網: "unit_33",
  註冊組官網: "unit_34",
  試務組官網: "unit_35",
  訓育組官網: "unit_38",
  文書組: "unit_41",
  出納組: "unit_42",
  庶務組官網: "unit_43",
  人事室官網: "unit_44",
  教務處官網: "unit_50",
  學務處官網: "unit_53",
  學務處官網_duplicated1: "unit_54",
  舊輔導室官網: "unit_55",
  學務處官網_duplicated2: "unit_56",
  特教組官網: "unit_57",
  衛生組官網: "unit_61",
  生輔組官網: "unit_62",
  秘書室官網: "unit_63",
  中壢中學校友會: "unit_64",
  學務處官網_duplicated3: "unit_65",
  學務處官網_duplicated4: "unit_66",
  學務處官網_duplicated5: "unit_67",
  學務處官網_duplicated6: "unit_68",
  總務處官網: "unit_69",
  總務處官網_duplicated_1: "unit_70",
  總務處官網_duplicated_2: "unit_71",
  健康中心官網: "unit_75",
  家長會官網: "unit_79",
  教師甄選: "unit_91",
  輔導室官網: "unit_104",
  "生輔組-防制學生藥物濫用": "unit_117",
  總務處官網_duplicated: "unit_137",
  十二年國教: "unit_140",
  翻轉與突破優質化計畫: "unit_153",
  校園食品安全專區: "unit_154",
  學習中心: "unit_155",
  新生專區: "unit_156",
  圖書館官網: "unit_399",
  壢崗文教基金會: "unit_403",
  "athletic meet": "unit_405",
  自主學習: "unit_409",
  "108選課輔導手冊": "unit_413",
  "108年專業群科評鑑": "unit_414",
  "110教師甄試網站": "unit_422",
  教師甄選成績查詢: "unit_423",
  "109選課輔導手冊": "unit_424",
  中大壢中新首頁: "unit_425",
  數理資優班: "unit_430",
},
```

</details>

### typescript <a name="ts"></a>

```ts
import type { News, NewsContent } from "@clhs-api/core";
```
