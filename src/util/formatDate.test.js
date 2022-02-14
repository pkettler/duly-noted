import formatDate from "./formatDate";

test("more than a week ago", () => {
    const testDate = new Date("2022-01-01T12:05:00");
    const result = formatDate(testDate);
    expect(result).toBe("12:05 pm on 1/1/2022");
})

const oneWeek = Date.now() - (100 * 60 * 60 * 1000);
const fiveMinutes = Date.now() - (5 * 60 * 1000);

test("less than a week ago", () => {
    const testDate = new Date(oneWeek);
    const result = formatDate(testDate);
    expect(result).toBe("4 days ago");
})

test("five minutes ago", () => {
    const testDate = new Date(fiveMinutes);
    const result = formatDate(testDate);
    expect(result).toBe("5 minutes ago");
})