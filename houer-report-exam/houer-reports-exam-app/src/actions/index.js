
const employyes = [
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'april'},
    {userName:'jane@gmail.com', avgPerDay: '9', sum:'150', sumExtraHouers: '20', month:'april'},
    {userName:'john@gmail.com', avgPerDay: '8', sum:'170', sumExtraHouers: '10', month:'april'},
    {userName:'dana@gmail.com', avgPerDay: '9', sum:'160', sumExtraHouers: '10', month:'march'},
    {userName:'dan@gmail.com', avgPerDay: '9', sum:'150', sumExtraHouers: '11', month:'march'},
    {userName:'daniel@gmail.com', avgPerDay: '8.5', sum:'160', sumExtraHouers: '8', month:'march'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'july'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'july'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'july'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'may'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'may'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'may'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'august'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'august'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'august'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'august'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'september'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'september'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'september'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'october'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'october'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'october'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'november'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'november'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'november'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'december'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'december'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'december'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'december'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'january'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'january'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'january'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'january'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'february'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'february'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'february'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'february'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'june'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'june'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'june'},
    {userName:'jack@gmail.com', avgPerDay: '10', sum:'160', sumExtraHouers: '20', month:'june'},
];

export const EMPLOYEES_BY_MONTH = 'employees_by_month';
export function getEmployyesByMonth(month){
    var emplyeesToSend = [];

    for(var i = 0; i < employyes.length; i++){
        if(employyes[i].month === month){
            emplyeesToSend.push(employyes[i]);
        }
    }

    return {
        type: EMPLOYEES_BY_MONTH,
        payload: emplyeesToSend
    };
}