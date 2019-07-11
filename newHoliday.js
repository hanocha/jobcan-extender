window.onload = () => {
  params = {};
  location.search.substring(1).split('&').forEach(param => {
    const [key, val] = param.split('=');
    params[key] = val;
  });

  if(params['start_time']) {
    const start_hour = parseInt(params['start_time'].split(':')[0]);
    const start_min = parseInt(params['start_time'].split(':')[1]);

    document.getElementById('start_h').selectedIndex = 5;
    document.getElementById('end_h').selectedIndex = start_hour - 5;
    document.getElementById('end_m').selectedIndex = start_min;
  }
  else {
    document.getElementById('start_h').selectedIndex = 5;
    document.getElementById('end_h').selectedIndex = 10;
  }
}
