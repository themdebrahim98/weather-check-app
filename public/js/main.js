const submitBtn = document.getElementById('submitBtn');
const cityname = document.getElementById('cityName');
const city_name = document.getElementById('city_name');

const temp_real_val = document.querySelector('.temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');







const getinfo = async (e) => {
   e.preventDefault();
   const cityvalue = cityname.value;

   if (cityvalue === "") {
      city_name.innerText = "please write the name city before search";
      datahide.classList.add('data_hide');


   } else {
      try {

         const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=9b52a325f3d891ddfd5c0ceafa5dfa1f`

         const res = await fetch(url);
         const data = await res.json();
         const arrdata = [data];
         city_name.innerText = `${arrdata[0].name}  ${arrdata[0].sys.country}`
         temp_real_val.innerText = arrdata[0].main.temp;

         const tempmod = arrdata[0].weather[0].main;

         if (tempmod === 'Clear') {
            temp_status.innerHTML = '<i class ="fas fa-sun" style ="color: #eccc68"></i>';
         } else if (tempmod === 'Clouds') {
            temp_status.innerHTML = '<i class = "fas fa-cloud" style ="color: #f1f2f6"></i>';
         } else if (tempmod === 'Rain') {
            temp_status.innerHTML = '<i class = "fas fa-cloud-rain" style ="color: #a4b0be"></i>';
         } else {
            temp_status.innerHTML = '<i class = "fas fa-sun" style ="color: #eccc68"></i>';
         }


         datahide.classList.remove('data_hide');






      } catch {
         city_name.innerText = "please enter the city name properly";
         datahide.classList.add('data_hide');

      }


   }

}
submitBtn.addEventListener('click', getinfo)