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
    if (dataElement.hasOwnProperty("Номер")) {
      newElement.number = dataElement["Номер"];
    }
    if (dataElement.hasOwnProperty("Військова частина")) {
      newElement.militaryBase = dataElement["Військова частина"];
    }
    if (dataElement.hasOwnProperty("Авто")) {
      newElement.name = dataElement["Авто"];
    }
    if (dataElement.hasOwnProperty("Ім'я машини")) {
      newElement.carName = dataElement["Ім'я машини"];
    }
    if (dataElement.hasOwnProperty("Вартість ремонту")) {
      newElement.amountRepair =
        parseInt(dataElement["Вартість ремонту"], 10) || 0;
    }
    if (dataElement.hasOwnProperty("Шини")) {
      newElement.amountTires = parseInt(dataElement["Шини"], 10) || 0;
    }
    if (dataElement.hasOwnProperty("Фарбування")) {
      newElement.amountDyeing = parseInt(dataElement["Фарбування"], 10) || 0;
    }
    if (dataElement.hasOwnProperty("Додаткове обладання")) {
      newElement.addEquip = dataElement["Додаткове обладання"];
    }
    if (dataElement.hasOwnProperty("Адреса малюнку")) {
      newElement.picture = dataElement["Адреса малюнку"];
    }

    if (
      dataElement.hasOwnProperty("Статус авто1") &&
      dataElement["Статус авто1"]
    ) {
      newElement.status = CarStatus.find;
    } else if (
      dataElement.hasOwnProperty("Статус авто2") &&
      dataElement["Статус авто2"]
    ) {
      newElement.status = CarStatus.buy;
    } else if (
      dataElement.hasOwnProperty("Статус авто3") &&
      dataElement["Статус авто3"]
    ) {
      newElement.status = CarStatus.transport;
    } else if (
      dataElement.hasOwnProperty("Статус авто4") &&
      dataElement["Статус авто4"]
    ) {
      newElement.status = CarStatus.repair;
    } else if (
      dataElement.hasOwnProperty("Статус авто5") &&
      dataElement["Статус авто5"]
    ) {
      newElement.status = CarStatus.done;
    }

    result.push(newElement);
  }

  return result;
};
