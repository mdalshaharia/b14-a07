
const formatBengaliDate = (date) => {
    const formattedDate = new Intl.DateTimeFormat('bn-BD', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(date);
    return formattedDate;
}

export default formatBengaliDate;