export interface ICar {
  number: string;
  militaryBase: string;
  picture: string;
  name: string;
  amountRepair: number;
  amountTires: number;
  amountDyeing: number;
  addEquip: string;
  status: CarStatus;
  carName: string;
}

export const enum CarStatus {
  find = "Пошук",
  buy = "Купівля",
  transport = "Перегон",
  repair = "Ремонт",
  done = "У військах",
}
export const carList: ICar[] = [
  {
    number: "1/42",
    militaryBase: "243 бТрО",
    picture:
      "https://lh3.googleusercontent.com/u/0/docs/ADP-6oFvD81Cim-UVAzx-tKDarr5Bya_XGckJ3nht6QoW809UIAf1HjTWlMfAh553XtBv05g6FmN8DJER0fU-dsdaLlCJVNUGGc6_bEJouokXd6CdKW--fdiJT4UQdvQ1bUzVcnmvndjmJaVpMgJM6P68ANrB1AYGsu73YnbfdcpiZVCglxoQuPuVu9sD0ic4Nu1QPtw3YlgHCKU35LjPuEqbpEO6buD95uGIN_WgYmjZPqXvHNbinyMyfslILRfsFE3WTld2r-RWQqCtObCATCx3tIg-xqOCqiRpMJWU5wYQsM5iqqWtWO-3dvt3XoTtpywLmF3VJ8JwHlS-17wYQcyVNrpn9viPq3f7adnvSNdwGW46fIw5Y8JSuKxr2ALZDUzYvqCrO8DQRiS6fszsZRrPPjkouH5XQ-jY9-G_rjFUfqUtcP8lqHtJUrenK1koWY5o_EvsBVDmHuOSF3Hm0fWL-16g7VcAfbYtbZdRWlHSbtLtaoKpTd6bix7QfJGE6OsVZFZv_QNI8S_Lmd17hxHEpIq-rUvCQbZixrL1JrkbLA0z9ctD7AguJ9Y2vAr4pzDU5MiEA4rgUPtRZdBjjnBB-t_VXGLMaAAz7nHrdb3CjXWzGzqQTXlSgVvdpi3J7sI4x9_r0plwyt689aLBDnM1lon-bHkeU_Vae0FZ2IEEvxPKRfS8Q7xK_e-isjNcfmT71BQQ1IZqe2pZmxOmF1nyk5DYuIyNxQ0U8htuL_Ti0mxNgXyOAVMPUW2QiVJ2CqZyyypUgk4CPVqumzvRzSBLIhMxk8SCXVbf0S7D-NaS2sYRj-6NA635qXNulPpRc-f5XFi6ruU47WVgesXpTkpRDIgGlheNYBxIp67-z5XgXflR2nQRhIcXx5cIEuIQqVp7kzN7qsqNRoAbDh--8_TKRF1ScSyJbhe3yiVekHHo9gtmgEB0l5YeOGdA79Fu9ecuPVGjR8nmWzA?alr=yes",
    name: "Nissan Patrol",
    amountRepair: 1500,
    amountTires: 500,
    amountDyeing: 2000,
    addEquip: "",
    status: CarStatus.repair,
    carName: "",
  },
  {
    number: "2/42",
    militaryBase: "243 бТрО",
    picture:
      "https://lh3.googleusercontent.com/u/0/docs/ADP-6oGEOpCggu3Kw2gpuXIZmew17fNGcu2S7-ul6RKbOS5Ge-XJYepy1WSS5yFSJRxmg7tVV7yAIcck2ndE3rDbuYzJ0jjeTSnPn6lrmyCn6VPDxk7iGlvoHqDR__nyL5c-Lo4vNxxkdhB1a4N2ZiQRShtccoOMRNZDmTBTh99O6DVADN268FcYocBusUstcDGdkIyjcgMbELsFKfdnkJ_uOloSq9QjjUc3_usY3-Yu6Hud4-2thOy97lhURJ7Q-PRa5113YSmHsJXy2OncP0Elr0mn-duM5zNK92W2R6LnH17sQB2Fdac_zWkeK-8oJh7NWC6wDLJKt_X5UDHSKYcSRBT4N_WfL_zTdfoX07qslNj4gWdtKvvPuKsQParAzBSkRhn1uUCu3yhOCYK-eba3Wdz2UL17bOK8aGKnQ0ZKjqab8vnKEZi4-TJ4-vbgNtIAgsXjs0SupygpRTK-D56RUU78kjaORispL5ILaf8HSbsrJUfxMDsAjdxN5lkDu1IrfomT6nSEOsfmkIek3Nafdxe7-NCM4Qvtk1Tz4i0Hma_CBkiwaZh1bOa4T40_4eGMoXmfnbM6vyO2HT7cAbQCOHcHB5hm--kcldmSdX9j9PrbZDBM2kzFMtSBwqbzDseWGT9K21TXMxpehuzxvL4Pc_KnCrO4Jw4kYIM-FWa7Peb1DgX0aEDLbEW9toSEwwMLeq_ohATAu-_8sum9fpBJV3AMEeDtWUpbCq6L4gGlfxvRWxiXtywyJ5pWhSXOXWO-I8BENGFbvOieTPuJX63GpDhC8MW6Hn3y1rm6PAerfEyLWp_xAACwJ3LTDb3wh4CoiJ79eRJ0Rb_pBn6dnnxcA-jIR87RZ28oItx_YWHKpXHad2mu_h36QqvahIymuZ5nWzEF-_9R4Tik30GEcRDljyAMvS0RMe8VwYo6Z5SOGRBv94ZAPPp7BSt1-h3o3gMVa4JqnkY9De-Y?alr=yes",
    name: "Nissan Patrol",
    amountRepair: 2500,
    amountTires: 600,
    amountDyeing: 750,
    addEquip: "Фара заднього ходу",
    status: CarStatus.done,
    carName: "Ніндзя",
  },
  {
    number: "6/42",
    militaryBase: "243 бТрО",
    picture:
      "https://lh3.googleusercontent.com/u/0/docs/ADP-6oFvD81Cim-UVAzx-tKDarr5Bya_XGckJ3nht6QoW809UIAf1HjTWlMfAh553XtBv05g6FmN8DJER0fU-dsdaLlCJVNUGGc6_bEJouokXd6CdKW--fdiJT4UQdvQ1bUzVcnmvndjmJaVpMgJM6P68ANrB1AYGsu73YnbfdcpiZVCglxoQuPuVu9sD0ic4Nu1QPtw3YlgHCKU35LjPuEqbpEO6buD95uGIN_WgYmjZPqXvHNbinyMyfslILRfsFE3WTld2r-RWQqCtObCATCx3tIg-xqOCqiRpMJWU5wYQsM5iqqWtWO-3dvt3XoTtpywLmF3VJ8JwHlS-17wYQcyVNrpn9viPq3f7adnvSNdwGW46fIw5Y8JSuKxr2ALZDUzYvqCrO8DQRiS6fszsZRrPPjkouH5XQ-jY9-G_rjFUfqUtcP8lqHtJUrenK1koWY5o_EvsBVDmHuOSF3Hm0fWL-16g7VcAfbYtbZdRWlHSbtLtaoKpTd6bix7QfJGE6OsVZFZv_QNI8S_Lmd17hxHEpIq-rUvCQbZixrL1JrkbLA0z9ctD7AguJ9Y2vAr4pzDU5MiEA4rgUPtRZdBjjnBB-t_VXGLMaAAz7nHrdb3CjXWzGzqQTXlSgVvdpi3J7sI4x9_r0plwyt689aLBDnM1lon-bHkeU_Vae0FZ2IEEvxPKRfS8Q7xK_e-isjNcfmT71BQQ1IZqe2pZmxOmF1nyk5DYuIyNxQ0U8htuL_Ti0mxNgXyOAVMPUW2QiVJ2CqZyyypUgk4CPVqumzvRzSBLIhMxk8SCXVbf0S7D-NaS2sYRj-6NA635qXNulPpRc-f5XFi6ruU47WVgesXpTkpRDIgGlheNYBxIp67-z5XgXflR2nQRhIcXx5cIEuIQqVp7kzN7qsqNRoAbDh--8_TKRF1ScSyJbhe3yiVekHHo9gtmgEB0l5YeOGdA79Fu9ecuPVGjR8nmWzA?alr=yes",
    name: "Nissan Patrol",
    amountRepair: 1500,
    amountTires: 500,
    amountDyeing: 2000,
    addEquip: "",
    status: CarStatus.buy,
    carName: "",
  },
  {
    number: "3/42",
    militaryBase: "243 бТрО",
    picture:
      "https://lh3.googleusercontent.com/u/0/docs/ADP-6oGEOpCggu3Kw2gpuXIZmew17fNGcu2S7-ul6RKbOS5Ge-XJYepy1WSS5yFSJRxmg7tVV7yAIcck2ndE3rDbuYzJ0jjeTSnPn6lrmyCn6VPDxk7iGlvoHqDR__nyL5c-Lo4vNxxkdhB1a4N2ZiQRShtccoOMRNZDmTBTh99O6DVADN268FcYocBusUstcDGdkIyjcgMbELsFKfdnkJ_uOloSq9QjjUc3_usY3-Yu6Hud4-2thOy97lhURJ7Q-PRa5113YSmHsJXy2OncP0Elr0mn-duM5zNK92W2R6LnH17sQB2Fdac_zWkeK-8oJh7NWC6wDLJKt_X5UDHSKYcSRBT4N_WfL_zTdfoX07qslNj4gWdtKvvPuKsQParAzBSkRhn1uUCu3yhOCYK-eba3Wdz2UL17bOK8aGKnQ0ZKjqab8vnKEZi4-TJ4-vbgNtIAgsXjs0SupygpRTK-D56RUU78kjaORispL5ILaf8HSbsrJUfxMDsAjdxN5lkDu1IrfomT6nSEOsfmkIek3Nafdxe7-NCM4Qvtk1Tz4i0Hma_CBkiwaZh1bOa4T40_4eGMoXmfnbM6vyO2HT7cAbQCOHcHB5hm--kcldmSdX9j9PrbZDBM2kzFMtSBwqbzDseWGT9K21TXMxpehuzxvL4Pc_KnCrO4Jw4kYIM-FWa7Peb1DgX0aEDLbEW9toSEwwMLeq_ohATAu-_8sum9fpBJV3AMEeDtWUpbCq6L4gGlfxvRWxiXtywyJ5pWhSXOXWO-I8BENGFbvOieTPuJX63GpDhC8MW6Hn3y1rm6PAerfEyLWp_xAACwJ3LTDb3wh4CoiJ79eRJ0Rb_pBn6dnnxcA-jIR87RZ28oItx_YWHKpXHad2mu_h36QqvahIymuZ5nWzEF-_9R4Tik30GEcRDljyAMvS0RMe8VwYo6Z5SOGRBv94ZAPPp7BSt1-h3o3gMVa4JqnkY9De-Y?alr=yes",
    name: "Nissan Patrol",
    amountRepair: 2500,
    amountTires: 600,
    amountDyeing: 750,
    addEquip: "Фаркоп",
    status: CarStatus.transport,
    carName: "Ніндзя",
  },
  {
    number: "4/42",
    militaryBase: "243 бТрО",
    picture:
      "https://lh3.googleusercontent.com/u/0/docs/ADP-6oFvD81Cim-UVAzx-tKDarr5Bya_XGckJ3nht6QoW809UIAf1HjTWlMfAh553XtBv05g6FmN8DJER0fU-dsdaLlCJVNUGGc6_bEJouokXd6CdKW--fdiJT4UQdvQ1bUzVcnmvndjmJaVpMgJM6P68ANrB1AYGsu73YnbfdcpiZVCglxoQuPuVu9sD0ic4Nu1QPtw3YlgHCKU35LjPuEqbpEO6buD95uGIN_WgYmjZPqXvHNbinyMyfslILRfsFE3WTld2r-RWQqCtObCATCx3tIg-xqOCqiRpMJWU5wYQsM5iqqWtWO-3dvt3XoTtpywLmF3VJ8JwHlS-17wYQcyVNrpn9viPq3f7adnvSNdwGW46fIw5Y8JSuKxr2ALZDUzYvqCrO8DQRiS6fszsZRrPPjkouH5XQ-jY9-G_rjFUfqUtcP8lqHtJUrenK1koWY5o_EvsBVDmHuOSF3Hm0fWL-16g7VcAfbYtbZdRWlHSbtLtaoKpTd6bix7QfJGE6OsVZFZv_QNI8S_Lmd17hxHEpIq-rUvCQbZixrL1JrkbLA0z9ctD7AguJ9Y2vAr4pzDU5MiEA4rgUPtRZdBjjnBB-t_VXGLMaAAz7nHrdb3CjXWzGzqQTXlSgVvdpi3J7sI4x9_r0plwyt689aLBDnM1lon-bHkeU_Vae0FZ2IEEvxPKRfS8Q7xK_e-isjNcfmT71BQQ1IZqe2pZmxOmF1nyk5DYuIyNxQ0U8htuL_Ti0mxNgXyOAVMPUW2QiVJ2CqZyyypUgk4CPVqumzvRzSBLIhMxk8SCXVbf0S7D-NaS2sYRj-6NA635qXNulPpRc-f5XFi6ruU47WVgesXpTkpRDIgGlheNYBxIp67-z5XgXflR2nQRhIcXx5cIEuIQqVp7kzN7qsqNRoAbDh--8_TKRF1ScSyJbhe3yiVekHHo9gtmgEB0l5YeOGdA79Fu9ecuPVGjR8nmWzA?alr=yes",
    name: "Nissan Patrol",
    amountRepair: 1500,
    amountTires: 500,
    amountDyeing: 2000,
    addEquip: "Лебідка",
    status: CarStatus.repair,
    carName: "",
  },
  {
    number: "5/42",
    militaryBase: "243 бТрО",
    picture:
      "https://lh3.googleusercontent.com/u/0/docs/ADP-6oGEOpCggu3Kw2gpuXIZmew17fNGcu2S7-ul6RKbOS5Ge-XJYepy1WSS5yFSJRxmg7tVV7yAIcck2ndE3rDbuYzJ0jjeTSnPn6lrmyCn6VPDxk7iGlvoHqDR__nyL5c-Lo4vNxxkdhB1a4N2ZiQRShtccoOMRNZDmTBTh99O6DVADN268FcYocBusUstcDGdkIyjcgMbELsFKfdnkJ_uOloSq9QjjUc3_usY3-Yu6Hud4-2thOy97lhURJ7Q-PRa5113YSmHsJXy2OncP0Elr0mn-duM5zNK92W2R6LnH17sQB2Fdac_zWkeK-8oJh7NWC6wDLJKt_X5UDHSKYcSRBT4N_WfL_zTdfoX07qslNj4gWdtKvvPuKsQParAzBSkRhn1uUCu3yhOCYK-eba3Wdz2UL17bOK8aGKnQ0ZKjqab8vnKEZi4-TJ4-vbgNtIAgsXjs0SupygpRTK-D56RUU78kjaORispL5ILaf8HSbsrJUfxMDsAjdxN5lkDu1IrfomT6nSEOsfmkIek3Nafdxe7-NCM4Qvtk1Tz4i0Hma_CBkiwaZh1bOa4T40_4eGMoXmfnbM6vyO2HT7cAbQCOHcHB5hm--kcldmSdX9j9PrbZDBM2kzFMtSBwqbzDseWGT9K21TXMxpehuzxvL4Pc_KnCrO4Jw4kYIM-FWa7Peb1DgX0aEDLbEW9toSEwwMLeq_ohATAu-_8sum9fpBJV3AMEeDtWUpbCq6L4gGlfxvRWxiXtywyJ5pWhSXOXWO-I8BENGFbvOieTPuJX63GpDhC8MW6Hn3y1rm6PAerfEyLWp_xAACwJ3LTDb3wh4CoiJ79eRJ0Rb_pBn6dnnxcA-jIR87RZ28oItx_YWHKpXHad2mu_h36QqvahIymuZ5nWzEF-_9R4Tik30GEcRDljyAMvS0RMe8VwYo6Z5SOGRBv94ZAPPp7BSt1-h3o3gMVa4JqnkY9De-Y?alr=yes",
    name: "Nissan Patrol",
    amountRepair: 2500,
    amountTires: 600,
    amountDyeing: 750,
    addEquip: "Прожектор",
    status: CarStatus.find,
    carName: "Ніндзя",
  },
];

export const StatusColor = new Map<CarStatus, string>([
  [CarStatus.find, "gray"],
  [CarStatus.buy, "red"],
  [CarStatus.transport, "#39b5dd"],
  [CarStatus.repair, "orange"],
  [CarStatus.done, "green"],
]);

export const configApp = {
  googleServiceAccount:
    process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL || "",
  googleSheetId: process.env.REACT_APP_GOOGLE_SHEET_ID || "",
  googlePrivateKey: process.env.REACT_APP_GOOGLE_PRIVATE_KEY || "",
  googleApiKey: process.env.REACT_APP_GOOGLE_API_KEY || "",
};
