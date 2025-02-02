export const truncateText = (text: string, maxLength: number): string => {

    const textCapacity = text.slice(0, maxLength);

    return text.length > maxLength ? text.slice(0, textCapacity.lastIndexOf(" "))+ "..." : text;
};