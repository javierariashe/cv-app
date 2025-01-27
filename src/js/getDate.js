function getDate(date) {
    if (date.present) {
        return "Present";
    }

    if (date.value === "") {
        return "";
    }

    return new Date(date.value + "T00:00:00").toLocaleString("en-US", {
        month: "short",
        year: "numeric",
    });
}

export default getDate;
