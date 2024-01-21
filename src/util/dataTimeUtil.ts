export const filterDataAndLastSevenDaysData = ({ data, accessor }) => {
    const getlastthDay = ()=> {
        const date  = new Date()
        date.setDate(date.getDate() - 7);
        return date; 
    }

    const lastWeekSameDay = getlastthDay();
    
    return data.filter((val)=> {
                return lastWeekSameDay < (new Date(val[accessor]));
            })
}