angular.module('alerts', []).factory('alertService', [
  '$timeout',
  function ($timeout) {
    var alertsObj = {};
    alertsObj.alerts = [];
    alertsObj.createAlert = function (alert, book) {
      alert.index = alertsObj.alerts.length;
      alert.book = book;
      var i = alertsObj.alerts.push(alert);
      alertsObj.alerts[i - 1].promise = $timeout(function (i) {
        alertsObj.removeAlert(i - 1);
      }, 10000);
    };
    alertsObj.removeAlert = function (book) {
      if (typeof book === 'number') {
        alertsObj.alerts.splice(book, 1);
      }
      alertsObj.alerts.forEach(function (alert, i) {
        if (alert.book.number == book.number) {
          alertsObj.alerts.splice(i, 1);
        }
      });
    };
    alertsObj.persistAlert = function (alert) {
      alertsObj.alerts.forEach(function (al, i) {
        if (al.book.number == alert.book.number) {
          $timeout.cancel(alertsObj.alerts[i].promise);
        }
      });
    };
    return alertsObj;
  }
]);