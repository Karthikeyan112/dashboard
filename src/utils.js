import moment from 'moment';

export const filterOptions = (arr, prop) => {
  return Array.from(new Set(arr.reduce((acc, item) => [...acc, item[prop]], []))).map(item => ({ text: item, value: item }));
}

export const filterData = (data, filterList, prop) => {
  if (filterList.includes('All')) {
    return data;
  }

  return data.filter(record => filterList.includes(record[prop]));
}

export const filterByPepClass = (data, pepClass) => {
  if (pepClass.includes('All')) {
    return data;
  }
  return data.reduce((acc, record) => {
    let isAvail = record.pepClass.split(',').some(indClass => {
      return pepClass.includes(indClass)
    });

    if (isAvail)
      return [...acc, record];
    return acc;
  }, []);
}

export const filterByMatching = (data, matching) => data.filter(record => record.matches <= matching);

export const filterByDate = (data, dateRange) => {
  console.log(dateRange);
  if (dateRange !== null) {
    return data.filter(record => moment(record.created, 'DD/MM/YY').isBetween(dateRange[0], dateRange[1]));
  }
  return data;
}
