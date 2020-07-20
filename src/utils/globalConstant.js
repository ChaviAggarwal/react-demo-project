
const volumeConstants =
{
    unitsOfMeasurement: [
        { name: 'US Gallon', value: 'USG', displayvalue: 'USG', conversion: 1, text: 'USG', key: 'USG' },
        { name: 'Litres', value: 'LT', displayvalue: 'LT', conversion: 3.78541, text: 'LT', key: 'LT' },
        { name: 'Cubic Metres', value: 'CM', displayvalue: 'CM', conversion: 0.00378541, text: 'CM', key: 'CM' },
        { name: 'Metric Tonnes', value: 'MT', displayvalue: 'MT', conversion: 0.003028, text: 'MT', key: 'MT' },
        { name: 'Kilogram', value: 'KG', displayvalue: 'KG', conversion: 3.78541, text: 'KG', key: 'KG' }
    ],


    defaultMeasure: 'US Gallon',
    defaultMaxValue: '99,999 USG',
    maxLtrAllowed: '378,537 LTR',
    maxCbmAllowed: '378.54 CBM',
    maxMtAllowed: '302.83 MT',
    maxKgAllowed: '378,537 KG',
    maxLtrLimit: 378537,
    maxCbmLimit: 378.54,
    maxMtLimit: 302.83,
    maxKgLimit: 378537,
    defaultMaxLimit: 99999,
    ltrParseMeasure: '113562',
    cbParseMeasure: '113.58',
    mtParseMeasure: '90.84',
    kgParseMeasure: '113562',
    defaultParseMeasure: '30000'

}

const locationConstants = {

    pmsApiErrorMessage: ['No records found', 'No records found.', 'No GRN found', 'No GRN found.', 'Missing required parameters', 'Missing required parameters.', 'Location does not exist', 'Location does not exist.', 'GRN must have at least 5 digits and maximum 7 digits', 'GRN must have at least 5 digits and maximum 7 digits.'],
    productCode: ['TS-1-IA', 'RT-IA', 'RT+FSII-IA', 'JETAL48-IA', 'JETFSII-IA', 'JETS', 'JP8', 'TS-1+FSII', 'JETA1-IA', 'JP8-IA', 'JA200', 'JA210', 'JF200', 'JP5', 'JETS2', 'JP82', 'JP82-IA', 'RT2-IA', 'TS2-1-IA', 'F34', 'F342', 'F75', 'F752', 'JET A'],
    adhocHighGrn: ['0010005', '0010009'],
    adhocLowGrn: ['0010004', '0010008'],
    adhocHighCustomer: ['ADHOC HIGH - USC/USG', 'ADHOC HIGH EUR/CM'],
    adhocLowCustomer: ['ADHOC LOW USC/USG', 'ADHOC LOW EUR/CM']

}

const feedbackConstants = {
    reasons : [
        {name: 'This was a speculative request', value: 'This was a speculative request' , text: 'This was a speculative request' },
        {name: 'Differential too high', value: 'Differential too high',  text: 'Differential too high'},
        {name: 'Prefer other supplier', value: 'Prefer other supplier' , text: 'Prefer other supplier'},
        {name: 'Taxes, Fees & Charges unclear', value: 'Taxes, Fees & Charges unclear', text: 'Taxes, Fees & Charges unclear'},
        {name: 'Problem with the tool', value: 'Problem with the tool', text: 'Problem with the tool'},
        {name: 'Other reason', value: 'Other reason', text: 'Other reason'}
      ]
    }

export { volumeConstants, locationConstants, feedbackConstants };
