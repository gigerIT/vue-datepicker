const localeObject = {
  name: 'cs',
  weekdays: 'Neděle_Pondělí_Úterý_Středa_Čtvrtek_Pátek_Sobota'.split(''),
  weekdaysShort: 'Ne_Po_Út_St_Čt_Pá_So'.split(''),
  weekdaysMin: 'Ne_Po_Út_St_Čt_Pá_So'.split(''),
  months: 'Leden_Únor_Březen_Duben_Květen_Červen_Červenec_Srpen_Září_Říjen_Listopad_Prosince'.split(''),
  monthsShort: 'Led_Úno_Bře_Dub_Kvě_Čer_Čvc_Srp_Zář_Říj_Lis_Pro'.split('_'),
  weekStart: 0,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY HH:mm',
    LLLL: 'dddd D. MMMM YYYY HH:mm',
  },
  ordinal: n => `${n}.`,
  buttonValidate: 'Ok',
  buttonCancel: 'Zrušit',
  rangeHeaderText: 'Od %d Do %d',
};

export default localeObject;
