import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
  


export const getPlaceData = async (sw, ne) => {
    try {
      const { data: { data } } = await axios.get(URL, {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
          currency: 'INR',

        },
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': 'ad76ebe813mshc08916d3c6f76d2p124a42jsna05502720ab1'
        }
      }
      );
      
        return data;
    } catch (error) {
        console.log(error);

    }

}