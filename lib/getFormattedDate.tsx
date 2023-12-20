export default function getFormattedDate(dateString: string): string {
    const inputDate = new Date(dateString);

    // Check if the inputDate is a valid date
    if (isNaN(inputDate.getTime())) {
        // Handle the case where dateString is not a valid date string
        return "Invalid Date";
    }

    return new Intl.DateTimeFormat('en-IN', { dateStyle: 'long' }).format(inputDate);
}
