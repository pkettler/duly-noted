import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);


function formatDate (date) {
    if (date >= Date.now() - (7 * 24 * 60 * 60 * 1000)) {
        return dayjs(date).fromNow();
    } else {
        return dayjs(date).format("h:mm a on M/D/YYYY");
    }
}

export default formatDate
