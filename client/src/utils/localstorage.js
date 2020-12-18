const LocalStorageService = (function(){

  function setData(key,data) {
    localStorage.setItem(key, data);
  }
  function getData(key) {
    return localStorage.getItem(key);
  }

  function clearData(key) {
    localStorage.removeItem(key);
  }
 return {
    setData : setData,
    getData : getData,
    clearData : clearData
  }
 })();
 export default LocalStorageService;