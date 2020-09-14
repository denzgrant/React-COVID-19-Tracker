export const sortData = (data) => {
    const sortedData = [...data];
    return sortedData.sort((firstElem, secondElem) => (firstElem.cases > secondElem.cases ? -1 : 1));
}