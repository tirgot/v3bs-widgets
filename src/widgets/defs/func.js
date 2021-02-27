export default {
  makeShortDate: function (date){
    var yy=date.getFullYear()
    var mm=date.getMonth()
    var dd=date.getDate()
    var shortDate=`${(mm<10)?0:''}${mm+1}/${(dd<10)?0:''}${dd}/${yy}`;
    return shortDate;
  }
}