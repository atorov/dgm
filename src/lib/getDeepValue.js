export default function(obj, path) {
    return path.split(".").reduce((out, key) => out ? out[key] : undefined, obj);
}
