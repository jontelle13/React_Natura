const ApiService = {
    fetchData: (url, callback) => {
      const http = new XMLHttpRequest();
      http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
          const data = JSON.parse(http.responseText);
          callback(data);
        }
      };
      http.open('GET', url, true);
      http.send();
    },
  };
  
  export default ApiService;