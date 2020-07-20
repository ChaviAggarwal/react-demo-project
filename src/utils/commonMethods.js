import moment from "moment";



function getFilteredOffers(filteredOfffers, filterQuery) {
  const filterVal = filteredOfffers.filter(function (item) {
    let isValidFilter = true;
    let found = false;
    const keys = Object.keys(filterQuery)
    for (let key of keys) {
      if (key === 'createdAt' || key === 'priceIndexValidTo') {
        if (key === 'createdAt') {
          let createdDate = new Date(filterQuery[key]);
          let originalCreationDate = (item[key]).slice(0, 10);
          let formattedCreationDate = new Date(originalCreationDate);
          formattedCreationDate.setHours(0, 0, 0, 0);
          let creationDuration = createdDate.getTime();
          let originalDuraion = formattedCreationDate.getTime();
          if (filterQuery['priceIndexValidTo'] === null) {
            if (creationDuration <= originalDuraion && isValidFilter) {
              isValidFilter = true;
            }
            else {
              isValidFilter = false;
            }
          }
          else {

            found = true;
            let validDate = new Date(filterQuery['priceIndexValidTo']);
            let validDuration = validDate.getTime();
            if (creationDuration <= originalDuraion && validDuration >= originalDuraion && isValidFilter) {
              isValidFilter = true;

            }
            else {
              isValidFilter = false;
            }
          }
        }
        if (key === 'priceIndexValidTo' && found != true) {
          let priceValidDate = new Date(filterQuery[key]);
          let d2 = (item['createdAt']).slice(0, 10);
          let d3 = new Date(d2);
          d3.setHours(0, 0, 0, 0);
          let timestamp1 = priceValidDate.getTime();
          let timestamp2 = d3.getTime();
          if (filterQuery['createdAt'] === null) {
            if (timestamp1 >= timestamp2 && isValidFilter) {
              isValidFilter = true;

            }
            else {
              isValidFilter = false;
            }
          }
          else {
            if (found != true) {
              let creationDate = new Date(filterQuery['createdAt']);

              let timestamp3 = creationDate.getTime();
              if (timestamp2 <= timestamp1 && timestamp2 >= timestamp3 && isValidFilter) {
                isValidFilter = true;
                found = true;
              }
              else {
                isValidFilter = false;
              }
            }
          }
        }
      }
      else {
        if (item[key] === undefined || item[key] != filterQuery[key]) {
          isValidFilter = false;

        }
        if (item[key] === undefined || item[key] == filterQuery[key] && isValidFilter) {
          isValidFilter = true;
        }
      }
    }
    if (isValidFilter === true) {
      return true;

    }
    else {
      return false;
    }
  });

  return filterVal;
}

/**
 * 
 * @param {date} value 
 * Used to check offer expiry
 */
function isExpired(validDate) {
  if (new Date((validDate).split('T')[0]) > new Date()) {
    return false;
  }
  else {
    return true;
  }
}

function setExpiryDate(dateValue) {
  if (dateValue) {
    return moment.utc(moment(dateValue, moment.ISO_8601)).format('MM/DD/YYYY');
  }
  else {
    return '';
  }
}
/**
 * 
 * @param {dateTime} value 
 * Uset for claculate Refuelling date in dddd DD MMM YYYY formate.
 */
function setRefuellingDate(value) {
  if (value) {
    return moment.utc(moment(value, moment.ISO_8601)).format('dddd DD MMM YYYY');
  }
  return '-';
}

export {
  isExpired,setRefuellingDate,
  setExpiryDate, getFilteredOffers
};