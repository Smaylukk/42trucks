import { GoogleSpreadsheet } from "google-spreadsheet";
import { CarStatus, configApp, ICar } from "../../utils/utils";
import { NextApiRequest, NextApiResponse } from "next";

const doc = new GoogleSpreadsheet(configApp.googleSheetId);
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // await doc.useServiceAccountAuth({
    //   client_email: configApp.googleServiceAccount,
    //   private_key: configApp.googlePrivateKey.replace(/\\n/gm, "\n"),
    // });
    doc.useApiKey(configApp.googleApiKey);

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    const headers = sheet.headerValues;
    const result: Array<Record<string, string>> = [];
    for (let row of rows) {
      // рядок з цифрами
      if (row["_rowNumber"] === 2) {
        continue;
      }
      // не дані про машину
      if (!row["_rawData"].length) {
        break;
      }
      const el: Record<string, string> = {};
      for (let header of headers) {
        el[header] = row[header];
      }
      result.push(el);
    }

    res.status(200).json(convertResult(result));
  } catch (error) {
    res.status(500).json(error);
  }
}

const convertResult = (data: Array<Record<string, string>>) => {
  const result: ICar[] = [];
  for (let dataElement of data) {
    const newElement: ICar = {
      addEquip: null,
      amountDyeing: null,
      amountRepair: null,
      amountTires: null,
      carName: null,
      militaryBase: null,
      name: null,
      number: null,
      picture: null,
      status: null,
    };
    newElement.number = dataElement["Номер"] ?? null;
    newElement.militaryBase = dataElement["Військова частина"] ?? null;
    newElement.name = dataElement["Марка авто"] ?? null;
    newElement.carName = dataElement["Ім'я машини"] ?? null;
    newElement.amountTires = parseInt(dataElement["Шини"], 10) || 0;
    newElement.amountDyeing = parseInt(dataElement["Фарбування"], 10) || 0;
    newElement.amountRepair =
      parseInt(dataElement["Вартість ремонту\nта докомплектування"], 10) || 0;
    newElement.addEquip = dataElement["Додаткове\n обладнання"] ?? null;
    newElement.picture = dataElement["Адреса світлини"] ?? null;

    newElement.status = dataElement["Статус авто"] as CarStatus;

    result.push(newElement);
  }

  return result;
};
