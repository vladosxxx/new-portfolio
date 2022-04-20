export default function contantLang(lang, data) {
  let langData = {};
  for (let item in data) {
    langData = { ...langData, [item]: data[item] };
    if (typeof data[item] === "object") {
      for (let i in data[item]) {
        if (typeof data[item][i] === "object") {
          for (let a in data[item][i]) {
            if (a === lang) {
              langData = {
                ...langData,
                [item]: { ...langData[item], [i]: data[item][i][a] },
              };
            }
            for (let l in data[item][i][a]) {
              if (l === lang) {
                langData = {
                  ...langData,
                  [item]: {
                    ...langData[item],
                    [i]: { ...langData[item][i], [a]: data[item][i][a][l] },
                  },
                };
              }
            }
          }
        }
      }
    }
  }
  console.log(langData);
  return langData;
}
