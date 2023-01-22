let id = 0;
function generateId(prefix = 0) {
    id += 1;
    return id + prefix;
}

function rand(min, max = undefined) {
    if (typeof min === "number" && typeof max === "number")
        return Math.floor(Math.random() * (max - min + 1)) + min;
    if (Array.isArray(min) && max === undefined) {
        return min[Math.floor(Math.random() * min.length)];
    }
}

export default { generateId, rand };
